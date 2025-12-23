# Tóm tắt các thay đổi cho i18n Configuration

## ✅ Đã sửa lỗi: Static Export Build Error

### Vấn đề gốc:

```
Route /[locale] with `dynamic = "error"` couldn't be rendered statically
because it used `headers()`.
```

### Nguyên nhân:

- `next-intl` mặc định sử dụng `headers()` để detect locale từ request
- Khi dùng `output: 'export'` (static export), Next.js không thể sử dụng dynamic rendering như `headers()`

### Giải pháp đã áp dụng:

#### 1. Cập nhật `/i18n/request.ts`

**Trước:**

```typescript
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  // ...
});
```

**Sau:**

```typescript
export default getRequestConfig(async ({ locale }) => {
  const validLocale =
    locale && routing.locales.includes(locale as any)
      ? locale
      : routing.defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
```

**Thay đổi:**

- Dùng `locale` từ params thay vì `requestLocale` (không cần headers)
- Return cả `locale` trong response object (required by TypeScript)
- Không await `requestLocale` nữa

#### 2. Cập nhật `/app/[locale]/layout.tsx`

**Thay đổi:**

```typescript
// Pass locale vào getMessages
const messages = await getMessages({ locale });
```

Thay vì:

```typescript
const messages = await getMessages();
```

## 📊 Kết quả Build

Build thành công với **23 static pages**:

```
Route (app)
├ ● /[locale]
│ ├ /en
│ └ /vi
├ ● /[locale]/about
│ ├ /en/about
│ └ /vi/about
├ ● /[locale]/now
│ ├ /en/now
│ └ /vi/now
├ ● /[locale]/projects
│ ├ /en/projects
│ └ /vi/projects
├ ● /[locale]/projects/[id]
│ ├ /en/projects/1
│ ├ /en/projects/2
│ ├ /en/projects/3
│ ├ /vi/projects/1
│ ├ /vi/projects/2
│ └ /vi/projects/3
```

### Legend:

- ● (SSG) = Prerendered as static HTML (uses generateStaticParams)
- Tất cả các trang đều static, không có dynamic rendering

## ⚠️ Warnings (Bình thường)

### 1. Middleware deprecation warning:

```
⚠ The "middleware" file convention is deprecated.
Please use "proxy" instead.
```

- **Không cần xử lý**: Middleware không hoạt động với static export
- Middleware vẫn tồn tại để tương thích với non-static deployment trong tương lai

### 2. API routes warning:

```
⚠ Statically exporting a Next.js application via `next export`
disables API routes and middleware.
```

- **Không ảnh hưởng**: Dự án không sử dụng API routes
- Đây là behavior chuẩn của static export

## 🎯 Các file đã tạo/chỉnh sửa

### Tạo mới:

1. `/i18n/request.ts` - Request configuration
2. `/i18n/routing.ts` - Routing và navigation utilities
3. `/messages/vi.json` - Bản dịch tiếng Việt
4. `/messages/en.json` - Bản dịch tiếng Anh
5. `/middleware.ts` - Middleware (cho non-static deployment)
6. `/app/[locale]/layout.tsx` - Layout với NextIntlClientProvider
7. `/app/[locale]/page.tsx` - Trang chủ đã i18n
8. `/app/[locale]/about/page.tsx`
9. `/app/[locale]/now/page.tsx`
10. `/app/[locale]/projects/page.tsx`
11. `/app/[locale]/projects/[id]/page.tsx`
12. `/app/[locale]/not-found.tsx`
13. `/app/not-found.tsx` - Root not-found (redirect)
14. `/component/LanguageSwitcher/index.tsx`
15. `/component/LanguageSwitcher/languageSwitcher.css`

### Chỉnh sửa:

1. `/next.config.ts` - Thêm next-intl plugin
2. `/component/Header/index.tsx` - Dùng i18n routing
3. `/component/Button/index.tsx` - Dùng Link từ i18n
4. `/component/Project/SubProject/index.tsx` - Dùng Link từ i18n

### Đã xóa:

1. `/app/layout.tsx` - Di chuyển vào `/app/[locale]/layout.tsx`
2. `/app/page.tsx` - Di chuyển vào `/app/[locale]/page.tsx`

## 🚀 Cách sử dụng

### Development:

```bash
pnpm dev
# Truy cập: http://localhost:3000 (auto redirect to /vi)
```

### Build:

```bash
pnpm build
# Output: /out directory với static files
```

### Preview build:

```bash
pnpm start
# Hoặc: npx serve out
```

## 📝 Checklist hoàn thành

- ✅ Cài đặt `next-intl` package
- ✅ Cấu hình i18n với 2 locale (vi, en)
- ✅ Tạo bản dịch cho trang chủ
- ✅ Di chuyển tất cả pages vào `/app/[locale]/`
- ✅ Implement LanguageSwitcher component
- ✅ Cập nhật navigation để dùng i18n routing
- ✅ **Sửa lỗi static export build**
- ✅ Test build thành công
- ✅ Tạo tài liệu hướng dẫn

## 🔧 Troubleshooting

### Nếu gặp lỗi build:

1. Xóa folder `.next` và `out`: `rm -rf .next out`
2. Build lại: `pnpm build`

### Nếu translations không hiển thị:

1. Kiểm tra file `/messages/vi.json` và `/messages/en.json` có tồn tại
2. Kiểm tra key trong translation có khớp với code không
3. Restart dev server

### Nếu navigation không hoạt động:

1. Đảm bảo dùng `Link` từ `@/i18n/routing` chứ không phải `next/link`
2. Đảm bảo dùng `useRouter`, `usePathname` từ `@/i18n/routing`

## 📚 Tài liệu tham khảo

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [I18N_SETUP.md](./I18N_SETUP.md) - Hướng dẫn chi tiết sử dụng

## 💡 Lưu ý khi phát triển tiếp

1. **Thêm translations**: Mọi text hiển thị nên được thêm vào file messages
2. **Sử dụng i18n Link**: Luôn dùng `Link` từ `@/i18n/routing`
3. **Test cả 2 locale**: Kiểm tra cả `/vi` và `/en` khi phát triển
4. **Static export**: Không sử dụng dynamic features như API routes, headers, cookies trong pages

---

**Cập nhật:** 23/12/2024
**Status:** ✅ Hoàn thành và đã test
