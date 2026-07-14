"use client";
import { useActionState } from "react";
import Link from "next/link";
import { updateReview, type ActionState } from "@/lib/actions/reviews";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { fieldCls, labelCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

const initialState: ActionState = {};

type Review = {
  id: string;
  name: string;
  rating: number;
  quoteEn: string | null;
  quoteAr: string | null;
  roleEn: string | null;
  roleAr: string | null;
};

export function EditReviewForm({ review }: { review: Review }) {
  const updateWithId = updateReview.bind(null, review.id);
  const [state, formAction] = useActionState(updateWithId, initialState);

  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-2xl font-semibold">Edit review</h1>

      <form action={formAction} className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Name</label>
            <input name="name" required defaultValue={review.name} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              min={1}
              max={5}
              required
              defaultValue={review.rating}
              className={fieldCls}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Review (English)</label>
            <textarea name="quoteEn" defaultValue={review.quoteEn ?? ""} className={`${fieldCls} min-h-[100px]`} />
          </div>
          <div>
            <label className={labelCls}>Review (Arabic)</label>
            <textarea name="quoteAr" dir="rtl" defaultValue={review.quoteAr ?? ""} className={`${fieldCls} min-h-[100px]`} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Role/location (English, optional)</label>
            <input name="roleEn" defaultValue={review.roleEn ?? ""} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Role/location (Arabic, optional)</label>
            <input name="roleAr" dir="rtl" defaultValue={review.roleAr ?? ""} className={fieldCls} />
          </div>
        </div>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <div className="flex gap-3 pt-2">
          <SubmitButton label="Save changes" pendingLabel="Saving..." className={btnPrimaryCls} />
          <Link href="/admin/reviews" className={btnSecondaryCls}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
