'use client';

import { useEffect } from 'react';

export default function ThemeDebugger() {
  useEffect(() => {
    // Chỉ khi vào trong useEffect, window mới tồn tại (vì đã ở phía Client)
    
    const debugColorScheme = () => {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const timestamp = new Date().toLocaleTimeString();

      console.log(
        `%c[${timestamp}] %c[Theme Debug]%c → %c${isDarkMode ? 'DARK MODE 🌙' : 'LIGHT MODE ☀️'}`,
        "color: gray",
        "color: #3498db; font-weight: bold",
        "color: white",
        `color: ${isDarkMode ? '#2ecc71' : '#f1c40f'}; font-weight: bold`
      );
    };

    // Chạy kiểm tra lần đầu
    debugColorScheme();

    // Lắng nghe thay đổi
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => debugColorScheme();

    mediaQuery.addEventListener('change', handler);
    
    // Dọn dẹp listener
    return () => mediaQuery.removeEventListener('change', handler);
  }, []); // [] đảm bảo chỉ chạy 1 lần sau khi mount

  return null;
}
