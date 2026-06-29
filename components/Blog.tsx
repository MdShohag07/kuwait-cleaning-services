"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function Blog() {
  return (
    <section id="blog" className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            From the blog
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight">
            Cleaning tips &amp; <em className="italic text-acc">guides</em>
          </h2>
        </motion.div>
      </Container>

      {/* horizontal scroll carousel (full-bleed so cards can peek off edges) */}
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-7 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-[max(28px,calc((100vw-1200px)/2))]">
        {site.blogs.map((b, i) => (
          <motion.div
            key={b.slug}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease, delay: (i % 3) * 0.1 }}
            className="w-[300px] shrink-0 snap-start sm:w-[340px]"
          >
            <Link
              href={`/blog/${b.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-line-soft bg-surface shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={b.cover}
                  alt={b.title}
                  fill
                  sizes="340px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-acc backdrop-blur-sm">
                  {b.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-muted-2">
                  <span>{b.date}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-2" />
                  <span>{b.readTime}</span>
                </div>
                <h3 className="font-serif text-xl leading-snug">{b.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{b.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-acc">
                  Read article{" "}
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <Container>
        <p className="mt-4 text-center text-sm text-muted">
          ← Scroll to see more articles →
        </p>
      </Container>
    </section>
  );
}