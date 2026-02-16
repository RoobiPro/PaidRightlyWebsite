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
            <Badge className="mb-4">Guides</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
              VAT for Freelancers: A No-Nonsense Explanation
            </h1>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              VAT doesn&apos;t have to be confusing. Here&apos;s a plain-English guide to how it works, when you need to register, and how to file.
            </p>

            <div className="flex items-center gap-4 mt-6 text-sm text-[var(--muted-foreground)]">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                January 20, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                6 min read
              </span>
            </div>

            {/* Hero image */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/blog_4.png"
                alt="VAT for Freelancers"
                width={900}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Article body */}
            <article className="mt-12 prose-custom">
              <p>
                If you&apos;re a freelancer anywhere in Europe, you&apos;ve almost certainly come across VAT — and just as certainly felt a wave of confusion wash over you. Value Added Tax sounds complicated, and the rules can feel like they were written to trip you up. But it doesn&apos;t have to be that way.
              </p>
              <p>
                At PaidRightly, we handle VAT for thousands of freelancers every day. In this guide, we&apos;re breaking it down into plain English: what VAT actually is, when you need to worry about it, and how filing works. No jargon, no legalese — just the stuff you need to know.
              </p>

              <h2>What Is VAT, Exactly?</h2>
              <p>
                VAT — Value Added Tax — is a consumption tax applied to most goods and services sold in Europe (and many other countries worldwide). Unlike income tax, which is based on what you earn, VAT is based on what you sell. It&apos;s charged at each stage of the supply chain, from manufacturer to end consumer.
              </p>
              <p>
                As a freelancer, here&apos;s what that means in practice: when you sell your services, you may need to add VAT on top of your fee. You collect that VAT from your client, and then pass it along to the tax authority. You&apos;re essentially acting as a tax collector on behalf of the government.
              </p>
              <p>
                The standard VAT rate varies by country — 20% in the UK, 21% in the Netherlands, 19% in Germany, and so on — though some services may qualify for reduced rates.
              </p>

              <h2>Do You Actually Need to Register for VAT?</h2>
              <p>
                Not every freelancer needs to charge VAT. Whether you need to register depends on two key factors: where you&apos;re based and how much you earn.
              </p>
              <p>
                Most European countries have a <strong>VAT registration threshold</strong> — a revenue limit below which you don&apos;t need to register. For example, in the UK the threshold is currently &pound;90,000, while in Germany it&apos;s &euro;22,000. If your annual revenue stays below your country&apos;s threshold, you can often operate without registering for VAT at all.
              </p>
              <p>
                However, there are situations where you might want to — or have to — register even if you&apos;re below the threshold:
              </p>
              <p>
                <strong>You must register if</strong> your turnover exceeds your country&apos;s VAT threshold, you receive services from businesses in other EU countries (in some cases), or your country has no threshold exemption for your type of activity.
              </p>
              <p>
                <strong>You might choose to register voluntarily if</strong> most of your clients are VAT-registered businesses (since they can reclaim the VAT anyway), you want to reclaim VAT on your own business expenses, or you want to appear more established and professional to potential clients.
              </p>
              <p>
                If you&apos;re unsure whether you need to register, a good rule of thumb is: track your revenue from the start, and register before you hit the threshold — not after.
              </p>

              <h2>How VAT Works in Practice</h2>
              <p>
                Let&apos;s walk through a simple example. Say you&apos;re a freelance designer in the Netherlands, and you charge a client &euro;5,000 for a project. The Dutch VAT rate is 21%.
              </p>
              <p>
                You invoice your client for &euro;5,000 + &euro;1,050 VAT = <strong>&euro;6,050 total</strong>. Your client pays &euro;6,050. You keep the &euro;5,000 as your fee. The &euro;1,050 in VAT gets reported and paid to the Dutch tax authority (Belastingdienst) when you file your VAT return.
              </p>
              <p>
                Now, here&apos;s where it gets slightly more interesting. If you bought &euro;500 worth of software subscriptions for your business that quarter, and you paid &euro;105 in VAT on those purchases, you can deduct that from what you owe. So instead of paying &euro;1,050 to the tax authority, you&apos;d pay &euro;1,050 &minus; &euro;105 = <strong>&euro;945</strong>. This is called <strong>input VAT deduction</strong>, and it&apos;s one of the main benefits of being VAT-registered.
              </p>

              <h2>Cross-Border Services and the Reverse Charge</h2>
              <p>
                If you work with clients in other EU countries — which many freelancers do — there&apos;s an important rule called the <strong>reverse charge mechanism</strong>.
              </p>
              <p>
                When you provide services to a VAT-registered business in another EU country, you typically don&apos;t charge VAT on your invoice. Instead, your client accounts for the VAT in their own country under the reverse charge. You simply note &ldquo;Reverse charge applies&rdquo; on your invoice along with both your VAT number and your client&apos;s.
              </p>
              <p>
                This keeps things simpler for cross-border trade, but it does mean you need to keep track of which clients are in which countries and whether they&apos;re VAT-registered. You&apos;ll also need to report these transactions on your VAT return, even though no VAT was charged.
              </p>
              <p>
                For clients outside the EU entirely, VAT generally doesn&apos;t apply — but you still need to report that revenue.
              </p>

              <h2>Filing Your VAT Return</h2>
              <p>
                In most European countries, VAT returns are filed quarterly, though some countries offer monthly or annual options depending on your revenue level.
              </p>
              <p>
                A VAT return is essentially a summary that tells the tax authority how much VAT you collected from clients (output VAT), how much VAT you paid on business expenses (input VAT), and the difference — which is either what you owe them or what they owe you.
              </p>
              <p>
                Filing deadlines vary by country, but they&apos;re typically one to two months after the end of the quarter. Miss the deadline, and you&apos;re looking at penalties and interest charges — which is why staying on top of your filing schedule is so important.
              </p>
              <p>
                The actual filing process usually happens through your country&apos;s tax authority portal. You&apos;ll need to log in, enter your figures, and submit. Some countries also require you to file an EC Sales List if you&apos;ve provided services to businesses in other EU member states.
              </p>

              <h2>Common VAT Mistakes Freelancers Make</h2>
              <p>
                Over the years, we&apos;ve seen the same mistakes come up again and again. Here are the ones to watch out for.
              </p>
              <p>
                <strong>Forgetting to register on time.</strong> If you cross the threshold and don&apos;t register, you could be liable for VAT on all sales made after the point you should have registered — plus penalties.
              </p>
              <p>
                <strong>Not charging VAT when required.</strong> Some freelancers assume that because their client is overseas, VAT doesn&apos;t apply. That&apos;s not always the case, especially for B2C (business-to-consumer) services within the EU.
              </p>
              <p>
                <strong>Mixing up inclusive and exclusive pricing.</strong> Be clear on your invoices whether your price includes VAT or not. Ambiguity leads to disputes and errors.
              </p>
              <p>
                <strong>Poor record keeping.</strong> You need to keep VAT invoices, receipts, and records for a minimum number of years (typically 7–10 depending on your country). Digital records are fine, but they need to be complete and accessible.
              </p>
              <p>
                <strong>Filing late.</strong> Even if you owe nothing, a late return can trigger automatic penalties in many jurisdictions.
              </p>

              <h2>How PaidRightly Takes the Pain Out of VAT</h2>
              <p>
                This is exactly why we built PaidRightly. We know that most freelancers didn&apos;t get into freelancing because they love tax admin. You got into it because you&apos;re great at what you do — whether that&apos;s design, development, consulting, writing, or anything else.
              </p>
              <p>
                Here&apos;s how we handle VAT so you don&apos;t have to:
              </p>
              <p>
                <strong>Automatic VAT calculation.</strong> When your client pays an invoice through PaidRightly, we automatically calculate the correct VAT based on your country, your client&apos;s country, and the type of service you provide.
              </p>
              <p>
                <strong>Quarterly filing, handled.</strong> We prepare and submit your VAT returns on time, every quarter. No missed deadlines, no penalties, no stress.
              </p>
              <p>
                <strong>Real-time dashboard.</strong> You can see exactly how much VAT has been collected, what&apos;s been set aside, and when your next filing is due — all in one place.
              </p>
              <p>
                <strong>Cross-border made simple.</strong> We automatically apply the reverse charge when appropriate and keep track of your EU sales for reporting purposes.
              </p>
              <p>
                <strong>Segregated funds.</strong> The VAT we collect on your behalf is held in a segregated account, separate from everything else. It&apos;s always there when it&apos;s time to file.
              </p>

              <h2>The Bottom Line</h2>
              <p>
                VAT doesn&apos;t have to be the headache that freelancers make it out to be. The core concept is simple: you collect tax on your sales, deduct tax on your expenses, and pay the difference to the government. The complexity comes from keeping track of everything, knowing the rules for different countries, and making sure you file on time.
              </p>
              <p>
                You can absolutely manage it yourself if you&apos;re organized and willing to put in the time. But if you&apos;d rather spend that time doing the work you love, that&apos;s exactly what PaidRightly is here for.
              </p>
            </article>

            {/* CTA */}
            <div className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 text-center">
              <h3 className="text-2xl font-bold text-white">
                Ready to stop worrying about VAT?
              </h3>
              <p className="mt-3 text-primary-100 max-w-lg mx-auto">
                Get started with PaidRightly — it&apos;s free to try, no credit card required.
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
