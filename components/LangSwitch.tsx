"use client";
import { useLang } from "@/lib/i18n";

export function LangSwitch() {
  const { toggle, t } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className="flex h-11 items-center rounded-full border border-line bg-surface px-3.5 text-sm font-semibold text-ink transition hover:border-acc sm:h-auto sm:px-4 sm:py-2.5"
    >
      {t.langName}
    </button>
  );
}