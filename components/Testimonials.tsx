"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";
import type { ReviewItem } from "@/lib/data/reviews";
import { Container } from "./Container";

const AUTOPLAY_MS = 2800;
const RESUME_AFTER_MS = 6000;

const ease = [0.16, 1, 0.3, 1] as const;
const av = (seed: string) => `https://picsum.photos/seed/${seed}/120/120`;

const Arrow = ({ dir = "right" }: { dir?: "left" | "right" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    {dir === "right" ? <path d="M9 6l6 6-6 6" /> : <path d="M15 6l-6 6 6 6" />}
  </svg>
);

// returns the three visible testimonials (left, center, right) around `active`
function trio(active: number, n: number) {
  return [(active - 1 + n) % n, active % n, (active + 1) % n];
}

function Card({ pool, i, position }: { pool: ReviewItem[]; i: number; position: "side" | "center" }) {
  const item = pool[i];
  const { tr } = useLang();
  const center = position === "center";
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.96 }}
        transition={{ duration: 0.45, ease }}
        className={`relative flex flex-col items-center rounded-xl px-7 pb-8 pt-14 text-center ${
          center
            ? "bg-grad text-white shadow-card"
            : "border border-line-soft bg-surface text-ink shadow-soft"
        }`}
      >
        {/* avatar overlapping the top */}
        <span
          className={`absolute -top-9 h-[72px] w-[72px] overflow-hidden rounded-full ring-4 ${
            center ? "ring-white/25" : "ring-surface"
          }`}
        >
          <Image src={av(item.seed)} alt={item.name} fill sizes="72px" className="object-cover" />
        </span>

        <b className="font-serif text-lg">{item.name}</b>
        <span className={`text-xs ${center ? "text-white/70" : "text-muted"}`}>{tr(item.role)}</span>

        <span className={`mt-3 font-serif text-4xl leading-none ${center ? "text-white/40" : "text-acc/40"}`}>
          &ldquo;
        </span>
        <p className={`mt-1 text-sm leading-relaxed ${center ? "text-white/90" : "text-muted"}`}>
          {tr(item.quote)}
        </p>

        <div className="mt-4 flex gap-0.5 text-sm text-amber">
          {"★".repeat(item.rating)}
          {"☆".repeat(Math.max(0, 5 - item.rating))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Testimonials({ reviews }: { reviews: ReviewItem[] }) {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [paused, setPaused] = useState(false);
  const n = reviews.length;
  const [left, center, right] = n > 0 ? trio(active, n) : [0, 0, 0];
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseThenResume = () => {
    setPaused(true);
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => setPaused(false), RESUME_AFTER_MS);
  };

  const go = (d: number) => {
    setActive((a) => (a + d + n) % n);
    pauseThenResume();
  };
  const goTo = (i: number) => {
    setActive(i);
    pauseThenResume();
  };

  // auto-advance every ~2.8s; pauses on hover/manual navigation and honors reduced-motion
  useEffect(() => {
    if (hovering || paused || n === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hovering, paused, n]);

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

  if (n === 0) return null;

  return (
    <section id="reviews" className="overflow-hidden bg-surface py-28">
      <Container>
        {/* header with arrows (arrows flank the heading from sm: up) */}
        <div className="mx-auto mb-16 flex max-w-3xl items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label={t.testimonials.prevAria}
            className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-surface text-acc shadow-soft transition hover:-translate-y-0.5 hover:border-acc sm:grid"
          >
            <Arrow dir="left" />
          </button>
          <div className="text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
              {t.testimonials.eyebrow}
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] leading-tight tracking-tight text-balance">
              {t.testimonials.h2a} <em className="italic text-acc">{t.testimonials.h2b}</em>
            </h2>
          </div>
          <button
            onClick={() => go(1)}
            aria-label={t.testimonials.nextAria}
            className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-surface text-acc shadow-soft transition hover:-translate-y-0.5 hover:border-acc sm:grid"
          >
            <Arrow />
          </button>
        </div>

        {/* three cards — center raised */}
        <div
          className="grid items-center gap-5 md:grid-cols-3 md:gap-6"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="hidden md:block">
            <Card pool={reviews} i={left} position="side" />
          </div>
          <div className="md:-mt-6 md:scale-[1.04]">
            <Card pool={reviews} i={center} position="center" />
          </div>
          <div className="hidden md:block">
            <Card pool={reviews} i={right} position="side" />
          </div>
        </div>

        {/* arrows (mobile only) + dots */}
        <div className="mt-12 flex items-center justify-center gap-5">
          <button
            onClick={() => go(-1)}
            aria-label={t.testimonials.prevAria}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-surface text-acc shadow-soft transition hover:border-acc sm:hidden"
          >
            <Arrow dir="left" />
          </button>
          <div className="flex max-w-[200px] flex-wrap justify-center gap-2.5 sm:max-w-none">
            {reviews.map((item, i) => (
              <button
                key={item.id}
                onClick={() => goTo(i)}
                aria-label={t.testimonials.goToAria.replace("{n}", String(i + 1))}
                className={`h-2.5 rounded-full transition-all ${i === active ? "w-6 bg-grad" : "w-2.5 bg-line"}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label={t.testimonials.nextAria}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-surface text-acc shadow-soft transition hover:border-acc sm:hidden"
          >
            <Arrow />
          </button>
        </div>
      </Container>
    </section>
  );
}
