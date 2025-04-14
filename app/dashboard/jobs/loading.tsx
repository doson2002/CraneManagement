import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-32" />
      </div>

      <div className="rounded-lg border border-gray-200 shadow-sm">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <Skeleton className="h-10 w-64" />
            <div className="flex items-center space-x-2">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-[180px]" />
            </div>
          </div>

          <div className="rounded-md border">
            <div className="h-10 border-b px-4 flex items-center">
              <div className="grid grid-cols-7 w-full">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 border-b px-4 py-2 flex items-center">
                <div className="grid grid-cols-7 w-full">
                  <Skeleton className="h-4 w-16" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <div className="flex space-x-2">
                    <Skeleton className="h-8 w-12" />
                    <Skeleton className="h-8 w-12" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
