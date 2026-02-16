import type { Metadata } from "next";
import { ArticleContent } from "./article-content";

export const metadata: Metadata = {
  title: "Why We Built PaidRightly",
  description:
    "The story behind PaidRightly — from a missed VAT deadline to building the payroll service freelancers actually deserve.",
};

export default function ArticlePage() {
  return <ArticleContent />;
}
