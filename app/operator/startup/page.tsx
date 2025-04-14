"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
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
export default function StartUpPage() {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crane Start-up Procedure</CardTitle>
        <CardDescription>
          Complete the required steps to start a crane operation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-2">
            Select a crane to start operation
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cranes
              .filter((crane) => crane.status === "operational")
              .map((crane) => (
                <Button
                  key={crane.id}
                  variant="outline"
                  className="justify-start h-auto py-3"
                  onClick={() => router.push(`/operator/startup/${crane.id}`)}
                >
                  <div className="flex flex-col items-start text-left">
                    <span>{crane.name}</span>
                    <span className="text-xs text-muted-foreground">
                      ID: {crane.id}
                    </span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-green-500 ml-auto" />
                </Button>
              ))}
          </div>
          {cranes.filter((crane) => crane.status === "operational").length ===
            0 && (
            <div className="text-center p-4">
              <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <p>No operational cranes available for start-up</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
