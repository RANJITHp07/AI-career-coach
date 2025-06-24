import Features from "@/components/features";
import Feedback from "@/components/feedback";
import HeroSection from "@/components/hero-section";
import Insight from "@/components/insights";
import Questions from "@/components/questions";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid-background" />

      <main className="relative z-10 min-h-screen flex flex-col gap-12 md:gap-24">
        <HeroSection />
        <Features />
        <Stats />
        <Insight />
        <Feedback />
        <Questions />
        <section className="w-full">
          <div className="mx-auto py-24 gradient rounded-lg">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                Ready to Accelerate Your Career?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl p-2">
                Join thousands of professionals who are advancing their careers
                with AI-powered guidance.
              </p>
              <Link href="/dashboard" passHref>
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-11 mt-5 animate-bounce"
                >
                  Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
