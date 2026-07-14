import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export const passwordChangeSchema = z
  .object({
    currentPassword: z.string().min(1),
    newPassword: z.string().min(8, "New password must be at least 8 characters"),
    confirmPassword: z.string().min(1),
  })
  .refine((v) => v.newPassword === v.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const linesToArray = (v: string) =>
  v
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

export const serviceSchema = z.object({
  nameEn: z.string().min(1),
  nameAr: z.string().min(1),
  subtitleEn: z.string().optional(),
  subtitleAr: z.string().optional(),
  descEn: z.string().min(1),
  descAr: z.string().min(1),
  featuresEn: z.string().min(1).transform(linesToArray),
  featuresAr: z.string().min(1).transform(linesToArray),
  noteEn: z.string().optional(),
  noteAr: z.string().optional(),
  featured: z.coerce.boolean().optional().default(false),
});

export const videoSchema = z.object({
  youtubeId: z.string().min(1),
  titleEn: z.string().min(1),
  titleAr: z.string().min(1),
  lengthEn: z.string().min(1),
  lengthAr: z.string().min(1),
});

export const beforeAfterSchema = z.object({
  labelEn: z.string().min(1),
  labelAr: z.string().min(1),
  noteEn: z.string().min(1),
  noteAr: z.string().min(1),
});

export const blogSchema = z.object({
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "Slug must be lowercase letters, numbers, and hyphens only"),
  titleEn: z.string().min(1),
  titleAr: z.string().min(1),
  excerptEn: z.string().min(1),
  excerptAr: z.string().min(1),
  categoryEn: z.string().min(1),
  categoryAr: z.string().min(1),
  readTimeEn: z.string().min(1),
  readTimeAr: z.string().min(1),
  dateEn: z.string().min(1),
  dateAr: z.string().min(1),
  authorName: z.string().min(1),
  authorRoleEn: z.string().min(1),
  authorRoleAr: z.string().min(1),
  authorLinkedin: z.string().optional(),
  bodyEn: z.string().min(1).transform((v) => v.split("\n\n").map((s) => s.trim()).filter(Boolean)),
  bodyAr: z.string().min(1).transform((v) => v.split("\n\n").map((s) => s.trim()).filter(Boolean)),
});

export const reviewSubmitSchema = z.object({
  name: z.string().min(1).max(100),
  rating: z.coerce.number().int().min(1).max(5),
  review: z.string().min(1).max(2000),
});

export const reviewEditSchema = z.object({
  name: z.string().min(1),
  rating: z.coerce.number().int().min(1).max(5),
  quoteEn: z.string().optional(),
  quoteAr: z.string().optional(),
  roleEn: z.string().optional(),
  roleAr: z.string().optional(),
});
