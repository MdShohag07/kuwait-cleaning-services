"use client";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "./Container";
import { Counter } from "./Counter";

const ease = [0.16, 1, 0.3, 1] as const;

export function Stats() {
  return (
    <section className="bg-grad text-white">
      <Container>
        <div className="grid gap-10 py-20 text-center md:grid-cols-4">
          {site.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            >
              <div className="font-serif text-[clamp(2.6rem,5vw,3.6rem)] leading-none">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm opacity-90">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}