import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { EditVideoForm } from "@/components/admin/EditVideoForm";

export default async function EditVideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = await prisma.video.findUnique({ where: { id } });
  if (!video) notFound();

  return <EditVideoForm video={video} />;
}
