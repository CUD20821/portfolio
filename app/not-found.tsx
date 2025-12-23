'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    window.location.href = '/vi';
  }, []);

  return null;
}

