"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/animate";
import { ShieldCheck, Lock, Award } from "lucide-react";

const stats = [
  { value: "2,400+", label: "Freelancers trust us" },
  { value: "$12M+", label: "Payments processed" },
  { value: "99.9%", label: "Filing accuracy" },
  { value: "< 24h", label: "Average payout time" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Segregated Funds" },
  { icon: Lock, label: "256-bit SSL" },
  { icon: Award, label: "Licensed Tax Partner" },
];

export function SocialProof() {
  useEffect(() => {
    const syncScript = document.createElement("script");
    syncScript.textContent = `(function() {
  function notifyWidget(isDark) {
    var iframe = document.querySelector('iframe[title="VerifiedReviews Widget"]');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        { type: 'vr-theme-toggle', theme: isDark ? 'dark' : 'light' },
        '*'
      );
    }
  }
  var observer = new MutationObserver(function() {
    var html = document.documentElement;
    var isDark = html.classList.contains('dark') ||
                 html.getAttribute('data-theme') === 'dark' ||
                 html.getAttribute('data-color-scheme') === 'dark';
    notifyWidget(isDark);
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class', 'data-theme', 'data-color-scheme']
  });
  window.addEventListener('load', function() {
    var html = document.documentElement;
    var isDark = html.classList.contains('dark') ||
                 html.getAttribute('data-theme') === 'dark' ||
                 html.getAttribute('data-color-scheme') === 'dark';
    notifyWidget(isDark);
  });
})();`;
    document.body.appendChild(syncScript);

    const widgetScript = document.createElement("script");
    widgetScript.src = "https://reviewplatform-production.up.railway.app/widget.js";
    widgetScript.async = true;
    document.body.appendChild(widgetScript);

    return () => {
      document.body.removeChild(syncScript);
      document.body.removeChild(widgetScript);
    };
  }, []);

  return (
    <Section id="testimonials" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Social_proof_background.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/75 dark:bg-[#0b1120]/80" />
      </div>

      <SectionHeader
        title="Trusted by freelancers everywhere"
        subtitle="Don't just take our word for it. Here's what real freelancers have to say."
      />

      {/* Stats */}
      <FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-600">
                {stat.value}
              </p>
              <p className="text-sm text-[var(--muted-foreground)] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Verified Reviews Widget */}
      <FadeIn>
        <div className="mb-16">
          <div
            id="verifiedreviews-widget"
            data-api-key="vr_ilXiFSLAPjjaTqJWp8ZgbTfUOSGR2bav"
          />
        </div>
      </FadeIn>

      {/* Trust badges */}
      <FadeIn>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-[var(--muted-foreground)]"
            >
              <badge.icon size={20} className="text-primary-600" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Partner logos placeholder */}
      <FadeIn delay={0.2}>
        <div className="mt-12 pt-12 border-t border-[var(--border)]">
          <p className="text-center text-xs text-[var(--muted-foreground)] mb-6 uppercase tracking-wider font-medium">
            Integrations & Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40">
            {["Stripe", "Xero", "QuickBooks", "Wise", "Revolut"].map(
              (partner) => (
                <span
                  key={partner}
                  className="text-lg md:text-xl font-bold text-[var(--foreground)]"
                >
                  {partner}
                </span>
              )
            )}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
