import { TreatmentsGrid } from "@/components/zen/TreatmentsGrid";
import { BookingCTA } from "@/components/zen/BookingCTA";
import { Reveal } from "@/components/zen/Reveal";

export default function Treatments() {
  return (
    <>
      <section className="px-6 md:px-10 pt-[180px] pb-[100px]" style={{ background: "var(--bg)" }}>
        <div className="mx-auto max-w-[1360px] grid md:grid-cols-2 gap-12 items-end">
          <div>
            <div className="eyebrow mb-8">The Menu</div>
            <h1 className="h-display">
              <Reveal trigger="load">Six</Reveal>
              <Reveal trigger="load" delay={0.12}><em>rituals.</em></Reveal>
            </h1>
          </div>
          <p className="body-copy">
            Each treatment is a complete arc — from arrival through deep work to a slow return.
            Choose by what your body is asking for, not what the calendar says.
          </p>
        </div>
      </section>
      <section className="px-6 md:px-10 pb-[120px]" style={{ background: "var(--bg)" }}>
        <div className="mx-auto max-w-[1360px]">
          <TreatmentsGrid />
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
