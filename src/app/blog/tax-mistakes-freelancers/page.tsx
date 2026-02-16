import type { Metadata } from "next";
import { ArticleContent } from "./article-content";

export const metadata: Metadata = {
  title: "5 Tax Mistakes Freelancers Make (and How to Avoid Them)",
  description:
    "Missing deadlines, underestimating taxes, forgetting deductions — these common mistakes cost freelancers thousands every year.",
};

export default function ArticlePage() {
  return <ArticleContent />;
}
