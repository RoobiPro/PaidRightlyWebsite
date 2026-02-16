import type { Metadata } from "next";
import { BlogContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, guides, and insights for freelancers on taxes, invoicing, and financial independence.",
};

export default function BlogPage() {
  return <BlogContent />;
}
