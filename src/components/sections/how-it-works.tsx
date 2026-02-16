"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { StaggerChildren, StaggerItem } from "@/components/ui/animate";
import { UserPlus, FileText, CreditCard, Wallet } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Sign up & get onboarded",
    description:
      "Create your account in minutes. We'll verify your identity and set you up with a dedicated payment account.",
  },
  {
    step: 2,
    icon: FileText,
    title: "Add our bank details to your invoices",
    description:
      "Simply use the PaidRightly bank account on your invoices. Your clients pay into this account as usual.",
  },
  {
    step: 3,
    icon: CreditCard,
    title: "Your client pays the invoice",
    description:
      "When your client pays, we automatically reconcile the payment and start processing your taxes.",
  },
  {
    step: 4,
    icon: Wallet,
    title: "We handle taxes, you get paid",
    description:
      "We calculate VAT, income tax, and social contributions. Then we pay you the net amount directly.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" alternate>
      <SectionHeader
        title="How it works"
        subtitle="Four simple steps to never think about tax admin again."
      />

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <StaggerItem key={step.step}>
            <div className="relative group">
              {/* Connector line */}
              {step.step < 4 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-primary-300 to-primary-100 dark:from-primary-700 dark:to-primary-900" />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors">
                    <step.icon
                      size={32}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  );
}
