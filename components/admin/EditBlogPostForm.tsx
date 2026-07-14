"use client";
import { useActionState } from "react";
import Image from "next/image";
import Link from "next/link";
import { updateBlogPost, type ActionState } from "@/lib/actions/blogs";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { fieldCls, labelCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

const initialState: ActionState = {};

type BlogPost = {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
  categoryEn: string;
  categoryAr: string;
  readTimeEn: string;
  readTimeAr: string;
  dateEn: string;
  dateAr: string;
  cover: string;
  authorName: string;
  authorRoleEn: string;
  authorRoleAr: string;
  authorLinkedin: string | null;
  authorAvatar: string;
  bodyEn: unknown;
  bodyAr: unknown;
};

export function EditBlogPostForm({ post }: { post: BlogPost }) {
  const updateWithId = updateBlogPost.bind(null, post.id);
  const [state, formAction] = useActionState(updateWithId, initialState);
  const bodyEn = (post.bodyEn as string[]).join("\n\n");
  const bodyAr = (post.bodyAr as string[]).join("\n\n");

  return (
    <div className="max-w-2xl">
      <h1 className="mb-6 text-2xl font-semibold">Edit blog post</h1>

      <form action={formAction} className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6">
        <div>
          <label className={labelCls}>Slug</label>
          <input name="slug" required defaultValue={post.slug} className={fieldCls} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Title (English)</label>
            <input name="titleEn" required defaultValue={post.titleEn} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Title (Arabic)</label>
            <input name="titleAr" required dir="rtl" defaultValue={post.titleAr} className={fieldCls} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Excerpt (English)</label>
            <textarea name="excerptEn" required defaultValue={post.excerptEn} className={`${fieldCls} min-h-[70px]`} />
          </div>
          <div>
            <label className={labelCls}>Excerpt (Arabic)</label>
            <textarea name="excerptAr" required dir="rtl" defaultValue={post.excerptAr} className={`${fieldCls} min-h-[70px]`} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Category (English)</label>
            <input name="categoryEn" required defaultValue={post.categoryEn} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Read time (English)</label>
            <input name="readTimeEn" required defaultValue={post.readTimeEn} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Date (English)</label>
            <input name="dateEn" required defaultValue={post.dateEn} className={fieldCls} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className={labelCls}>Category (Arabic)</label>
            <input name="categoryAr" required dir="rtl" defaultValue={post.categoryAr} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Read time (Arabic)</label>
            <input name="readTimeAr" required dir="rtl" defaultValue={post.readTimeAr} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Date (Arabic)</label>
            <input name="dateAr" required dir="rtl" defaultValue={post.dateAr} className={fieldCls} />
          </div>
        </div>

        <div>
          <label className={labelCls}>Cover image</label>
          <span className="relative mb-2 block h-24 w-36 overflow-hidden rounded border border-slate-200">
            <Image src={post.cover} alt={post.titleEn} fill sizes="144px" className="object-cover" />
          </span>
          <input type="file" name="cover" accept="image/jpeg,image/png,image/webp" className={fieldCls} />
          <p className="mt-1 text-xs text-slate-500">Leave empty to keep the current image.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Body (English) — separate paragraphs with a blank line</label>
            <textarea name="bodyEn" required defaultValue={bodyEn} className={`${fieldCls} min-h-[180px]`} />
          </div>
          <div>
            <label className={labelCls}>Body (Arabic) — separate paragraphs with a blank line</label>
            <textarea name="bodyAr" required dir="rtl" defaultValue={bodyAr} className={`${fieldCls} min-h-[180px]`} />
          </div>
        </div>

        <hr className="border-slate-200" />
        <p className="text-sm font-medium text-slate-700">Author</p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Author name</label>
            <input name="authorName" required defaultValue={post.authorName} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>LinkedIn URL (optional)</label>
            <input name="authorLinkedin" defaultValue={post.authorLinkedin ?? ""} className={fieldCls} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Author role (English)</label>
            <input name="authorRoleEn" required defaultValue={post.authorRoleEn} className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Author role (Arabic)</label>
            <input name="authorRoleAr" required dir="rtl" defaultValue={post.authorRoleAr} className={fieldCls} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Author avatar</label>
          <span className="relative mb-2 block h-16 w-16 overflow-hidden rounded-full border border-slate-200">
            <Image src={post.authorAvatar} alt={post.authorName} fill sizes="64px" className="object-cover" />
          </span>
          <input type="file" name="authorAvatar" accept="image/jpeg,image/png,image/webp" className={fieldCls} />
          <p className="mt-1 text-xs text-slate-500">Leave empty to keep the current avatar.</p>
        </div>

        {state.error && <p className="text-sm text-red-600">{state.error}</p>}

        <div className="flex gap-3 pt-2">
          <SubmitButton label="Save changes" pendingLabel="Saving..." className={btnPrimaryCls} />
          <Link href="/admin/blogs" className={btnSecondaryCls}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
