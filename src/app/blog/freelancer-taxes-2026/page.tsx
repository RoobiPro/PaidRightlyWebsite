import type { Metadata } from "next";
import { ArticleContent } from "./article-content";

export const metadata: Metadata = {
  title: "The Complete Guide to Freelancer Taxes in 2026",
  description:
    "Everything you need to know about income tax, VAT, and social contributions as a freelancer. We break it down so you don't have to.",
};

export default function ArticlePage() {
  return <ArticleContent />;
}
