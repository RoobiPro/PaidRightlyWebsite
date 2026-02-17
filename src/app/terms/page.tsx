import type { Metadata } from "next";
import { TermsContent } from "./terms-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of the Paid Rightly website and services.",
};

export default function TermsPage() {
  return <TermsContent />;
}
