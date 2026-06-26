"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  const items = site.testimonials;
  const [idx, setIdx] = useState(0);

  // auto-advance every 5s
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <section id="reviews" className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            Loved across Kuwait
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight">
            What our clients <em className="italic text-acc">say</em>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {items.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-1.5">
                <div className="rounded-[24px] border border-line-soft bg-surface p-10 text-center shadow-soft md:p-12">
                  <div className="mb-1.5 flex justify-center gap-0.5 text-amber">★★★★★</div>
                  <div className="font-serif text-5xl leading-none text-acc">&ldquo;</div>
                  <p className="mt-2 font-serif text-xl font-light italic text-ink">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-3.5">
                    <span className="relative h-12 w-12 overflow-hidden rounded-full shadow-soft">
                      <Image
                        src={`https://picsum.photos/seed/${t.seed}/100/100`}
                        alt={t.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                    <div className="text-left">
                      <b className="block">{t.name}</b>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="mt-7 flex justify-center gap-2.5">
          {items.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIdx(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-grad" : "w-2.5 bg-line"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}