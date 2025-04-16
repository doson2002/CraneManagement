import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Settings, XCircle } from "lucide-react";

export default function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "operational":
      return (
        <Badge className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white" variant="outline">
          <CheckCircle2 className="mr-1 h-3 w-3" /> Operational
        </Badge>
      );
    case "maintenance":
      return (
        <Badge className="bg-amber-500 hover:border-amber-500 hover:bg-white hover:text-amber-600">
          <Settings className="mr-1 h-3 w-3" /> Under Maintenance
        </Badge>
      );
    case "inactive":
      return (
        <Badge className="bg-red-500 hover:border-red-500 hover:bg-white hover:text-red-600">
          <XCircle className="mr-1 h-3 w-3" /> Inactive
        </Badge>
      );
    default:
      return <Badge>Unknown</Badge>;
  }
}
