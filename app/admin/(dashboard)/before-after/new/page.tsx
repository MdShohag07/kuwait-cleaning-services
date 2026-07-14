"use client";
import { useActionState } from "react";
import Link from "next/link";
import { createCase, type ActionState } from "@/lib/actions/beforeAfter";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { fieldCls, labelCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

const initialState: ActionState = {};

export default function NewCasePage() {
  const [state, formAction] = useActionState(createCase, initialState);

  return (
    <div className="max-w-xl">
      <h1 className="mb-6 text-2xl font-semibold">New before/after case</h1>

      <form action={formAction} className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Label (English)</label>
            <input name="labelEn" required className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Label (Arabic)</label>
            <input name="labelAr" required dir="rtl" className={fieldCls} />
          </div>
        </div>

        <div>
          <label className={labelCls}>Before image</label>
          <input type="file" name="before" accept="image/jpeg,image/png,image/webp" required className={fieldCls} />
        </div>
        <div>
          <label className={labelCls}>After image</label>
          <input type="file" name="after" accept="image/jpeg,image/png,image/webp" required className={fieldCls} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Note (English)</label>
            <textarea name="noteEn" required className={`${fieldCls} min-h-[70px]`} />
          </div>
          <div>
            <label className={labelCls}>Note (Arabic)</label>
            <textarea name="noteAr" required dir="rtl" className={`${fieldCls} min-h-[70px]`} />
          </div>
        </div>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <div className="flex gap-3 pt-2">
          <SubmitButton label="Create case" pendingLabel="Creating..." className={btnPrimaryCls} />
          <Link href="/admin/before-after" className={btnSecondaryCls}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
