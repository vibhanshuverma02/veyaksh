'use client';
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ElementType, ReactNode } from 'react';

type RevealProps = {
  as?: ElementType;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  children?: ReactNode;
  [key: string]: unknown;
};

export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  direction = 'up',
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction}${shown ? ' in' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}