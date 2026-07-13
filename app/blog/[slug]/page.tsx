import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileHookBar } from "@/components/MobileHookBar";
import { MoreArticles } from "@/components/MoreArticles";
import { BlogPostContent } from "@/components/BlogPostContent";

export function generateStaticParams() {
  return site.blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = site.blogs.find((b) => b.slug === slug);
  if (!post) return {};
  return { title: `${post.title.en} | ${site.name}`, description: post.excerpt.en };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = site.blogs.find((b) => b.slug === slug);
  if (!post) notFound();


  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <BlogPostContent post={post} />
        <MoreArticles currentSlug={post.slug} />
      </main>
      <Footer />
      <MobileHookBar />
    </>
  );
}