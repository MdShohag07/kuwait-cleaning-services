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
import { FAQ } from "@/components/FAQ";
import { BookingContact } from "@/components/BookingContact";
import { Blog } from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <Why />
        <Process />
        <Video/>
        <BeforeAfter />
       <Stats />
        <Testimonials />
        <Blog />
        <FAQ />
        <BookingContact />
        

      </main>
      <Footer />
      <MobileHookBar />
    </>
  );
}
