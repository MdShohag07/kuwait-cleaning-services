"use client";
import { useActionState } from "react";
import Image from "next/image";
import Link from "next/link";
import { updateService, type ActionState } from "@/lib/actions/services";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { fieldCls, labelCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

const initialState: ActionState = {};

type Service = {
  id: string;
  nameEn: string;
  nameAr: string;
  subtitleEn: string | null;
  subtitleAr: string | null;
  descEn: string;
  descAr: string;
  image: string;
  featuresEn: unknown;
  featuresAr: unknown;
  noteEn: string | null;
  noteAr: string | null;
  featured: boolean;
};

export function EditServiceForm({ service }: { service: Service }) {
  const updateWithId = updateService.bind(null, service.id);
  const [state, formAction] = useActionState(updateWithId, initialState);
  const featuresEn = (service.featuresEn as string[]).join("\n");
  const featuresAr = (service.featuresAr as string[]).join("\n");

  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-2xl font-semibold">Edit service</h1>

      <form action={formAction} className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Name (English)</label>
            <input name="nameEn" required defaultValue={service.nameEn} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Name (Arabic)</label>
            <input name="nameAr" required dir="rtl" defaultValue={service.nameAr} className={fieldCls} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Subtitle (English, optional)</label>
            <input name="subtitleEn" defaultValue={service.subtitleEn ?? ""} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Subtitle (Arabic, optional)</label>
            <input name="subtitleAr" dir="rtl" defaultValue={service.subtitleAr ?? ""} className={fieldCls} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Description (English)</label>
            <textarea name="descEn" required defaultValue={service.descEn} className={`${fieldCls} min-h-[80px]`} />
          </div>
          <div>
            <label className={labelCls}>Description (Arabic)</label>
            <textarea name="descAr" required dir="rtl" defaultValue={service.descAr} className={`${fieldCls} min-h-[80px]`} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Features (English, one per line)</label>
            <textarea name="featuresEn" required defaultValue={featuresEn} className={`${fieldCls} min-h-[110px]`} />
          </div>
          <div>
            <label className={labelCls}>Features (Arabic, one per line)</label>
            <textarea name="featuresAr" required dir="rtl" defaultValue={featuresAr} className={`${fieldCls} min-h-[110px]`} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Note (English, optional)</label>
            <input name="noteEn" defaultValue={service.noteEn ?? ""} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Note (Arabic, optional)</label>
            <input name="noteAr" dir="rtl" defaultValue={service.noteAr ?? ""} className={fieldCls} />
          </div>
        </div>

        <div>
          <label className={labelCls}>Image</label>
          <span className="relative mb-2 block h-24 w-36 overflow-hidden rounded border border-slate-200">
            <Image src={service.image} alt={service.nameEn} fill sizes="144px" className="object-cover" />
          </span>
          <input type="file" name="image" accept="image/jpeg,image/png,image/webp" className={fieldCls} />
          <p className="mt-1 text-xs text-slate-500">Leave empty to keep the current image.</p>
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input type="checkbox" name="featured" defaultChecked={service.featured} />
          Featured (shows &quot;Most booked&quot; badge)
        </label>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <div className="flex gap-3 pt-2">
          <SubmitButton label="Save changes" pendingLabel="Saving..." className={btnPrimaryCls} />
          <Link href="/admin/services" className={btnSecondaryCls}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
