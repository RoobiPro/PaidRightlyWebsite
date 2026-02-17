"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/animate";
import { WaitlistForm } from "@/components/ui/waitlist-form";

export function CTA() {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-10 md:p-16 text-center">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to stop worrying
                <br />
                about taxes?
              </h2>
              <p className="mt-4 text-lg text-primary-100 max-w-xl mx-auto">
                Our early access is currently full, but we&apos;re opening more
                spots soon. Join the waitlist to be first in line.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <WaitlistForm
                  source="cta"
                  buttonText="Join the Waitlist"
                  inputClassName="bg-white/10! border-white/30! text-white! placeholder:text-primary-200! focus:ring-white/50!"
                  buttonClassName="bg-white! text-primary-700! hover:bg-primary-50!"
                />
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  Talk to Sales
                </Button>
              </div>
              <p className="mt-4 text-sm text-primary-200">
                No commitment &middot; We&apos;ll notify you when a spot opens up
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
