"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  Download,
  Filter,
  MapPin,
  Plus,
  Search,
  PenToolIcon as Tool,
  Upload,
  User,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function MaintenancePage() {
  const [view, setView] = useState("upcoming")

  const maintenanceTasks = [
    {
      id: "MT-001",
      crane: "HC-123",
      craneName: "Heavy Crane 123",
      type: "Regular Inspection",
      priority: "medium",
      status: "scheduled",
      date: "2023-07-01",
      time: "10:00 AM",
      assignee: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      location: "Site A - North Tower",
      description: "Perform regular inspection of all mechanical components and safety systems.",
    },
    {
      id: "MT-002",
      crane: "TC-456",
      craneName: "Tower Crane 456",
      type: "Oil Change",
      priority: "low",
      status: "in-progress",
      date: "2023-06-28",
      time: "2:00 PM",
      assignee: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      location: "Site B - Main Building",
      description: "Change hydraulic oil and replace filters.",
    },
    {
      id: "MT-003",
      crane: "HC-789",
      craneName: "Heavy Crane 789",
      type: "Emergency Repair",
      priority: "high",
      status: "scheduled",
      date: "2023-06-27",
      time: "9:00 AM",
      assignee: {
        name: "Mike Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      location: "Warehouse",
      description: "Repair hydraulic system leak and check for any related damage.",
    },
    {
      id: "MT-004",
      crane: "MC-234",
      craneName: "Mobile Crane 234",
      type: "Annual Certification",
      priority: "medium",
      status: "completed",
      date: "2023-06-15",
      time: "11:00 AM",
      assignee: {
        name: "Emily Davis",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      location: "Site C - Foundation",
      description: "Perform annual certification inspection and load testing.",
    },
    {
      id: "MT-005",
      crane: "TC-567",
      craneName: "Tower Crane 567",
      type: "Component Replacement",
      priority: "high",
      status: "completed",
      date: "2023-06-10",
      time: "3:00 PM",
      assignee: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      location: "Site A - South Tower",
      description: "Replace worn cable and pulley system.",
    },
    {
      id: "MT-006",
      crane: "HC-890",
      craneName: "Heavy Crane 890",
      type: "Safety System Check",
      priority: "high",
      status: "in-progress",
      date: "2023-06-25",
      time: "8:30 AM",
      assignee: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      location: "Site D - Bridge Construction",
      description: "Inspect and test all safety systems including limit switches and emergency stops.",
    },
  ]

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>
      case "medium":
        return (
          <Badge variant="default" className="bg-amber-500">
            Medium
          </Badge>
        )
      case "low":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            Low
          </Badge>
        )
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            Scheduled
          </Badge>
        )
      case "in-progress":
        return (
          <Badge variant="default" className="bg-amber-500">
            In Progress
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="default" className="bg-green-500">
            Completed
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Maintenance</h1>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Maintenance Task
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
          <Input type="search" placeholder="Search maintenance tasks..." className="pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="h-9 w-[180px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="h-9 w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="upcoming" onValueChange={setView} className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {maintenanceTasks
              .filter((task) => task.status === "scheduled")
              .map((task) => (
                <Card key={task.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{task.type}</CardTitle>
                        <CardDescription>
                          {task.crane}: {task.craneName}
                        </CardDescription>
                      </div>
                      {getPriorityBadge(task.priority)}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{task.date}</span>
                        <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                        <span>{task.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{task.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
                            <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{task.assignee.name}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Description</p>
                        <p className="line-clamp-2">{task.description}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div>{getStatusBadge(task.status)}</div>
                    <Link href={`/dashboard/maintenance/${task.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {maintenanceTasks
              .filter((task) => task.status === "in-progress")
              .map((task) => (
                <Card key={task.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{task.type}</CardTitle>
                        <CardDescription>
                          {task.crane}: {task.craneName}
                        </CardDescription>
                      </div>
                      {getPriorityBadge(task.priority)}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{task.date}</span>
                        <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                        <span>{task.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{task.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
                            <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{task.assignee.name}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Description</p>
                        <p className="line-clamp-2">{task.description}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div>{getStatusBadge(task.status)}</div>
                    <Link href={`/dashboard/maintenance/${task.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {maintenanceTasks
              .filter((task) => task.status === "completed")
              .map((task) => (
                <Card key={task.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{task.type}</CardTitle>
                        <CardDescription>
                          {task.crane}: {task.craneName}
                        </CardDescription>
                      </div>
                      {getPriorityBadge(task.priority)}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{task.date}</span>
                        <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                        <span>{task.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{task.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
                            <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{task.assignee.name}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Description</p>
                        <p className="line-clamp-2">{task.description}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div>{getStatusBadge(task.status)}</div>
                    <Link href={`/dashboard/maintenance/${task.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="all" className="mt-6">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
              <div className="col-span-1">ID</div>
              <div className="col-span-2">Crane</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-1">Priority</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-2">Date & Time</div>
              <div className="col-span-2">Assignee</div>
              <div className="col-span-1">Actions</div>
            </div>
            <div className="divide-y">
              {maintenanceTasks.map((task) => (
                <div key={task.id} className="grid grid-cols-12 gap-2 p-4">
                  <div className="col-span-1 font-medium">{task.id}</div>
                  <div className="col-span-2">{task.crane}</div>
                  <div className="col-span-2">{task.type}</div>
                  <div className="col-span-1">{getPriorityBadge(task.priority)}</div>
                  <div className="col-span-1">{getStatusBadge(task.status)}</div>
                  <div className="col-span-2">
                    <div className="flex flex-col">
                      <span>{task.date}</span>
                      <span className="text-xs text-muted-foreground">{task.time}</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
                        <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{task.assignee.name}</span>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex items-center gap-2">
                      <Link href={`/dashboard/maintenance/${task.id}`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Search className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Tool className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {view !== "all" && (
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Maintenance Task</CardTitle>
              <CardDescription>Schedule a new maintenance task for a crane</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="crane">Crane</Label>
                    <Select>
                      <SelectTrigger id="crane">
                        <SelectValue placeholder="Select crane" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hc-123">HC-123: Heavy Crane 123</SelectItem>
                        <SelectItem value="tc-456">TC-456: Tower Crane 456</SelectItem>
                        <SelectItem value="hc-789">HC-789: Heavy Crane 789</SelectItem>
                        <SelectItem value="mc-234">MC-234: Mobile Crane 234</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Maintenance Type</Label>
                    <Select>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inspection">Regular Inspection</SelectItem>
                        <SelectItem value="oil-change">Oil Change</SelectItem>
                        <SelectItem value="repair">Repair</SelectItem>
                        <SelectItem value="certification">Certification</SelectItem>
                        <SelectItem value="component">Component Replacement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select>
                      <SelectTrigger id="priority">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assignee">Assignee</Label>
                    <Select>
                      <SelectTrigger id="assignee">
                        <SelectValue placeholder="Select assignee" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john">John Doe</SelectItem>
                        <SelectItem value="sarah">Sarah Johnson</SelectItem>
                        <SelectItem value="mike">Mike Smith</SelectItem>
                        <SelectItem value="emily">Emily Davis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Enter maintenance description" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="attachments">Attachments</Label>
                    <div className="flex items-center gap-2">
                      <Input id="attachments" type="file" className="hidden" />
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => document.getElementById("attachments")?.click()}
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Files
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Create Maintenance Task</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}
