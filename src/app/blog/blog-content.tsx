"use client";

import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StaggerChildren, StaggerItem } from "@/components/ui/animate";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "The Complete Guide to Freelancer Taxes in 2026",
    excerpt:
      "Everything you need to know about income tax, VAT, and social contributions as a freelancer. We break it down so you don't have to.",
    category: "Guides",
    readTime: "8 min read",
    date: "Feb 12, 2026",
    image: "/images/blog_1.png",
    href: "/blog/freelancer-taxes-2026",
  },
  {
    title: "5 Tax Mistakes Freelancers Make (and How to Avoid Them)",
    excerpt:
      "Missing deadlines, underestimating taxes, forgetting deductions — these common mistakes cost freelancers thousands every year.",
    category: "Tips",
    readTime: "5 min read",
    date: "Feb 5, 2026",
    image: "/images/blog_2.png",
    href: "/blog/tax-mistakes-freelancers",
  },
  {
    title: "Why We Built PaidRightly",
    excerpt:
      "The story behind PaidRightly — from a missed VAT deadline to building the payroll service freelancers actually deserve.",
    category: "Company",
    readTime: "4 min read",
    date: "Jan 28, 2026",
    image: "/images/part_3.png",
    href: "/blog/why-we-built-paidrightly",
  },
  {
    title: "VAT for Freelancers: A No-Nonsense Explanation",
    excerpt:
      "VAT doesn't have to be confusing. Here's a plain-English guide to how it works, when you need to register, and how to file.",
    category: "Guides",
    readTime: "6 min read",
    date: "Jan 20, 2026",
    image: "/images/blog_4.png",
    href: "/blog/vat-for-freelancers",
  },
  {
    title: "Freelancer vs. Employee: The Real Cost Comparison",
    excerpt:
      "Going freelance? Here's what nobody tells you about the true cost of self-employment compared to a traditional salary.",
    category: "Insights",
    readTime: "7 min read",
    date: "Jan 14, 2026",
    image: "/images/part_5.png",
    href: "/blog/freelancer-vs-employee",
  },
  {
    title: "How to Set Your Freelance Rate (Without Underselling Yourself)",
    excerpt:
      "Your rate isn't just your salary divided by hours. Here's how to factor in taxes, benefits, and downtime to find your real number.",
    category: "Tips",
    readTime: "5 min read",
    date: "Jan 7, 2026",
    image: "/images/part_6.png",
  },
];

export function BlogContent() {
  return (
    <div className="pt-24">
      <Section>
        <SectionHeader
          title="The PaidRightly Blog"
          subtitle="Practical advice on taxes, invoicing, and thriving as a freelancer."
        />

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <StaggerItem key={post.title}>
              <Link href={"href" in post && post.href ? post.href : "#"} className="block group">
                <Card className="h-full flex flex-col">
                  <div className="w-full h-44 rounded-xl mb-4 overflow-hidden relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={900}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <Badge className="self-start mb-3">{post.category}</Badge>

                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border)]">
                    <div className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                      <span className="mx-1">&middot;</span>
                      <span>{post.date}</span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-primary-600 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>
    </div>
  );
}
