# Test Language Switcher

## Vấn đề đã sửa

### Vấn đề gốc:

- LanguageSwitcher không chuyển đổi ngôn ngữ được
- Sử dụng `router.replace` từ `@/i18n/routing` không hoạt động với static export

### Nguyên nhân:

- Khi dùng `output: 'export'`, middleware không hoạt động
- `next-intl` routing utilities phụ thuộc vào middleware để hoạt động đúng
- Static export cần navigation trực tiếp qua URL paths

### Giải pháp:

#### Trước (không hoạt động với static export):

```tsx
import { useRouter, usePathname } from "@/i18n/routing";

const router = useRouter();
const pathname = usePathname();

const handleLanguageChange = (newLocale: string) => {
  router.replace(pathname, { locale: newLocale });
};

<span onClick={() => handleLanguageChange("vi")}>VI</span>;
```

#### Sau (hoạt động với static export):

```tsx
import { usePathname } from "next/navigation";
import Link from "next/link";

const pathname = usePathname();
const locale = useLocale();

const getLocalizedPath = (newLocale: string) => {
  const currentPath = pathname.replace(`/${locale}`, "") || "/";
  return `/${newLocale}${currentPath}`;
};

<Link href={getLocalizedPath("vi")}>VI</Link>;
```

## Cách test:

### 1. Development mode:

```bash
pnpm dev
```

Truy cập: `http://localhost:3000`

**Test cases:**

- [ ] Trang chủ `/vi` → Click EN → Chuyển sang `/en`
- [ ] Trang chủ `/en` → Click VI → Chuyển sang `/vi`
- [ ] Trang `/vi/about` → Click EN → Chuyển sang `/en/about`
- [ ] Trang `/en/projects` → Click VI → Chuyển sang `/vi/projects`
- [ ] Active state hiển thị đúng (VI bold khi ở `/vi`, EN bold khi ở `/en`)

### 2. Production build:

```bash
pnpm build
pnpm start
```

Hoặc:

```bash
pnpm build
npx serve out
```

**Test cases tương tự như trên**

## Thay đổi code:

### File: `/component/LanguageSwitcher/index.tsx`

**Thay đổi chính:**

1. ✅ Dùng `usePathname` từ `next/navigation` thay vì `@/i18n/routing`
2. ✅ Dùng `Link` component thay vì `onClick` + `router.push`
3. ✅ Tính toán path mới bằng cách replace locale prefix
4. ✅ Giữ nguyên current path khi chuyển ngôn ngữ

**Lợi ích:**

- ✅ Hoạt động với static export
- ✅ SEO friendly (Link component)
- ✅ Better performance (prefetching)
- ✅ Có thể right-click → Open in new tab
- ✅ Không phụ thuộc vào middleware

### File: `/component/LanguageSwitcher/languageSwitcher.css`

**Thay đổi:**

- Đổi selector từ `span` sang `a` để style Link component
- Thêm `text-decoration: none` và `color: inherit`

## Kiểm tra build output:

```bash
pnpm build
```

Kiểm tra folder `out/`:

```
out/
├── vi/
│   ├── index.html
│   ├── about/
│   ├── projects/
│   └── now/
├── en/
│   ├── index.html
│   ├── about/
│   ├── projects/
│   └── now/
```

## Expected behavior:

### Khi ở trang `/vi`:

- VI có class `active-lang` (bold, highlighted)
- EN có thể click được
- Click EN → Navigate to `/en`

### Khi ở trang `/en`:

- EN có class `active-lang` (bold, highlighted)
- VI có thể click được
- Click VI → Navigate to `/vi`

### Khi ở trang con (e.g., `/vi/about`):

- Click EN → Navigate to `/en/about` (giữ nguyên path)
- Click VI → Ở lại `/vi/about`

## Troubleshooting:

### Nếu vẫn không chuyển được:

1. Clear cache: `rm -rf .next out`
2. Rebuild: `pnpm build`
3. Check console for errors
4. Verify pathname in browser DevTools

### Nếu active state không đúng:

1. Check `locale` value trong component
2. Verify CSS class được apply đúng
3. Check CSS specificity

### Nếu path không đúng:

1. Log `pathname` và `locale` để debug
2. Verify `getLocalizedPath` function
3. Check nếu có trailing slash issues

## Notes:

- ⚠️ Middleware **KHÔNG** hoạt động với `output: 'export'`
- ✅ Navigation phải dùng direct URL paths
- ✅ Mỗi locale có folder riêng trong build output
- ✅ Link component tốt hơn onClick + router.push cho static sites

---

**Updated:** 23/12/2024
**Status:** ✅ Fixed and tested
