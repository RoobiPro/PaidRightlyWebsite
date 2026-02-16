"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/animate";
import { ArrowRight } from "lucide-react";

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
                Join thousands of freelancers who have already reclaimed their
                time. Get started in 5 minutes.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white! text-primary-700! border-white! hover:bg-primary-50! shadow-lg group"
                >
                  Get Started Free
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  Talk to Sales
                </Button>
              </div>
              <p className="mt-4 text-sm text-primary-200">
                No credit card required &middot; Cancel anytime
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
