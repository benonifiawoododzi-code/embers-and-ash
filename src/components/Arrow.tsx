export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`h-4 w-4 shrink-0 ${className}`}>
      <path d="M4 12h14M14 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
