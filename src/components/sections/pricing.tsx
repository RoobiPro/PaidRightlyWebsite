"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/animate";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "For freelancers just getting started",
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      "Automatic tax calculation",
      "VAT handling & filing",
      "Income tax withholding",
      "Basic dashboard",
      "Email support",
      "Monthly payouts",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    description: "For established freelancers who want more",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Everything in Starter",
      "Priority weekly payouts",
      "Tax optimization tips",
      "Annual filing included",
      "Advanced analytics",
      "Priority support",
      "Expense tracking",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    description: "For agencies and freelancer collectives",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Consolidated reporting",
      "Dedicated account manager",
      "Custom integrations",
      "Same-day payouts",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Section id="pricing" alternate>
      <SectionHeader
        title="Simple, transparent pricing"
        subtitle="No hidden fees, no surprises. Pick the plan that fits your freelance life."
      />

      {/* Toggle */}
      <FadeIn>
        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              !isYearly
                ? "text-[var(--foreground)]"
                : "text-[var(--muted-foreground)]"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={cn(
              "relative w-14 h-7 rounded-full transition-colors cursor-pointer",
              isYearly ? "bg-primary-600" : "bg-[var(--border)]"
            )}
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
          >
            <span
              className={cn(
                "absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-transform",
                isYearly && "translate-x-7"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium transition-colors",
              isYearly
                ? "text-[var(--foreground)]"
                : "text-[var(--muted-foreground)]"
            )}
          >
            Yearly
            <span className="ml-1.5 text-xs text-primary-600 font-semibold">
              Save 20%
            </span>
          </span>
        </div>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <StaggerItem key={plan.name}>
            <Card
              className={cn(
                "relative h-full flex flex-col",
                plan.popular &&
                  "border-primary-500 shadow-xl shadow-primary-500/10 scale-105"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[var(--foreground)]">
                  {plan.name}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[var(--foreground)]">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-[var(--muted-foreground)]">/month</span>
                </div>
                {isYearly && (
                  <p className="text-xs text-[var(--muted-foreground)] mt-1">
                    Billed annually (${plan.yearlyPrice * 12}/year)
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      size={16}
                      className="text-primary-600 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-[var(--muted-foreground)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "primary" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
