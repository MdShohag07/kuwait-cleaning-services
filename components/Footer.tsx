"use client";
import type { ComponentType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { site, waLink } from "@/lib/site";

const ease = "easeOut" as const;

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 2, ease } },
};

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
  </svg>
);
const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
    <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
    <path d="M3 6.5l8.4 6.2a1 1 0 0 0 1.2 0L21 6.5" />
  </svg>
);
const WaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.34-.2-3.58.94.96-3.49-.22-.36a9.42 9.42 0 0 1-1.45-5.03c0-5.21 4.25-9.45 9.47-9.45 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.68c0 5.21-4.25 9.45-9.47 9.45zm8.05-17.5A11.36 11.36 0 0 0 12.04.5C5.77.5.67 5.6.67 11.87c0 2 .52 3.96 1.52 5.68L.57 23.5l6.1-1.6a11.33 11.33 0 0 0 5.37 1.37h.01c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.9-3.33-8.05z" />
  </svg>
);

const waHref = waLink("Hi, I'd like to book a cleaning service.");

const footerData = {
  sections: [
    {
      title: "Services",
      links: site.services.map((s) => ({ label: s.name, href: "/#services" })),
    },
    {
      title: "Company",
      links: [
        { label: "Why Us", href: "/#why" },
        { label: "How it works", href: "/#process" },
        { label: "Results", href: "/#results" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Reviews", href: "/#reviews" },
        { label: "Book now", href: "/#contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: site.phoneDisplay, href: `tel:${site.phone}` },
        { label: site.email, href: `mailto:${site.email}` },
        { label: `${site.city}, Kuwait`, href: "/#contact" },
      ],
    },
  ],
  quickActions: [
    { href: `tel:${site.phone}`, label: "Call", Icon: PhoneIcon },
    { href: waHref, label: "WhatsApp", Icon: WaIcon },
    { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon },
  ],
  title: site.name,
  subtitle: site.tagline,
  copyright: `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`,
};

const NavSection = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <motion.div variants={itemVariants} className="flex flex-col gap-2">
    <h5 className="mb-2 border-b border-line-soft pb-1 text-xs font-semibold uppercase tracking-wider text-muted-2 transition-colors duration-300 hover:text-ink">
      {title}
    </h5>
    {links.map((l) => (
      <motion.a
        key={l.label}
        variants={linkVariants}
        href={l.href}
        target={l.href.startsWith("http") ? "_blank" : undefined}
        rel={l.href.startsWith("http") ? "noopener" : undefined}
        whileHover={{ x: 8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
        className="group relative font-sans text-xs text-muted transition-colors duration-300 hover:text-ink md:text-sm"
      >
        <span className="relative">
          {l.label}
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-acc"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </span>
      </motion.a>
    ))}
  </motion.div>
);

const QuickAction = ({ href, label, Icon }: { href: string; label: string; Icon: ComponentType }) => (
  <motion.a
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener" : undefined}
    whileHover={{ scale: 1.15, rotate: 8, transition: { type: "spring", stiffness: 300, damping: 15 } }}
    whileTap={{ scale: 0.9 }}
    aria-label={label}
    className="group flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-acc shadow-soft transition-colors duration-300 hover:border-transparent hover:bg-grad hover:text-white md:h-10 md:w-10"
  >
    <Icon />
  </motion.a>
);

export function Footer() {
  return (
    <div className="relative h-[70vh]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="relative h-[calc(100vh+70vh)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-70vh)] h-[70vh]">
          <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-surface via-surface-2 to-surface/90 px-4 py-6 md:px-12 md:py-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent" />
            <motion.div
              variants={glowVariants}
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-0 h-48 w-48 rounded-full bg-acc/10 blur-3xl md:h-96 md:w-96"
            />
            <motion.div
              variants={glowVariants}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-acc-2/10 blur-3xl md:h-96 md:w-96"
            />

            <motion.div variants={containerVariants} className="relative z-10">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12 lg:gap-20">
                {footerData.sections.map((section) => (
                  <NavSection key={section.title} title={section.title} links={section.links} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease }}
              className="relative z-10 mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-6"
            >
              <div className="flex-1 text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.7, ease }}
                  className="shrink-0"
                >
                  <Image
                    src="/images/footerlogo.png"
                    alt={site.name}
                    width={480}
                    height={480}
                    className="h-[22vw] w-[22vw] max-h-40 max-w-40 object-contain sm:h-32 sm:w-32 md:h-40 md:w-40"
                  />
                </motion.div>
                <div className="mt-3 flex items-center gap-3 md:mt-4 md:gap-4">
                  <div className="h-0.5 w-8 bg-grad md:w-12" />
                  <p className="font-sans text-xs text-muted transition-colors duration-300 hover:text-ink md:text-sm">
                    {footerData.subtitle}
                  </p>
                </div>
              </div>

              <div className="text-left md:text-right">
                <p className="mb-2 text-xs text-muted-2 transition-colors duration-300 hover:text-ink md:mb-3 md:text-sm">
                  {footerData.copyright}
                </p>
                <div className="flex gap-2 md:gap-3">
                  {footerData.quickActions.map((action) => (
                    <QuickAction key={action.label} href={action.href} label={action.label} Icon={action.Icon} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}
