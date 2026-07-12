"use client";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

export function Process() {
  return (
    <section id="process" className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            How it works
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            Four steps to a <em className="italic text-acc">spotless space</em>
          </h2>
        </motion.div>

        <div className="relative grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {/* connecting line (desktop only) */}
          <div className="absolute left-[12%] right-[12%] top-[34px] hidden h-0.5 overflow-hidden rounded-full bg-line md:block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease, delay: 0.2 }}
              className="h-full bg-grad"
            />
          </div>

          {site.steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: 0.3 + i * 0.22 }}
              className="relative z-10 text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease, delay: 0.4 + i * 0.22 }}
                className="mx-auto mb-5 grid h-[68px] w-[68px] place-items-center rounded-full bg-grad font-serif text-2xl text-white shadow-[0_14px_30px_rgba(14,110,78,.3)]"
              >
                {i + 1}
              </motion.div>
              <h3 className="font-serif text-lg">{s.title}</h3>
              <p className="mx-auto mt-1.5 max-w-[210px] text-sm text-muted">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
