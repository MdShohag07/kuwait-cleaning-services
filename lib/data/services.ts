import { prisma } from "@/lib/prisma";
import type { Bi, BiArr } from "@/lib/i18n";

export type ServiceItem = {
  id: string;
  name: Bi;
  subtitle?: Bi;
  desc: Bi;
  image: string;
  features: BiArr;
  note?: Bi;
  featured: boolean;
};

export async function getServices(): Promise<ServiceItem[]> {
  const rows = await prisma.service.findMany({ orderBy: { order: "asc" } });
  return rows.map((s) => ({
    id: s.id,
    name: { en: s.nameEn, ar: s.nameAr },
    subtitle: s.subtitleEn && s.subtitleAr ? { en: s.subtitleEn, ar: s.subtitleAr } : undefined,
    desc: { en: s.descEn, ar: s.descAr },
    image: s.image,
    features: { en: s.featuresEn as string[], ar: s.featuresAr as string[] },
    note: s.noteEn && s.noteAr ? { en: s.noteEn, ar: s.noteAr } : undefined,
    featured: s.featured,
  }));
}
