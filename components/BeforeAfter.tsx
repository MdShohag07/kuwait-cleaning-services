"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
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

export function BeforeAfter() {
  const cases = site.beforeAfter.cases;

  return (
    <section id="results" className="bg-surface-2 py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            The {site.name} difference
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            See the <em className="italic text-acc">transformation</em>
          </h2>
          <p className="mt-4 text-muted">
            Real results from real homes across Kuwait — messy on the left,
            spotless on the right.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cases.map((c) => (
            <motion.article
              key={c.label}
              variants={item}
              className="overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
            >
              <div className="flex aspect-[4/3]">
                <div className="relative w-1/2">
                  <Image
                    src={c.before}
                    alt={`Before cleaning — ${c.label}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 300px"
                    className="object-cover"
                  />
                  <span className="absolute left-2 top-2 rounded-md bg-[rgba(19,36,27,.65)] px-2 py-1 text-[.65rem] font-semibold uppercase tracking-wide text-white">
                    Before
                  </span>
                </div>
                <div className="relative w-1/2">
                  <Image
                    src={c.after}
                    alt={`After cleaning — ${c.label}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 300px"
                    className="object-cover"
                  />
                  <span className="absolute right-2 top-2 rounded-md bg-acc/90 px-2 py-1 text-[.65rem] font-semibold uppercase tracking-wide text-white">
                    After
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-serif text-lg leading-snug">{c.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.note}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
