"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-3.625rem)] px-4 py-16">
      <div className="w-full max-w-md space-y-6">
        {/* Error alert */}
        <Alert variant="destructive" className="border-destructive/50 text-left">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle className="ml-2">Something went wrong</AlertTitle>
          <AlertDescription className="ml-2 mt-2 text-sm text-destructive/90">
            {error?.message || "An unexpected error occurred. Please try again later."}
          </AlertDescription>
        </Alert>

        {/* Error illustration */}
        <div className="py-4 flex justify-center">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <div className="absolute inset-0 rounded-full bg-destructive/10 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertTriangle className="h-16 w-16 sm:h-20 sm:w-20 text-destructive/70" />
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="default" onClick={reset} className="w-full sm:w-auto" size="lg">
            Try Again
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto" size="lg">
            <Link href="/">Return Home</Link>
          </Button>
        </div>

        {/* Error details for debugging (optional) */}
        {error.digest && <p className="text-xs text-muted-foreground text-center mt-8">Error ID: {error.digest}</p>}
      </div>
    </div>
  )
}

