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
              How to Set Your Freelance Rate (Without Underselling Yourself)
            </h1>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              Your rate isn&apos;t just your salary divided by hours. Here&apos;s how to factor in taxes, benefits, and downtime to find your real number.
            </p>

            <div className="flex items-center gap-4 mt-6 text-sm text-[var(--muted-foreground)]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                January 7, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                5 min read
              </span>
            </div>

            {/* Hero image */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/part_6.png"
                alt="How to Set Your Freelance Rate"
                width={900}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Article body */}
            <article className="mt-12 prose-custom">
              <p>
                You finally made the leap. You left the 9-to-5, landed your first client, and now they&apos;re asking the question every freelancer dreads:
              </p>
              <p>
                <em>&ldquo;What&apos;s your rate?&rdquo;</em>
              </p>
              <p>
                Most freelancers answer this by taking their old salary, dividing it by 2,080 hours, and calling it a day. That&apos;s a mistake — and it&apos;s one that can cost you thousands over the course of a year.
              </p>
              <p>
                Your freelance rate isn&apos;t your salary divided by hours. It&apos;s a completely different calculation, and getting it right is one of the most important business decisions you&apos;ll make.
              </p>
              <p>
                Here&apos;s how to find your real number.
              </p>

              <h2>Start With What You Actually Need to Earn</h2>
              <p>
                Before you think about hourly or daily rates, work backwards from what you need to take home after everything is accounted for. That means starting with your desired net income — the money that actually lands in your pocket after taxes, contributions, and business costs.
              </p>
              <p>
                This is the number most freelancers skip, and it&apos;s exactly where things go wrong.
              </p>

              <h2>Factor in Taxes (All of Them)</h2>
              <p>
                When you were employed, your employer handled income tax withholding, social security contributions, and in many European countries, VAT obligations. As a freelancer, all of that falls on you.
              </p>
              <p>
                Depending on where you&apos;re based, you could be looking at:
              </p>
              <ul>
                <li>Income tax ranging from 20% to 50%+</li>
                <li>Social contributions (pension, health insurance, disability) that can add another 15–25%</li>
                <li>VAT obligations if you cross the registration threshold</li>
              </ul>
              <p>
                That &euro;50/hour rate? After taxes and contributions, it might leave you with &euro;25–30 in actual take-home pay. If you priced yourself based on your old salary without accounting for this, you&apos;re effectively giving yourself a pay cut.
              </p>
              <p>
                This is exactly the kind of tax math that trips freelancers up — and why we built PaidRightly. Our platform automatically calculates your VAT, income tax, and social contributions based on your local tax rules, withholds the right amounts from every payment, and files returns on your behalf. You see your real net pay from day one, which makes setting rates based on actual take-home much easier.
              </p>

              <h2>Account for the Hours You Can&apos;t Bill</h2>
              <p>
                Here&apos;s a reality check: you will not bill 40 hours a week, 52 weeks a year.
              </p>
              <p>
                Between finding clients, writing proposals, handling admin, taking holidays, and dealing with the occasional sick day, most freelancers bill somewhere between 60–70% of their available working time.
              </p>
              <p>
                Let&apos;s do the math. If you work roughly 230 days a year (after holidays and weekends) and you can realistically bill 65% of those days, you&apos;re looking at about 150 billable days. That&apos;s a big difference from the 260 working days a salaried employee gets paid for.
              </p>
              <p>
                Your rate needs to cover the days you&apos;re working but not billing.
              </p>

              <h2>Don&apos;t Forget the Benefits You Lost</h2>
              <p>
                Employees get benefits they rarely think about: paid holidays, sick leave, pension contributions, health insurance, equipment, software licenses, office space, professional development budgets.
              </p>
              <p>
                As a freelancer, you&apos;re funding all of that yourself. Add up what those benefits were actually worth — for most people in Europe, it&apos;s an additional 20–35% on top of gross salary — and build that into your rate.
              </p>

              <h2>The Formula</h2>
              <p>
                Here&apos;s a straightforward way to calculate your minimum rate:
              </p>
              <ol>
                <li><strong>Start with your desired annual net income</strong> (what you want in your pocket).</li>
                <li><strong>Add your estimated annual tax burden</strong> (income tax + social contributions + VAT if applicable).</li>
                <li><strong>Add your annual business costs</strong> (software, insurance, equipment, coworking, accounting, etc.).</li>
                <li><strong>Add the cost of self-funded benefits</strong> (pension savings, health insurance, holiday fund, professional development).</li>
                <li><strong>Divide by your realistic billable days</strong> (typically 140–170 per year).</li>
              </ol>
              <p>
                That gives you your minimum daily rate. Anything below that, and you&apos;re losing money compared to employment.
              </p>
              <p>
                <strong>Example:</strong> Say you want to take home &euro;50,000/year. Your tax burden is roughly &euro;22,000, business costs run &euro;6,000, and self-funded benefits add another &euro;8,000. That&apos;s &euro;86,000 you need to earn. Divide that by 150 billable days, and your minimum daily rate is around &euro;575 — or roughly &euro;72/hour on an 8-hour day.
              </p>
              <p>
                Notice how far that is from simply dividing &euro;50,000 by 2,080 hours (which would give you just &euro;24/hour).
              </p>

              <h2>Price for Value, Not Just Time</h2>
              <p>
                Once you&apos;ve established your floor, remember that it&apos;s exactly that — a floor. Your rate should also reflect the value you bring.
              </p>
              <p>
                If you have specialist expertise, years of experience, or you&apos;re solving a high-stakes problem for your client, your rate should reflect that. A brand strategist who helps a company reposition for a new market is delivering far more value than a few hours of &ldquo;consulting time.&rdquo;
              </p>
              <p>
                Don&apos;t be afraid to charge above your minimum. The market will tell you if you&apos;ve gone too far.
              </p>

              <h2>Revisit Your Rate Regularly</h2>
              <p>
                Tax laws change. Your costs change. Your skills improve. Review your rate at least twice a year, and don&apos;t be shy about raising it for new clients. Existing clients should get reasonable notice, but a rate increase is a normal part of running a business — not something to apologize for.
              </p>

              <h2>Stop Guessing, Start Knowing</h2>
              <p>
                The biggest obstacle to setting the right rate is uncertainty — not knowing what you&apos;ll actually owe in taxes, not knowing what you&apos;ll take home, not knowing if you&apos;ve set aside enough for that VAT bill due next quarter.
              </p>
              <p>
                That uncertainty is what PaidRightly eliminates. When clients pay into your PaidRightly account, we automatically reconcile the payment, calculate exactly what&apos;s owed in VAT, income tax, and social contributions, withhold those amounts, and file your returns. You receive your net pay directly — no surprises, no scrambling at tax time.
              </p>
              <p>
                When you always know your real take-home number, setting the right rate stops being guesswork and starts being simple arithmetic.
              </p>
            </article>

            {/* CTA */}
            <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-center">
              <h3 className="text-2xl font-bold text-white">
                Know your real take-home from day one
              </h3>
              <p className="mt-3 text-primary-100 max-w-lg mx-auto">
                PaidRightly calculates your taxes in real time so you can set rates with confidence. Free to try.
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
