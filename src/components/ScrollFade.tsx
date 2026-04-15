"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollFade({ children, delay = 0, className = "" }: ScrollFadeProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div ref={elementRef} className={`scroll-fade-in ${className}`}>
      {children}
    </div>
  );
}
