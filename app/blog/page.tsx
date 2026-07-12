import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileHookBar } from "@/components/MobileHookBar";
import { Container } from "@/components/Container";
import { BlogList } from "@/components/BlogList";

export const metadata: Metadata = {
  title: `Blog | ${site.name}`,
  description: "Cleaning tips, guides, and stories from the Kuwait cleaning experts.",
};

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <section className="pb-8 pt-36 md:pt-40">
          <Container className="max-w-2xl text-center">
            <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-acc">
              From the blog
            </span>
            <h1 className="font-serif text-[clamp(2.1rem,4.6vw,3.5rem)] leading-tight tracking-tight">
              Cleaning tips &amp; <em className="italic text-acc">guides</em>
            </h1>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <BlogList />
          </Container>
        </section>
      </main>
      <Footer />
      <MobileHookBar />
    </>
  );
}
