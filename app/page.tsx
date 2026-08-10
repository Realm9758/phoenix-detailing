import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Dock } from "@/components/Dock";

/**
 * Composition only. Every word lives in content/site.ts and every photograph in
 * images/index.ts, so nothing on the page can drift out of step with the facts.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <Dock />
    </>
  );
}
