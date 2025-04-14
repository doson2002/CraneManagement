import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function NotificationsLoading() {
  return (
    <div className="flex flex-col space-y-4 p-8">
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-4 w-[300px] mt-2" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-[80px]" />
          <Skeleton className="h-8 w-[150px]" />
          <Skeleton className="h-8 w-[180px]" />
        </div>
      </div>

      <div className="w-full">
        <Skeleton className="h-10 w-[400px] mb-4" />

        <Card>
          <CardHeader className="p-4">
            <Skeleton className="h-6 w-[100px]" />
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {Array(3)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="flex items-start gap-4 p-4">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-[200px]" />
                      <Skeleton className="h-4 w-[300px]" />
                      <Skeleton className="h-3 w-[100px]" />
                    </div>
                    <Skeleton className="h-8 w-8" />
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader className="p-4">
            <Skeleton className="h-6 w-[100px]" />
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {Array(2)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="flex items-start gap-4 p-4">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-5 w-[200px]" />
                      <Skeleton className="h-4 w-[300px]" />
                      <Skeleton className="h-3 w-[100px]" />
                    </div>
                    <Skeleton className="h-8 w-8" />
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
