'use client';
import { useEffect } from 'react';
import { initPixel } from '@/lib/meta-pixel';

export function PixelInit({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    if (pixelId) {
      initPixel(pixelId);
    }
  }, [pixelId]);

  return null;
}
