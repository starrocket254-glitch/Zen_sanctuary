import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { TREATMENTS } from "./data";
import { TREATMENT_ART } from "./TreatmentArt";

export function TreatmentsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cards = ref.current?.querySelectorAll<HTMLElement>(".tcard");
    if (!cards) return;
    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(28px)";
      c.style.transition = "opacity 0.9s var(--ease), transform 0.9s var(--ease), border-color 0.4s var(--ease)";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const idx = Array.from(cards).indexOf(el);
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, idx * 90);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((c) => io.observe(c));

    const cleanups: Array<() => void> = [];
    cards.forEach((card) => {
      const inner = card.querySelector<HTMLElement>(".tcard-img > svg");
      if (!inner) return;
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
        const y = ((e.clientY - r.top) / r.height - 0.5) * 16;
        inner.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
      };
      const onLeave = () => { inner.style.transform = ""; };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });
    return () => { io.disconnect(); cleanups.forEach((c) => c()); };
  }, []);

  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--stone)" }}>
      {TREATMENTS.map((t) => {
        const Art = TREATMENT_ART[t.num as keyof typeof TREATMENT_ART];
        return (
          <article key={t.num} className="tcard p-6 flex flex-col">
            <div className="tcard-img mb-6" style={{ aspectRatio: "4 / 3", overflow: "hidden", position: "relative" }}>
              <Art className="w-full h-full block" />
            </div>
            <div className="meta" style={{ color: "var(--gold)" }}>{t.num} · {t.cat}</div>
            <h3 className="mt-3" style={{ fontFamily: "var(--marc)", fontSize: 28, fontWeight: 400, color: "var(--charcoal)" }}>
              {t.name}
            </h3>
            <p className="mt-3 mb-6 text-sm" style={{ color: "var(--mid)", lineHeight: 1.95, fontFamily: "var(--sans)" }}>
              {t.desc}
            </p>
            <div className="mt-auto pt-4 flex items-center justify-between border-t" style={{ borderColor: "var(--stone)" }}>
              <span className="meta">{t.duration} · {t.price}</span>
              <Link to="/book" className="meta" style={{ color: "var(--gold)" }}>Reserve →</Link>
            </div>
          </article>
        );
      })}
    </div>
  );
        }
