"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./theme-provider";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

const footerLinks = {
  Product: [
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Careers" },
  ],
  Legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ],
};

const socialLinks = [
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Instagram, label: "Instagram" },
];

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-[var(--muted)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="PaidRightly"
                width={36}
                height={36}
                className="w-9 h-9"
              />
              <Image
                src={theme === "dark" ? "/images/font_white.png" : "/images/font_blue.png"}
                alt="PaidRightly"
                width={140}
                height={28}
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-[var(--muted-foreground)] text-sm mb-6 max-w-xs">
              Payroll for freelancers. Invoice your clients, get paid, and let us
              handle all the tax admin.
            </p>

            {/* Waitlist */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-[var(--foreground)] mb-2">
                Stay in the loop
              </p>
              <WaitlistForm source="footer" buttonText="Subscribe" />
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--background)] transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm text-[var(--foreground)] mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            &copy; {new Date().getFullYear()} PaidRightly. All rights reserved.
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">
            Made with care for freelancers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
