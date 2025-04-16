import { Badge } from "@/components/ui/badge";

export default function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "scheduled":
      return (
        <Badge variant="default" className="bg-blue-500">
          Scheduled
        </Badge>
      );
    case "in-progress":
      return (
        <Badge variant="default" className="bg-amber-500">
          In Progress
        </Badge>
      );
    case "completed":
      return (
        <Badge variant="default" className="bg-green-500">
          Completed
        </Badge>
      );
    default:
      return null;
  }
}
