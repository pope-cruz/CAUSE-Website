type WordmarkProps = {
  variant?: "wordmark" | "lockup";
  className?: string;
};

/**
 * Official CAUSE logo, cropped from the brand file. Both images sit on the
 * logo's own midnight field, so place them on `bg-midnight` surfaces.
 */
export function Wordmark({ variant = "wordmark", className }: WordmarkProps) {
  if (variant === "lockup") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/brand/cause-logo.webp"
        width={1200}
        height={431}
        alt="CAUSE — Coalition of American University Student Experiences: Philippines"
        className={className}
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/cause-wordmark.webp"
      width={430}
      height={96}
      alt="CAUSE Philippines"
      className={className}
    />
  );
}
