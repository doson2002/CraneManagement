import { Crane } from "@/app/manager/cranes/page";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  CheckCircle2,
  Search,
  Settings,
  XCircle,
} from "lucide-react";
import Link from "next/link";

export default function CraneItem({ crane }: { crane: Crane }) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "maintenance":
        return <AlertCircle className="h-4 w-4 text-amber-500" />;
      case "inactive":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational";
      case "maintenance":
        return "Under Maintenance";
      case "inactive":
        return "Inactive";
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-100 text-green-800";
      case "maintenance":
        return "bg-amber-100 text-amber-800";
      case "inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div key={crane.id} className="grid grid-cols-12 gap-2 p-4">
      <div className="col-span-3 font-medium">{crane.name}</div>
      <div className="col-span-2">{crane.id}</div>
      <div className="col-span-2">{crane.type}</div>
      <div className="col-span-2">
        <div
          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(
            crane.status
          )}`}
        >
          {getStatusIcon(crane.status)}
          <span className="ml-1">{getStatusText(crane.status)}</span>
        </div>
      </div>
      <div className="col-span-2 truncate" title={crane.location}>
        {crane.location}
      </div>
      <div className="col-span-1">
        <div className="flex items-center gap-2">
          <Link href={`/dashboard/cranes/${crane.id}`}>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Search className="h-4 w-4" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
