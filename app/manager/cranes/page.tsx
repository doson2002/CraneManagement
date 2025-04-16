"use client";
import CraneTabs from "@/app/manager/cranes/components/crane-tabs";
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
import { ChevronDown, Download, Filter, Plus, Search } from "lucide-react";
import { useState } from "react";

export interface Crane {
  id: string;
  name: string;
  type: string;
  status: string;
  location: string;
  lastMaintenance: string;
  nextMaintenance: string;
  image: string;
}

export default function ManagerCranePage() {
  const [view, setView] = useState("grid");

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
  ];

  return (
    <Card className="w-full p-2">
      <CardHeader className="flex items-center justify-between">
        <div className="flex justify-between items-center w-full">
          <CardTitle className="text-2xl font-bold">Cranes</CardTitle>
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

        <div className="flex flex-col gap-4 md:flex-row md:items-cente w-full">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search cranes..."
              className="pl-8"
            />
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
              <Button variant="secondary" size="sm" className="h-8 w-8 p-0" onClick={() => setView("grid")}>
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
              <Button variant="secondary" size="sm" className="h-8 w-8 p-0" onClick={() => setView("list")}>
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
      </CardHeader>
      <CardContent className="w-full">
        <CraneTabs cranes={cranes} view={view} />
      </CardContent>
    </Card>
  );
}
