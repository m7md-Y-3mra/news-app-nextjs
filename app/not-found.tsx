import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-3.625rem)] px-4 text-center">
      <div className="space-y-6 max-w-md mx-auto">

        {/* Text content */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-7xl md:text-8xl font-bold tracking-tighter">404</h1>
          <h2 className="text-xl sm:text-2xl font-semibold">Page not found</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-sm mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/">Return Home</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

