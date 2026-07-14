import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteBlogPost } from "@/lib/actions/blogs";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { btnDangerCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

export default async function BlogsAdminPage() {
  const posts = await prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Blogs</h1>
        <Link href="/admin/blogs/new" className={btnPrimaryCls}>
          New post
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Cover</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3">
                  <span className="relative block h-12 w-16 overflow-hidden rounded">
                    <Image src={p.cover} alt={p.titleEn} fill sizes="64px" className="object-cover" />
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium">{p.titleEn}</div>
                  <div className="text-xs text-slate-500" dir="rtl">
                    {p.titleAr}
                  </div>
                </td>
                <td className="px-4 py-3 font-mono text-xs">{p.slug}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/blogs/${p.id}/edit`} className={btnSecondaryCls}>
                      Edit
                    </Link>
                    <form action={deleteBlogPost.bind(null, p.id)}>
                      <ConfirmSubmitButton confirmMessage={`Delete "${p.titleEn}"?`} className={btnDangerCls}>
                        Delete
                      </ConfirmSubmitButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-slate-500">
                  No posts yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
