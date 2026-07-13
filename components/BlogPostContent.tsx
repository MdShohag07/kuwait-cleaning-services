"use client";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { useLang } from "@/lib/i18n";
import { Container } from "./Container";

type BlogPost = (typeof site.blogs)[number];

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.75V21H17.5v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
  </svg>
);

export function BlogPostContent({ post }: { post: BlogPost }) {
  const { t, tr, trList } = useLang();

  return (
    <article className="pt-36 md:pt-40">
      <Container className="max-w-3xl">
        <Link href="/#blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-acc">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          {t.blogPost.back}
        </Link>

        <div className="mb-4 flex items-center gap-2 text-xs text-muted-2">
          <span className="rounded-full bg-acc/[.08] px-3 py-1 font-semibold text-acc">{tr(post.category)}</span>
          <span>{tr(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-muted-2" />
          <span>{tr(post.readTime)}</span>
        </div>

        <h1 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] leading-tight tracking-tight">
          {tr(post.title)}
        </h1>
        <p className="mt-4 text-lg text-muted">{tr(post.excerpt)}</p>

        {/* author byline */}
        <div className="mt-6 flex flex-wrap items-center gap-3.5 border-y border-line-soft py-4">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
            <Image src={post.author.avatar} alt={post.author.name} fill sizes="44px" className="object-cover" />
          </span>
          <div className="leading-tight">
            <b className="block text-sm">{post.author.name}</b>
            <span className="text-xs text-muted">{tr(post.author.role)}</span>
          </div>

          <a href={post.author.linkedin}
            target="_blank"
            rel="noopener"
            aria-label={`${post.author.name} on LinkedIn`}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-acc transition hover:bg-acc/[.08] sm:ml-auto"
          >
            <LinkedInIcon /> {t.blogPost.linkedin}
          </a>
        </div>
      </Container>

      <Container className="max-w-4xl">
        <div className="relative my-10 aspect-[16/9] overflow-hidden rounded-[24px] shadow-card">
          <Image src={post.cover} alt={tr(post.title)} fill priority sizes="(max-width: 768px) 100vw, 900px" className="object-cover" />
        </div>
      </Container>

      <Container className="max-w-3xl">
        <div className="flex flex-col gap-5 text-lg leading-relaxed text-ink/90">
          {trList(post.body).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 rounded-[24px] border border-acc/15 bg-acc/[.05] p-8 text-center">
          <h3 className="font-serif text-2xl">{t.blogPost.ctaTitle}</h3>
          <p className="mx-auto mt-2 max-w-md text-muted">
            {t.blogPost.ctaSub.replace("{name}", site.name)}
          </p>
          <Link href="/#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-grad px-6 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(14,110,78,.26)] transition hover:-translate-y-0.5">
            {t.cta.book}
          </Link>
        </div>
      </Container>
    </article>
  );
}
