"use client";

import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/animate";

export function TermsContent() {
  return (
    <div className="pt-24">
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-[var(--muted-foreground)] mb-12">
              Last updated: February 15, 2026
            </p>

            <div className="prose-legal space-y-8 text-[var(--muted-foreground)] leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  1. Agreement to Terms
                </h2>
                <p>
                  These Terms of Service (&quot;Terms&quot;) constitute a
                  legally binding agreement between you and Paid Rightly LLC
                  (&quot;Paid Rightly,&quot; &quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;), a limited liability company formed in the
                  State of New Mexico, with its registered agent address at 1209
                  Mountain Road Pl NE, Suite N, Albuquerque, NM 87110, USA.
                </p>
                <p className="mt-3">
                  By accessing or using our website at paidrightly.com (the
                  &quot;Site&quot;) or any of our services, you agree to be
                  bound by these Terms. If you do not agree, please do not use
                  our Site or services.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  2. Description of Services
                </h2>
                <p>
                  Paid Rightly provides automated payroll, tax calculation, VAT
                  handling, and tax filing services designed for freelancers and
                  independent contractors (the &quot;Services&quot;). Our
                  Services are currently in pre-launch, and access is available
                  via waitlist registration. Features, pricing, and availability
                  are subject to change prior to and after launch.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  3. Waitlist Registration
                </h2>
                <p>
                  By joining our waitlist, you provide your email address to
                  receive updates about our Services. You agree to provide
                  accurate information and consent to receive communications
                  from us related to the waitlist and product launch. You may
                  unsubscribe at any time by contacting us at{" "}
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
                  4. Eligibility
                </h2>
                <p>
                  You must be at least 18 years old and capable of entering into
                  a legally binding agreement to use our Site and Services. By
                  using our Site, you represent and warrant that you meet these
                  requirements.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  5. User Accounts
                </h2>
                <p>
                  When our Services launch, you may be required to create an
                  account. You are responsible for maintaining the
                  confidentiality of your account credentials and for all
                  activities that occur under your account. You agree to notify
                  us immediately of any unauthorized use of your account.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  6. Acceptable Use
                </h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    Use the Site or Services for any unlawful purpose or in
                    violation of any applicable law or regulation
                  </li>
                  <li>
                    Submit false, misleading, or fraudulent information
                  </li>
                  <li>
                    Attempt to gain unauthorized access to our systems,
                    networks, or other users&apos; accounts
                  </li>
                  <li>
                    Interfere with or disrupt the integrity or performance of
                    the Site or Services
                  </li>
                  <li>
                    Use automated means (bots, scrapers, etc.) to access the
                    Site without our written permission
                  </li>
                  <li>
                    Transmit any malware, viruses, or other harmful code
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  7. Intellectual Property
                </h2>
                <p>
                  All content on the Site, including text, graphics, logos,
                  images, software, and design, is the property of Paid Rightly
                  LLC or its licensors and is protected by copyright, trademark,
                  and other intellectual property laws. You may not reproduce,
                  distribute, modify, or create derivative works from any
                  content on the Site without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  8. Disclaimer of Warranties
                </h2>
                <p>
                  THE SITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND
                  &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="mt-3">
                  Paid Rightly does not provide legal, accounting, or tax
                  advice. While our Services are designed to automate tax
                  calculations and filings, you are ultimately responsible for
                  the accuracy and completeness of your tax obligations. We
                  recommend consulting a qualified tax professional for complex
                  tax situations.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  9. Limitation of Liability
                </h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, PAID RIGHTLY LLC, ITS
                  MEMBERS, MANAGERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE
                  FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                  PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF
                  PROFITS, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR
                  RELATED TO YOUR USE OF THE SITE OR SERVICES.
                </p>
                <p className="mt-3">
                  OUR TOTAL LIABILITY FOR ANY CLAIM ARISING UNDER THESE TERMS
                  SHALL NOT EXCEED THE AMOUNT YOU HAVE PAID US IN THE TWELVE
                  (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS
                  ($100), WHICHEVER IS GREATER.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  10. Indemnification
                </h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Paid Rightly
                  LLC and its members, managers, employees, and agents from and
                  against any claims, liabilities, damages, losses, costs, and
                  expenses (including reasonable attorneys&apos; fees) arising
                  out of or related to your use of the Site or Services, your
                  violation of these Terms, or your violation of any rights of a
                  third party.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  11. Termination
                </h2>
                <p>
                  We reserve the right to suspend or terminate your access to
                  the Site and Services at our sole discretion, without notice,
                  for conduct that we believe violates these Terms, is harmful
                  to other users or third parties, or is otherwise
                  objectionable.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  12. Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the State of New Mexico, without regard to
                  its conflict of law provisions. Any disputes arising under
                  these Terms shall be subject to the exclusive jurisdiction of
                  the state and federal courts located in Bernalillo County, New
                  Mexico.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  13. Changes to These Terms
                </h2>
                <p>
                  We may revise these Terms at any time by posting the updated
                  version on this page. We will update the &quot;Last
                  updated&quot; date at the top of this page. Your continued use
                  of the Site or Services after any changes constitutes
                  acceptance of the revised Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  14. Contact Us
                </h2>
                <p>
                  If you have questions about these Terms, please contact us at:
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
