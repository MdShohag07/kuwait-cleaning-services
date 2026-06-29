"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const INITIAL = 3;
const STEP = 3;

export function MoreArticles({ currentSlug }: { currentSlug: string }) {
  const others = site.blogs.filter((b) => b.slug !== currentSlug);
  const [count, setCount] = useState(INITIAL);
  const shown = others.slice(0, count);

  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-[1200px] px-7">
        <h2 className="mb-8 font-serif text-2xl">More articles</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {shown.map((b) => (
            <Link
              key={b.slug}
              href={`/blog/${b.slug}`}
              className="group overflow-hidden rounded-[20px] border border-line-soft bg-surface shadow-soft transition hover:-translate-y-1.5 hover:shadow-card"
            >
              <div className="relative h-40 overflow-hidden">
                <Image src={b.cover} alt={b.title} fill sizes="380px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-acc backdrop-blur-sm">
                  {b.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg leading-snug">{b.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted">{b.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {count < others.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setCount((c) => c + STEP)}
              className="rounded-full border border-line bg-surface px-7 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:border-acc"
            >
              Load more articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}