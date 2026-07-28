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
    <section className="rounded-lg border bg-card px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Mail className="h-7 w-7 text-primary" />
        </div>

        <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Stay Updated</h2>

        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
          Get the latest insights on technology, software development, AI, cloud
          computing, cybersecurity, and digital transformation delivered
          directly to your inbox.
        </p>

        {success ? (
          <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6">
            <CheckCircle className="mx-auto h-10 w-10 text-green-600" />

            <h3 className="mt-4 text-lg font-semibold text-green-700">
              Thank you for subscribing!
            </h3>

            <p className="mt-2 text-sm text-green-700">
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
                className="h-12 flex-1 rounded-lg border bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <button
                type="submit"
                disabled={loading}
                className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
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

            {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

            <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
