import { useState } from "react";
import { TREATMENTS } from "./data";

export function BookingForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <label className="field-label">Name</label>
        <input className="field" placeholder="Your full name" required />
      </div>
      <div>
        <label className="field-label">Phone / WhatsApp</label>
        <input className="field" placeholder="+254 ..." required />
      </div>
      <div>
        <label className="field-label">Treatment</label>
        <select className="field" defaultValue="" required>
          <option value="" disabled>Select a ritual</option>
          {TREATMENTS.map((t) => (
            <option key={t.num} value={t.name}>{t.name} · {t.duration}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="field-label">Date</label>
          <input type="date" className="field" required />
        </div>
        <div>
          <label className="field-label">Time</label>
          <input type="time" className="field" required />
        </div>
      </div>
      <div>
        <label className="field-label">Notes</label>
        <textarea className="field" rows={3} placeholder="Allergies, preferences, anything we should know" />
      </div>
      <button type="submit" className="pill mt-4">
        {sent ? "Request sent — we'll reply shortly" : "Request session →"}
      </button>
    </form>
  );
        }
