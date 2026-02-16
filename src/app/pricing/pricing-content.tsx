"use client";

import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/animate";
import { Check, X } from "lucide-react";

const comparisonFeatures = [
  { feature: "Automatic tax calculation", starter: true, pro: true, team: true },
  { feature: "VAT handling & filing", starter: true, pro: true, team: true },
  { feature: "Income tax withholding", starter: true, pro: true, team: true },
  { feature: "Dashboard access", starter: true, pro: true, team: true },
  { feature: "Email support", starter: true, pro: true, team: true },
  { feature: "Priority support", starter: false, pro: true, team: true },
  { feature: "Weekly payouts", starter: false, pro: true, team: true },
  { feature: "Same-day payouts", starter: false, pro: false, team: true },
  { feature: "Tax optimization tips", starter: false, pro: true, team: true },
  { feature: "Annual filing included", starter: false, pro: true, team: true },
  { feature: "Expense tracking", starter: false, pro: true, team: true },
  { feature: "Advanced analytics", starter: false, pro: true, team: true },
  { feature: "Multiple team members", starter: false, pro: false, team: true },
  { feature: "Consolidated reporting", starter: false, pro: false, team: true },
  { feature: "Dedicated account manager", starter: false, pro: false, team: true },
  { feature: "Custom integrations", starter: false, pro: false, team: true },
  { feature: "API access", starter: false, pro: false, team: true },
];

export function PricingContent() {
  return (
    <div className="pt-24">
      <Pricing />

      {/* Comparison table */}
      <Section>
        <FadeIn>
          <h2 className="text-3xl font-bold text-[var(--foreground)] text-center mb-12">
            Feature comparison
          </h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-4 pr-4 font-semibold text-[var(--foreground)]">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-[var(--foreground)]">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-primary-600">
                    Pro
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-[var(--foreground)]">
                    Team
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-[var(--border)] hover:bg-[var(--muted)] transition-colors"
                  >
                    <td className="py-3 pr-4 text-[var(--muted-foreground)]">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.starter ? (
                        <Check
                          size={16}
                          className="text-primary-600 mx-auto"
                        />
                      ) : (
                        <X
                          size={16}
                          className="text-[var(--muted-foreground)] opacity-30 mx-auto"
                        />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.pro ? (
                        <Check
                          size={16}
                          className="text-primary-600 mx-auto"
                        />
                      ) : (
                        <X
                          size={16}
                          className="text-[var(--muted-foreground)] opacity-30 mx-auto"
                        />
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.team ? (
                        <Check
                          size={16}
                          className="text-primary-600 mx-auto"
                        />
                      ) : (
                        <X
                          size={16}
                          className="text-[var(--muted-foreground)] opacity-30 mx-auto"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      <FAQ />
      <CTA />
    </div>
  );
}
