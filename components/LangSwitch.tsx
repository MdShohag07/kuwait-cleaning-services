"use client";
import { useLang } from "@/lib/i18n";

export function LangSwitch() {
  const { toggle, t } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className="rounded-full border border-line bg-surface px-3 py-2 text-sm font-semibold text-ink transition hover:border-acc"
    >
      {t.langName}
    </button>
  );
}