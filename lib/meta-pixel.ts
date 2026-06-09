declare global {
  interface Window {
    fbq: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[]; push?: unknown; loaded?: boolean; version?: string };
    _fbq: typeof window.fbq;
  }
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid'] as const;

export function storeUTMs(): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  const stored: Record<string, string> = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) stored[key] = value;
  });
  if (Object.keys(stored).length > 0) {
    sessionStorage.setItem('mgb_utms', JSON.stringify(stored));
  }
}

export function getStoredUTMs(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem('mgb_utms');
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, string>;
  } catch {
    return {};
  }
}

export function initPixel(pixelId: string): void {
  if (typeof window === 'undefined' || !pixelId) return;
  if (typeof window.fbq !== 'undefined') return; // already loaded

  type FbqFn = ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[]; push?: unknown; loaded?: boolean; version?: string };
  const fbq: FbqFn = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      (fbq.queue = fbq.queue ?? []).push(args);
    }
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];

  window.fbq = fbq as typeof window.fbq;
  if (!window._fbq) window._fbq = window.fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  const first = document.getElementsByTagName('script')[0];
  first?.parentNode?.insertBefore(script, first);

  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');

  storeUTMs();
}

export function trackPageView(): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'PageView');
}

export function trackViewContent(name: string, category: string): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'ViewContent', { content_name: name, content_category: category });
}

export function trackContact(): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'Contact');
}

export function trackLead(): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'Lead');
}

export function trackInitiateCheckout(): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'InitiateCheckout');
}
