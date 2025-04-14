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
  Power,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"

export default function OperatorDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("dashboard")

  // Sample data for the dashboard
  const cranes = [
    { id: "CR001", name: "Tower Crane Alpha", status: "operational", lastMaintenance: "2025-03-15" },
    { id: "CR002", name: "Mobile Crane Beta", status: "maintenance", lastMaintenance: "2025-04-01" },
    { id: "CR003", name: "Overhead Crane Gamma", status: "operational", lastMaintenance: "2025-03-28" },
    { id: "CR004", name: "Crawler Crane Delta", status: "warning", lastMaintenance: "2025-02-10" },
  ]

  const notifications = [
    { id: 1, message: "Maintenance for Crane Beta completed", time: "2 hours ago", read: false },
    { id: 2, message: "Your qualification test expires in 10 days", time: "1 day ago", read: true },
    { id: 3, message: "New safety protocol published", time: "3 days ago", read: true },
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-500">Operational</Badge>
      case "maintenance":
        return <Badge className="bg-blue-500">Under Maintenance</Badge>
      case "warning":
        return <Badge className="bg-yellow-500">Needs Attention</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const handleCraneSelect = (craneId) => {
    router.push(`/operator/crane/${craneId}`)
  }

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
                <AvatarFallback>OP</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">John Operator</p>
                <p className="text-xs text-muted-foreground">Crane Operator</p>
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
              variant={activeTab === "maintenance" ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("maintenance")}
            >
              <Tool className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Maintenance</span>
            </Button>
            <Button
              variant={activeTab === "startup" ? "default" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("startup")}
            >
              <Power className="h-5 w-5 md:mr-2" />
              <span className="hidden md:inline">Crane Start-up</span>
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
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="startup">Crane Start-up</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Cranes</CardTitle>
                    <Crane className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{cranes.length}</div>
                    <p className="text-xs text-muted-foreground">
                      {cranes.filter((c) => c.status === "operational").length} operational
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Maintenance</CardTitle>
                    <Tool className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{cranes.filter((c) => c.status === "maintenance").length}</div>
                    <p className="text-xs text-muted-foreground">
                      {cranes.filter((c) => c.status === "warning").length} need attention
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Qualification Status</CardTitle>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Valid</div>
                    <p className="text-xs text-muted-foreground">Expires in 30 days</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7</div>
                    <p className="text-xs text-muted-foreground">Operations in the last 7 days</p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-xl font-bold mt-6 mb-4">Available Cranes</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {cranes.map((crane) => (
                  <Card
                    key={crane.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleCraneSelect(crane.id)}
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
                        variant="outline"
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
                      <div key={notification.id} className={`p-4 ${notification.read ? "" : "bg-muted/50"}`}>
                        <div className="flex justify-between items-start mb-1">
                          <p className={`font-medium ${notification.read ? "" : "text-primary"}`}>
                            {notification.message}
                          </p>
                          {!notification.read && (
                            <Badge variant="outline" className="text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="maintenance">
              <Card>
                <CardHeader>
                  <CardTitle>Crane Maintenance</CardTitle>
                  <CardDescription>Update maintenance status and perform required checks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">Select a crane to perform maintenance</h3>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {cranes.map((crane) => (
                        <Button
                          key={crane.id}
                          variant="outline"
                          className="justify-start h-auto py-3"
                          onClick={() => router.push(`/operator/maintenance/${crane.id}`)}
                        >
                          <div className="flex flex-col items-start text-left">
                            <span>{crane.name}</span>
                            <span className="text-xs text-muted-foreground">ID: {crane.id}</span>
                          </div>
                          {getStatusBadge(crane.status)}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="startup">
              <Card>
                <CardHeader>
                  <CardTitle>Crane Start-up Procedure</CardTitle>
                  <CardDescription>Complete the required steps to start a crane operation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">Select a crane to start operation</h3>
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
                              <span className="text-xs text-muted-foreground">ID: {crane.id}</span>
                            </div>
                            <CheckCircle2 className="h-4 w-4 text-green-500 ml-auto" />
                          </Button>
                        ))}
                    </div>
                    {cranes.filter((crane) => crane.status === "operational").length === 0 && (
                      <div className="text-center p-4">
                        <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                        <p>No operational cranes available for start-up</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
