import { writeFile, mkdir } from "fs/promises";
import path from "path";
import crypto from "crypto";

const ALLOWED: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};
const MAX_BYTES = 5 * 1024 * 1024;

export async function saveUploadedImage(file: File, category: string): Promise<string> {
  const ext = ALLOWED[file.type];
  if (!ext) throw new Error("Unsupported image type. Use JPEG, PNG, or WebP.");
  if (file.size > MAX_BYTES) throw new Error("Image too large (max 5MB).");

  const filename = `${crypto.randomUUID()}.${ext}`;
  const dir = path.join(process.cwd(), "public", "uploads", category);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, filename), Buffer.from(await file.arrayBuffer()));
  return `/uploads/${category}/${filename}`;
}
