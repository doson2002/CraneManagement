import { Badge } from "@/components/ui/badge";

export default function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "active":
      return (
        <Badge variant="default" className="bg-green-500">
          Active
        </Badge>
      );
    case "draft":
      return (
        <Badge variant="outline" className="border-amber-500 text-amber-500">
          Draft
        </Badge>
      );
    case "inactive":
      return (
        <Badge variant="outline" className="border-red-500 text-red-500">
          Inactive
        </Badge>
      );
    default:
      return null;
  }
}
