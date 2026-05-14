import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

export function BookingCTA() {
  const o1 = useRef<HTMLDivElement>(null);
  const o2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const e = (t - start) / 1000;
      if (o1.current) o1.current.style.transform = `translate(${Math.sin(e / 4) * 40}px, ${Math.cos(e / 5) * 30}px)`;
      if (o2.current) o2.current.style.transform = `translate(${Math.cos(e / 4.5) * 50}px, ${Math.sin(e / 6) * 35}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative overflow-hidden px-6 md:px-10 py-[160px] text-center" style={{ background: "var(--charcoal)" }}>
      <div ref={o1} className="absolute pointer-events-none" style={{ top: "-10%", left: "-5%", width: 600, height: 600, background: "radial-gradient(circle, rgba(184,145,90,0.18), transparent 70%)" }} />
      <div ref={o2} className="absolute pointer-events-none" style={{ bottom: "-15%", right: "-10%", width: 700, height: 700, background: "radial-gradient(circle, rgba(184,145,90,0.12), transparent 70%)" }} />
      <div className="relative mx-auto max-w-[900px]">
        <div className="eyebrow mb-8" style={{ color: "var(--gold-l)" }}>Begin</div>
        <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(56px, 8vw, 128px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "var(--parchment)" }}>
          <Reveal>Reserve</Reveal>
          <Reveal delay={0.1}>your hour</Reveal>
          <Reveal delay={0.2}>of stillness.</Reveal>
        </h2>
        <p className="meta mt-10" style={{ color: "rgba(245,240,232,0.55)" }}>
          By Appointment · Private Sessions · Westlands, Nairobi
        </p>
        <div className="mt-12">
          <Link to="/book" className="pill gold">Reserve a session →</Link>
        </div>
      </div>
    </section>
  );
      }
