"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { reviewSubmitSchema, reviewEditSchema } from "@/lib/validation";
import type { Lang } from "@/lib/i18n";

export type ReviewSubmitState = { status: "idle" | "success" | "error"; message?: string };

export async function submitReview(
  _prevState: ReviewSubmitState,
  formData: FormData
): Promise<ReviewSubmitState> {
  const lang = (formData.get("lang") as Lang) === "ar" ? "ar" : "en";

  const parsed = reviewSubmitSchema.safeParse({
    name: formData.get("name"),
    rating: formData.get("rating"),
    review: formData.get("review"),
  });
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Please check your input." };
  }

  await prisma.review.create({
    data: {
      name: parsed.data.name,
      rating: parsed.data.rating,
      quoteEn: lang === "en" ? parsed.data.review : null,
      quoteAr: lang === "ar" ? parsed.data.review : null,
      seed: crypto.randomUUID(),
      status: "PENDING",
    },
  });

  return { status: "success" };
}

export type ActionState = { error?: string };

export async function approveReview(id: string) {
  await requireAdmin();
  await prisma.review.update({ where: { id }, data: { status: "APPROVED" } });
  revalidatePath("/");
  revalidatePath("/admin/reviews");
}

export async function rejectReview(id: string) {
  await requireAdmin();
  await prisma.review.update({ where: { id }, data: { status: "REJECTED" } });
  revalidatePath("/");
  revalidatePath("/admin/reviews");
}

export async function deleteReview(id: string) {
  await requireAdmin();
  await prisma.review.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/reviews");
}

export async function updateReview(id: string, _prevState: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const parsed = reviewEditSchema.safeParse({
    name: formData.get("name"),
    rating: formData.get("rating"),
    quoteEn: formData.get("quoteEn") || undefined,
    quoteAr: formData.get("quoteAr") || undefined,
    roleEn: formData.get("roleEn") || undefined,
    roleAr: formData.get("roleAr") || undefined,
  });
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  await prisma.review.update({ where: { id }, data: parsed.data });

  revalidatePath("/");
  revalidatePath("/admin/reviews");
  redirect("/admin/reviews");
}
