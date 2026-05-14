import { ContactForm } from "@/components/zen/ContactForm";
import { Reveal } from "@/components/zen/Reveal";
import { useEffect } from "react";

const INFO = [
  { t: "Location", d: "Westlands\nNairobi, Kenya" },
  { t: "Phone", d: "+254 700 000 000" },
  { t: "Email", d: "hello@zenbymoh.co.ke" },
  { t: "Hours", d: "Mon–Sat · 09:00–20:00\nSun · By appointment" },
];

export default function ContactPage() {
  useEffect(() => {
    document.title =
      "Contact — Zen By Moh | Luxury Spa Westlands, Nairobi";

    const meta = document.querySelector(
      'meta[name="description"]'
    );

    if (meta) {
      meta.setAttribute(
        "content",
        "Reach Zen By Moh — Nairobi's intimate luxury wellness sanctuary in Westlands."
      );
    }
  }, []);

  return (
    <section className="grid md:grid-cols-2 min-h-screen">
      <div
        className="px-6 md:px-12 pt-[180px] pb-24 flex flex-col justify-between"
        style={{
          background: "var(--charcoal)",
          color: "var(--parchment)",
        }}
      >
        <div>
          <div
            className="eyebrow mb-8"
            style={{ color: "var(--gold-l)" }}
          >
            Reach Us
          </div>

          <h1
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(64px, 9vw, 148px)",
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "var(--parchment)",
            }}
          >
            <Reveal trigger="load">
              Let&apos;s
            </Reveal>

            <Reveal trigger="load" delay={0.12}>
              talk.
            </Reveal>
          </h1>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-12">
          {INFO.map((i) => (
            <div key={i.t}>
              <div
                className="meta"
                style={{ color: "var(--gold-l)" }}
              >
                {i.t}
              </div>

              <p
                className="mt-3 whitespace-pre-line"
                style={{
                  color:
                    "rgba(245,240,232,0.78)",
                  fontFamily:
                    "var(--sans)",
                  fontSize: 15,
                  lineHeight: 1.85,
                }}
              >
                {i.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="px-6 md:px-12 pt-[180px] pb-24"
        style={{
          background: "var(--bg)",
        }}
      >
        <div className="max-w-[480px]">
          <div className="eyebrow mb-8">
            Send a note
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
        }
