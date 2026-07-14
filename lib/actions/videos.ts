"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { videoSchema } from "@/lib/validation";

export type ActionState = { error?: string };

function parseForm(formData: FormData) {
  return videoSchema.safeParse({
    youtubeId: formData.get("youtubeId"),
    titleEn: formData.get("titleEn"),
    titleAr: formData.get("titleAr"),
    lengthEn: formData.get("lengthEn"),
    lengthAr: formData.get("lengthAr"),
  });
}

export async function createVideo(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const parsed = parseForm(formData);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  const maxOrder = await prisma.video.aggregate({ _max: { order: true } });
  await prisma.video.create({ data: { ...parsed.data, order: (maxOrder._max.order ?? -1) + 1 } });

  revalidatePath("/");
  revalidatePath("/admin/videos");
  redirect("/admin/videos");
}

export async function updateVideo(id: string, _prevState: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const parsed = parseForm(formData);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  await prisma.video.update({ where: { id }, data: parsed.data });

  revalidatePath("/");
  revalidatePath("/admin/videos");
  redirect("/admin/videos");
}

export async function deleteVideo(id: string) {
  await requireAdmin();
  await prisma.video.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/videos");
}

export async function moveVideo(id: string, direction: "up" | "down") {
  await requireAdmin();

  const items = await prisma.video.findMany({ orderBy: { order: "asc" } });
  const index = items.findIndex((i) => i.id === id);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || swapWith < 0 || swapWith >= items.length) return;

  const a = items[index];
  const b = items[swapWith];
  await prisma.$transaction([
    prisma.video.update({ where: { id: a.id }, data: { order: b.order } }),
    prisma.video.update({ where: { id: b.id }, data: { order: a.order } }),
  ]);

  revalidatePath("/");
  revalidatePath("/admin/videos");
}
