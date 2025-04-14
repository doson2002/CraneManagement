import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ProfileLoading() {
  return (
    <div className="flex flex-col space-y-4 p-8">
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-8 w-[250px]" />
          <Skeleton className="h-4 w-[350px] mt-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <Skeleton className="h-6 w-[180px]" />
            <Skeleton className="h-4 w-[220px] mt-2" />
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <Skeleton className="h-32 w-32 rounded-full" />
            <div className="text-center space-y-2">
              <Skeleton className="h-6 w-[150px] mx-auto" />
              <Skeleton className="h-4 w-[200px] mx-auto" />
              <div className="mt-2 flex justify-center gap-2">
                <Skeleton className="h-5 w-[80px]" />
                <Skeleton className="h-5 w-[100px]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <Skeleton className="h-6 w-[180px]" />
                <Skeleton className="h-4 w-[220px] mt-2" />
              </div>
              <Skeleton className="h-9 w-[100px]" />
            </div>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-full mb-6" />\
