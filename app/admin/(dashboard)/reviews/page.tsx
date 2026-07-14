import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { approveReview, rejectReview, deleteReview } from "@/lib/actions/reviews";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { btnDangerCls, btnSecondaryCls } from "@/lib/adminUi";

const TABS = ["PENDING", "APPROVED", "REJECTED"] as const;
type Status = (typeof TABS)[number];

export default async function ReviewsAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status: rawStatus } = await searchParams;
  const status: Status = TABS.includes(rawStatus as Status) ? (rawStatus as Status) : "PENDING";

  const reviews = await prisma.review.findMany({
    where: { status },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Reviews</h1>

      <div className="mb-4 flex gap-2">
        {TABS.map((tab) => (
          <Link
            key={tab}
            href={`/admin/reviews?status=${tab}`}
            className={`rounded-md px-3 py-1.5 text-sm font-medium ${
              tab === status ? "bg-slate-900 text-white" : "border border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {tab.charAt(0) + tab.slice(1).toLowerCase()}
          </Link>
        ))}
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Review</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r) => (
              <tr key={r.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 align-top font-medium">{r.name}</td>
                <td className="px-4 py-3 align-top">{"★".repeat(r.rating)}</td>
                <td className="max-w-md px-4 py-3 align-top text-slate-600">{r.quoteEn ?? r.quoteAr}</td>
                <td className="px-4 py-3 text-right align-top">
                  <div className="flex flex-wrap justify-end gap-2">
                    {status !== "APPROVED" && (
                      <form action={approveReview.bind(null, r.id)}>
                        <button type="submit" className={btnSecondaryCls}>
                          Approve
                        </button>
                      </form>
                    )}
                    {status !== "REJECTED" && (
                      <form action={rejectReview.bind(null, r.id)}>
                        <button type="submit" className={btnSecondaryCls}>
                          Reject
                        </button>
                      </form>
                    )}
                    <Link href={`/admin/reviews/${r.id}/edit`} className={btnSecondaryCls}>
                      Edit
                    </Link>
                    <form action={deleteReview.bind(null, r.id)}>
                      <ConfirmSubmitButton confirmMessage={`Delete this review from "${r.name}"?`} className={btnDangerCls}>
                        Delete
                      </ConfirmSubmitButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {reviews.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-slate-500">
                  No {status.toLowerCase()} reviews.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
