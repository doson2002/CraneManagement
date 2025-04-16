import { Badge } from "@/components/ui/badge"

export default function PriorityBadge({ priority }: { priority: string }) {
    switch (priority) {
        case "high":
          return <Badge variant="destructive">High</Badge>
        case "medium":
          return (
            <Badge variant="default" className="bg-amber-500">
              Medium
            </Badge>
          )
        case "low":
          return (
            <Badge variant="default" className="bg-blue-500">
              Low
            </Badge>
          )
        default:
          return null
      }
}