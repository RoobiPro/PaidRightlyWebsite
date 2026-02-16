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
            <Badge className="mb-4">Insights</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
              Freelancer vs. Employee: The Real Cost Comparison
            </h1>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              Going freelance? Here&apos;s what nobody tells you about the true cost of self-employment compared to a traditional salary.
            </p>

            <div className="flex items-center gap-4 mt-6 text-sm text-[var(--muted-foreground)]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                January 14, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                7 min read
              </span>
            </div>

            {/* Hero image */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/part_5.png"
                alt="Freelancer vs. Employee Cost Comparison"
                width={900}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Article body */}
            <article className="mt-12 prose-custom">
              <p>
                Going freelance is one of the most exciting career moves you can make. The freedom to choose your clients, set your own hours, and work from anywhere in the world — it&apos;s hard to beat. But before you hand in your notice, there&apos;s a conversation most people skip: the real cost of self-employment compared to a traditional salary.
              </p>
              <p>
                Because here&apos;s the thing — a &euro;80,000 salary and &euro;80,000 in freelance revenue are not the same number. Not even close.
              </p>

              <h2>The Salary You See vs. The Salary You Don&apos;t</h2>
              <p>
                When you&apos;re employed, your payslip tells one story, but your employer is spending a lot more than that. On top of your gross salary, companies typically pay employer-side social security contributions, pension contributions, insurance premiums, paid holiday cover, sick pay, and more. Depending on the country, these hidden costs can add 20–40% on top of your gross salary.
              </p>
              <p>
                So that &euro;80,000 salary? Your employer might actually be spending &euro;100,000–&euro;112,000 to keep you. That&apos;s your true &ldquo;total cost of employment&rdquo; — and it&apos;s the number you should be benchmarking against when you set your freelance rates.
              </p>

              <h2>What Freelancers Actually Take Home</h2>
              <p>
                Now flip it around. As a freelancer billing &euro;80,000 per year, you might assume you&apos;re earning roughly the same as your employed peers. But here&apos;s where reality bites.
              </p>
              <p>
                Out of that &euro;80,000, you&apos;re now responsible for income tax, VAT (if registered), social security or national insurance contributions, pension savings (if you want to retire someday), health insurance (in countries where employers typically cover this), professional indemnity insurance, accounting and tax filing fees, software subscriptions and tools, and your own sick days and holidays — unpaid, of course.
              </p>
              <p>
                Once you subtract all of that, your actual take-home might land somewhere between &euro;42,000 and &euro;55,000, depending on your country and tax bracket. That&apos;s a significant gap from what you imagined.
              </p>

              <h2>The Hidden Costs Nobody Warns You About</h2>
              <p>
                Beyond taxes and insurance, freelancing comes with a set of costs that don&apos;t show up on any invoice.
              </p>
              <p>
                <strong>Time spent on admin.</strong> Every hour you spend chasing invoices, reconciling payments, filing VAT returns, or calculating quarterly tax estimates is an hour you&apos;re not billing a client. For most freelancers, this adds up to 5–10 hours per month — and at your hourly rate, that&apos;s real money left on the table.
              </p>
              <p>
                <strong>Unpaid leave.</strong> Employees get paid holidays, sick days, and sometimes even parental leave. Freelancers get none of that by default. If you want four weeks off per year, you need to earn your entire annual income in roughly 48 working weeks, not 52. That means your effective hourly rate needs to be about 8% higher just to break even.
              </p>
              <p>
                <strong>Irregular income.</strong> A salary hits your bank account on the same date every month. Freelance income is unpredictable — clients pay late, projects get delayed, and some months are just quieter than others. This volatility has a real psychological cost, and it often pushes freelancers to undercharge out of fear of losing work.
              </p>
              <p>
                <strong>The tax surprise.</strong> Perhaps the most painful hidden cost is the end-of-year tax bill. Many new freelancers don&apos;t set aside enough throughout the year and get hit with a lump sum they weren&apos;t expecting. This can be thousands of euros and creates a cycle of financial stress that&apos;s entirely avoidable.
              </p>

              <h2>So What Should You Actually Charge?</h2>
              <p>
                Here&apos;s a simple framework. Take the total cost of employment for the equivalent salaried role (salary plus employer costs plus benefits), add a premium of 15–25% to account for the risk, unpaid leave, and admin overhead that comes with freelancing, and then divide by your realistic number of billable hours per year.
              </p>
              <p>
                For most freelancers, that means around 1,000–1,200 billable hours per year (not 2,080 — you&apos;re not billing 40 hours a week, 52 weeks a year).
              </p>
              <p>
                <strong>Example:</strong> If the total cost of an equivalent employee is &euro;100,000, and you add a 20% freelance premium, you need to earn &euro;120,000 per year. At 1,100 billable hours, that&apos;s roughly &euro;109 per hour — or about &euro;870 per day.
              </p>
              <p>
                That might feel high, but remember: you&apos;re not being greedy. You&apos;re accounting for the full picture that most freelancers ignore.
              </p>

              <h2>The Comparison at a Glance</h2>
              <p>
                Let&apos;s put a mid-level professional side by side across both models, assuming a European market:
              </p>
              <p>
                <strong>Employed (&euro;80,000 gross salary)</strong><br />
                Total cost to employer: ~&euro;104,000. Income tax and social contributions are handled automatically. Pension, health insurance, and paid leave are included. The employee&apos;s estimated take-home is roughly &euro;52,000–&euro;58,000 depending on the jurisdiction, with zero admin burden.
              </p>
              <p>
                <strong>Freelance (&euro;80,000 revenue)</strong><br />
                No employer contributions on top — &euro;80,000 is the total. Income tax, VAT, social contributions, pension, insurance, accounting, tools, and unpaid leave all come out of that. Estimated take-home: roughly &euro;42,000–&euro;50,000, plus 5–10 hours of admin per month.
              </p>
              <p>
                The freelancer earning the same gross number takes home less, works more on non-billable tasks, and carries more financial risk. To match the employee&apos;s total compensation, the freelancer would need to bill closer to &euro;110,000–&euro;120,000 per year.
              </p>

              <h2>How to Close the Gap</h2>
              <p>
                The good news? Freelancing can absolutely be more lucrative than employment — you just need to be intentional about it. Here are three things that make the biggest difference:
              </p>
              <p>
                <strong>Price correctly from day one.</strong> Use the framework above. Don&apos;t anchor your rates to your old salary — anchor them to the total cost of replacing you, plus the freelance premium.
              </p>
              <p>
                <strong>Minimise admin time.</strong> Every hour you spend on tax paperwork is an hour you could be billing. The more you can automate or outsource your financial admin, the more you protect your earning potential.
              </p>
              <p>
                <strong>Eliminate the tax surprise.</strong> Set aside money for taxes from every single payment, not at the end of the quarter. This is the single most important financial habit for any freelancer.
              </p>

              <h2>This Is Exactly Why We Built PaidRightly</h2>
              <p>
                We started PaidRightly because we saw too many talented freelancers losing money — not because they weren&apos;t earning enough, but because the financial admin was eating into their time, their income, and their peace of mind.
              </p>
              <p>
                PaidRightly calculates your taxes in real time, withholds the right amount from every payment, files your VAT returns automatically, and pays you the net amount directly. No spreadsheets, no tax surprises, no weekends lost to paperwork.
              </p>
              <p>
                You focus on the work. We handle the rest.
              </p>
            </article>

            {/* CTA */}
            <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-center">
              <h3 className="text-2xl font-bold text-white">
                Stop losing money to admin
              </h3>
              <p className="mt-3 text-primary-100 max-w-lg mx-auto">
                Get started with PaidRightly for free — no spreadsheets, no tax surprises, no weekends lost to paperwork.
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
