import type { Metadata } from "next";
import { PrivacyContent } from "./privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Paid Rightly LLC collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
