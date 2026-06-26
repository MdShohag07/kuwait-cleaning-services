"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { site, waLink } from "@/lib/site";
import { Container } from "./Container";

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2z" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line-soft bg-white/80 shadow-soft backdrop-blur-lg"
          : ""
      }`}
    >
      <Container className="flex h-[76px] items-center justify-between gap-4">
        <Link href="#home" className="flex items-center gap-3 text-lg font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-grad font-serif text-white shadow-[0_8px_22px_rgba(14,110,78,.28)]">
            S
          </span>
          {site.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone}`}
            className="hidden items-center gap-3 rounded-full border border-line bg-surface py-2 pl-4 pr-2 shadow-soft transition hover:-translate-y-0.5 sm:flex"
          >
            <span className="hidden flex-col leading-tight lg:flex">
              <span className="text-[.66rem] uppercase tracking-wider text-muted-2">
                Call now
              </span>
              <span className="text-sm font-semibold">{site.phoneDisplay}</span>
            </span>
            <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-grad text-white">
              <PhoneIcon />
            </span>
          </a>

          <a
            href={waLink("Hi Saffa, I'd like to book a cleaning service.")}
            target="_blank"
            rel="noopener"
            aria-label="Message us on WhatsApp"
            className="relative grid h-[42px] w-[42px] place-items-center rounded-full bg-[#22c35e] text-white"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#22c35e] opacity-40" />
            <span className="relative">
              <WaIcon />
            </span>
          </a>
{/* 
          <a
            href="#contact"
            className="rounded-full bg-grad px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,110,78,.26)] transition hover:-translate-y-0.5"
          >
            Book a service
          </a> */}
        </div>
      </Container>
    </motion.nav>
  );
}
