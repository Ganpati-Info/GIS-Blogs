"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    const value = email.trim().toLowerCase();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: value,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="overflow-hidden rounded-2xl border bg-card px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 sm:h-16 sm:w-16">
          <Mail className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
        </div>

        <h2 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          Stay Updated
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Get the latest insights on technology, software development, AI, cloud
          computing, cybersecurity, and digital transformation delivered
          directly to your inbox.
        </p>

        {success ? (
          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 sm:p-8">
            <CheckCircle className="mx-auto h-10 w-10 text-green-600 sm:h-12 sm:w-12" />

            <h3 className="mt-4 text-lg font-semibold text-green-700 sm:text-xl">
              Thank you for subscribing!
            </h3>

            <p className="mt-2 text-sm text-green-700 sm:text-base">
              You're now subscribed to our newsletter.
            </p>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 w-full rounded-xl border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 sm:h-14 sm:text-base"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex h-12 w-full shrink-0 items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:h-14 sm:w-auto sm:min-w-[170px] sm:px-8 sm:text-base"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>

            {error && (
              <p className="mt-3 text-sm font-medium text-red-500">{error}</p>
            )}

            <p className="mt-5 text-xs leading-6 text-muted-foreground sm:text-sm">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
