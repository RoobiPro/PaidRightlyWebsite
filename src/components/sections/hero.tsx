"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/animate";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Hero_background.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/85 dark:bg-[#0b1120]/88" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <FadeIn>
          <Badge className="mb-6">Now in Early Access</Badge>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1]">
            Invoice. Get paid.
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              We handle the rest.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed">
            Stop worrying about tax returns, VAT filings, and income calculations.
            PaidRightly takes care of all your financial admin so you can focus on
            what you do best.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group">
              Get Started Free
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button variant="ghost" size="lg" className="group">
              <Play
                size={16}
                className="mr-2 group-hover:scale-110 transition-transform"
              />
              Watch How It Works
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mt-6 text-sm text-[var(--muted-foreground)]">
            Free to try &middot; No credit card required &middot; Setup in 5 minutes
          </p>
        </FadeIn>

        {/* Flow visualization */}
        <FadeIn delay={0.5}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm">
            <FlowStep label="Invoice Sent" emoji="📄" />
            <FlowArrow />
            <FlowStep label="Client Pays" emoji="💳" />
            <FlowArrow />
            <FlowStep label="Taxes Calculated" emoji="🧮" />
            <FlowArrow />
            <FlowStep label="You Get Paid" emoji="🎉" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FlowStep({ label, emoji }: { label: string; emoji: string }) {
  return (
    <div className="flex items-center gap-2 bg-[var(--muted)] rounded-lg px-4 py-2">
      <span>{emoji}</span>
      <span className="text-[var(--foreground)] font-medium whitespace-nowrap">{label}</span>
    </div>
  );
}

function FlowArrow() {
  return (
    <span className="text-primary-400 hidden sm:block">
      <ArrowRight size={16} />
    </span>
  );
}
