import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteCase, moveCase } from "@/lib/actions/beforeAfter";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { btnDangerCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

export default async function BeforeAfterAdminPage() {
  const cases = await prisma.beforeAfterCase.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Before / After</h1>
        <Link href="/admin/before-after/new" className={btnPrimaryCls}>
          New case
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Before</th>
              <th className="px-4 py-3">After</th>
              <th className="px-4 py-3">Label</th>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c, i) => (
              <tr key={c.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3">
                  <span className="relative block h-12 w-16 overflow-hidden rounded">
                    <Image src={c.before} alt={`${c.labelEn} before`} fill sizes="64px" className="object-cover" />
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="relative block h-12 w-16 overflow-hidden rounded">
                    <Image src={c.after} alt={`${c.labelEn} after`} fill sizes="64px" className="object-cover" />
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium">{c.labelEn}</div>
                  <div className="text-xs text-slate-500" dir="rtl">
                    {c.labelAr}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <form action={moveCase.bind(null, c.id, "up")}>
                      <button type="submit" disabled={i === 0} className={btnSecondaryCls}>
                        ↑
                      </button>
                    </form>
                    <form action={moveCase.bind(null, c.id, "down")}>
                      <button type="submit" disabled={i === cases.length - 1} className={btnSecondaryCls}>
                        ↓
                      </button>
                    </form>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/before-after/${c.id}/edit`} className={btnSecondaryCls}>
                      Edit
                    </Link>
                    <form action={deleteCase.bind(null, c.id)}>
                      <ConfirmSubmitButton confirmMessage={`Delete "${c.labelEn}"?`} className={btnDangerCls}>
                        Delete
                      </ConfirmSubmitButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {cases.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                  No cases yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
