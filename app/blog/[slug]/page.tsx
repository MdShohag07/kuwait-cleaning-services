import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileHookBar } from "@/components/MobileHookBar";
import { Container } from "@/components/Container";

// Pre-build a page for each blog (great for SEO + speed)
export function generateStaticParams() {
  return site.blogs.map((b) => ({ slug: b.slug }));
}

// Per-article SEO tags
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = site.blogs.find((b) => b.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | ${site.name}`, description: post.excerpt };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = site.blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const others = site.blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <article className="pt-36 md:pt-40">
          <Container className="max-w-3xl">
            <Link href="/#blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-acc">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
              Back to all articles
            </Link>

            <div className="mb-4 flex items-center gap-2 text-xs text-muted-2">
              <span className="rounded-full bg-acc/[.08] px-3 py-1 font-semibold text-acc">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-muted-2" />
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] leading-tight tracking-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
          </Container>

          <Container className="max-w-4xl">
            <div className="relative my-10 aspect-[16/9] overflow-hidden rounded-[24px] shadow-card">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </Container>

          <Container className="max-w-3xl">
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-ink/90">
              {post.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-[24px] border border-acc/15 bg-acc/[.05] p-8 text-center">
              <h3 className="font-serif text-2xl">Ready for a spotless space?</h3>
              <p className="mx-auto mt-2 max-w-md text-muted">
                Book {site.name} in 60 seconds — transparent KD pricing, vetted crews,
                spotless guarantee.
              </p>
              <Link
                href="/#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-grad px-6 py-3.5 font-semibold text-white shadow-[0_12px_30px_rgba(14,110,78,.26)] transition hover:-translate-y-0.5"
              >
                Book a service
              </Link>
            </div>
          </Container>
        </article>

        {/* more articles */}
        <section className="py-24">
          <Container>
            <h2 className="mb-8 font-serif text-2xl">More articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {others.map((b) => (
                <Link
                  key={b.slug}
                  href={`/blog/${b.slug}`}
                  className="group overflow-hidden rounded-[20px] border border-line-soft bg-surface shadow-soft transition hover:-translate-y-1.5 hover:shadow-card"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image src={b.cover} alt={b.title} fill sizes="380px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg leading-snug">{b.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted">{b.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <MobileHookBar />
    </>
  );
}