import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";
import { MobileHookBar } from "@/components/MobileHookBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <Why />
        <Process />
      </main>
      <Footer />
      <MobileHookBar />
    </>
  );
}
