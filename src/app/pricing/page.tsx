import type { Metadata } from "next";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for freelancers. No hidden fees. Choose the plan that fits your freelance life.",
};

export default function PricingPage() {
  return <PricingContent />;
}
