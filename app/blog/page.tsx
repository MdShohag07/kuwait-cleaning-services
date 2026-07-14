import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileHookBar } from "@/components/MobileHookBar";
import { Container } from "@/components/Container";
import { BlogList } from "@/components/BlogList";
import { BlogIndexHero } from "@/components/BlogIndexHero";
import { getServices } from "@/lib/data/services";
import { getBlogs } from "@/lib/data/blogs";

export const metadata: Metadata = {
  title: `Blog | ${site.name}`,
  description: "Cleaning tips, guides, and stories from the Kuwait cleaning experts.",
};

export default async function BlogIndex() {
  const [services, blogs] = await Promise.all([getServices(), getBlogs()]);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <section className="pb-8 pt-36 md:pt-40">
          <BlogIndexHero />
        </section>

        <section className="py-16">
          <Container>
            <BlogList blogs={blogs} />
          </Container>
        </section>
      </main>
      <Footer services={services} />
      <MobileHookBar />
    </>
  );
}
