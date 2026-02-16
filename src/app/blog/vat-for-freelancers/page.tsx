import type { Metadata } from "next";
import { ArticleContent } from "./article-content";

export const metadata: Metadata = {
  title: "VAT for Freelancers: A No-Nonsense Explanation",
  description:
    "VAT doesn't have to be confusing. Here's a plain-English guide to how it works, when you need to register, and how to file.",
};

export default function ArticlePage() {
  return <ArticleContent />;
}
