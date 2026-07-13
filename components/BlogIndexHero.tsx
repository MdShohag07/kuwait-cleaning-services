"use client";
import { useLang } from "@/lib/i18n";
import { Container } from "./Container";

export function BlogIndexHero() {
  const { t } = useLang();
  return (
    <Container className="max-w-2xl text-center">
      <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
        {t.blog.eyebrow}
      </span>
      <h1 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight">
        {t.blog.h2a} <em className="italic text-acc">{t.blog.h2b}</em>
      </h1>
    </Container>
  );
}
