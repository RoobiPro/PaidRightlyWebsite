"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";

export function ArticleContent() {
  return (
    <div className="pt-24">
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] hover:text-primary-600 transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            {/* Header */}
            <Badge className="mb-4">Tips</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
              5 Tax Mistakes Freelancers Make (and How to Avoid Them)
            </h1>

            <div className="flex items-center gap-4 mt-6 text-sm text-[var(--muted-foreground)]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                February 5, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                5 min read
              </span>
            </div>

            {/* Hero image */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/blog_2.png"
                alt="5 Tax Mistakes Freelancers Make"
                width={900}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Article body */}
            <article className="mt-12 prose-custom">
              <p>
                Missing deadlines, underestimating taxes, forgetting deductions — these common mistakes cost freelancers thousands every year. The good news? They&apos;re all avoidable. At PaidRightly, we&apos;ve processed over $12 million in freelancer payments, and we&apos;ve seen these same errors come up again and again. Here are the five biggest tax mistakes freelancers make, and what you can do to stay ahead.
              </p>

              <h2>1. Not Setting Aside Money for Taxes</h2>
              <p>
                This is the number one mistake we see — and it&apos;s the one that hurts the most. When you&apos;re employed, your employer withholds taxes from every paycheck. As a freelancer, that responsibility falls on you. The problem? That invoice payment hits your account and it <em>feels</em> like it&apos;s all yours. It&apos;s not.
              </p>
              <p>
                Too many freelancers spend their full earnings and then face a massive, unexpected tax bill at the end of the year. Depending on your country and income bracket, you could owe 30–50% of your earnings in income tax, VAT, and social contributions combined.
              </p>
              <p>
                <strong>How to avoid it:</strong> The simplest approach is to automatically set aside a percentage of every payment you receive. Better yet, let a service like PaidRightly do it for you — we calculate your exact tax obligations in real time and withhold the right amount from every payment so you&apos;re never caught off guard.
              </p>

              <h2>2. Missing Filing Deadlines</h2>
              <p>
                Between quarterly VAT returns, annual income tax filings, and social security contributions, the freelance tax calendar is a minefield. Miss a deadline and you&apos;re looking at penalties, interest charges, and a whole lot of unnecessary stress.
              </p>
              <p>
                The challenge is that deadlines vary by country, by tax type, and sometimes even by region. It&apos;s easy to lose track — especially when you&apos;re focused on actually doing the work your clients are paying you for.
              </p>
              <p>
                <strong>How to avoid it:</strong> Keep a dedicated tax calendar with every relevant deadline marked. Set reminders at least two weeks in advance so you have time to prepare. Or, skip the calendar entirely and let PaidRightly handle your filings automatically. We submit your VAT returns every quarter and manage your annual filings, all on time, every time — with a 99.9% accuracy rate.
              </p>

              <h2>3. Forgetting Deductions You&apos;re Entitled To</h2>
              <p>
                Here&apos;s the flip side of owing taxes: you&apos;re probably paying more than you need to. Many freelancers leave money on the table by not claiming legitimate business deductions. Home office costs, software subscriptions, professional development courses, travel expenses, equipment — these can all reduce your taxable income significantly.
              </p>
              <p>
                The issue is that most freelancers either don&apos;t know what qualifies as a deduction, or they don&apos;t keep proper records to back up their claims. Both problems lead to the same result: paying more tax than necessary.
              </p>
              <p>
                <strong>How to avoid it:</strong> Start tracking every business expense from day one. Keep receipts (digital is fine) and categorize them clearly. If you&apos;re unsure whether something qualifies, err on the side of recording it — you can always decide later. PaidRightly Pro users get access to expense tracking and tax optimization tips that help identify deductions you might be missing.
              </p>

              <h2>4. Mixing Personal and Business Finances</h2>
              <p>
                Using one bank account for everything — freelance income, personal spending, groceries, rent — might seem simpler, but it creates a real headache at tax time. When your finances are tangled together, it&apos;s incredibly difficult to accurately calculate your business income, track expenses, and provide clean records if you&apos;re ever audited.
              </p>
              <p>
                Beyond the practical difficulties, it also makes it harder to understand how your freelance business is actually performing. Are you profitable? Are your expenses growing? You can&apos;t answer those questions when personal and business spending are mixed together.
              </p>
              <p>
                <strong>How to avoid it:</strong> Open a separate bank account for your freelance work. All client payments go in, all business expenses come out. It&apos;s a simple change that makes everything downstream — bookkeeping, tax filing, financial planning — dramatically easier. With PaidRightly, you get a dedicated payment account for your invoices, which naturally creates that separation from the start.
              </p>

              <h2>5. Underestimating VAT Obligations</h2>
              <p>
                VAT is one of the most misunderstood areas of freelance taxation. Many freelancers don&apos;t realize they need to register for VAT once they cross a certain revenue threshold. Others register but then struggle with the mechanics of charging the correct rate, tracking what they&apos;ve collected, and filing quarterly returns accurately.
              </p>
              <p>
                Getting VAT wrong can be expensive. Charge too little and you owe the difference out of pocket. Charge the wrong rate to cross-border clients and you could face compliance issues. File late and the penalties add up quickly.
              </p>
              <p>
                <strong>How to avoid it:</strong> Know your country&apos;s VAT registration threshold and monitor your revenue against it. Once registered, make sure you&apos;re charging the correct rate on every invoice and keeping meticulous records of VAT collected and paid. Or, let PaidRightly handle it end to end — we charge VAT on your behalf, track everything automatically, and file your returns quarterly without you lifting a finger.
              </p>

              <h2>The Bigger Picture</h2>
              <p>
                These five mistakes share a common root cause: freelancers are forced to be their own accountants, tax advisors, and compliance officers on top of doing the work they actually love. It&apos;s an unreasonable burden, and it&apos;s why we built PaidRightly.
              </p>
              <p>
                Our mission is simple — you invoice your clients and focus on your craft. We handle the tax calculations, the withholding, the filings, and the deadlines. No spreadsheets, no guesswork, no surprise bills.
              </p>
              <p>
                If any of these mistakes hit a little too close to home, it might be time to take the tax admin off your plate for good.
              </p>
            </article>

            {/* CTA */}
            <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-center">
              <h3 className="text-2xl font-bold text-white">
                Take the tax admin off your plate
              </h3>
              <p className="mt-3 text-primary-100 max-w-lg mx-auto">
                Get started with PaidRightly for free — no credit card required, setup in 5 minutes.
              </p>
              <div className="mt-6">
                <Button
                  size="lg"
                  className="bg-white! text-primary-700! hover:bg-primary-50! shadow-lg group"
                >
                  Get Started Free
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            </div>

            {/* Back to blog */}
            <div className="mt-12 pt-8 border-t border-[var(--border)]">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                <ArrowLeft size={14} />
                Back to all articles
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
