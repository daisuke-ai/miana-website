import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className || ""}`}>
      {/* House Icon */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
      >
        {/* House shape */}
        <path
          d="M16 4L4 14V28H12V20H20V28H28V14L16 4Z"
          fill="#2563eb"
        />
        {/* Roof accent */}
        <path
          d="M16 4L4 14H28L16 4Z"
          fill="#1d4ed8"
        />
        {/* Door */}
        <rect x="13" y="20" width="6" height="8" fill="#f4efea" />
        {/* Window */}
        <rect x="18" y="15" width="4" height="3" fill="#f4efea" rx="0.5" />
      </svg>
      <span className="font-semibold text-xl text-foreground tracking-tight">
        Miana
      </span>
    </Link>
  );
}
