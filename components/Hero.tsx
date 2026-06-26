"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "./Container";

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const LeafIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2C8 6 6 9 6 13a6 6 0 0012 0c0-4-2-7-6-11z" />
  </svg>
);
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ease = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: 0.1 + i * 0.1 },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-36 md:pt-40">
      {/* soft ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(31,174,128,.18),transparent_65%)] blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(224,162,59,.10),transparent_65%)] blur-[100px]" />
      </div>

      <Container>
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* left: copy */}
          <div>
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs text-muted shadow-soft"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#22c35e]" />
              Now serving Kuwait City, Hawalli &amp; Salmiya
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-serif text-[clamp(2.6rem,5.8vw,4.4rem)] leading-[1.05] tracking-tight"
            >
              A spotless space,
              <br />
              <em className="italic text-acc">delivered like art.</em>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 max-w-[520px] text-lg text-muted"
            >
              {site.name} brings white-glove cleaning to Kuwait&apos;s homes,
              villas, and offices. Vetted crews, eco-safe products, and a finish
              you can see in the light.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-grad px-6 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(14,110,78,.26)] transition hover:-translate-y-0.5"
              >
                Book a service <ArrowIcon />
              </a>
              <a
                href="#services"
                className="rounded-full border border-line bg-surface px-6 py-3.5 font-semibold transition hover:-translate-y-0.5"
              >
                View services &amp; pricing
              </a>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <div>
                <div className="flex gap-0.5 text-amber" aria-label="4.9 out of 5">
                  ★★★★★
                </div>
                <p className="text-xs text-muted-2">4.9 average · 600+ reviews</p>
              </div>
              <span className="hidden h-9 w-px bg-line sm:block" />
              <div>
                <b className="font-semibold">5,000+</b>
                <p className="text-xs text-muted-2">homes &amp; offices cleaned</p>
              </div>
              <span className="hidden h-9 w-px bg-line sm:block" />
              <div>
                <b className="font-semibold">100%</b>
                <p className="text-xs text-muted-2">spotless guarantee</p>
              </div>
            </motion.div>
          </div>

          {/* right: image + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_34px_80px_rgba(18,40,30,.16)]">
              <Image
                src={site.images.hero}
                alt="Bright, freshly cleaned modern living room in Kuwait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <motion.div
             animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="shadow-card backdrop-blur-md will-change-transform sm:-left-6 absolute -left-4 top-6 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-card backdrop-blur-md sm:-left-6"
            >
              <span className=" grid h-10 w-10 place-items-center rounded-xl bg-grad text-white">
                <LeafIcon />
              </span>
              <div>
                <b className="block text-sm leading-none">Eco-safe</b>
                <span className="text-xs text-muted">Family &amp; pet friendly</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="shadow-card backdrop-blur-md will-change-transform  absolute -right-4 bottom-8 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 shadow-card backdrop-blur-md sm:-right-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-grad text-white">
                <ShieldIcon />
              </span>
              <div>
                <b className="block text-sm leading-none">Insured crews</b>
                <span className="text-xs text-muted">Background-checked</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
