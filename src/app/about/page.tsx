import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about PaidRightly's mission to eliminate tax admin for freelancers. Meet our team and discover why we built this.",
};

export default function AboutPage() {
  return <AboutContent />;
}
