"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ConeIcon as Crane,
  Settings,
  User,
  Bell,
  LogOut,
  PenToolIcon as Tool,
  Users,
  ClipboardList,
  Plus,
  MapPin,
  History,
  Search,
  AlertTriangle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ManagerDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for the dashboard
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
  ]

  const workRequests = [
    { id: "WR001", crane: "CR001", type: "Operation", operator: "John Smith", status: "pending", date: "2025-04-10" },
    { id: "WR002", crane: "CR002", type: "Maintenance", operator: "Jane Doe", status: "approved", date: "2025-04-05" },
    { id: "WR003", crane: "CR003", type: "Operation", operator: "Mike Johnson", status: "pending", date: "2025-04-12" },
    {
      id: "WR004",
      crane: "CR004",
      type: "Inspection",
      operator: "Sarah Williams",
      status: "rejected",
      date: "2025-04-03",
    },
  ]

  const operators = [
    { id: "OP001", name: "John Smith", role: "Crane Operator", status: "active", certExpiry: "2025-12-15" },
    { id: "OP002", name: "Jane Doe", role: "Maintenance Technician", status: "active", certExpiry: "2025-10-20" },
    { id: "OP003", name: "Mike Johnson", role: "Crane Operator", status: "inactive", certExpiry: "2025-05-10" },
    { id: "OP004", name: "Sarah Williams", role: "Safety Inspector", status: "active", certExpiry: "2026-01-05" },
  ]

  const getStatusBadge = (status : string)=> {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-500">Operational</Badge>
      case "maintenance":
        return <Badge className="bg-blue-500">Under Maintenance</Badge>
      case "warning":
        return <Badge className="bg-yellow-500">Needs Attention</Badge>
      case "pending":
        return (
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            Pending
          </Badge>
        )
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "inactive":
        return (
          <Badge variant="outline" className="text-muted-foreground">
            Inactive
          </Badge>
        )
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const filteredCranes = cranes.filter(
    (crane) =>
      crane.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crane.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crane.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredRequests = workRequests.filter(
    (request) =>
      request.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.crane.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.operator.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredOperators = operators.filter(
    (operator) =>
      operator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      operator.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Crane className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">Crane Management System</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Maria Garcia</p>
                <p className="text-xs text-muted-foreground">Site Manager</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-16 md:w-64 border-r bg-muted/40">
          <nav className="flex flex-col p-2 md:p-4 gap-2">
            <Button
              variant={activeTab === "cranes" ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("cranes")}
            >
              <Crane className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Crane Management</span>
            </Button>
            <Button
              variant={activeTab === "operators" ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("operators")}
            >
              <Users className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Operators</span>
            </Button>
            <Button
              variant={activeTab === "history" ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("history")}
            >
              <History className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">History</span>
            </Button>
            <div className="flex-1"></div>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="cranes">Cranes</TabsTrigger>
              <TabsTrigger value="operators">Operators</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="cranes">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Crane Management</h2>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search cranes..."
                      className="pl-8 w-[250px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Crane
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Last Maintenance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCranes.map((crane) => (
                        <TableRow key={crane.id}>
                          <TableCell className="font-medium">{crane.id}</TableCell>
                          <TableCell>{crane.name}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3 text-muted-foreground" />
                              {crane.location}
                            </div>
                          </TableCell>
                          <TableCell>{crane.lastMaintenance}</TableCell>
                          <TableCell>{getStatusBadge(crane.status)}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="operators">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Operator Management</h2>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search operators..."
                      className="pl-8 w-[250px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Operator
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Certification Expiry</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredOperators.map((operator) => (
                        <TableRow key={operator.id}>
                          <TableCell className="font-medium">{operator.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>
                                  {operator.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              {operator.name}
                            </div>
                          </TableCell>
                          <TableCell>{operator.role}</TableCell>
                          <TableCell>{operator.certExpiry}</TableCell>
                          <TableCell>{getStatusBadge(operator.status)}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Operation History</h2>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search history..." className="pl-8 w-[250px]" />
                  </div>
                  <Button variant="outline">Export Report</Button>
                </div>
              </div>

              <Tabs defaultValue="operations" className="mb-6">
                <TabsList>
                  <TabsTrigger value="operations">Operations</TabsTrigger>
                  <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                  <TabsTrigger value="incidents">Incidents</TabsTrigger>
                </TabsList>
                <TabsContent value="operations" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center p-8">
                        <History className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">Operation History</h3>
                        <p className="text-muted-foreground mb-4">View detailed history of all crane operations</p>
                        <Button>Generate Report</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="maintenance" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center p-8">
                        <Tool className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">Maintenance History</h3>
                        <p className="text-muted-foreground mb-4">
                          View detailed history of all crane maintenance activities
                        </p>
                        <Button>Generate Report</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="incidents" className="mt-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center p-8">
                        <AlertTriangle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">Incident Reports</h3>
                        <p className="text-muted-foreground mb-4">
                          View history of all reported incidents and safety issues
                        </p>
                        <Button>Generate Report</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
