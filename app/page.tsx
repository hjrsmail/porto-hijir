
import Hero from "./(content)/hero/page";
import About from "./(content)/about/page";
import Skills from "./(content)/skills/page";
import Project from "./(content)/project/page";
import type { Metadata } from "next";
import SplashWrapper from "@/components/ui/splash-wrapper";
import AppLayout from "@/components/layouts/app-layout";

export const metadata: Metadata = {
  title: "Portfolio - Hijir Ismail",
  description: "Portofolio Hijir Ismail yang dibangun dengan menggunakan Frontend NextJS dan backend dara Laravel dan datanya diambil dengan menggunakan API Restful",
};

export default function Home() {
  return (
    <SplashWrapper>
      <AppLayout>
        <Hero />
        <About />
        <Skills />
        <Project />
      </AppLayout>
    </SplashWrapper>
  )
}
