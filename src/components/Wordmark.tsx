import { SunMark } from "./SunMark";

type WordmarkProps = {
  tone?: "dark" | "light";
};

/**
 * Text wordmark used until the official logo file is added to /public.
 * See README.md → "Assets needed".
 */
export function Wordmark({ tone = "dark" }: WordmarkProps) {
  const text = tone === "dark" ? "text-ink" : "text-white";
  return (
    <span className={`inline-flex items-center gap-2.5 ${text}`}>
      <SunMark className="size-7 shrink-0 text-cause-coral" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-tight">
          CAUSE
        </span>
        <span className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] opacity-80">
          Philippines
        </span>
      </span>
    </span>
  );
}
