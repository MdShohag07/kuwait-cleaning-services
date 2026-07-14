import { prisma } from "@/lib/prisma";
import type { Bi } from "@/lib/i18n";

export type ReviewItem = {
  id: string;
  quote: Bi;
  name: string;
  role: Bi;
  seed: string;
  rating: number;
};

export async function getApprovedReviews(): Promise<ReviewItem[]> {
  const rows = await prisma.review.findMany({
    where: { status: "APPROVED" },
    orderBy: { createdAt: "desc" },
  });
  return rows.map((r) => {
    const quoteEn = r.quoteEn ?? r.quoteAr ?? "";
    const quoteAr = r.quoteAr ?? r.quoteEn ?? "";
    const roleEn = r.roleEn ?? r.roleAr ?? "";
    const roleAr = r.roleAr ?? r.roleEn ?? "";
    return {
      id: r.id,
      quote: { en: quoteEn, ar: quoteAr },
      name: r.name,
      role: { en: roleEn, ar: roleAr },
      seed: r.seed ?? r.id,
      rating: r.rating,
    };
  });
}
