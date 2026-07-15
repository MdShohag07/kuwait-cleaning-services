"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site, waLink } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import type { ServiceItem } from "@/lib/data/services";
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

export function BookingContact({ services }: { services: ServiceItem[] }) {
  const { t, tr } = useLang();
  const [service, setService] = useState(0);
  const [size, setSize] = useState(0);
  const [freq, setFreq] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(b.times[0]);
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const bookingWa = () => {
    const msg =
      `${t.booking.waHi.replace("{name}", site.name)} ${tr(services[service].name)}` +
      ` | ${t.booking.waSize} ${tr(b.sizes[size].label)}` +
      ` | ${date || t.booking.waFlexibleDate} ${t.booking.waAt} ${time}` +
      ` | ${tr(b.freqs[freq].label)}`;
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
            {t.booking.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            {t.booking.h2a} <em className="italic text-acc">{t.booking.h2b}</em>
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
            <h3 className="font-serif text-2xl">{t.booking.formTitle}</h3>
            <p className="mb-6 mt-1 text-sm text-muted">
              {t.booking.formSub}
            </p>

            <label className="mb-2 block text-xs text-muted">{t.booking.serviceLabel}</label>
            <select className={fieldCls} value={service} onChange={(e) => setService(Number(e.target.value))}>
              {services.map((s, i) => (
                <option key={s.id} value={i}>
                  {tr(s.name)}
                </option>
              ))}
            </select>

            <label className="mb-2 mt-4 block text-xs text-muted">{t.booking.sizeLabel}</label>
            <select className={fieldCls} value={size} onChange={(e) => setSize(Number(e.target.value))}>
              {b.sizes.map((s, i) => (
                <option key={tr(s.label)} value={i}>{tr(s.label)}</option>
              ))}
            </select>

            <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs text-muted">{t.booking.dateLabel}</label>
                <input
                  type="date"
                  className={fieldCls}
                  value={date}
                  min={minDate}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-2 block text-xs text-muted">{t.booking.timeLabel}</label>
                <select className={fieldCls} value={time} onChange={(e) => setTime(e.target.value)}>
                  {b.times.map((tm) => (
                    <option key={tm}>{tm}</option>
                  ))}
                </select>
              </div>
            </div>

            <label className="mb-2 mt-4 block text-xs text-muted">{t.booking.freqLabel}</label>
            <select className={fieldCls} value={freq} onChange={(e) => setFreq(Number(e.target.value))}>
              {b.freqs.map((f, i) => (
                <option key={tr(f.label)} value={i}>{tr(f.label)}</option>
              ))}
            </select>

            <a
              href={bookingWa()}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-grad px-6 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(14,110,78,.26)] transition hover:-translate-y-0.5"
            >
              {t.booking.confirmBtn}
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
              <h4 className="mb-6 font-serif text-xl">{t.booking.talkTitle}</h4>

              <a href={`tel:${site.phone}`} className="mb-5 flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-acc/20 bg-acc/[.08] text-acc"><PhoneIcon /></span>
                <span>
                  <b className="ltr-text block text-sm">{site.phoneDisplay}</b>
                  <span className="text-sm text-muted">{t.booking.callSub}</span>
                </span>
              </a>

              <a href={`mailto:${site.email}`} className="mb-5 flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-acc/20 bg-acc/[.08] text-acc"><MailIcon /></span>
                <span>
                  <b className="ltr-text block text-sm">{site.email}</b>
                  <span className="text-sm text-muted">{t.booking.emailSub}</span>
                </span>
              </a>

              <div className="mb-5 flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-acc/20 bg-acc/[.08] text-acc"><PinIcon /></span>
                <span>
                  <b className="block text-sm">{tr(site.city)}</b>
                  <span className="text-sm text-muted">{t.booking.citySub}</span>
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

            
              <a href={waLink("Hi, I'd like to book a cleaning service.")}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-2.5 rounded-[16px] bg-[#22c35e] px-6 py-4 font-semibold text-white shadow-[0_10px_26px_rgba(34,195,94,.28)] transition hover:-translate-y-0.5"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.34-.2-3.58.94.96-3.49-.22-.36a9.42 9.42 0 0 1-1.45-5.03c0-5.21 4.25-9.45 9.47-9.45 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.68c0 5.21-4.25 9.45-9.47 9.45zm8.05-17.5A11.36 11.36 0 0 0 12.04.5C5.77.5.67 5.6.67 11.87c0 2 .52 3.96 1.52 5.68L.57 23.5l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.33-8.05z" /></svg>
              {t.booking.chatWa}
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}