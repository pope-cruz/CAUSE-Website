import type { Metadata } from "next";
import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-midnight text-white">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-5 py-20 sm:px-8">
        <Wordmark className="h-10 w-auto" />
        <h1 className="mt-10 font-display text-5xl font-semibold tracking-tight">
          This page doesn’t exist.
        </h1>
        <p className="mt-4 text-lg text-mist">
          The link may be out of date. Everything about CAUSE Philippines lives on our home page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-flag-red px-7 py-3.5 font-bold text-white hover:bg-flag-red-deep"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
