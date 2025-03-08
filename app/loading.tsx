import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-4 sm:space-y-8">
      {/* Header section */}
      <div className="space-y-2 sm:space-y-4">
        <Skeleton className="h-8 sm:h-10 md:h-12 w-[180px] sm:w-[220px] md:w-[250px]" />
        <Skeleton className="h-3 sm:h-4 w-full max-w-[300px] sm:max-w-[450px] md:max-w-[600px]" />
      </div>

      {/* Content grid - responsive from 1 to 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-2 sm:space-y-3">
            {/* Card image placeholder - height adjusts based on screen size */}
            <Skeleton className="h-[150px] sm:h-[180px] md:h-[200px] w-full rounded-lg" />
            {/* Text placeholders - width adjusts based on screen size */}
            <Skeleton className="h-3 sm:h-4 w-3/4" />
            <Skeleton className="h-3 sm:h-4 w-1/2" />
          </div>
        ))}
      </div>

      {/* Additional content section for larger screens */}
      <div className="hidden md:block space-y-4">
        <Skeleton className="h-8 w-[200px]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Skeleton className="h-24 rounded-lg" />
          <Skeleton className="h-24 rounded-lg" />
        </div>
      </div>
    </div>
  )
}

