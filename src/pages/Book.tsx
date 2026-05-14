import { BookingForm } from "@/components/zen/BookingForm";
import { Reveal } from "@/components/zen/Reveal";

const INFO = [
  { t: "Location", d: "Westlands, Nairobi · address shared upon confirmation" },
  { t: "Hours", d: "Mon–Sat · 09:00–20:00\nSun · By appointment" },
  { t: "Contact", d: "+254 700 000 000\nhello@zenbymoh.co.ke" },
  { t: "Cancellation", d: "Please give 24 hours notice. Late cancellations are charged at 50%." },
];

export default function Book() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen" style={{ background: "var(--bg)" }}>
      <div className="px-6 md:px-12 pt-[180px] pb-24" style={{ background: "var(--bg2)", borderRight: "1px solid var(--stone)" }}>
        <div className="eyebrow mb-8">Reserve</div>
        <h1 className="h-display">
          <Reveal trigger="load">Book</Reveal>
          <Reveal trigger="load" delay={0.12}>your <em>ritual</em>.</Reveal>
        </h1>
        <p className="body-copy mt-10">
          Tell us a little. We'll confirm your time within a few hours and send the studio address.
        </p>
        <div className="mt-16 grid sm:grid-cols-2 gap-px" style={{ background: "var(--stone)" }}>
          {INFO.map((i) => (
            <div key={i.t} className="p-8" style={{ background: "var(--bg2)" }}>
              <div className="meta" style={{ color: "var(--gold)" }}>{i.t}</div>
              <p className="mt-3 text-sm whitespace-pre-line" style={{ color: "var(--charcoal)", lineHeight: 1.8 }}>{i.d}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 md:px-12 pt-[180px] pb-24">
        <div className="max-w-[480px]">
          <BookingForm />
        </div>
      </div>
    </section>
  );
          }
