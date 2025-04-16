import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  ConeIcon as Crane,
  FileText,
  Plus,
  PenToolIcon as Tool,
  TrendingUp,
  Users,
  Truck,
} from "lucide-react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const cranes = [
    {
      id: "CR001",
      name: "Tower Crane Alpha",
      status: "operational",
      location: "Building Site A",
      lastMaintenance: "2025-03-15",
    },
    {
      id: "CR002",
      name: "Mobile Crane Beta",
      status: "maintenance",
      location: "Building Site B",
      lastMaintenance: "2025-04-01",
    },
    {
      id: "CR003",
      name: "Overhead Crane Gamma",
      status: "operational",
      location: "Warehouse C",
      lastMaintenance: "2025-03-28",
    },
    {
      id: "CR004",
      name: "Crawler Crane Delta",
      status: "warning",
      location: "Building Site A",
      lastMaintenance: "2025-02-10",
    },
    {
      id: "CR005",
      name: "Gantry Crane Epsilon",
      status: "operational",
      location: "Port Facility",
      lastMaintenance: "2025-03-20",
    },
  ];

  const workRequests = [
    {
      id: "WR001",
      crane: "CR001",
      type: "Operation",
      operator: "John Smith",
      status: "pending",
      date: "2025-04-10",
    },
    {
      id: "WR002",
      crane: "CR002",
      type: "Maintenance",
      operator: "Jane Doe",
      status: "approved",
      date: "2025-04-05",
    },
    {
      id: "WR003",
      crane: "CR003",
      type: "Operation",
      operator: "Mike Johnson",
      status: "pending",
      date: "2025-04-12",
    },
    {
      id: "WR004",
      crane: "CR004",
      type: "Inspection",
      operator: "Sarah Williams",
      status: "rejected",
      date: "2025-04-03",
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
      case "pending":
        return (
          <Badge
            variant="outline"
            className="text-yellow-500 border-yellow-500"
          >
            Pending
          </Badge>
        );
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>;
      case "active":
        return <Badge className="bg-green-500">Active</Badge>;
      case "inactive":
        return (
          <Badge variant="outline" className="text-muted-foreground">
            Inactive
          </Badge>
        );
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Job
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Total Cranes",
            value: "24",
            description: "2 need maintenance",
            icon: <Crane className="h-5 w-5 text-blue-600" />,
            trend: "+2 from last month",
            trendUp: true,
          },
          {
            title: "Active Jobs",
            value: "12",
            description: "3 due today",
            icon: <FileText className="h-5 w-5 text-green-600" />,
            trend: "+5 from last month",
            trendUp: true,
          },
          {
            title: "Pending Maintenance",
            value: "5",
            description: "2 high priority",
            icon: <Tool className="h-5 w-5 text-amber-600" />,
            trend: "-2 from last month",
            trendUp: false,
          },
          {
            title: "Active Operators",
            value: "18",
            description: "3 on leave",
            icon: <Users className="h-5 w-5 text-purple-600" />,
            trend: "Same as last month",
            trendUp: null,
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.title}
              </CardTitle>
              <div className="rounded-full bg-muted p-2">{item.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-2 flex items-center text-xs">
                {item.trendUp !== null && (
                  <div
                    className={`mr-1 ${
                      item.trendUp ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.trendUp ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingUp className="h-3 w-3 rotate-180" />
                    )}
                  </div>
                )}
                <span className="text-muted-foreground">{item.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="w-full">
        <Card className="w-full">
          <CardHeader className="flex items-center justify-start">
            <CardTitle className="text-left w-full">
              Cranes Status Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cranes.map((crane) => (
                <Card key={crane.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{crane.name}</CardTitle>
                      {getStatusBadge(crane.status)}
                    </div>
                    <CardDescription>ID: {crane.id}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span>{crane.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Last Maintenance:
                        </span>
                        <span>{crane.lastMaintenance}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>
              Overview of recent activities in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Crane HC-123 Maintenance Completed",
                  description: "Regular maintenance completed by John Doe",
                  time: "2 hours ago",
                  icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
                },
                {
                  title: "New Job Assignment",
                  description:
                    "Construction site at 123 Main St assigned to Team A",
                  time: "4 hours ago",
                  icon: <FileText className="h-5 w-5 text-blue-500" />,
                },
                {
                  title: "Crane TC-456 Startup",
                  description: "Crane started by Sarah Johnson",
                  time: "Yesterday, 4:30 PM",
                  icon: <Crane className="h-5 w-5 text-amber-500" />,
                },
                {
                  title: "Maintenance Alert",
                  description: "Crane HC-789 requires immediate maintenance",
                  time: "Yesterday, 2:15 PM",
                  icon: <AlertCircle className="h-5 w-5 text-red-500" />,
                },
                {
                  title: "Equipment Delivery",
                  description: "New parts delivered by Supplier XYZ",
                  time: "2 days ago",
                  icon: <Truck className="h-5 w-5 text-purple-500" />,
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="rounded-full bg-muted p-2">
                    {activity.icon}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Maintenance</CardTitle>
            <CardDescription>
              Scheduled maintenance for the next 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  crane: "HC-123",
                  type: "Regular Inspection",
                  date: "Today, 2:00 PM",
                  status: "scheduled",
                  assignee: "John Doe",
                },
                {
                  crane: "TC-456",
                  type: "Oil Change",
                  date: "Tomorrow, 10:00 AM",
                  status: "scheduled",
                  assignee: "Sarah Johnson",
                },
                {
                  crane: "HC-789",
                  type: "Emergency Repair",
                  date: "Today, 4:30 PM",
                  status: "urgent",
                  assignee: "Mike Smith",
                },
                {
                  crane: "TC-234",
                  type: "Annual Certification",
                  date: "Friday, 9:00 AM",
                  status: "scheduled",
                  assignee: "Emily Davis",
                },
              ].map((maintenance, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`rounded-full p-1 ${
                        maintenance.status === "urgent"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {maintenance.status === "urgent" ? (
                        <AlertCircle className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {maintenance.crane}: {maintenance.type}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>{maintenance.date}</span>
                        <span className="mx-1">•</span>
                        <span>{maintenance.assignee}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-center justify-between w-full ">
        <Card className="w-full ">
          <CardHeader className="flex items-center justify-start">
            <CardTitle className="text-left w-full">
              Recent Work Requests
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Crane</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Operator</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {workRequests.slice(0, 5).map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.crane}</TableCell>
                    <TableCell>{request.type}</TableCell>
                    <TableCell>{request.operator}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>{getStatusBadge(request.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-end p-4">
            <Button variant="outline" size="sm">
              View All Requests
            </Button>
          </CardFooter>
        </Card>
      </div>

      

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Alert className="bg-amber-50 text-amber-800 border-amber-200">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Maintenance Required</AlertTitle>
          <AlertDescription>
            2 cranes require immediate maintenance attention.
            <Button variant="link" className="h-auto p-0 text-amber-800">
              View details
            </Button>
          </AlertDescription>
        </Alert>

        <Alert className="bg-blue-50 text-blue-800 border-blue-200">
          <Clock className="h-4 w-4" />
          <AlertTitle>Upcoming Certification</AlertTitle>
          <AlertDescription>
            3 operators need to renew their certifications this month.
            <Button variant="link" className="h-auto p-0 text-blue-800">
              View details
            </Button>
          </AlertDescription>
        </Alert>

        <Alert className="bg-green-50 text-green-800 border-green-200">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Equipment Delivery</AlertTitle>
          <AlertDescription>
            New parts have been delivered and are ready for inventory.
            <Button variant="link" className="h-auto p-0 text-green-800">
              View details
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
