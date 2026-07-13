"use client";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

const CalendarIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4.5" width="18" height="16" rx="2" />
    <path d="M16 2.5v4M8 2.5v4M3 9.5h18" />
    <path d="M8.5 14.5l1.8 1.8L15 12.3" />
  </svg>
);

const WaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.34-.2-3.58.94.96-3.49-.22-.36a9.42 9.42 0 0 1-1.45-5.03c0-5.21 4.25-9.45 9.47-9.45 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.68c0 5.21-4.25 9.45-9.47 9.45zm8.05-17.5A11.36 11.36 0 0 0 12.04.5C5.77.5.67 5.6.67 11.87c0 2 .52 3.96 1.52 5.68L.57 23.5l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.33-8.05z" />
  </svg>
);

const DropletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.7s7 8 7 12.3a7 7 0 0 1-14 0c0-4.3 7-12.3 7-12.3z" />
  </svg>
);

const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
  </svg>
);

const stepIcons = [CalendarIcon, WaIcon, DropletIcon, SparklesIcon];

export function Process() {
  const { t, tr } = useLang();
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
            {t.process.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            {t.process.h2a} <em className="italic text-acc">{t.process.h2b}</em>
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

          {site.steps.map((s, i) => {
            const StepIcon = stepIcons[i];
            return (
              <motion.div
                key={tr(s.title)}
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
                  className="relative mx-auto mb-5 grid h-[68px] w-[68px] place-items-center rounded-full bg-grad text-white shadow-[0_14px_30px_rgba(14,110,78,.3)]"
                >
                  {StepIcon && <StepIcon />}
                  <span className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border-2 border-surface bg-surface text-xs font-bold text-acc shadow-soft">
                    {i + 1}
                  </span>
                </motion.div>
                <h3 className="font-serif text-lg">{tr(s.title)}</h3>
                <p className="mx-auto mt-1.5 max-w-[210px] text-sm text-muted">{tr(s.text)}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
