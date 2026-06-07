'use client';

import { useEffect } from 'react';

export default function BabyShower() {
  useEffect(() => {
    window.location.href = 'https://www.paperlesspost.com';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg text-gray-600">
        Redirecting to baby shower invitation...
      </p>
    </div>
  );
}
