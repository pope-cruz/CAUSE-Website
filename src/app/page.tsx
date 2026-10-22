import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { About } from "@/components/sections/About";
import { GetInvolved } from "@/components/sections/GetInvolved";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Impact } from "@/components/sections/Impact";
import { Programs } from "@/components/sections/Programs";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-sky focus:px-5 focus:py-3 focus:font-semibold focus:text-midnight"
      >
        Skip to content
      </a>
      <div id="top" />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Programs />
        <HowItWorks />
        <Impact />
        <GetInvolved />
      </main>
      <SiteFooter />
    </>
  );
}
