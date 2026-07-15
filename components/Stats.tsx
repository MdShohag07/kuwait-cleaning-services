"use client";
import { motion } from "framer-motion";
import { Home, Smile, CalendarDays, Users } from "lucide-react";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import { Container } from "./Container";
import { Counter } from "./Counter";

const ease = [0.16, 1, 0.3, 1] as const;
const statIcons = [Home, Smile, CalendarDays, Users];

export function Stats() {
  const { tr } = useLang();
  return (
    <section className="relative overflow-hidden bg-grad text-white">
      <div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <Container>
        <div className="relative grid grid-cols-2 gap-5 py-20 md:grid-cols-4">
          {site.stats.map((s, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <motion.div
                key={tr(s.label)}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-8 text-center backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                  className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-white/20"
                >
                  <Icon className="h-5 w-5" />
                </motion.span>
                <div className="font-serif text-[clamp(2.2rem,4.4vw,3.2rem)] leading-none">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm opacity-90">{tr(s.label)}</div>
                <span className="mt-4 h-0.5 w-8 rounded-full bg-white/40 transition-all duration-300 group-hover:w-14" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
