"use client"

import { Textarea } from "@/components/ui/textarea"

import { Label } from "@/components/ui/label"

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
  Users,
  Plus,
  Building,
  FileText,
  Mail,
  Search,
  ShieldAlert,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import NotificationIcon from "@/app/admin/notifications/components/notification-icon"

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for the dashboard
  const users = [
    { id: "USR001", name: "John Smith", role: "Operator", status: "active", lastLogin: "2025-04-10 09:15" },
    { id: "USR002", name: "Maria Garcia", role: "Manager", status: "active", lastLogin: "2025-04-10 08:30" },
    { id: "USR003", name: "Ahmed Khan", role: "Operator", status: "inactive", lastLogin: "2025-04-05 14:20" },
    { id: "USR004", name: "Sarah Williams", role: "Manager", status: "active", lastLogin: "2025-04-09 16:45" },
    { id: "USR005", name: "Li Wei", role: "Operator", status: "active", lastLogin: "2025-04-10 07:50" },
  ]

  const equipment = [
    { id: "EQ001", name: "Tower Crane Alpha", type: "Tower Crane", supplier: "CraneTech Inc.", status: "operational" },
    { id: "EQ002", name: "Mobile Crane Beta", type: "Mobile Crane", supplier: "MobileLift Co.", status: "maintenance" },
    {
      id: "EQ003",
      name: "Overhead Crane Gamma",
      type: "Overhead Crane",
      supplier: "IndustrialCranes Ltd.",
      status: "operational",
    },
    {
      id: "EQ004",
      name: "Crawler Crane Delta",
      type: "Crawler Crane",
      supplier: "HeavyDuty Systems",
      status: "warning",
    },
    {
      id: "EQ005",
      name: "Gantry Crane Epsilon",
      type: "Gantry Crane",
      supplier: "PortEquipment Inc.",
      status: "operational",
    },
  ]

  const suppliers = [
    {
      id: "SUP001",
      name: "CraneTech Inc.",
      type: "Equipment Supplier",
      contact: "contact@cranetech.com",
      status: "active",
    },
    {
      id: "SUP002",
      name: "MobileLift Co.",
      type: "Equipment Supplier",
      contact: "info@mobilelift.com",
      status: "active",
    },
    {
      id: "SUP003",
      name: "SafetyFirst Certifications",
      type: "Certification Provider",
      contact: "cert@safetyfirst.com",
      status: "active",
    },
    {
      id: "SUP004",
      name: "CraneParts Direct",
      type: "Parts Supplier",
      contact: "parts@cranepartsdirect.com",
      status: "inactive",
    },
  ]

  const notifications = [
    {
      id: "NOT001",
      type: "system",
      message: "System maintenance scheduled for April 15, 2025",
      date: "2025-04-10",
      status: "pending",
    },
    {
      id: "NOT002",
      type: "alert",
      message: "Crane CR004 requires immediate inspection",
      date: "2025-04-09",
      status: "sent",
    },
    {
      id: "NOT003",
      type: "email",
      message: "Certification reminder sent to 5 operators",
      date: "2025-04-08",
      status: "sent",
    },
    { id: "NOT004", type: "system", message: "New safety protocol published", date: "2025-04-05", status: "sent" },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-500">Operational</Badge>
      case "maintenance":
        return <Badge className="bg-blue-500">Under Maintenance</Badge>
      case "warning":
        return <Badge className="bg-yellow-500">Needs Attention</Badge>
      case "active":
        return <Badge className="bg-green-500">Active</Badge>
      case "inactive":
        return (
          <Badge variant="outline" className="text-muted-foreground">
            Inactive
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            Pending
          </Badge>
        )
      case "sent":
        return <Badge className="bg-green-500">Sent</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredEquipment = equipment.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.supplier.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      supplier.type.toLowerCase().includes(searchQuery.toLowerCase()),
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
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs text-muted-foreground">System Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-16 md:w-64 border-r bg-muted/40">
          <nav className="flex flex-col p-2 md:p-4 gap-2">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("dashboard")}
            >
              <User className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Dashboard</span>
            </Button>
            <Button
              variant={activeTab === "accounts" ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("accounts")}
            >
              <Users className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Account Management</span>
            </Button>
            <Button
              variant={activeTab === "tests" ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("tests")}
            >
              <FileText className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Test Management</span>
            </Button>
            <Button
              variant={activeTab === "equipment" ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("equipment")}
            >
              <Crane className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Equipment Management</span>
            </Button>
            <Button
              variant={activeTab === "suppliers" ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("suppliers")}
            >
              <Building className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Supplier Management</span>
            </Button>
            <Button
              variant={activeTab === "notifications" ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("notifications")}
            >
              <Bell className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Notifications</span>
            </Button>
            <div className="flex-1"></div>
            <Button
              variant="ghost"
              className="justify-start text-red-500 hover:text-red-600 hover:bg-red-100"
              onClick={() => router.push("/login")}
            >
              <LogOut className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Logout</span>
            </Button>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="tests">Tests</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
              <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{users.length}</div>
                    <p className="text-xs text-muted-foreground">
                      {users.filter((u) => u.status === "active").length} active users
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Equipment</CardTitle>
                    <Crane className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{equipment.length}</div>
                    <p className="text-xs text-muted-foreground">
                      {equipment.filter((e) => e.status === "operational").length} operational
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Suppliers</CardTitle>
                    <Building className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{suppliers.length}</div>
                    <p className="text-xs text-muted-foreground">
                      {suppliers.filter((s) => s.status === "active").length} active suppliers
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                    <Bell className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{notifications.length}</div>
                    <p className="text-xs text-muted-foreground">
                      {notifications.filter((n) => n.status === "pending").length} pending
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-xl font-bold mt-6 mb-4">Recent User Activity</h2>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.slice(0, 5).map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.id}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>
                                  {user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              {user.name}
                            </div>
                          </TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>{getStatusBadge(user.status)}</TableCell>
                          <TableCell>{user.lastLogin}</TableCell>
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
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("accounts")}>
                    View All Users
                  </Button>
                </CardFooter>
              </Card>

              <h2 className="text-xl font-bold mt-6 mb-4">System Notifications</h2>
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 flex items-start gap-3">
                        <div className="mt-0.5"><NotificationIcon type={notification.type}/></div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <p className="font-medium">{notification.message}</p>
                            {getStatusBadge(notification.status)}
                          </div>
                          <p className="text-xs text-muted-foreground">{notification.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end p-4">
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("notifications")}>
                    Manage Notifications
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

          </Tabs>
        </main>
      </div>
    </div>
  )
}
