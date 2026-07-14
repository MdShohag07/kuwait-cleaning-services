"use client";
import { useActionState } from "react";
import Link from "next/link";
import { updateVideo, type ActionState } from "@/lib/actions/videos";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { fieldCls, labelCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

const initialState: ActionState = {};

type Video = {
  id: string;
  youtubeId: string;
  titleEn: string;
  titleAr: string;
  lengthEn: string;
  lengthAr: string;
};

export function EditVideoForm({ video }: { video: Video }) {
  const updateWithId = updateVideo.bind(null, video.id);
  const [state, formAction] = useActionState(updateWithId, initialState);

  return (
    <div className="max-w-xl">
      <h1 className="mb-6 text-2xl font-semibold">Edit video</h1>

      <form action={formAction} className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <div>
          <label className={labelCls}>YouTube video ID</label>
          <input name="youtubeId" required defaultValue={video.youtubeId} className={fieldCls} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Title (English)</label>
            <input name="titleEn" required defaultValue={video.titleEn} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Title (Arabic)</label>
            <input name="titleAr" required dir="rtl" defaultValue={video.titleAr} className={fieldCls} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Length label (English)</label>
            <input name="lengthEn" required defaultValue={video.lengthEn} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Length label (Arabic)</label>
            <input name="lengthAr" required dir="rtl" defaultValue={video.lengthAr} className={fieldCls} />
          </div>
        </div>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <div className="flex gap-3 pt-2">
          <SubmitButton label="Save changes" pendingLabel="Saving..." className={btnPrimaryCls} />
          <Link href="/admin/videos" className={btnSecondaryCls}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
