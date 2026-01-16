import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "light"
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, variant = "default", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl lg:text-3xl",
    lg: "text-3xl lg:text-4xl",
  }

  const isLight = variant === "light"

  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      {/* Modern geometric icon */}
      <div className="relative">
        <div
          className={cn(
            "w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105",
            isLight ? "bg-white/20 backdrop-blur-sm" : "bg-gradient-to-br from-primary to-accent",
          )}
        >
          {/* Stylized JT monogram */}
          <svg
            viewBox="0 0 40 40"
            className={cn("w-6 h-6 lg:w-7 lg:h-7", isLight ? "text-white" : "text-primary-foreground")}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* J letter */}
            <path d="M10 8 L10 24 Q10 32 18 32" />
            {/* T letter */}
            <path d="M22 8 L34 8" />
            <path d="M28 8 L28 32" />
          </svg>
        </div>
        {/* Decorative accent dot */}
        <div
          className={cn("absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full", isLight ? "bg-white" : "bg-accent")}
        />
      </div>

      {/* Text part */}
      <div className="flex flex-col leading-none">
        <span className={cn("font-bold tracking-tight", sizeClasses[size], isLight ? "text-white" : "text-foreground")}>
          JT<span className={cn(isLight ? "text-white/80" : "text-primary")}>Mebel</span>
        </span>
        <span
          className={cn(
            "text-[10px] lg:text-xs tracking-widest uppercase font-medium",
            isLight ? "text-white/70" : "text-muted-foreground",
          )}
        >
          Meble dla edukacji
        </span>
      </div>
    </Link>
  )
}
