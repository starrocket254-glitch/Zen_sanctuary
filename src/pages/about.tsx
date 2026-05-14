import { Reveal } from "@/components/zen/Reveal";
import { BookingCTA } from "@/components/zen/BookingCTA";

const VALUES = [
  { t: "The body already knows.", d: "Our work is to listen — to follow what's asking, not impose what's expected." },
  { t: "Stillness is the first step.", d: "Before any oil, any pressure — we wait. The session begins in the quiet." },
  { t: "Materials matter deeply.", d: "Argan, basalt, salt, gold. Each chosen because it carries something filler cannot." },
  { t: "Luxury is in the detail.", d: "The temperature of the towel. The weight of the door closing. Everything is intentional." },
];

export default function About() {
  return (
    <>
      <section className="px-6 md:px-10 pt-[180px] pb-[120px]" style={{ background: "var(--bg)" }}>
        <div className="mx-auto max-w-[1360px] grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-8">The Founder</div>
            <h1 style={{ fontFamily: "var(--marc)", fontSize: "clamp(80px, 12vw, 180px)", fontWeight: 400, lineHeight: 0.9, letterSpacing: "-0.03em", color: "var(--charcoal)" }}>
              <Reveal trigger="load">Moh.</Reveal>
            </h1>
            <p className="body-copy mt-10">
              A decade ago, Moh trained between Marrakech, Bali and Nairobi — collecting hands, materials and silences from each. Zen By Moh is the distillation of that work: a single studio, six treatments, no compromise.
            </p>
            <p className="body-copy mt-6">
              Every appointment is held one-on-one. No music piped from elsewhere, no rushing. The room belongs to you for the hour you&apos;re in it.
            </p>
          </div>
          <div className="sage-img aspect-[4/5] w-full" />
        </div>
      </section>
      <section className="px-6 md:px-10 py-[120px]" style={{ background: "var(--bg2)" }}>
        <div className="mx-auto max-w-[1360px]">
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-end">
            <div>
              <div className="eyebrow mb-8">Principles</div>
              <h2 className="h-section">
                <Reveal>Four principles that guide</Reveal>
                <Reveal delay={0.12}><em>everything</em>.</Reveal>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-px" style={{ background: "var(--stone)" }}>
            {VALUES.map((v, i) => (
              <div key={i} className="process-step" style={{ padding: "48px 40px 56px" }}>
                <div className="meta" style={{ color: "var(--gold)" }}>0{i + 1}</div>
                <h3 className="mt-6" style={{ fontFamily: "var(--serif)", fontSize: 36, fontWeight: 300, letterSpacing: "-0.01em", color: "var(--charcoal)" }}>{v.t}</h3>
                <p className="mt-4 body-copy" style={{ marginLeft: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
    </>
  );
                                             }
