"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

const LinkedInIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.75V21H17.5v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
  </svg>
);
const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
    <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const Arrow = ({ dir = "right" }: { dir?: "left" | "right" }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    {dir === "right" ? <path d="M5 12h14M13 6l6 6-6 6" /> : <path d="M19 12H5M11 6l-6 6 6 6" />}
  </svg>
);

export function Blog() {
  const blogs = site.blogs;
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const lock = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const go = (dir: number) =>
    setActive((a) => Math.min(Math.max(a + dir, 0), blogs.length - 1));

  // vertical mouse-wheel changes the active blog
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const dir = e.deltaY > 0 ? 1 : -1;
      const next = active + dir;
      if (next < 0 || next >= blogs.length) return; // don't trap at the ends
      e.preventDefault();
      if (lock.current) return;
      lock.current = true;
      setActive(next);
      setTimeout(() => (lock.current = false), 420);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [active, blogs.length]);

  return (
    <section
      id="blog"
      className="overflow-hidden py-28 text-white"
      style={{ background: "linear-gradient(160deg,#0c2c20 0%,#08231a 55%,#06140f 100%)" }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-[#5fe0b0]">
            From the blog
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight">
            Cleaning tips &amp; <em className="italic text-[#5fe0b0]">guides</em>
          </h2>
          <p className="mt-3 text-sm text-white/55">
            Hover the cards and scroll your mouse wheel to browse.
          </p>
        </motion.div>
      </Container>

      {/* coverflow stage */}
      <div
        ref={trackRef}
        className="relative mx-auto h-[500px] w-full max-w-6xl select-none"
        style={{ perspective: 1600 }}
        onTouchStart={(e) =>
          (touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })
        }
        onTouchEnd={(e) => {
          if (!touchStart.current) return;
          const dx = e.changedTouches[0].clientX - touchStart.current.x;
          const dy = e.changedTouches[0].clientY - touchStart.current.y;
          const move = Math.abs(dx) > Math.abs(dy) ? -dx : -dy;
          if (Math.abs(move) > 40) go(move > 0 ? 1 : -1);
          touchStart.current = null;
        }}
      >
        {blogs.map((b, i) => {
          const offset = i - active;
          const abs = Math.abs(offset);
          const clamp = Math.min(abs, 2);
          const isActive = offset === 0;
          return (
            <motion.article
              key={b.slug}
              initial={false}
              animate={{
                x: offset * 232,
                scale: 1 - clamp * 0.12,
                rotateY: offset * -5,
                opacity: abs > 2 ? 0 : 1 - clamp * 0.08,
              }}
              transition={{ duration: 0.5, ease }}
              onClick={() => !isActive && setActive(i)}
              style={{
                zIndex: 50 - abs,
                left: "50%",
                top: "50%",
                width: 308,
                height: 470,
                marginLeft: -154,
                marginTop: -235,
                pointerEvents: abs > 2 ? "none" : "auto",
                cursor: isActive ? "default" : "pointer",
              }}
              className={`absolute flex flex-col rounded-[26px] bg-white p-3 text-ink shadow-[0_30px_70px_rgba(0,0,0,.5)] ${
                isActive ? "ring-1 ring-[#5fe0b0]/40" : ""
              }`}
            >
              {/* image */}
              <div className="relative h-44 w-full overflow-hidden rounded-[18px]">
                <Image src={b.cover} alt={b.title} fill sizes="308px" className="object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[.66rem] font-semibold text-acc backdrop-blur-sm">
                  {b.category}
                </span>
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col px-2.5 pt-3.5">
                <h3 className="font-serif text-xl leading-tight">{b.title}</h3>
                <span className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-muted">
                  <PinIcon /> {b.category} · Kuwait
                </span>

                <p className="mb-3 mt-3 text-[.7rem] font-semibold uppercase tracking-wider text-muted-2">
                  Description
                </p>
                <p className="line-clamp-2 text-sm text-muted">{b.excerpt}</p>

                {/* 3-col stat strip */}
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-line-soft pt-3">
                  {[
                    { k: "Read", v: b.readTime },
                    { k: "Topic", v: b.category },
                    { k: "Published", v: b.date },
                  ].map((s) => (
                    <div key={s.k}>
                      <p className="text-[.6rem] uppercase tracking-wider text-muted-2">{s.k}</p>
                      <p className="text-xs font-semibold">{s.v}</p>
                    </div>
                  ))}
                </div>

                {/* bottom: author + action */}
                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2.5">
                    <span className="relative h-9 w-9 overflow-hidden rounded-full">
                      <Image src={b.author.avatar} alt={b.author.name} fill sizes="36px" className="object-cover" />
                    </span>
                    <span className="leading-tight">
                      <b className="flex items-center gap-1.5 text-xs">
                        {b.author.name}
                        
                         <a href={b.author.linkedin}
                          target="_blank"
                          rel="noopener"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${b.author.name} on LinkedIn`}
                          className="text-acc/70 transition hover:text-acc"
                        >
                          <LinkedInIcon />
                        </a>
                      </b>
                      <span className="text-[.68rem] text-muted-2">{b.author.role}</span>
                    </span>
                  </div>

                  {isActive ? (
                    <Link
                      href={`/blog/${b.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Read ${b.title}`}
                      className="grid h-11 w-11 place-items-center rounded-full bg-grad text-white shadow-[0_10px_24px_rgba(14,110,78,.4)] transition hover:scale-105"
                    >
                      <Arrow />
                    </Link>
                  ) : (
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-acc/[.08] text-acc">
                      <Arrow />
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          disabled={active === 0}
          aria-label="Previous"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition enabled:hover:bg-white/10 disabled:opacity-30"
        >
          <Arrow dir="left" />
        </button>
        <div className="flex gap-2.5">
          {blogs.map((b, i) => (
            <button
              key={b.slug}
              onClick={() => setActive(i)}
              aria-label={`Go to article ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${i === active ? "w-6 bg-[#5fe0b0]" : "w-2.5 bg-white/25"}`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          disabled={active === blogs.length - 1}
          aria-label="Next"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition enabled:hover:bg-white/10 disabled:opacity-30"
        >
          <Arrow />
        </button>
      </div>
    </section>
  );
}