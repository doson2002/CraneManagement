"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Upload } from "lucide-react";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Maintenance Task</CardTitle>
        <CardDescription>
          Schedule a new maintenance task for a crane
        </CardDescription>
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
                  <SelectItem value="hc-123">
                    HC-123: Heavy Crane 123
                  </SelectItem>
                  <SelectItem value="tc-456">
                    TC-456: Tower Crane 456
                  </SelectItem>
                  <SelectItem value="hc-789">
                    HC-789: Heavy Crane 789
                  </SelectItem>
                  <SelectItem value="mc-234">
                    MC-234: Mobile Crane 234
                  </SelectItem>
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
                  <SelectItem value="component">
                    Component Replacement
                  </SelectItem>
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
              <Input
                id="description"
                placeholder="Enter maintenance description"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="attachments">Attachments</Label>
              <div className="flex items-center gap-2">
                <Input id="attachments" type="file" className="hidden" />
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    document.getElementById("attachments")?.click()
                  }
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
  );
}
