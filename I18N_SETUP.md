# Hướng dẫn sử dụng i18n (Internationalization)

## Tổng quan

Dự án này đã được cấu hình với `next-intl` để hỗ trợ đa ngôn ngữ (tiếng Việt và tiếng Anh).

## Cấu trúc thư mục

```
/i18n
  - request.ts      # Cấu hình request handler
  - routing.ts      # Cấu hình routing và navigation

/messages
  - vi.json         # Bản dịch tiếng Việt
  - en.json         # Bản dịch tiếng Anh

/app/[locale]       # Tất cả các trang được đặt trong thư mục [locale]
  - layout.tsx      # Layout chính với NextIntlClientProvider
  - page.tsx        # Trang chủ
  - about/
  - projects/
  - now/

/middleware.ts      # Middleware xử lý locale routing
```

## Cách sử dụng

### 1. Thêm bản dịch mới

Chỉnh sửa file `/messages/vi.json` hoặc `/messages/en.json`:

```json
{
  "HomePage": {
    "greeting": "Xin chào",
    "newKey": "Giá trị mới"
  }
}
```

### 2. Sử dụng bản dịch trong component

```tsx
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1>{t("greeting")}</h1>
      <p>{t("newKey")}</p>
    </div>
  );
}
```

### 3. Sử dụng bản dịch với tham số động

```tsx
// Trong messages/vi.json
{
  "experience": "Mình đã có {yoe}+ năm kinh nghiệm"
}

// Trong component
const t = useTranslations('HomePage');
<p>{t('experience', { yoe: 3 })}</p>
```

### 4. Sử dụng Link với i18n

```tsx
import { Link } from "@/i18n/routing";

<Link href="/about">About</Link>;
// Sẽ tự động thêm locale: /vi/about hoặc /en/about
```

### 5. Chuyển đổi ngôn ngữ

Component `LanguageSwitcher` đã được tạo sẵn và tích hợp trong Header.

```tsx
import LanguageSwitcher from "@/component/LanguageSwitcher";

<LanguageSwitcher />;
```

### 6. Lấy locale hiện tại

```tsx
import { useLocale } from "next-intl";

const locale = useLocale(); // 'vi' hoặc 'en'
```

### 7. Điều hướng với locale

```tsx
import { useRouter } from "@/i18n/routing";

const router = useRouter();
router.push("/projects"); // Tự động giữ locale hiện tại
```

## URL Structure

- `/` → Tự động redirect đến `/vi` (locale mặc định)
- `/vi` → Trang chủ tiếng Việt
- `/en` → Trang chủ tiếng Anh
- `/vi/about` → Trang About tiếng Việt
- `/en/about` → Trang About tiếng Anh

## Thêm ngôn ngữ mới

1. Thêm locale mới vào `/i18n/routing.ts`:

```ts
export const routing = defineRouting({
  locales: ["en", "vi", "ja"], // Thêm 'ja' cho tiếng Nhật
  defaultLocale: "vi",
});
```

2. Tạo file bản dịch mới: `/messages/ja.json`

3. Cập nhật LanguageSwitcher để hiển thị thêm tùy chọn ngôn ngữ mới

## Lưu ý quan trọng

- Tất cả các trang phải nằm trong thư mục `/app/[locale]`
- Sử dụng `Link` từ `@/i18n/routing` thay vì `next/link`
- Sử dụng `useRouter`, `usePathname` từ `@/i18n/routing` thay vì `next/navigation`
- Locale mặc định là tiếng Việt (`vi`)
- Middleware tự động xử lý việc thêm locale vào URL

## Build & Deploy

Khi build project với `output: 'export'`, Next.js sẽ tạo static files cho tất cả các locale:

```bash
pnpm build
```

Output sẽ có cấu trúc:

```
/out
  /vi
    /index.html
    /about/index.html
    /projects/index.html
    /now/index.html
  /en
    /index.html
    /about/index.html
    /projects/index.html
    /now/index.html
```

### ⚠️ Lưu ý về Static Export:

1. **Middleware**: Khi dùng `output: 'export'`, middleware sẽ **KHÔNG hoạt động** vì nó chỉ chạy trên server. Tuy nhiên, routing vẫn hoạt động bình thường với cấu trúc `/vi/*` và `/en/*`.

2. **Redirect từ root**: File `app/not-found.tsx` sẽ xử lý redirect từ `/` về `/vi` (locale mặc định) ở phía client.

3. **API Routes**: Tất cả API routes sẽ bị vô hiệu hóa với static export. Dự án này không sử dụng API routes nên không ảnh hưởng.

4. **Deployment**: Có thể deploy lên bất kỳ static hosting nào như:
   - GitHub Pages
   - Netlify
   - Vercel
   - AWS S3
   - Cloudflare Pages
5. **Testing local**: Sau khi build, có thể test với:

```bash
pnpm build
pnpm start
# Hoặc dùng serve
npx serve out
```
