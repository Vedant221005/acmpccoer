"use client";

import React, { useEffect, useRef, useState, PropsWithChildren } from "react";

type Props = {
  className?: string;
  rootMargin?: string;
  threshold?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
}: PropsWithChildren<Props>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={`${className} transform transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}
