import { prisma } from "@/lib/prisma";
import type { Bi } from "@/lib/i18n";

export type BeforeAfterCaseItem = {
  id: string;
  label: Bi;
  before: string;
  after: string;
  note: Bi;
};

export async function getBeforeAfterCases(): Promise<BeforeAfterCaseItem[]> {
  const rows = await prisma.beforeAfterCase.findMany({ orderBy: { order: "asc" } });
  return rows.map((c) => ({
    id: c.id,
    label: { en: c.labelEn, ar: c.labelAr },
    before: c.before,
    after: c.after,
    note: { en: c.noteEn, ar: c.noteAr },
  }));
}
