import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileHookBar } from "@/components/MobileHookBar";
import { MoreArticles } from "@/components/MoreArticles";
import { BlogPostContent } from "@/components/BlogPostContent";
import { getServices } from "@/lib/data/services";
import { getBlogs, getBlogBySlug, getBlogSlugs } from "@/lib/data/blogs";

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return {};
  return { title: `${post.title.en} | ${site.name}`, description: post.excerpt.en };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, services, blogs] = await Promise.all([getBlogBySlug(slug), getServices(), getBlogs()]);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <BlogPostContent post={post} />
        <MoreArticles blogs={blogs} currentSlug={post.slug} />
      </main>
      <Footer services={services} />
      <MobileHookBar />
    </>
  );
}
