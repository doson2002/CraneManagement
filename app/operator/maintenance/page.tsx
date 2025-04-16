"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
const cranes = [
  {
    id: "CR001",
    name: "Tower Crane Alpha",
    status: "operational",
    lastMaintenance: "2025-03-15",
  },
  {
    id: "CR002",
    name: "Mobile Crane Beta",
    status: "maintenance",
    lastMaintenance: "2025-04-01",
  },
  {
    id: "CR003",
    name: "Overhead Crane Gamma",
    status: "operational",
    lastMaintenance: "2025-03-28",
  },
  {
    id: "CR004",
    name: "Crawler Crane Delta",
    status: "warning",
    lastMaintenance: "2025-02-10",
  },
];
export default function MaintenancePage() {
  const router = useRouter();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-500">Operational</Badge>;
      case "maintenance":
        return <Badge className="bg-blue-500">Under Maintenance</Badge>;
      case "warning":
        return <Badge className="bg-yellow-500">Needs Attention</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Crane Maintenance</CardTitle>
        <CardDescription>
          Update maintenance status and perform required checks
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 h-full">
        <div className="rounded-lg border p-4 h-min">
          <h3 className="font-medium mb-2">
            Select a crane to perform maintenance
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cranes.map((crane) => (
              <Button
                key={crane.id}
                variant="outline"
                className="justify-start h-auto py-3"
                onClick={() => router.push(`/operator/maintenance/${crane.id}`)}
              >
                <div className="flex flex-col items-start text-left gap-4">
                  <span>{crane.name}</span>
                  <span className="text-xs text-muted-foreground">
                    ID: {crane.id}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    <span className="font-medium">Last Maintenance:</span>{" "}
                    {new Date(crane.lastMaintenance).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }
                    )}
                  </span>
                  {getStatusBadge(crane.status)}
                </div>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
