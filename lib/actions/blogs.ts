"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { blogSchema } from "@/lib/validation";
import { saveUploadedImage } from "@/lib/uploads";

export type ActionState = { error?: string };

function parseForm(formData: FormData) {
  return blogSchema.safeParse({
    slug: formData.get("slug"),
    titleEn: formData.get("titleEn"),
    titleAr: formData.get("titleAr"),
    excerptEn: formData.get("excerptEn"),
    excerptAr: formData.get("excerptAr"),
    categoryEn: formData.get("categoryEn"),
    categoryAr: formData.get("categoryAr"),
    readTimeEn: formData.get("readTimeEn"),
    readTimeAr: formData.get("readTimeAr"),
    dateEn: formData.get("dateEn"),
    dateAr: formData.get("dateAr"),
    authorName: formData.get("authorName"),
    authorRoleEn: formData.get("authorRoleEn"),
    authorRoleAr: formData.get("authorRoleAr"),
    authorLinkedin: formData.get("authorLinkedin") || undefined,
    bodyEn: formData.get("bodyEn"),
    bodyAr: formData.get("bodyAr"),
  });
}

const DEFAULT_AVATAR = "https://picsum.photos/seed/author-default/100/100";

export async function createBlogPost(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const parsed = parseForm(formData);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  const coverFile = formData.get("cover");
  if (!(coverFile instanceof File) || coverFile.size === 0) return { error: "Please choose a cover image." };

  let cover: string;
  try {
    cover = await saveUploadedImage(coverFile, "blog");
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Upload failed." };
  }

  const avatarFile = formData.get("authorAvatar");
  let authorAvatar = DEFAULT_AVATAR;
  if (avatarFile instanceof File && avatarFile.size > 0) {
    try {
      authorAvatar = await saveUploadedImage(avatarFile, "authors");
    } catch (e) {
      return { error: e instanceof Error ? e.message : "Upload failed." };
    }
  }

  try {
    await prisma.blogPost.create({ data: { ...parsed.data, cover, authorAvatar } });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return { error: "That slug is already in use." };
    }
    throw e;
  }

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/admin/blogs");
  redirect("/admin/blogs");
}

export async function updateBlogPost(id: string, _prevState: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const existing = await prisma.blogPost.findUnique({ where: { id } });
  if (!existing) return { error: "Post not found." };

  const parsed = parseForm(formData);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  const coverFile = formData.get("cover");
  let cover: string | undefined;
  if (coverFile instanceof File && coverFile.size > 0) {
    try {
      cover = await saveUploadedImage(coverFile, "blog");
    } catch (e) {
      return { error: e instanceof Error ? e.message : "Upload failed." };
    }
  }

  const avatarFile = formData.get("authorAvatar");
  let authorAvatar: string | undefined;
  if (avatarFile instanceof File && avatarFile.size > 0) {
    try {
      authorAvatar = await saveUploadedImage(avatarFile, "authors");
    } catch (e) {
      return { error: e instanceof Error ? e.message : "Upload failed." };
    }
  }

  try {
    await prisma.blogPost.update({
      where: { id },
      data: { ...parsed.data, ...(cover ? { cover } : {}), ...(authorAvatar ? { authorAvatar } : {}) },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return { error: "That slug is already in use." };
    }
    throw e;
  }

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath(`/blog/${existing.slug}`);
  if (parsed.data.slug !== existing.slug) revalidatePath(`/blog/${parsed.data.slug}`);
  revalidatePath("/admin/blogs");
  redirect("/admin/blogs");
}

export async function deleteBlogPost(id: string) {
  await requireAdmin();
  const existing = await prisma.blogPost.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath(`/blog/${existing.slug}`);
  revalidatePath("/admin/blogs");
}
