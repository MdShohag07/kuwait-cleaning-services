"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import type { ServiceItem } from "@/lib/data/services";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="mt-0.5 shrink-0 text-acc">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export function Services({ services }: { services: ServiceItem[] }) {
  const { t, tr, trList } = useLang();
  return (
    <section id="services" className="py-28">
      <Container>
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            {t.services.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            {t.services.h2a} <em className="italic text-acc">{t.services.h2b}</em>
          </h2>
          <p className="mt-4 text-muted">
            {t.services.sub}
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={tr(s.name)}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-[24px] bg-surface transition-all duration-300 hover:-translate-y-2 ${
                s.featured
                  ? "border border-acc/25 shadow-card"
                  : "border border-line-soft shadow-soft hover:shadow-card"
              }`}
            >
              {s.featured && (
                <span className="absolute right-3.5 top-3.5 z-10 rounded-full bg-grad px-3 py-1.5 text-[.66rem] font-semibold uppercase tracking-wider text-white shadow-[0_6px_16px_rgba(14,110,78,.3)]">
                  {t.services.mostBooked}
                </span>
              )}

              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={tr(s.name)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-2xl">{tr(s.name)}</h3>
                {s.subtitle && (
                  <span className="mt-1 inline-block text-xs font-semibold uppercase tracking-wider text-acc">
                    {tr(s.subtitle)}
                  </span>
                )}
                <p className="mt-1.5 text-sm text-muted">{tr(s.desc)}</p>

                <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                  {trList(s.features).map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted">
                      <CheckIcon /> {f}
                    </li>
                  ))}
                </ul>

                {s.note && <p className="mt-3 text-xs text-muted-2">{t.services.noteLabel} {tr(s.note)}</p>}

                <a
                  href={`tel:${site.phone}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-grad px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,110,78,.26)] transition hover:-translate-y-0.5"
                >
                  <PhoneIcon /> {t.services.callToBook}
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          {t.services.helpPre}{" "}
          <a href={`tel:${site.phone}`} className="ltr-text font-semibold text-acc">
            {site.phoneDisplay}
          </a>{" "}
          {t.services.helpPost}
        </p>
      </Container>
    </section>
  );
}
