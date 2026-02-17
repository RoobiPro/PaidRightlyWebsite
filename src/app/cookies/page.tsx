import type { Metadata } from "next";
import { CookiesContent } from "./cookies-content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn about how Paid Rightly LLC uses cookies and similar technologies on our website.",
};

export default function CookiesPage() {
  return <CookiesContent />;
}
