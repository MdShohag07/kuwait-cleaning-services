import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteService, moveService } from "@/lib/actions/services";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { btnDangerCls, btnPrimaryCls, btnSecondaryCls } from "@/lib/adminUi";

export default async function ServicesAdminPage() {
  const services = await prisma.service.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Services</h1>
        <Link href="/admin/services/new" className={btnPrimaryCls}>
          New service
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Featured</th>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s, i) => (
              <tr key={s.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3">
                  <span className="relative block h-12 w-16 overflow-hidden rounded">
                    <Image src={s.image} alt={s.nameEn} fill sizes="64px" className="object-cover" />
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium">{s.nameEn}</div>
                  <div className="text-xs text-slate-500" dir="rtl">
                    {s.nameAr}
                  </div>
                </td>
                <td className="px-4 py-3">{s.featured ? "Yes" : ""}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <form action={moveService.bind(null, s.id, "up")}>
                      <button type="submit" disabled={i === 0} className={btnSecondaryCls}>
                        ↑
                      </button>
                    </form>
                    <form action={moveService.bind(null, s.id, "down")}>
                      <button type="submit" disabled={i === services.length - 1} className={btnSecondaryCls}>
                        ↓
                      </button>
                    </form>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <Link href={`/admin/services/${s.id}/edit`} className={btnSecondaryCls}>
                      Edit
                    </Link>
                    <form action={deleteService.bind(null, s.id)}>
                      <ConfirmSubmitButton confirmMessage={`Delete "${s.nameEn}"?`} className={btnDangerCls}>
                        Delete
                      </ConfirmSubmitButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                  No services yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
