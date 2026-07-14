import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { EditReviewForm } from "@/components/admin/EditReviewForm";

export default async function EditReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const review = await prisma.review.findUnique({ where: { id } });
  if (!review) notFound();

  return <EditReviewForm review={review} />;
}
