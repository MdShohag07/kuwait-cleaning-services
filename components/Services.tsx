"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="mt-0.5 shrink-0 text-acc">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export function Services() {
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
            Services &amp; Pricing
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight">
            Choose the <em className="italic text-acc">level of clean</em> you want
          </h2>
          <p className="mt-4 text-muted">
            Transparent KD pricing, no hidden fees. Every booking includes supplies,
            insured crews, and our spotless re-clean promise.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {site.services.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              className={`group relative flex flex-col overflow-hidden rounded-[24px] bg-surface transition-all duration-300 hover:-translate-y-2 ${
                s.featured
                  ? "border border-acc/25 shadow-card"
                  : "border border-line-soft shadow-soft hover:shadow-card"
              }`}
            >
              {s.featured && (
                <span className="absolute right-3.5 top-3.5 z-10 rounded-full bg-grad px-3 py-1.5 text-[.66rem] font-semibold uppercase tracking-wider text-white shadow-[0_6px_16px_rgba(14,110,78,.3)]">
                  Most booked
                </span>
              )}

              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-2xl">{s.name}</h3>
                <p className="mt-1.5 min-h-[42px] text-sm text-muted">{s.desc}</p>

                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-serif text-[2.5rem] leading-none tracking-tight">
                    {s.price}
                  </span>
                  <span className="font-semibold text-acc">KD</span>
                </div>
                <p className="text-xs text-muted-2">starting · {s.unit}</p>

                <span className="mt-3.5 inline-flex items-center gap-2 text-xs text-muted-2">
                  <ClockIcon /> {s.duration}
                </span>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-muted">
                      <CheckIcon /> {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                    s.featured
                      ? "bg-grad text-white shadow-[0_12px_30px_rgba(14,110,78,.26)]"
                      : "border border-line bg-surface text-ink hover:border-acc"
                  }`}
                  style={{ marginTop: "1.5rem" }}
                >
                  Book {s.name.toLowerCase()}
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Also available: Villa &amp; Apartment · Move-In / Move-Out · Commercial ·
          Post-Construction —{" "}
          <a href="#contact" className="font-semibold text-acc">
            request a tailored quote →
          </a>
        </p>
      </Container>
    </section>
  );
}
