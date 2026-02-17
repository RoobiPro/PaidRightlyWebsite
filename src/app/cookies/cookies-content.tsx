"use client";

import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/animate";

export function CookiesContent() {
  return (
    <div className="pt-24">
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              Cookie Policy
            </h1>
            <p className="text-sm text-[var(--muted-foreground)] mb-12">
              Last updated: February 15, 2026
            </p>

            <div className="prose-legal space-y-8 text-[var(--muted-foreground)] leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  1. What Are Cookies
                </h2>
                <p>
                  Cookies are small text files that are stored on your device
                  (computer, tablet, or mobile) when you visit a website. They
                  are widely used to make websites work more efficiently and to
                  provide information to site owners. Cookies help us recognize
                  your device and remember certain information about your visit.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  2. How We Use Cookies
                </h2>
                <p>
                  Paid Rightly LLC (&quot;Paid Rightly,&quot; &quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;) uses cookies and similar
                  technologies on paidrightly.com for the following purposes:
                </p>

                <h3 className="text-base font-semibold text-[var(--foreground)] mt-4 mb-2">
                  2.1 Essential Cookies
                </h3>
                <p>
                  These cookies are strictly necessary for the Site to function
                  properly. They cannot be disabled.
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-sm border border-[var(--border)] rounded-lg">
                    <thead>
                      <tr className="bg-[var(--muted)]">
                        <th className="text-left px-4 py-2 text-[var(--foreground)] font-medium border-b border-[var(--border)]">
                          Cookie
                        </th>
                        <th className="text-left px-4 py-2 text-[var(--foreground)] font-medium border-b border-[var(--border)]">
                          Purpose
                        </th>
                        <th className="text-left px-4 py-2 text-[var(--foreground)] font-medium border-b border-[var(--border)]">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-[var(--border)] font-mono text-xs">
                          cf_clearance
                        </td>
                        <td className="px-4 py-2 border-b border-[var(--border)]">
                          Cloudflare Turnstile bot verification
                        </td>
                        <td className="px-4 py-2 border-b border-[var(--border)]">
                          30 minutes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-[var(--border)] font-mono text-xs">
                          __next
                        </td>
                        <td className="px-4 py-2 border-b border-[var(--border)]">
                          Next.js framework functionality
                        </td>
                        <td className="px-4 py-2 border-b border-[var(--border)]">
                          Session
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-base font-semibold text-[var(--foreground)] mt-4 mb-2">
                  2.2 Functional Cookies
                </h3>
                <p>
                  These cookies remember your preferences and choices to provide
                  a better experience.
                </p>
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-sm border border-[var(--border)] rounded-lg">
                    <thead>
                      <tr className="bg-[var(--muted)]">
                        <th className="text-left px-4 py-2 text-[var(--foreground)] font-medium border-b border-[var(--border)]">
                          Cookie
                        </th>
                        <th className="text-left px-4 py-2 text-[var(--foreground)] font-medium border-b border-[var(--border)]">
                          Purpose
                        </th>
                        <th className="text-left px-4 py-2 text-[var(--foreground)] font-medium border-b border-[var(--border)]">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-[var(--border)] font-mono text-xs">
                          theme
                        </td>
                        <td className="px-4 py-2 border-b border-[var(--border)]">
                          Stores your light/dark mode preference
                        </td>
                        <td className="px-4 py-2 border-b border-[var(--border)]">
                          1 year
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  3. Third-Party Cookies
                </h2>
                <p>
                  We use the following third-party services that may set cookies
                  on your device:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong className="text-[var(--foreground)]">Cloudflare:</strong>{" "}
                    Provides security, bot protection (Turnstile), and
                    performance optimization. Cloudflare may set cookies to
                    identify trusted web traffic.{" "}
                    <a
                      href="https://www.cloudflare.com/privacypolicy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Cloudflare Privacy Policy
                    </a>
                  </li>
                  <li>
                    <strong className="text-[var(--foreground)]">Vercel:</strong>{" "}
                    Our hosting provider may set cookies related to performance
                    monitoring and analytics.{" "}
                    <a
                      href="https://vercel.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      Vercel Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  4. Managing Cookies
                </h2>
                <p>
                  Most web browsers allow you to control cookies through their
                  settings. You can typically:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>View what cookies are stored on your device</li>
                  <li>Delete individual or all cookies</li>
                  <li>
                    Block cookies from specific or all websites
                  </li>
                  <li>
                    Set your browser to notify you when a cookie is being set
                  </li>
                </ul>
                <p className="mt-3">
                  Please note that blocking essential cookies may impair the
                  functionality of the Site, including the ability to submit
                  forms (waitlist sign-up, contact form) which require
                  Cloudflare Turnstile verification.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  5. Do Not Track
                </h2>
                <p>
                  Some browsers include a &quot;Do Not Track&quot; (DNT)
                  feature. As there is no industry standard for DNT signals, we
                  do not currently respond to DNT requests. We will update this
                  policy if a standard is established.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  6. Changes to This Policy
                </h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect
                  changes in technology, legislation, or our data practices. We
                  will post any changes on this page and update the &quot;Last
                  updated&quot; date.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  7. Contact Us
                </h2>
                <p>
                  If you have questions about our use of cookies, please contact
                  us at:
                </p>
                <div className="mt-3">
                  <p className="text-[var(--foreground)] font-medium">
                    Paid Rightly LLC
                  </p>
                  <p>1209 Mountain Road Pl NE, Suite N</p>
                  <p>Albuquerque, NM 87110, USA</p>
                  <p className="mt-2">
                    Email:{" "}
                    <a
                      href="mailto:hello@paidrightly.com"
                      className="text-primary-600 hover:underline"
                    >
                      hello@paidrightly.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
