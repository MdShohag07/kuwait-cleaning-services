"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { t, tr } = useLang();

  return (
    <section id="faq" className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            {t.faq.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            {t.faq.h2a} <em className="italic text-acc">{t.faq.h2b}</em>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {site.faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={tr(f.q)} className="border-b border-line-soft">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left text-lg font-medium"
                >
                  {tr(f.q)}
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center text-acc transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-muted">{tr(f.a)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}