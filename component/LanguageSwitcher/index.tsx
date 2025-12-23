"use client";

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import './languageSwitcher.css';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);

  // Update locale when pathname changes
  useEffect(() => {
    const pathLocale = pathname.split('/')[1];
    if (pathLocale === 'vi' || pathLocale === 'ja') {
      setCurrentLocale(pathLocale);
    } else {
      // If no locale in path, use the hook locale (fallback)
      setCurrentLocale(locale);
    }
  }, [pathname, locale]);

  // Get the current pathname without locale prefix
  const getLocalizedPath = (newLocale: string) => {
    // Remove current locale prefix if exists
    let currentPath = pathname;
    if (currentPath.startsWith(`/${currentLocale}/`)) {
      currentPath = currentPath.replace(`/${currentLocale}`, '');
    } else if (currentPath === `/${currentLocale}`) {
      currentPath = '/';
    }
    if (!currentPath.startsWith('/')) {
      currentPath = '/' + currentPath;
    }
    return `/${newLocale}${currentPath === '/' ? '' : currentPath}`;
  };

  // Handle language change with full page reload for static export
  const handleLanguageChange = (newLocale: string) => {
    const newPath = getLocalizedPath(newLocale);
    // Force full page reload for static export
    window.location.href = newPath;
  };

  // Use currentLocale for display and detection
  const displayLocale = currentLocale || locale;

  return (
    <div className="styles_changeLanguage">
      <span 
        onClick={() => handleLanguageChange('vi')}
        className={displayLocale === 'vi' ? 'active-lang' : ''}
        style={{ cursor: 'pointer' }}
      >
        VI
      </span>
      <p>/</p>
      <span 
        onClick={() => handleLanguageChange('ja')}
        className={displayLocale === 'ja' ? 'active-lang' : ''}
        style={{ cursor: 'pointer' }}
      >
        JA
      </span>
    </div>
  );
}

