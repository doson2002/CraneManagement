"use client"
import TaskTabContent from "@/app/manager/maintenance/components/task-tab-content";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Download, Filter, Plus, Search } from "lucide-react";
import { useState } from "react";

export interface MaintenanceTask {
  id: string;
  crane: string;
  craneName: string;
  type: string;
  priority: string;
  status: string;
  date: string;
  time: string;
  assignee: {
    name: string;
    avatar: string;
  };
  location: string;
  description: string;
}

export default function ManageMaintenance() {
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
      description:
        "Perform regular inspection of all mechanical components and safety systems.",
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
      description:
        "Repair hydraulic system leak and check for any related damage.",
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
      description:
        "Inspect and test all safety systems including limit switches and emergency stops.",
    },
  ];

  return (
    <Card className="w-full h-full space-y-6">
      <CardHeader className=" grid gap-4 grid-cols-1">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Maintenance
          </CardTitle>
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
            <Input
              type="search"
              placeholder="Search maintenance tasks..."
              className="pl-8"
            />
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
      </CardHeader>
      <CardContent className="w-full">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="all">All Tasks</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="py-4">
            <TaskTabContent tasks={maintenanceTasks.filter(task => task.status === "scheduled")}/>
          </TabsContent>
          <TabsContent value="in-progress" className="py-4">
            <TaskTabContent tasks={maintenanceTasks.filter(task => task.status === "in-progress")}/>
          </TabsContent>
          <TabsContent value="completed" className="py-4">
            <TaskTabContent tasks={maintenanceTasks.filter(task => task.status === "completed")}/>
          </TabsContent>
          <TabsContent value="all" className="py-4">
            <TaskTabContent tasks={maintenanceTasks}/>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
