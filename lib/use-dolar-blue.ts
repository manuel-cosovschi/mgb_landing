'use client';
import { useState, useEffect } from 'react';

interface DolarBlue {
  compra: number;
  venta: number;
  promedio: number;
  loading: boolean;
  error: boolean;
}

export function useDolarBlue(): DolarBlue {
  const [state, setState] = useState<DolarBlue>({
    compra: 0,
    venta: 0,
    promedio: 0,
    loading: true,
    error: false,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchRate() {
      try {
        const res = await fetch('https://dolarapi.com/v1/dolares/blue', {
          next: { revalidate: 300 },
        } as RequestInit);
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        if (cancelled) return;
        const compra = data.compra ?? 0;
        const venta = data.venta ?? 0;
        setState({
          compra,
          venta,
          promedio: Math.round((compra + venta) / 2),
          loading: false,
          error: false,
        });
      } catch {
        if (cancelled) return;
        setState(prev => ({ ...prev, loading: false, error: true }));
      }
    }

    fetchRate();
    return () => { cancelled = true; };
  }, []);

  return state;
}

export function formatARS(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(amount);
}
