import { prisma } from "@/lib/prisma";
import type { Bi, BiArr } from "@/lib/i18n";

export type BlogPost = {
  id: string;
  slug: string;
  title: Bi;
  excerpt: Bi;
  category: Bi;
  readTime: Bi;
  date: Bi;
  cover: string;
  author: { name: string; role: Bi; linkedin: string; avatar: string };
  body: BiArr;
};

function toBlogPost(row: {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
  categoryEn: string;
  categoryAr: string;
  readTimeEn: string;
  readTimeAr: string;
  dateEn: string;
  dateAr: string;
  cover: string;
  authorName: string;
  authorRoleEn: string;
  authorRoleAr: string;
  authorLinkedin: string | null;
  authorAvatar: string;
  bodyEn: unknown;
  bodyAr: unknown;
}): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: { en: row.titleEn, ar: row.titleAr },
    excerpt: { en: row.excerptEn, ar: row.excerptAr },
    category: { en: row.categoryEn, ar: row.categoryAr },
    readTime: { en: row.readTimeEn, ar: row.readTimeAr },
    date: { en: row.dateEn, ar: row.dateAr },
    cover: row.cover,
    author: {
      name: row.authorName,
      role: { en: row.authorRoleEn, ar: row.authorRoleAr },
      linkedin: row.authorLinkedin ?? "",
      avatar: row.authorAvatar,
    },
    body: { en: row.bodyEn as string[], ar: row.bodyAr as string[] },
  };
}

export async function getBlogs(): Promise<BlogPost[]> {
  const rows = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });
  return rows.map(toBlogPost);
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const row = await prisma.blogPost.findUnique({ where: { slug } });
  return row ? toBlogPost(row) : null;
}

export async function getBlogSlugs(): Promise<string[]> {
  const rows = await prisma.blogPost.findMany({ select: { slug: true } });
  return rows.map((r) => r.slug);
}
