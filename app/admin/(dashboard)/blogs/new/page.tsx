"use client";
import { useActionState } from "react";
import Link from "next/link";
import { createBlogPost, type ActionState } from "@/lib/actions/blogs";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { fieldCls, labelCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

const initialState: ActionState = {};

export default function NewBlogPostPage() {
  const [state, formAction] = useActionState(createBlogPost, initialState);

  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-2xl font-semibold">New blog post</h1>

      <form action={formAction} className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <div>
          <label className={labelCls}>Slug</label>
          <input name="slug" required placeholder="e.g. deep-clean-checklist" className={fieldCls} />
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
            <label className={labelCls}>Excerpt (English)</label>
            <textarea name="excerptEn" required className={`${fieldCls} min-h-[70px]`} />
          </div>
          <div>
            <label className={labelCls}>Excerpt (Arabic)</label>
            <textarea name="excerptAr" required dir="rtl" className={`${fieldCls} min-h-[70px]`} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Category (English)</label>
            <input name="categoryEn" required className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Read time (English)</label>
            <input name="readTimeEn" required placeholder="e.g. 5 min" className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Date (English)</label>
            <input name="dateEn" required placeholder="e.g. Jun 2026" className={fieldCls} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Category (Arabic)</label>
            <input name="categoryAr" required dir="rtl" className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Read time (Arabic)</label>
            <input name="readTimeAr" required dir="rtl" className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Date (Arabic)</label>
            <input name="dateAr" required dir="rtl" className={fieldCls} />
          </div>
        </div>

        <div>
          <label className={labelCls}>Cover image</label>
          <input type="file" name="cover" accept="image/jpeg,image/png,image/webp" required className={fieldCls} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Body (English) — separate paragraphs with a blank line</label>
            <textarea name="bodyEn" required className={`${fieldCls} min-h-[180px]`} />
          </div>
          <div>
            <label className={labelCls}>Body (Arabic) — separate paragraphs with a blank line</label>
            <textarea name="bodyAr" required dir="rtl" className={`${fieldCls} min-h-[180px]`} />
          </div>
        </div>

        <hr className="border-slate-200" />
        <p className="text-sm font-medium text-slate-700">Author</p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Author name</label>
            <input name="authorName" required className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>LinkedIn URL (optional)</label>
            <input name="authorLinkedin" className={fieldCls} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Author role (English)</label>
            <input name="authorRoleEn" required className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Author role (Arabic)</label>
            <input name="authorRoleAr" required dir="rtl" className={fieldCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Author avatar (optional)</label>
          <input type="file" name="authorAvatar" accept="image/jpeg,image/png,image/webp" className={fieldCls} />
        </div>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <div className="flex gap-3 pt-2">
          <SubmitButton label="Create post" pendingLabel="Creating..." className={btnPrimaryCls} />
          <Link href="/admin/blogs" className={btnSecondaryCls}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
