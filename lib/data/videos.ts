import { prisma } from "@/lib/prisma";
import type { Bi } from "@/lib/i18n";

export type VideoItem = {
  id: string;
  youtubeId: string;
  title: Bi;
  length: Bi;
};

export async function getVideos(): Promise<VideoItem[]> {
  const rows = await prisma.video.findMany({ orderBy: { order: "asc" } });
  return rows.map((v) => ({
    id: v.id,
    youtubeId: v.youtubeId,
    title: { en: v.titleEn, ar: v.titleAr },
    length: { en: v.lengthEn, ar: v.lengthAr },
  }));
}
