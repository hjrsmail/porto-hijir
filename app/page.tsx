
import Hero from "./(content)/hero/page";
import About from "./(content)/about/page";
import Skills from "./(content)/skills/page";
import Project from "./(content)/project/page";
import type { Metadata } from "next";
import AppLayout from "@/components/layouts/app-layout";

export const metadata: Metadata = {
  title: "Portfolio - Hijir Ismail",
};

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <About />
      <Skills />
      <Project />
    </AppLayout>
  )
}
