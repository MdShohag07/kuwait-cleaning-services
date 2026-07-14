"use client";
import { useActionState } from "react";
import Link from "next/link";
import { createVideo, type ActionState } from "@/lib/actions/videos";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { fieldCls, labelCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

const initialState: ActionState = {};

export default function NewVideoPage() {
  const [state, formAction] = useActionState(createVideo, initialState);

  return (
    <div className="max-w-xl">
      <h1 className="mb-6 text-2xl font-semibold">New video</h1>

      <form action={formAction} className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <div>
          <label className={labelCls}>YouTube video ID</label>
          <input name="youtubeId" required placeholder="e.g. dQw4w9WgXcQ" className={fieldCls} />
          <p className="mt-1 text-xs text-slate-500">
            The part after <code>watch?v=</code> in the YouTube URL.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Title (English)</label>
            <input name="titleEn" required className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Title (Arabic)</label>
            <input name="titleAr" required dir="rtl" className={fieldCls} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Length label (English)</label>
            <input name="lengthEn" required placeholder="e.g. Watch now" className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Length label (Arabic)</label>
            <input name="lengthAr" required dir="rtl" className={fieldCls} />
          </div>
        </div>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <div className="flex gap-3 pt-2">
          <SubmitButton label="Create video" pendingLabel="Creating..." className={btnPrimaryCls} />
          <Link href="/admin/videos" className={btnSecondaryCls}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
