import type { Metadata } from "next";
import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-5 py-20 sm:px-8">
        <Wordmark className="h-10 w-auto" />
        <h1 className="mt-10 font-display text-5xl font-semibold tracking-tight">
          This page doesn’t exist.
        </h1>
        <p className="mt-4 text-lg text-ink-soft">
          The link may be out of date. Everything about CAUSE Philippines lives on our home page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-midnight px-6 py-3 font-semibold text-white hover:bg-midnight-2"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
