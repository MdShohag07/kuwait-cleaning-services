"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

const beforeUrl = (seed: string) =>
  `https://picsum.photos/seed/${seed}/1280/800?grayscale&blur=2`;
const afterUrl = (seed: string) =>
  `https://picsum.photos/seed/${seed}/1280/800`;

export function BeforeAfter() {
  const cases = site.beforeAfter.cases;
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50); // 0–100, % from left
  const current = cases[active];

  return (
    <section id="results" className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            The {site.name} difference
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight">
            Drag to reveal the <em className="italic text-acc">transformation</em>
          </h2>
          <p className="mt-4 text-muted">
            Real results from real homes across Kuwait. Slide the handle to see
            before and after.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
        >
          {/* slider */}
          <div className="relative mx-auto aspect-[16/10] max-w-4xl select-none overflow-hidden rounded-[30px] border border-line shadow-[0_34px_80px_rgba(18,40,30,.16)]">
            {/* before (base) */}
            <Image
              key={`b-${current.seed}`}
              src={beforeUrl(current.seed)}
              alt={`Before cleaning — ${current.label}`}
              fill
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />

            {/* after (clipped overlay) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
            >
              <Image
                key={`a-${current.seed}`}
                src={afterUrl(current.seed)}
                alt={`After cleaning — ${current.label}`}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
              />
            </div>

            {/* labels */}
            <span className="absolute left-4 top-4 rounded-full bg-[rgba(19,36,27,.6)] px-3 py-1.5 text-[.7rem] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              Before
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-[rgba(31,174,128,.85)] px-3 py-1.5 text-[.7rem] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              After
            </span>

            {/* handle line + knob */}
            <div
              className="pointer-events-none absolute bottom-0 top-0 z-10 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_18px_rgba(0,0,0,.35)]"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-acc shadow-[0_10px_26px_rgba(0,0,0,.3)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
                </svg>
              </span>
            </div>

            {/* the actual drag control (invisible range over the whole image) */}
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Reveal clean result"
              className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>

          {/* case switcher */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {cases.map((c, i) => (
              <button
                key={c.label}
                onClick={() => {
                  setActive(i);
                  setPos(50);
                }}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  i === active
                    ? "border-transparent bg-grad text-white shadow-[0_10px_24px_rgba(14,110,78,.28)]"
                    : "border-line bg-surface text-muted hover:border-acc hover:text-ink"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}