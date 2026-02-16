import type { Metadata } from "next";
import { ArticleContent } from "./article-content";

export const metadata: Metadata = {
  title: "Freelancer vs. Employee: The Real Cost Comparison",
  description:
    "Going freelance? Here's what nobody tells you about the true cost of self-employment compared to a traditional salary.",
};

export default function ArticlePage() {
  return <ArticleContent />;
}
