"use client"

import { CardFooter } from "@/components/ui/card"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  Camera,
  Clock,
  ConeIcon,
  FileCheck,
  MapPin,
  Upload,
  User,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import StatusBadge from "@/app/manager/maintenance/components/status-badge"
import PriorityBadge from "@/app/manager/maintenance/components/priority-badge"

export default function MaintenanceDetailPage() {
  const {id} = useParams()
  const maintenance = {
    id: id,
    craneId: "1234",
    craneName: "Tower Crane 1234",
    type: "Regular Inspection",
    priority: "medium",
    status: "in-progress",
    date: "2023-11-15",
    time: "10:00 AM",
    assignee: {
      name: "Jane Smith",
      avatar: "/images/avatars/10.png",
    },
    location: "Construction Site B",
    description: "Inspect and maintain the tower crane to ensure safe operation.",
    checklist: [
      { id: "1", task: "Check all safety devices", completed: true },
      { id: "2", task: "Inspect wire ropes", completed: false },
      { id: "3", task: "Lubricate moving parts", completed: true },
    ],
    notes: "No issues found during inspection.",
  }
  const router = useRouter()
  const maintenanceId = id as string
  const [status, setStatus] = useState("in-progress")
  const [photo, setPhoto] = useState<string | null>(null)

  // Mock data for the maintenance task
  const maintenanceTask = {
    id: maintenanceId,
    crane: "HC-123",
    craneName: "Heavy Crane 123",
    type: "Regular Inspection",
    priority: "medium",
    status: "in-progress",
    date: "2023-07-01",
    time: "10:00 AM",
    assignee: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    location: "Site A - North Tower",
    description: "Perform regular inspection of all mechanical components and safety systems.",
    checklist: [
      { id: "check-1", task: "Inspect structural components", completed: true },
      { id: "check-2", task: "Check hydraulic system for leaks", completed: true },
      { id: "check-3", task: "Test all safety systems", completed: false },
      { id: "check-4", task: "Inspect cables and pulleys", completed: false },
      { id: "check-5", task: "Check fluid levels", completed: true },
      { id: "check-6", task: "Lubricate moving parts", completed: false },
      { id: "check-7", task: "Test control systems", completed: false },
      { id: "check-8", task: "Inspect electrical connections", completed: false },
    ],
    parts: [
      { id: "part-1", name: "Hydraulic Oil", quantity: 5, unit: "liters", used: true },
      { id: "part-2", name: "Oil Filter", quantity: 1, unit: "piece", used: true },
      { id: "part-3", name: "Grease", quantity: 2, unit: "kg", used: false },
      { id: "part-4", name: "Cable Tensioner", quantity: 1, unit: "piece", used: false },
    ],
    notes: "",
  }

  const handleTakePhoto = () => {
    // In a real app, this would access the camera
    // For demo purposes, we'll just set a placeholder
    setPhoto("/placeholder.svg?height=300&width=400")
  }

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus)
  }

  const handleComplete = () => {
    // In a real app, this would submit the maintenance report
    router.push("/manager/maintenance")
  }

  const completedItems = maintenanceTask.checklist.filter((item) => item.completed).length
  const totalItems = maintenanceTask.checklist.length
  const progress = Math.round((completedItems / totalItems) * 100)

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Maintenance Task</h1>
          <StatusBadge status={maintenanceTask.status}/>
        </div>
        <div className="flex items-center gap-2">
          <Select value={status} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Update Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="scheduled">Scheduled</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleComplete}>Complete Task</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>{maintenanceTask.type}</CardTitle>
            <CardDescription>
              {maintenanceTask.crane}: {maintenanceTask.craneName}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Date:</span>
                  <span>{maintenanceTask.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Time:</span>
                  <span>{maintenanceTask.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Location:</span>
                  <span>{maintenanceTask.location}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Assignee:</span>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        src={maintenanceTask.assignee.avatar || "/placeholder.svg"}
                        alt={maintenanceTask.assignee.name}
                      />
                      <AvatarFallback>{maintenanceTask.assignee.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{maintenanceTask.assignee.name}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Priority:</span>
                  <span><PriorityBadge priority={maintenanceTask.priority}/></span>
                </div>
                <div className="flex items-center gap-2">
                  <ConeIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Crane ID:</span>
                  <span>{maintenanceTask.crane}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Description</h3>
              <p className="rounded-md border bg-muted/50 p-3 text-sm">{maintenanceTask.description}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Progress</h3>
                <span className="text-sm">
                  {completedItems} of {totalItems} tasks completed
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Tabs defaultValue="checklist" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="checklist">Checklist</TabsTrigger>
                <TabsTrigger value="parts">Parts & Materials</TabsTrigger>
                <TabsTrigger value="photos">Photos & Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="checklist" className="space-y-4 pt-4">
                <div className="rounded-md border p-4">
                  <div className="space-y-4">
                    {maintenanceTask.checklist.map((item) => (
                      <div key={item.id} className="flex items-start space-x-2">
                        <Checkbox id={item.id} checked={item.completed} />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor={item.id}
                            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                              item.completed ? "line-through text-muted-foreground" : ""
                            }`}
                          >
                            {item.task}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-task">Add Task</Label>
                  <div className="flex gap-2">
                    <Input id="new-task" placeholder="Enter new task" />
                    <Button>Add</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="parts" className="space-y-4 pt-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
                    <div className="col-span-5">Part Name</div>
                    <div className="col-span-2">Quantity</div>
                    <div className="col-span-2">Unit</div>
                    <div className="col-span-3">Status</div>
                  </div>
                  <div className="divide-y">
                    {maintenanceTask.parts.map((part) => (
                      <div key={part.id} className="grid grid-cols-12 gap-2 p-4">
                        <div className="col-span-5 font-medium">{part.name}</div>
                        <div className="col-span-2">{part.quantity}</div>
                        <div className="col-span-2">{part.unit}</div>
                        <div className="col-span-3">
                          <div className="flex items-center gap-2">
                            <Checkbox id={`used-${part.id}`} checked={part.used} />
                            <label
                              htmlFor={`used-${part.id}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {part.used ? "Used" : "Not Used"}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Add Part</Label>
                  <div className="grid gap-4 md:grid-cols-4">
                    <Input placeholder="Part name" />
                    <Input type="number" placeholder="Quantity" />
                    <Input placeholder="Unit" />
                    <Button>Add Part</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="photos" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label>Take Photo</Label>
                  <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-6">
                    {photo ? (
                      <div className="relative h-[200px] w-full">
                        <Image
                          src={photo || "/placeholder.svg"}
                          alt="Maintenance photo"
                          fill
                          className="object-contain"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute right-2 top-2"
                          onClick={() => setPhoto(null)}
                        >
                          Retake
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="rounded-full bg-muted p-4">
                          <Camera className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-sm text-muted-foreground">Take a photo to document the maintenance work</p>
                        <Button onClick={handleTakePhoto}>Take Photo</Button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Upload Documents</Label>
                  <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-6">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <div className="rounded-full bg-muted p-4">
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Upload maintenance reports, certificates, or other documents
                      </p>
                      <Button variant="outline">Upload Files</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
              <CardDescription>Add notes about the maintenance task</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter notes about the maintenance work, findings, or recommendations"
                className="min-h-[150px]"
                value={maintenanceTask.notes}
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Save Notes
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Completion Report</CardTitle>
              <CardDescription>Submit when maintenance is complete</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="completion-date">Completion Date</Label>
                <Input id="completion-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="completion-time">Completion Time</Label>
                <Input id="completion-time" type="time" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="outcome">Outcome</Label>
                <Select>
                  <SelectTrigger id="outcome">
                    <SelectValue placeholder="Select outcome" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="completed">Completed Successfully</SelectItem>
                    <SelectItem value="partial">Partially Completed</SelectItem>
                    <SelectItem value="follow-up">Requires Follow-up</SelectItem>
                    <SelectItem value="escalated">Escalated to Specialist</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="ready-for-operation" />
                  <label
                    htmlFor="ready-for-operation"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Crane is ready for operation
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleComplete}>
                <FileCheck className="mr-2 h-4 w-4" />
                Submit Completion Report
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
