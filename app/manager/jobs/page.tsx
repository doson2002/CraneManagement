"use client";

import { useState } from "react";
import { CalendarIcon, FilterIcon, PlusIcon, SearchIcon } from "lucide-react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import JobTable from "@/app/manager/jobs/components/job-table";

const jobs = [
  {
    id: "JOB-1001",
    title: "Crane Installation at Construction Site A",
    client: "ABC Construction",
    location: "District 1, HCMC",
    startDate: "2023-10-15",
    endDate: "2023-10-20",
    status: "In Progress",
    cranes: ["Tower Crane TC-5", "Mobile Crane MC-3"],
    operators: ["Nguyen Van A", "Tran Thi B"],
  },
  {
    id: "JOB-1002",
    title: "Heavy Equipment Lifting",
    client: "XYZ Manufacturing",
    location: "District 7, HCMC",
    startDate: "2023-10-18",
    endDate: "2023-10-19",
    status: "Scheduled",
    cranes: ["Mobile Crane MC-2"],
    operators: ["Le Van C"],
  },
  {
    id: "JOB-1003",
    title: "Building Demolition Support",
    client: "City Development Corp",
    location: "District 2, HCMC",
    startDate: "2023-10-10",
    endDate: "2023-10-14",
    status: "Completed",
    cranes: ["Crawler Crane CC-1", "Tower Crane TC-3"],
    operators: ["Pham Van D", "Hoang Thi E"],
  },
  {
    id: "JOB-1004",
    title: "Bridge Construction Support",
    client: "Infrastructure Development",
    location: "Thu Duc City",
    startDate: "2023-10-25",
    endDate: "2023-11-05",
    status: "Scheduled",
    cranes: ["Tower Crane TC-1", "Mobile Crane MC-5"],
    operators: ["Nguyen Van F", "Tran Van G"],
  },
  {
    id: "JOB-1005",
    title: "Port Container Handling",
    client: "Saigon Port Authority",
    location: "District 4, HCMC",
    startDate: "2023-10-12",
    endDate: "2023-10-17",
    status: "In Progress",
    cranes: ["Mobile Crane MC-1", "Mobile Crane MC-4"],
    operators: ["Le Thi H", "Pham Van I"],
  },
];

export default function JobsPage() {
  const [isAddJobOpen, setIsAddJobOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Scheduled":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Management</h1>
        <Dialog open={isAddJobOpen} onOpenChange={setIsAddJobOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" />
              Add New Job
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Job</DialogTitle>
              <DialogDescription>
                Enter the details for the new job assignment.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input id="job-title" placeholder="Enter job title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client">Client</Label>
                  <Input id="client" placeholder="Enter client name" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <div className="relative">
                    <Input id="start-date" type="date" />
                    <CalendarIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <div className="relative">
                    <Input id="end-date" type="date" />
                    <CalendarIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter job location" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cranes">Assign Cranes</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cranes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tc-1">Tower Crane TC-1</SelectItem>
                      <SelectItem value="tc-3">Tower Crane TC-3</SelectItem>
                      <SelectItem value="tc-5">Tower Crane TC-5</SelectItem>
                      <SelectItem value="mc-1">Mobile Crane MC-1</SelectItem>
                      <SelectItem value="mc-2">Mobile Crane MC-2</SelectItem>
                      <SelectItem value="mc-3">Mobile Crane MC-3</SelectItem>
                      <SelectItem value="mc-4">Mobile Crane MC-4</SelectItem>
                      <SelectItem value="mc-5">Mobile Crane MC-5</SelectItem>
                      <SelectItem value="cc-1">Crawler Crane CC-1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="operators">Assign Operators</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select operators" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="op-1">Nguyen Van A</SelectItem>
                      <SelectItem value="op-2">Tran Thi B</SelectItem>
                      <SelectItem value="op-3">Le Van C</SelectItem>
                      <SelectItem value="op-4">Pham Van D</SelectItem>
                      <SelectItem value="op-5">Hoang Thi E</SelectItem>
                      <SelectItem value="op-6">Nguyen Van F</SelectItem>
                      <SelectItem value="op-7">Tran Van G</SelectItem>
                      <SelectItem value="op-8">Le Thi H</SelectItem>
                      <SelectItem value="op-9">Pham Van I</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Enter any additional notes or requirements"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddJobOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddJobOpen(false)}>Save Job</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <JobTable jobs={jobs} />
    </div>
  );
}
