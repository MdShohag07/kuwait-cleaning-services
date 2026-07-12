"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

export function Video() {
  const [playing, setPlaying] = useState(false);
  const v = site.video;

  return (
    <section
      id="video"
      className="border-y border-line-soft bg-gradient-to-b from-bg to-[#e6ece9] py-28"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            See us in action
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            A clean you can <em className="italic text-acc">watch happen</em>
          </h2>
          <p className="mt-4 text-muted">
            Press play to see our cleaning standard for yourself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-[30px] shadow-[0_34px_80px_rgba(18,40,30,.16)]"
        >
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
              title="Saffa cleaning video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              aria-label="Play cleaning video"
              className="group absolute inset-0 h-full w-full"
            >
              <Image
                src={v.thumb}
                alt={v.title}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
              />
              {/* dark gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-b from-acc-deep/5 to-acc-deep/45" />

              {/* play button */}
              <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-surface/90 text-acc shadow-[0_16px_40px_rgba(0,0,0,.3)] transition-transform duration-300 group-hover:scale-110 sm:h-[88px] sm:w-[88px]">
                <span className="absolute inset-[-12px] animate-ping rounded-full border-2 border-white/70" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1 sm:h-[30px] sm:w-[30px]">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>

              {/* caption */}
              <span className="absolute bottom-4 left-5 right-5 text-left text-white sm:bottom-6 sm:left-7 sm:right-7">
                <span className="block font-serif text-lg sm:text-xl">{v.title}</span>
                <span className="text-xs opacity-90 sm:text-sm">{v.length}</span>
              </span>
            </button>
          )}
        </motion.div>
      </Container>
    </section>
  );
}