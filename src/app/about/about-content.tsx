"use client";

import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/ui/animate";
import { Target, Heart, Zap, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Simplicity First",
    description:
      "Freelancing is hard enough. Your financial admin shouldn't be. We obsess over making complex things simple.",
  },
  {
    icon: Heart,
    title: "Built for Freelancers",
    description:
      "We're not a generic accounting tool. Every feature is designed specifically for the freelancer workflow.",
  },
  {
    icon: Zap,
    title: "Automation Over Effort",
    description:
      "If a machine can do it, you shouldn't have to. We automate every tax calculation and filing we can.",
  },
  {
    icon: Users,
    title: "Transparency Always",
    description:
      "No hidden fees, no confusing jargon. You can see exactly what's happening with your money at all times.",
  },
];

const team = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-founder",
    bio: "Former freelance developer turned fintech founder. Spent too many weekends doing tax admin.",
    image: "/images/alex_rivera.png",
  },
  {
    name: "Emma Lindström",
    role: "CTO & Co-founder",
    bio: "Ex-Wise engineer. Believes every financial process can be automated if you're stubborn enough.",
    image: "/images/emma_lindstroem.png",
  },
  {
    name: "James Okafor",
    role: "Head of Compliance",
    bio: "15 years in tax law. Now uses that knowledge to make sure freelancers never have to learn it.",
    image: "/images/james_okafor.png",
  },
  {
    name: "Maria Santos",
    role: "Head of Product",
    bio: "Product designer who has freelanced in 4 countries. Knows the pain firsthand.",
    image: "/images/maria_santos.png",
  },
];

export function AboutContent() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <Section>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)]">
              We believe freelancers deserve{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                better
              </span>
            </h1>
            <p className="mt-6 text-lg text-[var(--muted-foreground)] leading-relaxed">
              PaidRightly was born from a simple frustration: why do freelancers
              have to become amateur accountants just to do the work they love?
              We started building PaidRightly to fix that.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-[var(--border)]">
            <Image
              src="/images/About_page_hero.png"
              alt="The PaidRightly team building a better future for freelancers"
              width={2100}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </FadeIn>
      </Section>

      {/* Our story */}
      <Section alternate>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">
              Our story
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
              <p>
                It started with a missed VAT deadline. Our co-founder Alex, a
                freelance developer at the time, got a penalty notice for filing
                late. Not because he didn't care — he just forgot. He was busy
                shipping code for his clients.
              </p>
              <p>
                That's when it hit him: there are millions of freelancers out
                there who are brilliant at what they do, but who dread the
                financial admin that comes with independence. The quarterly
                filings. The tax calculations. The bookkeeping. The constant
                nagging feeling that you're doing it wrong.
              </p>
              <p>
                So Alex teamed up with Emma, a fintech engineer from Wise, and
                they set out to build the service they wished existed: one where
                freelancers can just invoice their clients, and everything else
                is handled automatically.
              </p>
              <p>
                That's PaidRightly. Payroll for freelancers. Simple, automatic,
                and stress-free.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          title="What we stand for"
          subtitle="These aren't corporate values on a poster. They're how we actually make decisions."
        />
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <Card className="h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center mb-4">
                  <value.icon
                    size={24}
                    className="text-primary-600 dark:text-primary-400"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Team */}
      <Section alternate>
        <SectionHeader
          title="Meet the team"
          subtitle="A small team on a big mission — making tax admin disappear for freelancers."
        />
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <Card className="text-center h-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-[var(--foreground)]">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-600 mb-3">{member.role}</p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {member.bio}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>
    </div>
  );
}
