"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/animate";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does payment reconciliation work?",
    answer:
      "When your client pays into the PaidRightly account, we automatically match the payment to your invoice using unique references. You'll see the payment appear in your dashboard in real time, and we'll begin processing your taxes immediately.",
  },
  {
    question: "Is my money safe?",
    answer:
      "Absolutely. Your funds are held in segregated accounts, completely separate from our operating capital. This means your money is always protected, even in the unlikely event that something happens to us. We also use bank-grade encryption for all transactions.",
  },
  {
    question: "What taxes do you handle?",
    answer:
      "We handle VAT (charging, tracking, and quarterly filing), income tax (calculation and withholding), and social security contributions. We calculate everything based on your local tax rules and ensure all filings are submitted on time.",
  },
  {
    question: "How fast are payouts?",
    answer:
      "Starter plan members receive monthly payouts. Pro plan members get weekly payouts, and Team plan members can access same-day payouts. You can always see your upcoming payout date and amount in your dashboard.",
  },
  {
    question: "What countries do you support?",
    answer:
      "We're currently available for freelancers in select European markets during our early access phase. We're expanding rapidly — join the waitlist to be notified when we launch in your country.",
  },
  {
    question: "What does it cost?",
    answer:
      "We offer three plans: Starter at $29/month, Pro at $49/month, and Team at $99/month. Annual billing saves you 20%. There are no hidden fees — your plan price covers everything including tax filings.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, you'll get immediate access to the new features.",
  },
  {
    question: "Do I still need an accountant?",
    answer:
      "For most freelancers, PaidRightly replaces the need for a separate accountant when it comes to tax filings and compliance. However, if you have complex tax situations (multiple income sources, property, investments), you may still benefit from occasional professional advice.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" alternate>
      <SectionHeader
        title="Frequently asked questions"
        subtitle="Got questions? We've got answers. If you can't find what you're looking for, reach out to our support team."
      />

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <FadeIn key={index} delay={index * 0.05}>
            <div className="border-b border-[var(--border)]">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-[var(--foreground)] pr-4 group-hover:text-primary-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "text-[var(--muted-foreground)] shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "accordion-content",
                  openIndex === index
                    ? "max-h-96 opacity-100 pb-5"
                    : "max-h-0 opacity-0"
                )}
              >
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
