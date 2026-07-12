"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import { Container } from "./Container";
import { LangSwitch } from "./LangSwitch";

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.34-.2-3.58.94.96-3.49-.22-.36a9.42 9.42 0 0 1-1.45-5.03c0-5.21 4.25-9.45 9.47-9.45 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.68c0 5.21-4.25 9.45-9.47 9.45zm8.05-17.5A11.36 11.36 0 0 0 12.04.5C5.77.5.67 5.6.67 11.87c0 2 .52 3.96 1.52 5.68L.57 23.5l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.33-8.05z" />
  </svg>
);

const links = [
  { key: "services", href: "#services" },
  { key: "why", href: "#why" },
  { key: "watch", href: "#video" },
  { key: "results", href: "#results" },
  { key: "faq", href: "#faq" },
  { key: "blog", href: "/blog" },
] as const;

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
);

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-line-soft bg-surface/80 shadow-soft backdrop-blur-lg" : ""
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between gap-3 sm:h-[76px]">
        <Link href="#home" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-2.5 text-base font-semibold sm:gap-3 sm:text-lg">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-grad font-serif text-white shadow-[0_8px_22px_rgba(14,110,78,.28)]">S</span>
          <span className="truncate">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
              {t.nav[l.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LangSwitch />
          <a href={`tel:${site.phone}`} className="hidden items-center gap-3 rounded-full border border-line bg-surface py-2 pl-4 pr-2 shadow-soft transition hover:-translate-y-0.5 sm:flex">
            <span className="hidden flex-col leading-tight lg:flex">
              <span className="text-[.66rem] uppercase tracking-wider text-muted-2">{t.cta.callNow}</span>
              <span className="text-sm font-semibold">{site.phoneDisplay}</span>
            </span>
            <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-grad text-white"><PhoneIcon /></span>
          </a>
          <a href={waLink("Hi Saffa, I'd like to book a cleaning service.")} target="_blank" rel="noopener" aria-label={t.cta.whatsapp} className="relative hidden h-11 w-11 place-items-center rounded-full bg-[#22c35e] text-white sm:grid">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#22c35e] opacity-40" />
            <span className="relative"><WaIcon /></span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink shadow-soft transition hover:border-acc lg:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line-soft bg-surface/95 backdrop-blur-lg lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {t.nav[l.key]}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-3 border-t border-line-soft pt-4">
                <a
                  href={`tel:${site.phone}`}
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-grad px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,110,78,.26)]"
                >
                  <PhoneIcon /> {t.cta.callNow}
                </a>
                <a
                  href={waLink("Hi Saffa, I'd like to book a cleaning service.")}
                  target="_blank"
                  rel="noopener"
                  onClick={() => setOpen(false)}
                  aria-label={t.cta.whatsapp}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#22c35e] text-white"
                >
                  <WaIcon />
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}