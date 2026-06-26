"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { site, waLink } from "@/lib/site";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;
const b = site.booking;

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 6 10-6" />
  </svg>
);
const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const fieldCls =
  "w-full rounded-[11px] border border-line bg-surface-2 px-4 py-3.5 text-sm transition focus:border-acc focus:bg-acc/5 focus:outline-none";

export function BookingContact() {
  const [service, setService] = useState(0);
  const [size, setSize] = useState(0);
  const [freq, setFreq] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(b.times[0]);

  const total = Math.round(
    b.services[service].base * b.sizes[size].mult * b.freqs[freq].mult
  );

  const bookingWa = () => {
    const msg =
      `Hi ${site.name}! I'd like to book: ${b.services[service].label}` +
      ` | Size: ${b.sizes[size].label}` +
      ` | ${date || "flexible date"} at ${time}` +
      ` | ${b.freqs[freq].label} | Estimate: ${total} KD`;
    return waLink(msg);
  };

  return (
    <section id="contact" className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            Book in 60 seconds
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight">
            Let&apos;s make it <em className="italic text-acc">spotless</em>
          </h2>
        </motion.div>

        <div className="grid items-stretch gap-9 md:grid-cols-[1.1fr_0.9fr]">
          {/* booking form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease }}
            className="rounded-[30px] border border-line-soft bg-surface p-9 shadow-card"
          >
            <h3 className="font-serif text-2xl">Get your instant estimate</h3>
            <p className="mb-6 mt-1 text-sm text-muted">
              Pick your details — we&apos;ll show a live price and send it straight
              to WhatsApp.
            </p>

            <label className="mb-2 block text-xs text-muted">Service</label>
            <select className={fieldCls} value={service} onChange={(e) => setService(Number(e.target.value))}>
              {b.services.map((s, i) => (
                <option key={s.label} value={i}>
                  {s.label} — from {s.base} KD
                </option>
              ))}
            </select>

            <label className="mb-2 mt-4 block text-xs text-muted">Property size</label>
            <select className={fieldCls} value={size} onChange={(e) => setSize(Number(e.target.value))}>
              {b.sizes.map((s, i) => (
                <option key={s.label} value={i}>{s.label}</option>
              ))}
            </select>

            <div className="mt-4 grid grid-cols-2 gap-3.5">
              <div>
                <label className="mb-2 block text-xs text-muted">Date</label>
                <input type="date" className={fieldCls} value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div>
                <label className="mb-2 block text-xs text-muted">Time</label>
                <select className={fieldCls} value={time} onChange={(e) => setTime(e.target.value)}>
                  {b.times.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <label className="mb-2 mt-4 block text-xs text-muted">Frequency</label>
            <select className={fieldCls} value={freq} onChange={(e) => setFreq(Number(e.target.value))}>
              {b.freqs.map((f, i) => (
                <option key={f.label} value={i}>{f.label}</option>
              ))}
            </select>

            <div className="my-5 flex items-center justify-between rounded-[16px] border border-acc/20 bg-acc/[.06] px-5 py-4">
              <span className="text-sm text-muted">Estimated total</span>
              <b className="font-serif text-3xl text-acc-deep">{total} KD</b>
            </div>

            
              <a href={bookingWa()}
              target="_blank"
              rel="noopener"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-grad px-6 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(14,110,78,.26)] transition hover:-translate-y-0.5"
            >
              Confirm on WhatsApp
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </motion.div>

          {/* contact side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="flex-1 rounded-[30px] border border-line-soft bg-surface p-8 shadow-soft">
              <h4 className="mb-6 font-serif text-xl">Talk to us directly</h4>

              <a href={`tel:${site.phone}`} className="mb-5 flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-acc/20 bg-acc/[.08] text-acc"><PhoneIcon /></span>
                <span>
                  <b className="block text-sm">{site.phoneDisplay}</b>
                  <span className="text-sm text-muted">Tap to call · Sat–Thu, 8am – 9pm</span>
                </span>
              </a>

              <a href={`mailto:${site.email}`} className="mb-5 flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-acc/20 bg-acc/[.08] text-acc"><MailIcon /></span>
                <span>
                  <b className="block text-sm">{site.email}</b>
                  <span className="text-sm text-muted">We reply within 2 hours</span>
                </span>
              </a>

              <div className="mb-5 flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-acc/20 bg-acc/[.08] text-acc"><PinIcon /></span>
                <span>
                  <b className="block text-sm">{site.city}</b>
                  <span className="text-sm text-muted">Serving all governorates</span>
                </span>
              </div>

              <div className="h-36 overflow-hidden rounded-[16px] border border-line-soft">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps?q=Kuwait+City&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>

            
              <a href={waLink("Hi Saffa, I'd like to book a cleaning service.")}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2.5 rounded-[16px] bg-[#22c35e] px-6 py-4 font-semibold text-white shadow-[0_10px_26px_rgba(34,195,94,.28)] transition hover:-translate-y-0.5"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2z" /></svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}