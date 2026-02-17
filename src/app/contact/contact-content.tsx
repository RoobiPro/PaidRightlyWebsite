"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/animate";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      <Section>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-[var(--muted-foreground)]">
              Have a question, suggestion, or just want to say hello? We&apos;d
              love to hear from you.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center shrink-0">
                    <Mail
                      size={20}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[var(--foreground)]">
                      Email
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] mt-1">
                      hello@paidrightly.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center shrink-0">
                    <MessageSquare
                      size={20}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[var(--foreground)]">
                      Live Chat
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] mt-1">
                      Available Mon-Fri, 9am-5pm MST
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-950 flex items-center justify-center shrink-0">
                    <MapPin
                      size={20}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[var(--foreground)]">
                      Office
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] mt-1">
                      1209 Mountain Road Pl NE,
                      <br />
                      Suite N, Albuquerque, NM 87110
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <Card hover={false} className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary-50 dark:bg-primary-950 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send
                      size={24}
                      className="text-primary-600 dark:text-primary-400"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                    Message sent!
                  </h3>
                  <p className="text-[var(--muted-foreground)]">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="What's this about?"
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--foreground)] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                    <Send size={16} className="ml-2" />
                  </Button>
                </form>
              )}
            </Card>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
