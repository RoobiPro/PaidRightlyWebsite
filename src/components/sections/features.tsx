"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { StaggerChildren, StaggerItem } from "@/components/ui/animate";
import {
  Calculator,
  Receipt,
  FileCheck,
  BarChart3,
  Tag,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Automatic Tax Calculation",
    description:
      "We calculate your income tax in real time based on your earnings, deductions, and local tax brackets. No spreadsheets, no guesswork.",
  },
  {
    icon: Receipt,
    title: "VAT Handling & Filing",
    description:
      "VAT registered? We charge it, track it, and file your VAT returns on time. Every single quarter, without you lifting a finger.",
  },
  {
    icon: FileCheck,
    title: "Income Tax Withholding",
    description:
      "We set aside the right amount from every payment so you're never hit with a surprise tax bill. Sleep easy in January.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description:
      "See your earnings, taxes withheld, upcoming payouts, and filing status in one clean dashboard. Transparency you can trust.",
  },
  {
    icon: Tag,
    title: "Transparent Fee Structure",
    description:
      "Simple, predictable pricing with no hidden fees. You always know exactly what you're paying and what you're getting.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Got a question about your taxes? Your payout? We're here. Real humans who understand freelancer finances.",
  },
  {
    icon: ShieldCheck,
    title: "Segregated Funds",
    description:
      "Your money is kept in segregated accounts, completely separate from our operating funds. It's your money — always protected.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <SectionHeader
        title="Everything you need, nothing you don't"
        subtitle="Taxes are boring. We love boring. Here's what we handle so you don't have to."
      />

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <Card className="h-full">
              <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center mb-4">
                <feature.icon
                  size={24}
                  className="text-primary-600 dark:text-primary-400"
                />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
