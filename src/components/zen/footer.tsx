import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)", color: "var(--parchment)", borderTop: "1px solid var(--gold)" }}>
      <div className="mx-auto max-w-[1360px] px-6 md:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 32, fontWeight: 300, letterSpacing: "-0.02em", color: "var(--parchment)" }}>
            Zen <em>By</em> Moh
          </div>
          <p className="mt-4 text-sm" style={{ color: "rgba(245,240,232,0.55)", lineHeight: 1.8 }}>
            A private sanctuary for luxury wellness in Westlands, Nairobi.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-5">Visit</div>
          <p className="text-sm" style={{ color: "rgba(245,240,232,0.7)", lineHeight: 1.9 }}>Westlands<br />Nairobi, Kenya</p>
        </div>
        <div>
          <div className="eyebrow mb-5">Hours</div>
          <p className="text-sm" style={{ color: "rgba(245,240,232,0.7)", lineHeight: 1.9 }}>Mon–Sat · 09:00–20:00<br />Sun · By appointment</p>
        </div>
        <div>
          <div className="eyebrow mb-5">Navigate</div>
          <ul className="flex flex-col gap-1">
            <li><Link to="/" className="foot-link">Home</Link></li>
            <li><Link to="/treatments" className="foot-link">Treatments</Link></li>
            <li><Link to="/about" className="foot-link">About</Link></li>
            <li><Link to="/book" className="foot-link">Book</Link></li>
            <li><Link to="/contact" className="foot-link">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t px-6 md:px-10 py-6 mx-auto max-w-[1360px] flex flex-col md:flex-row justify-between gap-3" style={{ borderColor: "rgba(245,240,232,0.08)" }}>
        <span className="meta" style={{ color: "rgba(245,240,232,0.45)" }}>© {new Date().getFullYear()} Zen By Moh</span>
        <span className="meta" style={{ color: "rgba(245,240,232,0.45)" }}>Westlands · Nairobi</span>
      </div>
    </footer>
  );
        }
