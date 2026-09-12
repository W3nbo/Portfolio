interface SectionHeadingProps {
  eyebrow: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Section eyebrow label + custom heading block.
 * Renders the uppercase English kicker and whatever heading
 * element the caller chooses (h2 / blockquote / ...), so each
 * section keeps semantic control of its own heading markup.
 */
export function SectionHeading({
  eyebrow,
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-apple-muted">
        {eyebrow}
      </p>
      {children}
    </div>
  );
}
