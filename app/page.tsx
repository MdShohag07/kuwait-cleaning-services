import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";
import { MobileHookBar } from "@/components/MobileHookBar";
import { Video } from "@/components/Video";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { ReviewForm } from "@/components/ReviewForm";
import { FAQ } from "@/components/FAQ";
import { BookingContact } from "@/components/BookingContact";
import { Blog } from "@/components/Blog";
import { getServices } from "@/lib/data/services";
import { getVideos } from "@/lib/data/videos";
import { getBeforeAfterCases } from "@/lib/data/beforeAfter";
import { getApprovedReviews } from "@/lib/data/reviews";
import { getBlogs } from "@/lib/data/blogs";

export default async function Home() {
  const [services, videos, cases, reviews, blogs] = await Promise.all([
    getServices(),
    getVideos(),
    getBeforeAfterCases(),
    getApprovedReviews(),
    getBlogs(),
  ]);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services services={services} />
        <Why />
        <Process />
        <Video videos={videos} />
        <BeforeAfter cases={cases} />
        <Stats />
        <Testimonials reviews={reviews} />
        <ReviewForm />
        <Blog blogs={blogs} />
        <FAQ />
        <BookingContact services={services} />
      </main>
      <Footer services={services} />
      <MobileHookBar />
    </>
  );
}
