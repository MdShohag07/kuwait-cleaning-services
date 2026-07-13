import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileHookBar } from "@/components/MobileHookBar";
import { Container } from "@/components/Container";
import { BlogList } from "@/components/BlogList";
import { BlogIndexHero } from "@/components/BlogIndexHero";

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
          <BlogIndexHero />
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
