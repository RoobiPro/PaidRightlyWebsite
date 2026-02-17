"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/animate";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/Hero_background.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Dark mode: simple dark overlay */}
        <div className="absolute inset-0 hidden dark:block bg-[#0b1120]/88" />
        {/* Light mode: opaque base + colored gradient on top for depth */}
        <div className="absolute inset-0 dark:hidden bg-white/95" />
        <div className="absolute inset-0 dark:hidden bg-gradient-to-br from-primary-100/70 via-transparent to-coral/15" />
      </div>
      {/* Decorative blobs for light mode depth */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary-200/40 dark:bg-primary-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-32 w-[400px] h-[400px] bg-coral/15 dark:bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute top-10 left-1/3 w-[300px] h-[300px] bg-primary-300/20 dark:bg-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center">
        <FadeIn>
          <Badge className="mb-6">Early Access is Full</Badge>
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
          <div id="hero-waitlist" className="mt-10 flex flex-col items-center gap-4 scroll-mt-24">
            <WaitlistForm source="hero" buttonText="Join the Waitlist" />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="mt-6 text-sm text-[var(--muted-foreground)]">
            Early access is currently full &middot; Join the waitlist to be first in line
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
    <div className="flex items-center gap-2 bg-white/80 dark:bg-[var(--muted)] backdrop-blur-sm border border-[var(--border)] rounded-lg px-4 py-2 shadow-sm">
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
