"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;
const POOL = site.testimonials;
const av = (seed: string) => `https://picsum.photos/seed/${seed}/120/120`;

const Arrow = ({ dir = "right" }: { dir?: "left" | "right" }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    {dir === "right" ? <path d="M9 6l6 6-6 6" /> : <path d="M15 6l-6 6 6 6" />}
  </svg>
);

// returns the three visible testimonials (left, center, right) around `active`
function trio(active: number) {
  const n = POOL.length;
  return [(active - 1 + n) % n, active % n, (active + 1) % n];
}

function Card({ i, position }: { i: number; position: "side" | "center" }) {
  const t = POOL[i];
  const center = position === "center";
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.96 }}
        transition={{ duration: 0.45, ease }}
        className={`relative flex flex-col items-center rounded-[28px] px-7 pb-8 pt-14 text-center ${
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
          <Image src={av(t.seed)} alt={t.name} fill sizes="72px" className="object-cover" />
        </span>

        <b className="font-serif text-lg">{t.name}</b>
        <span className={`text-xs ${center ? "text-white/70" : "text-muted"}`}>{t.role}</span>

        <span className={`mt-3 font-serif text-4xl leading-none ${center ? "text-white/40" : "text-acc/40"}`}>
          &ldquo;
        </span>
        <p className={`mt-1 text-sm leading-relaxed ${center ? "text-white/90" : "text-muted"}`}>
          {t.quote}
        </p>

        <div className={`mt-4 flex gap-0.5 text-sm ${center ? "text-amber" : "text-amber"}`}>★★★★★</div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const n = POOL.length;
  const [left, center, right] = trio(active);

  const go = (d: number) => setActive((a) => (a + d + n) % n);

  return (
    <section id="reviews" className="overflow-hidden bg-white py-28">
      <Container>
        {/* header with arrows */}
        <div className="mx-auto mb-16 flex max-w-3xl items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-acc shadow-soft transition hover:-translate-y-0.5 hover:border-acc"
          >
            <Arrow dir="left" />
          </button>
          <div className="text-center">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
              Loved across Kuwait
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] leading-tight tracking-tight">
              What our clients <em className="italic text-acc">say</em>
            </h2>
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-acc shadow-soft transition hover:-translate-y-0.5 hover:border-acc"
          >
            <Arrow />
          </button>
        </div>

        {/* three cards — center raised */}
        <div className="grid items-center gap-5 md:grid-cols-3 md:gap-6">
          <div className="hidden md:block">
            <Card i={left} position="side" />
          </div>
          <div className="md:-mt-6 md:scale-[1.04]">
            <Card i={center} position="center" />
          </div>
          <div className="hidden md:block">
            <Card i={right} position="side" />
          </div>
        </div>

        {/* dots */}
        <div className="mt-12 flex justify-center gap-2.5">
          {POOL.map((t, i) => (
            <button
              key={t.seed}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === active ? "w-6 bg-grad" : "w-2.5 bg-line"}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}























// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { site } from "@/lib/site";
// import { Container } from "./Container";

// const ease = [0.16, 1, 0.3, 1] as const;
// const POOL = site.testimonials;
// const av = (seed: string, s = 100) => `https://picsum.photos/seed/${seed}/${s}/${s}`;
// const photo = (seed: string) => `https://picsum.photos/seed/${seed}/700/700`;

// const Stars = () => <div className="flex gap-0.5 text-sm text-amber">★★★★★</div>;
// const cardLight = "rounded-2xl border border-line-soft bg-surface shadow-soft";

// function Swap({ k, children }: { k: number; children: React.ReactNode }) {
//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={k}
//         initial={{ opacity: 0, scale: 0.93, filter: "blur(6px)" }}
//         animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//         exit={{ opacity: 0, scale: 0.93, filter: "blur(6px)" }}
//         transition={{ duration: 0.5, ease }}
//         className="h-full"
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export function Testimonials() {
//   // animated slots: [feature, dual, mini, elizabeth]
//   const [idxs, setIdxs] = useState([0, 1, 2, 3]);

//   useEffect(() => {
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
//     const t = setInterval(() => {
//       setIdxs((prev) => {
//         const slot = Math.floor(Math.random() * prev.length);
//         const used = new Set(prev);
//         const free = POOL.map((_, i) => i).filter((i) => !used.has(i));
//         if (!free.length) return prev;
//         const next = [...prev];
//         next[slot] = free[Math.floor(Math.random() * free.length)];
//         return next;
//       });
//     }, 2600);
//     return () => clearInterval(t);
//   }, []);

//   const feature = POOL[idxs[0]];
//   const dual = POOL[idxs[1]];
//   const mini = POOL[idxs[2]];
//   const eliz = POOL[idxs[3]];

//   return (
//     <section id="reviews" className="overflow-hidden bg-white py-28">
//       <Container>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 0.7, ease }}
//           className="mx-auto mb-12 max-w-2xl text-center"
//         >
//           <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
//             Loved across Kuwait
//           </span>
//           <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight">
//             What our clients <em className="italic text-acc">say</em>
//           </h2>
//         </motion.div>

//         <div className="grid grid-flow-dense grid-cols-2 gap-4 md:auto-rows-[150px] md:grid-cols-4">
//           {/* 1. Highly satisfied (tags) — 1x1 */}
//           <div className={`${cardLight} col-span-1 row-span-1 flex flex-col p-5`}>
//             <Stars />
//             <p className="mt-2 text-sm font-medium leading-snug">Highly satisfied with my booking, thank you!</p>
//             <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
//               <span className="rounded-full bg-acc/[.08] px-2.5 py-1 text-[.62rem] font-semibold text-acc">On time</span>
//               <span className="rounded-full bg-acc/[.08] px-2.5 py-1 text-[.62rem] font-semibold text-acc">Friendly</span>
//             </div>
//           </div>

//           {/* 2. Dual avatar (animated) — 2x1 */}
//           <div className="col-span-2 row-span-1">
//             <Swap k={idxs[1]}>
//               <div className={`${cardLight} flex h-full flex-col p-5`}>
//                 <div className="mb-2 flex items-center gap-2">
//                   <span className="flex -space-x-2">
//                     <span className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-white">
//                       <Image src={av(dual.seed)} alt={dual.name} fill sizes="28px" className="object-cover" />
//                     </span>
//                     <span className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-white">
//                       <Image src={av(dual.seed + "-2")} alt="" fill sizes="28px" className="object-cover" />
//                     </span>
//                   </span>
//                   <b className="text-xs">{dual.name}</b>
//                   <span className="rounded-full bg-acc/[.1] px-2 py-0.5 text-[.6rem] font-semibold text-acc">5.0</span>
//                   <span className="ml-auto"><Stars /></span>
//                 </div>
//                 <p className="line-clamp-2 text-sm text-muted">{dual.quote}</p>
//               </div>
//             </Swap>
//           </div>

//           {/* 3. Incredible service (image) — 1x2 */}
//           <div className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-soft">
//             <Image src={photo("rev-img-service")} alt="Happy client" fill sizes="280px" className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//             <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
//               <span className="mb-1 text-[.66rem] text-white/70">29 Mar 2026</span>
//               <b className="font-serif text-xl">Incredible service</b>
//               <span className="text-xs text-white/80">Perfect, exceeded expectations</span>
//               <div className="mt-2"><Stars /></div>
//             </div>
//           </div>

//           {/* 4. Feature (animated, dark pop) — 2x2 */}
//           <div className="col-span-2 row-span-2">
//             <Swap k={idxs[0]}>
//               <div className="flex h-full flex-col rounded-2xl bg-grad p-6 text-white shadow-card">
//                 <div className="flex items-center gap-3">
//                   <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-white/30">
//                     <Image src={av(feature.seed)} alt={feature.name} fill sizes="44px" className="object-cover" />
//                   </span>
//                   <div className="leading-tight">
//                     <b className="block text-sm">{feature.name}</b>
//                     <span className="text-xs text-white/70">{feature.role}</span>
//                   </div>
//                   <span className="ml-auto rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold">5.0 ★</span>
//                 </div>
//                 <p className="mt-5 font-serif text-2xl leading-snug">&ldquo;{feature.quote}&rdquo;</p>
//                 <span className="mt-auto pt-4 text-xs text-white/60">Verified booking · Kuwait</span>
//               </div>
//             </Swap>
//           </div>

//           {/* 5. Service Rating — 1x1 */}
//           <div className={`${cardLight} col-span-1 row-span-1 flex flex-col justify-center bg-acc/[.05] p-5`}>
//             <Stars />
//             <b className="mt-2 font-serif text-2xl">5.0 / 5</b>
//             <span className="text-xs text-muted">from 416 customers</span>
//           </div>

//           {/* 6. Mini quote (animated) — 1x1 */}
//           <div className="col-span-1 row-span-1">
//             <Swap k={idxs[2]}>
//               <div className={`${cardLight} flex h-full flex-col p-5`}>
//                 <span className="font-serif text-3xl leading-none text-acc">&ldquo;</span>
//                 <p className="mt-1 line-clamp-3 text-sm text-muted">{mini.quote}</p>
//                 <span className="mt-auto pt-2 text-[.68rem] text-muted-2">— {mini.name}</span>
//               </div>
//             </Swap>
//           </div>

//           {/* 7. Client Reviews search — 1x1 */}
//           <div className={`${cardLight} col-span-1 row-span-1 flex flex-col justify-center p-5`}>
//             <span className="text-xs text-muted">Client Reviews</span>
//             <div className="mt-2 flex items-center gap-2 rounded-full border border-line bg-surface-2 p-1 pl-3">
//               <span className="text-xs text-muted-2">Search…</span>
//               <span className="ml-auto grid h-7 w-7 place-items-center rounded-full bg-grad text-white">
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
//               </span>
//             </div>
//           </div>

//           {/* 8. Great offers (dark pop) — 1x2 */}
//           <div className="col-span-1 row-span-2 flex flex-col rounded-2xl bg-grad p-5 text-white shadow-card">
//             <b className="font-serif text-xl">Great offers</b>
//             <p className="mt-2 text-sm text-white/75">Recurring plans save up to 8% with the same trusted crew, every visit.</p>
//             <div className="mt-3 flex items-center gap-2">
//               <Stars />
//               <span className="text-xs text-white/70">4.65</span>
//             </div>
//             <Link href="#contact" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white">
//               See plans
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
//             </Link>
//           </div>

//           {/* 9. Amazing result (image + likes) — 1x2 */}
//           <div className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-soft">
//             <Image src={photo("rev-img-amazing")} alt="Delighted client" fill sizes="280px" className="object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
//             <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
//               <b className="font-serif text-xl">Amazing result!</b>
//               <span className="text-xs text-white/80">The villa has never looked better.</span>
//               <div className="mt-3 flex gap-4 text-xs text-white/90">
//                 <span className="flex items-center gap-1"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.3-9C1 8 3 5 6 5c2 0 3 1.2 4 2 1-.8 2-2 4-2 3 0 5 3 3.3 7C19 16.5 12 21 12 21z" /></svg>1,014</span>
//                 <span className="flex items-center gap-1"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="2.5" /></svg>21.7k</span>
//               </div>
//             </div>
//           </div>

//           {/* 10. Elizabeth-style star + text (animated) — 2x1 */}
//           <div className="col-span-2 row-span-1">
//             <Swap k={idxs[3]}>
//               <div className={`${cardLight} flex h-full items-center gap-4 p-5`}>
//                 <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
//                   <Image src={av(eliz.seed, 120)} alt={eliz.name} fill sizes="48px" className="object-cover" />
//                 </span>
//                 <div className="min-w-0">
//                   <Stars />
//                   <p className="mt-1 line-clamp-2 text-sm text-muted">{eliz.quote}</p>
//                   <span className="text-[.68rem] text-muted-2">{eliz.name} · {eliz.role}</span>
//                 </div>
//               </div>
//             </Swap>
//           </div>

//           {/* 11. Your Feedback — 2x1 */}
//           <div className={`${cardLight} col-span-2 row-span-1 flex items-center gap-3 p-5`}>
//             <div className="flex-1">
//               <b className="text-sm">Your Feedback</b>
//               <p className="text-xs text-muted-2">Tell us about your clean — we read every word.</p>
//             </div>
//             <Link href="#contact" aria-label="Leave feedback" className="grid h-11 w-11 place-items-center rounded-full bg-grad text-white shadow-[0_10px_24px_rgba(14,110,78,.3)] transition hover:scale-105">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
//             </Link>
//           </div>
//         </div>

//         {/* pagination dots (decorative) */}
//         <div className="mt-8 flex justify-center gap-2">
//           <span className="h-2 w-2 rounded-full bg-line" />
//           <span className="h-2 w-6 rounded-full bg-grad" />
//           <span className="h-2 w-2 rounded-full bg-line" />
//         </div>
//       </Container>
//     </section>
//   );
// }