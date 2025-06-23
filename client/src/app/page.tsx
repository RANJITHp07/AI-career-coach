import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <div className="grid-background" />

      <main className="relative z-10 min-h-screen flex flex-col gap-8">
        <HeroSection />
        <Features />
      </main>
    </>
  );
}
