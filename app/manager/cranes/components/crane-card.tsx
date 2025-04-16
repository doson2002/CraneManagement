import { Crane } from "@/app/manager/cranes/page";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle2,
  ConeIcon,
  MapPin,
  Settings,
  XCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CraneCard({ crane }: { crane: Crane }) {
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
    <Card key={crane.id} className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={crane.image || "/placeholder.svg"}
          alt={crane.name}
          fill
          className="object-cover"
        />
        <div
          className={`absolute right-2 top-2 rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(
            crane.status
          )}`}
        >
          <div className="flex items-center gap-1">
            {getStatusIcon(crane.status)}
            {getStatusText(crane.status)}
          </div>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{crane.name}</CardTitle>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription>{crane.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{crane.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <ConeIcon className="h-4 w-4 text-muted-foreground" />
            <span>ID: {crane.id}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div>
              <p className="text-xs text-muted-foreground">Last Maintenance</p>
              <p>{crane.lastMaintenance}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Next Maintenance</p>
              <p>{crane.nextMaintenance}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Link href={`/manager/cranes/${crane.id}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
