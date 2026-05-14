import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { CircleRing } from "./CircleRing";
import { Reveal } from "./Reveal";

export function Hero() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const e = (t - start) / 1000;
      if (orb1.current) orb1.current.style.transform = `translate3d(${Math.sin(e / 8) * 60}px, ${Math.cos(e / 9) * 40}px, 0)`;
      if (orb2.current) orb2.current.style.transform = `translate3d(${Math.cos(e / 7) * 80}px, ${Math.sin(e / 11) * 50}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative grid md:grid-cols-2 min-h-screen overflow-hidden" style={{ background: "var(--bg)", borderBottom: "1px solid var(--stone)" }}>
      <div ref={orb1} aria-hidden className="absolute pointer-events-none" style={{ top: "-12%", left: "-8%", width: 720, height: 720, background: "radial-gradient(circle, rgba(184,145,90,0.08), transparent 65%)", filter: "blur(20px)" }} />
      <div ref={orb2} aria-hidden className="absolute pointer-events-none" style={{ bottom: "-18%", right: "-10%", width: 820, height: 820, background: "radial-gradient(circle, rgba(184,145,90,0.06), transparent 70%)", filter: "blur(20px)" }} />

      <div className="relative flex flex-col justify-between p-6 md:p-12 pt-32" style={{ borderRight: "1px solid var(--stone)" }}>
        <div>
          <div className="eyebrow mb-6">Westlands · Nairobi · By Appointment</div>
          <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(18px, 1.6vw, 22px)", color: "var(--mid)", opacity: 0, animation: "fadeUp 1.4s var(--ease) 0.2s forwards" }}>
            A small studio for considered wellness.
          </p>
        </div>
        <div>
          <h1 className="h-display">
            <Reveal trigger="load">Stillness</Reveal>
            <Reveal trigger="load" delay={0.14}>is the <em>luxury</em></Reveal>
            <Reveal trigger="load" delay={0.28}>they forgot</Reveal>
            <Reveal trigger="load" delay={0.42}>to sell.</Reveal>
          </h1>
          <div className="mt-12 flex items-center gap-4">
            <span aria-hidden style={{ display: "inline-block", width: 1, height: 56, background: "var(--charcoal)", animation: "scrollPulse 2.4s var(--ease) infinite", transformOrigin: "top" }} />
            <span className="meta">Scroll to begin</span>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col justify-between p-6 md:p-12 pt-32">
        <div className="text-right">
          <div className="eyebrow">Luxury Spa &amp; Wellness · Est. 2020</div>
        </div>
        <div className="md:max-w-[460px] md:ml-auto md:text-right">
          <p className="body-copy md:ml-auto">
            Six rituals. One pair of attentive hands. Sourced materials and a quietly lit room reserved entirely for you. We keep the practice small on purpose — so the work can stay deep.
          </p>
          <div className="mt-10 flex md:justify-end items-center gap-6">
            <Link to="/book" className="gold-link" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", position: "relative", paddingBottom: 6 }}>
              Reserve a session →
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden md:block">
          <CircleRing />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } from { opacity: 0; transform: translateY(8px); } }
        @keyframes scrollPulse {
          0%   { transform: scaleY(0.2); transform-origin: top; }
          50%  { transform: scaleY(1);   transform-origin: top; }
          51%  { transform: scaleY(1);   transform-origin: bottom; }
          100% { transform: scaleY(0.2); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
