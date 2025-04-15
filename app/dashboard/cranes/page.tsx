"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ConeIcon as Crane,
  Download,
  Filter,
  MapPin,
  Plus,
  Search,
  Settings,
  XCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CranesPage() {
  const [view, setView] = useState("grid")

  const cranes = [
    {
      id: "HC-123",
      name: "Heavy Crane 123",
      type: "Tower Crane",
      status: "operational",
      location: "Site A - North Tower",
      lastMaintenance: "2023-04-01",
      nextMaintenance: "2023-07-01",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "TC-456",
      name: "Tower Crane 456",
      type: "Tower Crane",
      status: "maintenance",
      location: "Site B - Main Building",
      lastMaintenance: "2023-03-15",
      nextMaintenance: "2023-06-15",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "HC-789",
      name: "Heavy Crane 789",
      type: "Mobile Crane",
      status: "inactive",
      location: "Warehouse",
      lastMaintenance: "2023-02-20",
      nextMaintenance: "2023-05-20",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "MC-234",
      name: "Mobile Crane 234",
      type: "Mobile Crane",
      status: "operational",
      location: "Site C - Foundation",
      lastMaintenance: "2023-03-30",
      nextMaintenance: "2023-06-30",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "TC-567",
      name: "Tower Crane 567",
      type: "Tower Crane",
      status: "operational",
      location: "Site A - South Tower",
      lastMaintenance: "2023-04-05",
      nextMaintenance: "2023-07-05",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "HC-890",
      name: "Heavy Crane 890",
      type: "Heavy Duty Crane",
      status: "maintenance",
      location: "Site D - Bridge Construction",
      lastMaintenance: "2023-03-25",
      nextMaintenance: "2023-06-25",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />
      case "maintenance":
        return <AlertCircle className="h-4 w-4 text-amber-500" />
      case "inactive":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational"
      case "maintenance":
        return "Under Maintenance"
      case "inactive":
        return "Inactive"
      default:
        return status
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-100 text-green-800"
      case "maintenance":
        return "bg-amber-100 text-amber-800"
      case "inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Cranes</h1>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Crane
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search cranes..." className="pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Filter
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="h-9 w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="operational">Operational</SelectItem>
              <SelectItem value="maintenance">Under Maintenance</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="h-9 w-[180px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="tower">Tower Crane</SelectItem>
              <SelectItem value="mobile">Mobile Crane</SelectItem>
              <SelectItem value="heavy">Heavy Duty Crane</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center rounded-md border bg-white p-1">
            <Button
              variant={view === "grid" ? "secondary" : "ghost"}
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setView("grid")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
            </Button>
            <Button
              variant={view === "list" ? "secondary" : "ghost"}
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setView("list")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="8" x2="21" y1="6" y2="6" />
                <line x1="8" x2="21" y1="12" y2="12" />
                <line x1="8" x2="21" y1="18" y2="18" />
                <line x1="3" x2="3.01" y1="6" y2="6" />
                <line x1="3" x2="3.01" y1="12" y2="12" />
                <line x1="3" x2="3.01" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Cranes</TabsTrigger>
          <TabsTrigger value="operational">Operational</TabsTrigger>
          <TabsTrigger value="maintenance">Under Maintenance</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          {view === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              
            </div>
          ) : (
            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
                <div className="col-span-3">Name</div>
                <div className="col-span-2">ID</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Location</div>
                <div className="col-span-1">Actions</div>
              </div>
              <div className="divide-y">
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="operational" className="mt-6">
          {view === "grid" ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cranes
                .filter((crane) => crane.status === "operational")
                .map((crane) => (
                  <Card key={crane.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image src={crane.image || "/placeholder.svg"} alt={crane.name} fill className="object-cover" />
                      <div
                        className={`absolute right-2 top-2 rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(crane.status)}`}
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
                          <Crane className="h-4 w-4 text-muted-foreground" />
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
                        <Link href={`/dashboard/cranes/${crane.id}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          ) : (
            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
                <div className="col-span-3">Name</div>
                <div className="col-span-2">ID</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2">Location</div>
                <div className="col-span-1">Actions</div>
              </div>
              <div className="divide-y">
                {cranes
                  .filter((crane) => crane.status === "operational")
                  .map((crane) => (
                    <div key={crane.id} className="grid grid-cols-12 gap-2 p-4">
                      <div className="col-span-3 font-medium">{crane.name}</div>
                      <div className="col-span-2">{crane.id}</div>
                      <div className="col-span-2">{crane.type}</div>
                      <div className="col-span-2">
                        <div
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(crane.status)}`}
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
                  ))}
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="maintenance" className="mt-6">
          {/* Similar content for maintenance tab */}
          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
              <div className="col-span-3">Name</div>
              <div className="col-span-2">ID</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Location</div>
              <div className="col-span-1">Actions</div>
            </div>
            <div className="divide-y">
              {cranes
                .filter((crane) => crane.status === "maintenance")
                .map((crane) => (
                  <div key={crane.id} className="grid grid-cols-12 gap-2 p-4">
                    <div className="col-span-3 font-medium">{crane.name}</div>
                    <div className="col-span-2">{crane.id}</div>
                    <div className="col-span-2">{crane.type}</div>
                    <div className="col-span-2">
                      <div
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(crane.status)}`}
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
                ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="inactive" className="mt-6">
          {/* Similar content for inactive tab */}
          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
              <div className="col-span-3">Name</div>
              <div className="col-span-2">ID</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Location</div>
              <div className="col-span-1">Actions</div>
            </div>
            <div className="divide-y">
              {cranes
                .filter((crane) => crane.status === "inactive")
                .map((crane) => (
                  <div key={crane.id} className="grid grid-cols-12 gap-2 p-4">
                    <div className="col-span-3 font-medium">{crane.name}</div>
                    <div className="col-span-2">{crane.id}</div>
                    <div className="col-span-2">{crane.type}</div>
                    <div className="col-span-2">
                      <div
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(crane.status)}`}
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
                ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
