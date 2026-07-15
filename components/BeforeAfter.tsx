"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { site } from "@/lib/site";
import { useLang, type Bi } from "@/lib/i18n";
import type { BeforeAfterCaseItem } from "@/lib/data/beforeAfter";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export function BeforeAfter({ cases }: { cases: BeforeAfterCaseItem[] }) {
  const { t, tr } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="results" ref={sectionRef} className="relative overflow-hidden bg-surface-2 py-28">
      <motion.div className="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-acc/5 blur-3xl" style={{ y: y1 }} />
      <motion.div className="pointer-events-none absolute -right-16 bottom-16 h-72 w-72 rounded-full bg-amber/10 blur-3xl" style={{ y: y2 }} />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="relative z-10 mx-auto mb-14 flex max-w-2xl flex-col items-center text-center"
        >
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            <SlidersHorizontal className="h-4 w-4" /> {t.beforeAfter.eyebrowPrefix} {site.name} {t.beforeAfter.eyebrowSuffix}
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            {t.beforeAfter.h2a} <em className="italic text-acc">{t.beforeAfter.h2b}</em>
          </h2>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-5 h-1 rounded-full bg-grad"
          />
          <p className="mt-6 text-muted">{t.beforeAfter.sub}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cases.map((c) => (
            <BeforeAfterCard key={c.id} c={c} beforeLabel={t.beforeAfter.before} afterLabel={t.beforeAfter.after} tr={tr} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function BeforeAfterCard({
  c,
  beforeLabel,
  afterLabel,
  tr,
}: {
  c: BeforeAfterCaseItem;
  beforeLabel: string;
  afterLabel: string;
  tr: (b: Bi) => string;
}) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      <div className="relative flex aspect-[4/3] w-full overflow-hidden">
        <div className="relative w-1/2">
          <Image
            src={c.before}
            alt={`${beforeLabel} — ${tr(c.label)}`}
            fill
            sizes="(max-width: 640px) 50vw, 200px"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-[rgba(19,36,27,.7)] px-2.5 py-1 text-[.65rem] font-semibold uppercase tracking-wide text-white shadow-soft">
            {beforeLabel}
          </span>
        </div>
        <div className="relative w-1/2">
          <Image
            src={c.after}
            alt={`${afterLabel} — ${tr(c.label)}`}
            fill
            sizes="(max-width: 640px) 50vw, 200px"
            className="object-cover"
          />
          <span className="absolute right-3 top-3 rounded-full bg-acc/90 px-2.5 py-1 text-[.65rem] font-semibold uppercase tracking-wide text-white shadow-soft">
            {afterLabel}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg leading-snug">{tr(c.label)}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{tr(c.note)}</p>
      </div>
    </motion.article>
  );
}
