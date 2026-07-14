import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function DashboardHome() {
  const [services, blogs, videos, cases, pendingReviews, approvedReviews] = await Promise.all([
    prisma.service.count(),
    prisma.blogPost.count(),
    prisma.video.count(),
    prisma.beforeAfterCase.count(),
    prisma.review.count({ where: { status: "PENDING" } }),
    prisma.review.count({ where: { status: "APPROVED" } }),
  ]);

  const cards = [
    { label: "Services", value: services, href: "/admin/services" },
    { label: "Blog posts", value: blogs, href: "/admin/blogs" },
    { label: "Videos", value: videos, href: "/admin/videos" },
    { label: "Before/After cases", value: cases, href: "/admin/before-after" },
    { label: "Approved reviews", value: approvedReviews, href: "/admin/reviews?status=APPROVED" },
    { label: "Pending reviews", value: pendingReviews, href: "/admin/reviews?status=PENDING", highlight: pendingReviews > 0 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-1 text-sm text-slate-500">Manage your site content from the sidebar.</p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className={`rounded-lg border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm ${
              c.highlight ? "border-amber-300 bg-amber-50" : "border-slate-200"
            }`}
          >
            <div className="text-3xl font-semibold">{c.value}</div>
            <div className="mt-1 text-sm text-slate-500">{c.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
