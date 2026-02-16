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
            <Badge className="mb-4">Company</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
              Why We Built PaidRightly
            </h1>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              The story behind PaidRightly — from a missed VAT deadline to building the payroll service freelancers actually deserve.
            </p>

            <div className="flex items-center gap-4 mt-6 text-sm text-[var(--muted-foreground)]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                January 28, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                4 min read
              </span>
            </div>

            {/* Hero image */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/part_3.png"
                alt="Why We Built PaidRightly"
                width={900}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Article body */}
            <article className="mt-12 prose-custom">
              <p>
                It started with a letter. A &euro;2,400 fine from the tax office for a missed VAT deadline — one that our co-founder didn&apos;t even know existed.
              </p>
              <p>
                At the time, she was six months into freelancing as a UX designer, juggling three client projects, chasing late invoices, and trying to make sense of a tax system that seemed designed to punish anyone who dared to work for themselves. She&apos;d done everything right — delivered great work, sent invoices on time, saved money for taxes. But nobody told her that VAT filings were due quarterly, not annually. And just like that, months of hard-earned income vanished into a penalty she could have easily avoided.
              </p>
              <p>
                That moment was the seed of PaidRightly.
              </p>

              <h2>Freelancers Deserve Better</h2>
              <p>
                The freelance economy is booming. Across Europe, millions of people are choosing independence — building careers on their own terms, working with clients they believe in, and creating lives with flexibility and purpose. It&apos;s one of the most exciting shifts in the modern workforce.
              </p>
              <p>
                But here&apos;s the uncomfortable truth: the financial infrastructure hasn&apos;t kept up. While full-time employees have payroll departments that handle tax withholding, pension contributions, and compliance automatically, freelancers are left to figure it all out on their own. They&apos;re expected to be their own accountant, their own tax advisor, and their own compliance officer — on top of actually doing the work they&apos;re paid for.
              </p>
              <p>
                We&apos;ve talked to hundreds of freelancers, and the story is always the same. They love the freedom. They hate the admin. They dread tax season. And too many of them have been burned by surprise tax bills, missed deadlines, or costly mistakes that could have been prevented with the right system in place.
              </p>

              <h2>The Problem Is Structural, Not Personal</h2>
              <p>
                It&apos;s tempting to say freelancers just need to be more organized. Get a better spreadsheet. Hire an accountant. Set calendar reminders. But the reality is that the problem isn&apos;t a lack of discipline — it&apos;s a lack of infrastructure.
              </p>
              <p>
                When you&apos;re employed, your company&apos;s payroll system automatically calculates your taxes, withholds the right amount from every paycheck, and files everything on your behalf. You never think about it. It just works.
              </p>
              <p>
                Freelancers get none of that. Instead, they get a patchwork of invoicing tools, accounting software, tax calculators, and government portals — none of which talk to each other, and all of which require manual effort to keep in sync. It&apos;s not just inconvenient. It&apos;s a system that actively sets people up to fail.
              </p>
              <p>
                We asked ourselves a simple question: <em>What if freelancers had payroll too?</em>
              </p>

              <h2>Building the Service We Wished Existed</h2>
              <p>
                That question became our mission. We set out to build a service that would give every freelancer the same financial peace of mind that salaried employees take for granted — without the complexity, without the jargon, and without the fear.
              </p>
              <p>
                The concept is straightforward. You sign up, get a dedicated payment account, and add those bank details to your invoices. When your client pays, we take it from there. We reconcile the payment, calculate your VAT, income tax, and social contributions in real time, set aside exactly what&apos;s owed, file your returns on schedule, and pay you the net amount directly.
              </p>
              <p>
                No spreadsheets. No tax software. No frantic weekend sessions before a filing deadline. You invoice your clients and get paid. We handle everything in between.
              </p>
              <p>
                It sounds simple, and that&apos;s the point. The complexity happens behind the scenes — in the tax engines we&apos;ve built, the compliance frameworks we&apos;ve mapped across jurisdictions, and the reconciliation systems that match every payment to every invoice automatically. We&apos;ve done the hard work so you never have to.
              </p>

              <h2>What Drives Us</h2>
              <p>
                We&apos;re not building PaidRightly because we think taxes are exciting (although, admittedly, some of us do find them oddly satisfying). We&apos;re building it because we believe freelancers are the backbone of the modern economy, and they deserve financial tools that actually work for them.
              </p>
              <p>
                Every freelancer who joins PaidRightly is someone who gets their weekends back. Someone who sleeps better in January. Someone who can say yes to a new project without worrying about the tax implications. That&apos;s what keeps us going.
              </p>
              <p>
                We&apos;re currently in early access, available in select European markets, and growing fast. Every week, we onboard more freelancers, process more payments, and file more returns — with a 99.9% accuracy rate that we&apos;re fiercely proud of.
              </p>

              <h2>This Is Just the Beginning</h2>
              <p>
                The missed VAT deadline that started it all? It cost &euro;2,400 and a lot of stress. But it also sparked something much bigger — a conviction that freelancers shouldn&apos;t have to navigate the tax system alone, and a team determined to make that a reality.
              </p>
              <p>
                We&apos;re building the payroll service that freelancers actually deserve. And we&apos;re just getting started.
              </p>
              <p>
                If you&apos;re tired of worrying about taxes, we&apos;d love to have you along for the ride.
              </p>
            </article>

            {/* CTA */}
            <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-center">
              <h3 className="text-2xl font-bold text-white">
                Invoice. Get paid. We handle the rest.
              </h3>
              <p className="mt-3 text-primary-100 max-w-lg mx-auto">
                Get started for free — it takes five minutes, and your next tax deadline is already handled.
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
