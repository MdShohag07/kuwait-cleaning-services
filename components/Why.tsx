"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, type Variants } from "framer-motion";
import { ShieldCheck, Leaf, Zap, Clock, CheckCircle2, Tag, Sparkles, Star, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

const icons: Record<string, typeof ShieldCheck> = {
  shield: ShieldCheck,
  leaf: Leaf,
  bolt: Zap,
  clock: Clock,
  check: CheckCircle2,
  tag: Tag,
};

const accentIcons = [Sparkles, Star, CheckCircle2];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease } },
};

export function Why() {
  const { t, tr } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const left = site.whyPoints.slice(0, 3);
  const right = site.whyPoints.slice(3, 6);

  return (
    <section id="why" ref={sectionRef} className="relative overflow-hidden py-28">
      {/* parallax decorative blobs */}
      <motion.div className="pointer-events-none absolute -left-10 top-24 h-64 w-64 rounded-full bg-acc/5 blur-3xl" style={{ y: y1 }} />
      <motion.div className="pointer-events-none absolute -right-10 bottom-24 h-80 w-80 rounded-full bg-amber/10 blur-3xl" style={{ y: y2 }} />
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/2 h-3 w-3 rounded-full bg-acc/40"
        animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-4 w-4 rounded-full bg-amber/40"
        animate={{ y: [0, 16, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <Container>
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants} className="relative z-10">
          <motion.div variants={itemVariants} className="mx-auto mb-6 flex max-w-2xl flex-col items-center text-center">
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-acc">
              <Sparkles className="h-4 w-4" /> {t.why.eyebrowPrefix} {site.name}
            </span>
            <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
              {t.why.h2a} <em className="italic text-acc">{t.why.h2b}</em>
            </h2>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-5 h-1 rounded-full bg-grad"
            />
            <p className="mt-6 max-w-xl text-muted">{t.why.sub}</p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            <div className="space-y-12">
              {left.map((p, i) => (
                <WhyItem key={tr(p.title)} point={p} index={i} />
              ))}
            </div>

            <div className="order-first flex items-center justify-center md:order-none">
              <motion.div variants={itemVariants} className="relative w-full max-w-xs">
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/services/deep-cleaning.jpg"
                      alt="Professional cleaning crew at work in Kuwait"
                      fill
                      sizes="(max-width: 768px) 60vw, 320px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/55 to-transparent p-5">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-soft transition hover:-translate-y-0.5"
                    >
                      {t.cta.book} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
                <div className="absolute -inset-3 -z-10 rounded-2xl border-4 border-acc/15" />
                <motion.div className="absolute -right-6 -top-4 h-16 w-16 rounded-full bg-acc/10" style={{ y: y1 }} />
                <motion.div className="absolute -left-8 -bottom-6 h-20 w-20 rounded-full bg-amber/15" style={{ y: y2 }} />
              </motion.div>
            </div>

            <div className="space-y-12">
              {right.map((p, i) => (
                <WhyItem key={tr(p.title)} point={p} index={i + 3} />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function WhyItem({ point, index }: { point: (typeof site.whyPoints)[number]; index: number }) {
  const { tr } = useLang();
  const Icon = icons[point.icon] ?? ShieldCheck;
  const Accent = accentIcons[index % accentIcons.length];

  return (
    <motion.div variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="group flex flex-col">
      <div className="mb-3 flex items-center gap-3">
        <motion.span
          whileHover={{ rotate: [0, -10, 10, -5, 0] }}
          transition={{ duration: 0.5 }}
          className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-acc/10 text-acc transition-colors duration-300 group-hover:bg-acc/15"
        >
          <Icon className="h-5 w-5" />
          <Accent className="absolute -right-1 -top-1 h-3.5 w-3.5 text-amber" />
        </motion.span>
        <h3 className="font-serif text-lg transition-colors duration-300 group-hover:text-acc">{tr(point.title)}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted">{tr(point.text)}</p>
    </motion.div>
  );
}
