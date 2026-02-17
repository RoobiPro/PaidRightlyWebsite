"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

interface WaitlistFormProps {
  source: string;
  variant?: "inline" | "compact";
  buttonText?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export function WaitlistForm({
  source,
  variant = "inline",
  buttonText = "Join Waitlist",
  inputClassName,
  buttonClassName,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={cn(
        "flex items-center gap-2 text-sm font-medium",
        variant === "compact" ? "justify-center" : ""
      )}>
        <Check size={16} className="text-green-500" />
        <span className="text-green-600 dark:text-green-400">{message}</span>
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex gap-2",
          variant === "compact" ? "flex-col sm:flex-row items-center" : "items-center"
        )}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@email.com"
          required
          className={cn(
            "px-4 py-2.5 text-sm rounded-lg border focus:outline-none focus:ring-2 transition-colors",
            "border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:ring-primary-500",
            variant === "compact" && "w-full sm:w-auto sm:min-w-[240px]",
            inputClassName
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all cursor-pointer",
            "bg-primary-600 text-white hover:bg-primary-700 disabled:opacity-60",
            variant === "compact" && "w-full sm:w-auto",
            buttonClassName
          )}
        >
          {status === "loading" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <>
              {buttonText}
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-sm text-red-500">{message}</p>
      )}
    </div>
  );
}
