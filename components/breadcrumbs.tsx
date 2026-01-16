import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Strona główna</span>
          </Link>
        </li>
        {items.slice(1).map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            {index === items.length - 2 ? (
              <span className="text-foreground font-medium">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
