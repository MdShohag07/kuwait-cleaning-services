"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { serviceSchema } from "@/lib/validation";
import { saveUploadedImage } from "@/lib/uploads";

export type ActionState = { error?: string };

function parseForm(formData: FormData) {
  return serviceSchema.safeParse({
    nameEn: formData.get("nameEn"),
    nameAr: formData.get("nameAr"),
    subtitleEn: formData.get("subtitleEn") || undefined,
    subtitleAr: formData.get("subtitleAr") || undefined,
    descEn: formData.get("descEn"),
    descAr: formData.get("descAr"),
    featuresEn: formData.get("featuresEn"),
    featuresAr: formData.get("featuresAr"),
    noteEn: formData.get("noteEn") || undefined,
    noteAr: formData.get("noteAr") || undefined,
    featured: formData.get("featured") === "on",
  });
}

export async function createService(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const parsed = parseForm(formData);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  const imageFile = formData.get("image");
  if (!(imageFile instanceof File) || imageFile.size === 0) {
    return { error: "Please choose an image." };
  }

  let image: string;
  try {
    image = await saveUploadedImage(imageFile, "services");
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Upload failed." };
  }

  const maxOrder = await prisma.service.aggregate({ _max: { order: true } });

  await prisma.service.create({
    data: {
      ...parsed.data,
      image,
      order: (maxOrder._max.order ?? -1) + 1,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/services");
  redirect("/admin/services");
}

export async function updateService(id: string, _prevState: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();

  const parsed = parseForm(formData);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Invalid input." };

  const imageFile = formData.get("image");
  let image: string | undefined;
  if (imageFile instanceof File && imageFile.size > 0) {
    try {
      image = await saveUploadedImage(imageFile, "services");
    } catch (e) {
      return { error: e instanceof Error ? e.message : "Upload failed." };
    }
  }

  await prisma.service.update({
    where: { id },
    data: { ...parsed.data, ...(image ? { image } : {}) },
  });

  revalidatePath("/");
  revalidatePath("/admin/services");
  redirect("/admin/services");
}

export async function deleteService(id: string) {
  await requireAdmin();
  await prisma.service.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/admin/services");
}

export async function moveService(id: string, direction: "up" | "down") {
  await requireAdmin();

  const items = await prisma.service.findMany({ orderBy: { order: "asc" } });
  const index = items.findIndex((i) => i.id === id);
  const swapWith = direction === "up" ? index - 1 : index + 1;
  if (index === -1 || swapWith < 0 || swapWith >= items.length) return;

  const a = items[index];
  const b = items[swapWith];
  await prisma.$transaction([
    prisma.service.update({ where: { id: a.id }, data: { order: b.order } }),
    prisma.service.update({ where: { id: b.id }, data: { order: a.order } }),
  ]);

  revalidatePath("/");
  revalidatePath("/admin/services");
}
