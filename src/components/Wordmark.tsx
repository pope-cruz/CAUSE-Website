type WordmarkProps = {
  variant?: "wordmark" | "lockup";
  /** `light` = for light backgrounds (transparent); `dark` = on the logo's midnight field. */
  surface?: "light" | "dark";
  className?: string;
};

const sources = {
  wordmark: {
    light: { src: "/brand/cause-wordmark-light.webp", width: 579, height: 120 },
    dark: { src: "/brand/cause-wordmark.webp", width: 430, height: 96 },
  },
  lockup: {
    light: { src: "/brand/cause-logo-light.webp", width: 619, height: 200 },
    dark: { src: "/brand/cause-logo.webp", width: 1200, height: 431 },
  },
};

/** Official CAUSE logo, cropped from the brand file. */
export function Wordmark({ variant = "wordmark", surface = "light", className }: WordmarkProps) {
  const image = sources[variant][surface];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.src}
      width={image.width}
      height={image.height}
      alt={
        variant === "lockup"
          ? "CAUSE — Coalition of American University Student Experiences: Philippines"
          : "CAUSE Philippines"
      }
      className={className}
    />
  );
}
