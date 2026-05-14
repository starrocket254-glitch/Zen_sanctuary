import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const LINKS = [
  { to: "/treatments", label: "Treatments" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[900]"
        style={{
          background: scrolled ? "color-mix(in srgb, var(--bg) 94%, transparent)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--stone)" : "1px solid transparent",
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div className="mx-auto max-w-[1360px] grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 md:px-14 py-5">
          <nav className="hidden lg:flex gap-10 items-center">
            {LINKS.slice(0, 2).map((l) => (
              <Link key={l.to} to={l.to} className="nav-link">{l.label}</Link>
            ))}
          </nav>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col items-start gap-[7px] w-[28px] h-[28px] justify-center relative z-[901]"
            style={{ background: "transparent", border: 0, cursor: "none" }}
          >
            <span style={{ display: "block", width: 28, height: 1, background: open ? "var(--parchment)" : "var(--charcoal)", transformOrigin: "center", transform: open ? "translateY(8px) rotate(45deg)" : "none", transition: "transform 0.4s var(--ease), background 0.3s var(--ease)" }} />
            <span style={{ display: "block", width: 28, height: 1, background: open ? "transparent" : "var(--charcoal)", transition: "background 0.2s var(--ease)" }} />
            <span style={{ display: "block", width: 28, height: 1, background: open ? "var(--parchment)" : "var(--charcoal)", transformOrigin: "center", transform: open ? "translateY(-8px) rotate(-45deg)" : "none", transition: "transform 0.4s var(--ease), background 0.3s var(--ease)" }} />
          </button>

          <Link to="/" className="text-center" style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 18, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--charcoal)" }}>
            Zen <em>By</em> Moh
          </Link>

          <nav className="hidden lg:flex gap-8 items-center justify-end">
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/book" style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--charcoal)", padding: "14px 28px", border: "1px solid var(--charcoal)", borderRadius: 999 }}>
              Book a Ritual
            </Link>
          </nav>

          <span className="lg:hidden" aria-hidden />
        </div>
      </header>

      <div
        className="fixed inset-0 z-[900] lg:hidden"
        style={{ background: "var(--charcoal)", clipPath: open ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)", transition: "clip-path 0.65s var(--ease)", pointerEvents: open ? "all" : "none" }}
      >
        <div className="h-full flex flex-col justify-center px-10 gap-6">
          {LINKS.map((l, i) => (
            <div key={l.to} style={{ overflow: "hidden" }}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                style={{ display: "inline-block", fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(48px, 9vw, 80px)", letterSpacing: "-0.02em", color: "var(--parchment)", transform: open ? "translateY(0)" : "translateY(105%)", transition: `transform 0.7s var(--ease) ${open ? 0.15 + i * 0.08 : 0}s` }}
              >
                {l.label}
              </Link>
            </div>
          ))}
          <div style={{ overflow: "hidden", marginTop: 24 }}>
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              style={{ display: "inline-block", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", transform: open ? "translateY(0)" : "translateY(105%)", transition: `transform 0.7s var(--ease) ${open ? 0.5 : 0}s` }}
            >
              Book a Ritual →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
            }
