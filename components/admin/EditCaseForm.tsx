"use client";
import { useActionState } from "react";
import Image from "next/image";
import Link from "next/link";
import { updateCase, type ActionState } from "@/lib/actions/beforeAfter";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { fieldCls, labelCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

const initialState: ActionState = {};

type Case = {
  id: string;
  labelEn: string;
  labelAr: string;
  before: string;
  after: string;
  noteEn: string;
  noteAr: string;
};

export function EditCaseForm({ item }: { item: Case }) {
  const updateWithId = updateCase.bind(null, item.id);
  const [state, formAction] = useActionState(updateWithId, initialState);

  return (
    <div className="max-w-xl">
      <h1 className="mb-6 text-2xl font-semibold">Edit before/after case</h1>

      <form action={formAction} className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Label (English)</label>
            <input name="labelEn" required defaultValue={item.labelEn} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Label (Arabic)</label>
            <input name="labelAr" required dir="rtl" defaultValue={item.labelAr} className={fieldCls} />
          </div>
        </div>

        <div>
          <label className={labelCls}>Before image</label>
          <span className="relative mb-2 block h-24 w-36 overflow-hidden rounded border border-slate-200">
            <Image src={item.before} alt="Before" fill sizes="144px" className="object-cover" />
          </span>
          <input type="file" name="before" accept="image/jpeg,image/png,image/webp" className={fieldCls} />
          <p className="mt-1 text-xs text-slate-500">Leave empty to keep the current image.</p>
        </div>
        <div>
          <label className={labelCls}>After image</label>
          <span className="relative mb-2 block h-24 w-36 overflow-hidden rounded border border-slate-200">
            <Image src={item.after} alt="After" fill sizes="144px" className="object-cover" />
          </span>
          <input type="file" name="after" accept="image/jpeg,image/png,image/webp" className={fieldCls} />
          <p className="mt-1 text-xs text-slate-500">Leave empty to keep the current image.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Note (English)</label>
            <textarea name="noteEn" required defaultValue={item.noteEn} className={`${fieldCls} min-h-[70px]`} />
          </div>
          <div>
            <label className={labelCls}>Note (Arabic)</label>
            <textarea name="noteAr" required dir="rtl" defaultValue={item.noteAr} className={`${fieldCls} min-h-[70px]`} />
          </div>
        </div>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <div className="flex gap-3 pt-2">
          <SubmitButton label="Save changes" pendingLabel="Saving..." className={btnPrimaryCls} />
          <Link href="/admin/before-after" className={btnSecondaryCls}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
