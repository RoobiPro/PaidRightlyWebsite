"use client";

import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/animate";
import { Star, ShieldCheck, Lock, Award } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "UX Designer",
    image: "/images/customer_sarah_chen.png",
    content:
      "I used to spend an entire weekend every quarter doing my taxes. Now I just invoice my clients and forget about it. PaidRightly literally gave me my weekends back.",
    rating: 5,
  },
  {
    name: "Marcus Johansson",
    role: "Full-Stack Developer",
    image: "/images/customer_marcus_johansson.png",
    content:
      "The dashboard alone is worth the price. I can see exactly how much I've earned, what's been set aside for taxes, and when my next payout is. No more surprises.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Marketing Consultant",
    image: "/images/customer_priya_patel.png",
    content:
      "I was terrified of getting my VAT wrong and getting fined. PaidRightly handles it all automatically. It's like having a personal accountant for a fraction of the cost.",
    rating: 5,
  },
];

const stats = [
  { value: "2,400+", label: "Freelancers trust us" },
  { value: "$12M+", label: "Payments processed" },
  { value: "99.9%", label: "Filing accuracy" },
  { value: "< 24h", label: "Average payout time" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Segregated Funds" },
  { icon: Lock, label: "256-bit SSL" },
  { icon: Award, label: "Licensed Tax Partner" },
];

export function SocialProof() {
  return (
    <Section id="testimonials" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Social_proof_background.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/75 dark:bg-[#0b1120]/80" />
      </div>

      <SectionHeader
        title="Trusted by freelancers everywhere"
        subtitle="Don't just take our word for it. Here's what real freelancers have to say."
      />

      {/* Stats */}
      <FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-600">
                {stat.value}
              </p>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Testimonials */}
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {testimonials.map((testimonial) => (
          <StaggerItem key={testimonial.name}>
            <Card className="h-full flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-[var(--foreground)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Trust badges */}
      <FadeIn>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-[var(--muted-foreground)]"
            >
              <badge.icon size={20} className="text-primary-600" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Partner logos placeholder */}
      <FadeIn delay={0.2}>
        <div className="mt-12 pt-12 border-t border-[var(--border)]">
          <p className="text-center text-xs text-[var(--muted-foreground)] mb-6 uppercase tracking-wider font-medium">
            Integrations & Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40">
            {["Stripe", "Xero", "QuickBooks", "Wise", "Revolut"].map(
              (partner) => (
                <span
                  key={partner}
                  className="text-lg md:text-xl font-bold text-[var(--foreground)]"
                >
                  {partner}
                </span>
              )
            )}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
