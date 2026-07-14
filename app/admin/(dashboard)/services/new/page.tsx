"use client";
import { useActionState } from "react";
import Link from "next/link";
import { createService, type ActionState } from "@/lib/actions/services";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { fieldCls, labelCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

const initialState: ActionState = {};

export default function NewServicePage() {
  const [state, formAction] = useActionState(createService, initialState);

  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-2xl font-semibold">New service</h1>

      <form action={formAction} className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Name (English)</label>
            <input name="nameEn" required className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Name (Arabic)</label>
            <input name="nameAr" required dir="rtl" className={fieldCls} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Subtitle (English, optional)</label>
            <input name="subtitleEn" className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Subtitle (Arabic, optional)</label>
            <input name="subtitleAr" dir="rtl" className={fieldCls} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Description (English)</label>
            <textarea name="descEn" required className={`${fieldCls} min-h-[80px]`} />
          </div>
          <div>
            <label className={labelCls}>Description (Arabic)</label>
            <textarea name="descAr" required dir="rtl" className={`${fieldCls} min-h-[80px]`} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Features (English, one per line)</label>
            <textarea name="featuresEn" required className={`${fieldCls} min-h-[110px]`} />
          </div>
          <div>
            <label className={labelCls}>Features (Arabic, one per line)</label>
            <textarea name="featuresAr" required dir="rtl" className={`${fieldCls} min-h-[110px]`} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Note (English, optional)</label>
            <input name="noteEn" className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Note (Arabic, optional)</label>
            <input name="noteAr" dir="rtl" className={fieldCls} />
          </div>
        </div>

        <div>
          <label className={labelCls}>Image</label>
          <input type="file" name="image" accept="image/jpeg,image/png,image/webp" required className={fieldCls} />
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input type="checkbox" name="featured" />
          Featured (shows "Most booked" badge)
        </label>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <div className="flex gap-3 pt-2">
          <SubmitButton label="Create service" pendingLabel="Creating..." className={btnPrimaryCls} />
          <Link href="/admin/services" className={btnSecondaryCls}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
