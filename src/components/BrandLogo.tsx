/** Display the supplied stacked logo, excluding its transparent canvas margins. */
export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`brand-logo ${className}`}>
      <img
        src="/logo-nobg.png"
        alt="Orchiddigital Consulting — Limitless possibilities"
        width="1254"
        height="1254"
      />
    </span>
  );
}
