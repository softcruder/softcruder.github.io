/** Inline loading dots for legacy submit buttons (Tailwind-only). */
export function BtnLoader() {
  return (
    <span
      className="inline-flex items-center gap-1"
      aria-hidden
    >
      <span className="size-1.5 animate-bounce rounded-full bg-secondary [animation-delay:-0.2s]" />
      <span className="size-1.5 animate-bounce rounded-full bg-secondary [animation-delay:-0.1s]" />
      <span className="size-1.5 animate-bounce rounded-full bg-secondary" />
    </span>
  );
}

export default BtnLoader;
