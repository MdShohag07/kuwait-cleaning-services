"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { beforeAfterSchema } from "@/lib/validation";
import { saveUploadedImage } from "@/lib/uploads";

export type ActionState = { error?: string };

function parseForm(formData: FormData) {
  return beforeAfterSchema.safeParse({
    labelEn: formData.get("labelEn"),
    labelAr: formData.get("labelAr"),
    noteEn: formData.get("noteEn"),
    noteAr: formData.get("noteAr"),
  });
}

export async function createCase(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const parsed = parseForm(formData);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  const beforeFile = formData.get("before");
  const afterFile = formData.get("after");
  if (!(beforeFile instanceof File) || beforeFile.size === 0) return { error: "Please choose a 'before' image." };
  if (!(afterFile instanceof File) || afterFile.size === 0) return { error: "Please choose an 'after' image." };

  let before: string, after: string;
  try {
    before = await saveUploadedImage(beforeFile, "before-after");
    after = await saveUploadedImage(afterFile, "before-after");
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Upload failed." };
  }

  const maxOrder = await prisma.beforeAfterCase.aggregate({ _max: { order: true } });
  await prisma.beforeAfterCase.create({
    data: { ...parsed.data, before, after, order: (maxOrder._max.order ?? -1) + 1 },
  });

  revalidatePath("/");
  revalidatePath("/admin/before-after");
  redirect("/admin/before-after");
}

export async function updateCase(id: string, _prevState: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const parsed = parseForm(formData);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  const beforeFile = formData.get("before");
  const afterFile = formData.get("after");
  let before: string | undefined;
  let after: string | undefined;
  try {
    if (beforeFile instanceof File && beforeFile.size > 0) before = await saveUploadedImage(beforeFile, "before-after");
    if (afterFile instanceof File && afterFile.size > 0) after = await saveUploadedImage(afterFile, "before-after");
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Upload failed." };
  }

  await prisma.beforeAfterCase.update({
    where: { id },
    data: { ...parsed.data, ...(before ? { before } : {}), ...(after ? { after } : {}) },
  });

  revalidatePath("/");
  revalidatePath("/admin/before-after");
  redirect("/admin/before-after");
}

export async function deleteCase(id: string) {
  await requireAdmin();
  await prisma.beforeAfterCase.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/before-after");
}

export async function moveCase(id: string, direction: "up" | "down") {
  await requireAdmin();

  const items = await prisma.beforeAfterCase.findMany({ orderBy: { order: "asc" } });
  const index = items.findIndex((i) => i.id === id);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || swapWith < 0 || swapWith >= items.length) return;

  const a = items[index];
  const b = items[swapWith];
  await prisma.$transaction([
    prisma.beforeAfterCase.update({ where: { id: a.id }, data: { order: b.order } }),
    prisma.beforeAfterCase.update({ where: { id: b.id }, data: { order: a.order } }),
  ]);

  revalidatePath("/");
  revalidatePath("/admin/before-after");
}
