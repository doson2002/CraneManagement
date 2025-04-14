"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ConeIcon as Crane,
  PenToolIcon as Tool,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function OperatorDashboard() {
  const router = useRouter();

  // Sample data for the dashboard
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

  const notifications = [
    {
      id: 1,
      message: "Maintenance for Crane Beta completed",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      message: "Your qualification test expires in 10 days",
      time: "1 day ago",
      read: true,
    },
    {
      id: 3,
      message: "New safety protocol published",
      time: "3 days ago",
      read: true,
    },
  ];

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

  const handleCraneSelect = (craneId: string) => {
    router.push(`/operator/startup/${craneId}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cranes</CardTitle>
            <Crane className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{cranes.length}</div>
            <p className="text-xs text-muted-foreground">
              {cranes.filter((c) => c.status === "operational").length}{" "}
              operational
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Maintenance
            </CardTitle>
            <Tool className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {cranes.filter((c) => c.status === "maintenance").length}
            </div>
            <p className="text-xs text-muted-foreground">
              {cranes.filter((c) => c.status === "warning").length} need
              attention
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Qualification Status
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Valid</div>
            <p className="text-xs text-muted-foreground">Expires in 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Recent Activity
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              Operations in the last 7 days
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-4">Available Cranes</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cranes.map((crane) => (
          <Card
            key={crane.id}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => crane.status === "operational" && handleCraneSelect(crane.id)}
            onMouseEnter={() => crane.status === "operational" && (crane.status = "hover")}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{crane.name}</CardTitle>
                {getStatusBadge(crane.status)}
              </div>
              <CardDescription>ID: {crane.id}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-sm">
                <p>Last maintenance: {crane.lastMaintenance}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={crane.status !== "operational"}
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => handleCraneSelect(crane.id)}
              >
                Select Crane
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6 mb-4">Recent Notifications</h2>
      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 ${notification.read ? "" : "bg-muted/50"}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <p
                    className={`font-medium ${
                      notification.read ? "" : "text-primary"
                    }`}
                  >
                    {notification.message}
                  </p>
                  {!notification.read && (
                    <Badge variant="outline" className="text-xs">
                      New
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {notification.time}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
