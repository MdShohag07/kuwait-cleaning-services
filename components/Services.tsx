"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LayoutGrid, Home, UtensilsCrossed, Building2, Landmark, Sparkles, Check, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import type { ServiceItem } from "@/lib/data/services";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

function categoryIcon(nameEn: string) {
  const n = nameEn.toLowerCase();
  if (n.includes("house") || n.includes("home") || n.includes("apartment")) return Home;
  if (n.includes("restaurant") || n.includes("kitchen")) return UtensilsCrossed;
  if (n.includes("office")) return Building2;
  if (n.includes("mosque")) return Landmark;
  return Sparkles;
}

export function Services({ services }: { services: ServiceItem[] }) {
  const { t, tr, trList } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden py-28">
      {/* parallax decorative blobs */}
      <motion.div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-acc/5 blur-3xl" style={{ y: y1 }} />
      <motion.div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-amber/10 blur-3xl" style={{ y: y2 }} />

      <Container>
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="relative z-10 mx-auto mb-14 flex max-w-2xl flex-col items-center text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            <LayoutGrid className="h-4 w-4" /> {t.services.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            {t.services.h2a} <em className="italic text-acc">{t.services.h2b}</em>
          </h2>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-5 h-1 rounded-full bg-grad"
          />
          <p className="mt-6 text-muted">{t.services.sub}</p>
        </motion.div>

        {/* cards */}
        <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const CategoryIcon = categoryIcon(s.name.en);
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease, delay: (i % 3) * 0.12 }}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col overflow-hidden rounded-[24px] bg-surface transition-shadow duration-300 ${
                  s.featured
                    ? "border border-acc/25 shadow-card"
                    : "border border-line-soft shadow-soft hover:shadow-card"
                }`}
              >
                {s.featured && (
                  <span className="absolute right-3.5 top-3.5 z-10 inline-flex items-center gap-1.5 rounded-full bg-grad px-3 py-1.5 text-[.66rem] font-semibold uppercase tracking-wider text-white shadow-[0_6px_16px_rgba(14,110,78,.3)]">
                    <Sparkles className="h-3 w-3" /> {t.services.mostBooked}
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
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-surface to-transparent" />
                  <span className="absolute -bottom-5 left-5 grid h-11 w-11 place-items-center rounded-xl bg-grad text-white shadow-[0_10px_24px_rgba(14,110,78,.28)] ring-4 ring-surface">
                    <CategoryIcon className="h-5 w-5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 pt-8">
                  <h3 className="font-serif text-2xl transition-colors duration-300 group-hover:text-acc">{tr(s.name)}</h3>
                  {s.subtitle && (
                    <span className="mt-1 inline-block text-xs font-semibold uppercase tracking-wider text-acc">
                      {tr(s.subtitle)}
                    </span>
                  )}
                  <p className="mt-1.5 text-sm text-muted">{tr(s.desc)}</p>

                  <ul className="mt-4 grid flex-1 grid-cols-2 content-start gap-x-3 gap-y-2.5">
                    {trList(s.features).map((f, fi) => (
                      <li key={`${s.id}-${fi}`} className="flex items-start gap-1.5 text-sm text-muted">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-acc" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {s.note && <p className="mt-4 text-xs text-muted-2">{t.services.noteLabel} {tr(s.note)}</p>}

                  <a
                    href={`tel:${site.phone}`}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-grad px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,110,78,.26)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(14,110,78,.34)]"
                  >
                    <Phone className="h-3.5 w-3.5" /> {t.services.callToBook}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="relative z-10 mt-8 text-center text-sm text-muted">
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
