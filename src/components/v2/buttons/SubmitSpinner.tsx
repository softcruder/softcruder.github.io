/** Inline loading indicator for forms (Tailwind-free SVG). */
export default function SubmitSpinner() {
  return (
    <div className="inline-flex" aria-hidden>
      <svg
        width="20"
        height="20"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#5a58ff", stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: "#3c3cf3", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <circle cx="36" cy="50" fill="#d4d4d4" r="20">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="0.99s"
            keyTimes="0;0.5;1"
            values="36;64;36"
            begin="-0.495s"
          />
        </circle>
        <circle cx="64" cy="50" fill="#101010" r="20">
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="0.99s"
            keyTimes="0;0.5;1"
            values="36;64;36"
            begin="0s"
          />
        </circle>
      </svg>
    </div>
  );
}
