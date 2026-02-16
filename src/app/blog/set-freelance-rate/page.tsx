import type { Metadata } from "next";
import { ArticleContent } from "./article-content";

export const metadata: Metadata = {
  title: "How to Set Your Freelance Rate (Without Underselling Yourself)",
  description:
    "Your rate isn't just your salary divided by hours. Here's how to factor in taxes, benefits, and downtime to find your real number.",
};

export default function ArticlePage() {
  return <ArticleContent />;
}
