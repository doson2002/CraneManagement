"use client";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { useParams } from "next/navigation";
import {
  ConeIcon as Crane,
  Calendar,
  Clock,
  Tag,
  AlertTriangle,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import CraneOverview from "@/app/manager/cranes/[id]/components/crane-overview";
import CraneMantainance from "@/app/manager/cranes/[id]/components/crane-mantainance";
import CraneStartupHistory from "@/app/manager/cranes/[id]/components/crane-startup-history";
import CraneMetric from "@/app/manager/cranes/[id]/components/crane-metric";

export default function CraneView() {
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

  const { id } = useParams();

  const crane = {
    id: id,
    name: `Tower Crane ${id}`,
    model: "Liebherr 200 EC-H",
    status: "operational",
    location: "Construction Site Alpha",
    lastMaintenance: "2023-10-15",
    nextMaintenance: "2023-11-15",
    operator: "Sam Smith",
    maxLoad: "12 tons",
    height: "60 meters",
    reachRadius: "65 meters",
    installationDate: "2023-01-10",
    maintenanceHistory: [
      {
        date: "2023-10-15",
        type: "Regular",
        technician: "Mike Johnson",
        notes: "All systems checked, replaced hydraulic fluid",
      },
      {
        date: "2023-09-01",
        type: "Emergency",
        technician: "Sarah Williams",
        notes: "Fixed electrical issue in control panel",
      },
      {
        date: "2023-08-15",
        type: "Regular",
        technician: "Mike Johnson",
        notes: "Routine inspection, no issues found",
      },
    ],
    startupChecks: [
      { date: "2023-10-20", operator: "Sam Smith", status: "Passed" },
      { date: "2023-10-19", operator: "Sam Smith", status: "Passed" },
      {
        date: "2023-10-18",
        operator: "John Doe",
        status: "Failed",
        notes: "Hydraulic pressure below threshold",
      },
    ],
    operationalMetrics: {
      hoursOperatedTotal: 1250,
      hoursOperatedLastMonth: 160,
      loadCycles: 3450,
      fuelConsumption: "45L/day",
      efficiency: 85,
    },
  };

  return (
    <div className="space-y-6">
      <Card className="w-full space-y-6">
        <CardHeader className="space-y-1 flex-row justify-between items-start">
          <div className="flex flex-col items-start justify-center">
            <CardTitle className="text-2xl font-bold tracking-tight">
              {crane.name}
            </CardTitle>
            <CardTitle className="text-sm text-muted-foreground font-normal">
              Model: {crane.model} | ID: {crane.id}
            </CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(
                crane.status
              )}`}
            >
              {getStatusIcon(crane.status)}
              <span className="ml-1">{getStatusText(crane.status)}</span>
            </div>
            <Button variant="outline">Edit</Button>
            <Button>Schedule Maintenance</Button>
          </div>
        </CardHeader>
        <CardContent className="w-full">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 md:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="startup">Startup Checks</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-5">
              <CraneOverview crane={crane} />
            </TabsContent>
            <TabsContent value="maintenance" className="space-y-4">
              <CraneMantainance crane={crane} />
            </TabsContent>
            <TabsContent value="startup" className="space-y-4">
              <CraneStartupHistory crane={crane} />
            </TabsContent>
            <TabsContent value="metrics" className="space-y-4">
              <CraneMetric crane={crane} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
