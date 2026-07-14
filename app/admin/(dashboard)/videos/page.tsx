import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteVideo, moveVideo } from "@/lib/actions/videos";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { btnDangerCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

export default async function VideosAdminPage() {
  const videos = await prisma.video.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Videos</h1>
        <Link href="/admin/videos/new" className={btnPrimaryCls}>
          New video
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">YouTube ID</th>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((v, i) => (
              <tr key={v.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3">
                  <div className="font-medium">{v.titleEn}</div>
                  <div className="text-xs text-slate-500" dir="rtl">
                    {v.titleAr}
                  </div>
                </td>
                <td className="px-4 py-3 font-mono text-xs">{v.youtubeId}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <form action={moveVideo.bind(null, v.id, "up")}>
                      <button type="submit" disabled={i === 0} className={btnSecondaryCls}>
                        ↑
                      </button>
                    </form>
                    <form action={moveVideo.bind(null, v.id, "down")}>
                      <button type="submit" disabled={i === videos.length - 1} className={btnSecondaryCls}>
                        ↓
                      </button>
                    </form>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/videos/${v.id}/edit`} className={btnSecondaryCls}>
                      Edit
                    </Link>
                    <form action={deleteVideo.bind(null, v.id)}>
                      <ConfirmSubmitButton confirmMessage={`Delete "${v.titleEn}"?`} className={btnDangerCls}>
                        Delete
                      </ConfirmSubmitButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {videos.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-slate-500">
                  No videos yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
