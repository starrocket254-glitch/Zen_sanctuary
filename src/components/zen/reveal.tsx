import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  as: Tag = "span",
  trigger = "scroll",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  as?: any;
  trigger?: "scroll" | "load";
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reveal = () => {
      setTimeout(() => el.classList.add("is-in"), delay * 1000);
    };
    if (trigger === "load") {
      reveal();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, trigger]);
  return (
    <Tag className={`reveal-wrap ${className}`}>
      <span ref={ref} className="reveal-line">
        {children}
      </span>
    </Tag>
  );
    }
