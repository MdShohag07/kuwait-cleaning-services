"use client";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Container } from "./Container";

const ease = [0.16, 1, 0.3, 1] as const;

// icon keyword -> svg path(s)
const icons: Record<string, React.ReactNode> = {
  shield: (<><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></>),
  leaf: <path d="M12 2C8 6 6 9 6 13a6 6 0 0012 0c0-4-2-7-6-11z" />,
  bolt: <path d="M13 2L3 14h7l-1 8 10-12h-7z" />,
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  check: <path d="M20 6L9 17l-5-5" />,
  tag: <path d="M12 1v22M5 6h9a3 3 0 010 6H7a3 3 0 000 6h10" />,
};

function Icon({ name }: { name: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
}

export function Why() {
  return (
    <section id="why" className="py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
            Why {site.name}
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight text-balance">
            Built on trust, <em className="italic text-acc">not luck</em>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {site.whyPoints.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease, delay: (i % 3) * 0.1 }}
              className="rounded-2xl border border-line-soft bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-line hover:shadow-card"
            >
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-grad text-white shadow-[0_8px_20px_rgba(14,110,78,.22)]">
                <Icon name={p.icon} />
              </span>
              <h3 className="font-serif text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
