import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { EditCaseForm } from "@/components/admin/EditCaseForm";

export default async function EditCasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await prisma.beforeAfterCase.findUnique({ where: { id } });
  if (!item) notFound();

  return <EditCaseForm item={item} />;
}
