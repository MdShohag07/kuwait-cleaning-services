"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang, type Bi } from "@/lib/i18n";
import type { VideoItem } from "@/lib/data/videos";
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

function VideoCard({ youtubeId, title, length }: { youtubeId: string; title: Bi; length: Bi }) {
  const [playing, setPlaying] = useState(false);
  const { t, tr } = useLang();

  return (
    <motion.div
      variants={item}
      className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={tr(title)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={t.video.playAria}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
            alt={tr(title)}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-gradient-to-b from-acc-deep/5 to-acc-deep/45" />

          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-surface/90 text-acc shadow-[0_16px_40px_rgba(0,0,0,.3)] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
            <span className="absolute inset-[-10px] animate-ping rounded-full border-2 border-white/70" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1 sm:h-6 sm:w-6">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>

          <span className="absolute bottom-3 left-4 right-4 text-left text-white sm:bottom-4 sm:left-5 sm:right-5">
            <span className="block font-serif text-base leading-snug sm:text-lg">{tr(title)}</span>
            <span className="text-xs opacity-90">{tr(length)}</span>
          </span>
        </button>
      )}
    </motion.div>
  );
}

export function Video({ videos }: { videos: VideoItem[] }) {
  const { t } = useLang();

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
            {t.video.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            {t.video.h2a} <em className="italic text-acc">{t.video.h2b}</em>
          </h2>
          <p className="mt-4 text-muted">
            {t.video.sub}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {videos.map((v) => (
            <VideoCard key={v.id} youtubeId={v.youtubeId} title={v.title} length={v.length} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
