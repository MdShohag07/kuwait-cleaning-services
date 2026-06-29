"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const STEP = 6;

export function BlogList() {
  const all = site.blogs;
  const [count, setCount] = useState(STEP);
  const shown = all.slice(0, count);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {shown.map((b) => (
          <Link
            key={b.slug}
            href={`/blog/${b.slug}`}
            className="group flex flex-col overflow-hidden rounded-[24px] border border-line-soft bg-surface shadow-soft transition hover:-translate-y-2 hover:shadow-card"
          >
            <div className="relative h-52 overflow-hidden">
              <Image src={b.cover} alt={b.title} fill sizes="380px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-acc backdrop-blur-sm">
                {b.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-center gap-2 text-xs text-muted-2">
                <span>{b.date}</span>
                <span className="h-1 w-1 rounded-full bg-muted-2" />
                <span>{b.readTime}</span>
              </div>
              <h3 className="font-serif text-xl leading-snug">{b.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted">{b.excerpt}</p>
              <div className="mt-auto flex items-center gap-2.5 pt-5">
                <span className="relative h-8 w-8 overflow-hidden rounded-full">
                  <Image src={b.author.avatar} alt={b.author.name} fill sizes="32px" className="object-cover" />
                </span>
                <span className="text-xs text-muted">{b.author.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {count < all.length && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setCount((c) => c + STEP)}
            className="rounded-full border border-line bg-surface px-7 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:border-acc"
          >
            Load more articles
          </button>
        </div>
      )}
    </>
  );
}