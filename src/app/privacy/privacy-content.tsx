"use client";

import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/animate";

export function PrivacyContent() {
  return (
    <div className="pt-24">
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-[var(--muted-foreground)] mb-12">
              Last updated: February 15, 2026
            </p>

            <div className="prose-legal space-y-8 text-[var(--muted-foreground)] leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  1. Introduction
                </h2>
                <p>
                  Paid Rightly LLC (&quot;Paid Rightly,&quot; &quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;) is a limited liability
                  company formed in the State of New Mexico, with its registered
                  agent address at 1209 Mountain Road Pl NE, Suite N,
                  Albuquerque, NM 87110, USA.
                </p>
                <p className="mt-3">
                  This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you visit our website
                  paidrightly.com (the &quot;Site&quot;) or use our services.
                  Please read this policy carefully. By using our Site or
                  services, you agree to the practices described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  2. Information We Collect
                </h2>
                <h3 className="text-base font-semibold text-[var(--foreground)] mt-4 mb-2">
                  2.1 Information You Provide
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-[var(--foreground)]">Waitlist sign-up:</strong>{" "}
                    When you join our waitlist, we collect your email address and
                    the page section from which you signed up.
                  </li>
                  <li>
                    <strong className="text-[var(--foreground)]">Contact forms:</strong>{" "}
                    When you contact us, we collect your name, email address,
                    and message content.
                  </li>
                  <li>
                    <strong className="text-[var(--foreground)]">Account information:</strong>{" "}
                    When our services launch, we may collect additional
                    information such as your full name, business name, address,
                    phone number, tax identification numbers, and banking
                    details as necessary to provide our payroll and tax services.
                  </li>
                </ul>

                <h3 className="text-base font-semibold text-[var(--foreground)] mt-4 mb-2">
                  2.2 Information Collected Automatically
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-[var(--foreground)]">Log data:</strong>{" "}
                    Your browser type, operating system, IP address, referring
                    URLs, pages visited, and timestamps.
                  </li>
                  <li>
                    <strong className="text-[var(--foreground)]">Cookies and similar technologies:</strong>{" "}
                    We use cookies and similar tracking technologies as
                    described in our Cookie Policy.
                  </li>
                  <li>
                    <strong className="text-[var(--foreground)]">Bot verification:</strong>{" "}
                    We use Cloudflare Turnstile to verify that form submissions
                    are made by humans. Cloudflare may collect technical data
                    such as browser characteristics for this purpose.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  3. How We Use Your Information
                </h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Manage and communicate with our waitlist subscribers</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>
                    Provide, maintain, and improve our services when they launch
                  </li>
                  <li>
                    Process tax calculations, filings, and payroll operations on
                    your behalf
                  </li>
                  <li>
                    Send you updates, marketing communications, and product
                    announcements (you can opt out at any time)
                  </li>
                  <li>
                    Detect, prevent, and address fraud, abuse, and technical
                    issues
                  </li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  4. How We Share Your Information
                </h2>
                <p>
                  We do not sell your personal information. We may share your
                  information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong className="text-[var(--foreground)]">Service providers:</strong>{" "}
                    Third-party vendors who assist us in operating our Site and
                    services, including hosting providers (Railway, Vercel),
                    security services (Cloudflare), and analytics tools.
                  </li>
                  <li>
                    <strong className="text-[var(--foreground)]">Legal compliance:</strong>{" "}
                    When required by law, regulation, legal process, or
                    governmental request.
                  </li>
                  <li>
                    <strong className="text-[var(--foreground)]">Business transfers:</strong>{" "}
                    In connection with a merger, acquisition, or sale of assets,
                    your information may be transferred as part of that
                    transaction.
                  </li>
                  <li>
                    <strong className="text-[var(--foreground)]">With your consent:</strong>{" "}
                    When you have given us explicit permission to share your
                    information.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  5. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information, including encrypted
                  connections (TLS/SSL), parameterized database queries to
                  prevent injection attacks, and access controls. However, no
                  method of transmission over the Internet or electronic storage
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  6. Data Retention
                </h2>
                <p>
                  We retain your personal information for as long as necessary
                  to fulfill the purposes for which it was collected, including
                  to satisfy legal, accounting, or reporting requirements.
                  Waitlist data is retained until you request removal or until
                  our services launch and you either create an account or opt
                  out.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  7. Your Rights
                </h2>
                <p>
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    <strong className="text-[var(--foreground)]">Access:</strong>{" "}
                    Request a copy of the personal data we hold about you.
                  </li>
                  <li>
                    <strong className="text-[var(--foreground)]">Correction:</strong>{" "}
                    Request that we correct inaccurate or incomplete data.
                  </li>
                  <li>
                    <strong className="text-[var(--foreground)]">Deletion:</strong>{" "}
                    Request that we delete your personal data.
                  </li>
                  <li>
                    <strong className="text-[var(--foreground)]">Opt-out:</strong>{" "}
                    Unsubscribe from marketing communications at any time.
                  </li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:hello@paidrightly.com"
                    className="text-primary-600 hover:underline"
                  >
                    hello@paidrightly.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  8. Children&apos;s Privacy
                </h2>
                <p>
                  Our Site and services are not intended for individuals under
                  the age of 18. We do not knowingly collect personal
                  information from children. If you believe we have collected
                  information from a minor, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  9. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the updated
                  policy on this page and updating the &quot;Last updated&quot;
                  date. Your continued use of our Site or services after any
                  changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  10. Contact Us
                </h2>
                <p>
                  If you have questions or concerns about this Privacy Policy,
                  please contact us at:
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
