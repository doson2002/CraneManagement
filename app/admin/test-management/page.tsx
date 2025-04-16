"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CheckCircle2,
  ClipboardList,
  Download,
  Edit,
  FileText,
  MoreHorizontal,
  Plus,
  Search,
  Trash,
  Users,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import TestDialogContent from "@/app/admin/test-management/components/tabs/test/test-dialog-content";
import TestDialog from "@/app/admin/test-management/components/tabs/test/test-dialog";
import TestTab from "@/app/admin/test-management/components/tabs/test/test-tab";
import QuestionTab from "@/app/admin/test-management/components/tabs/question/question-tab";

export interface Test {
  id: string;
  name: string;
  description: string;
  questions: number;
  passingScore: number;
  lastUpdated: string;
  status: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
  category: string;
}

export default function TestManagementPage() {
  const [isAddTestOpen, setIsAddTestOpen] = useState(false);
  const [isAddQuestionOpen, setIsAddQuestionOpen] = useState(false);





  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Test Management</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="tests" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="tests">Tests</TabsTrigger>
          <TabsTrigger value="questions">Question Bank</TabsTrigger>
          <TabsTrigger value="results">Test Results</TabsTrigger>
        </TabsList>

        <TestTab/>
        <QuestionTab/>
        

        <TabsContent value="results" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
              <CardDescription>
                View and analyze test results by user and test
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
                  <div className="col-span-2">User</div>
                  <div className="col-span-3">Test</div>
                  <div className="col-span-2">Date</div>
                  <div className="col-span-1">Score</div>
                  <div className="col-span-1">Result</div>
                  <div className="col-span-2">Time Taken</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y">
                  {[
                    {
                      user: "John Doe",
                      test: "Crane Operator Certification",
                      date: "2023-06-25",
                      score: 85,
                      result: "pass",
                      timeTaken: "45 minutes",
                    },
                    {
                      user: "Sarah Johnson",
                      test: "Safety Procedures Assessment",
                      date: "2023-06-24",
                      score: 92,
                      result: "pass",
                      timeTaken: "38 minutes",
                    },
                    {
                      user: "Mike Smith",
                      test: "Crane Operator Certification",
                      date: "2023-06-23",
                      score: 65,
                      result: "fail",
                      timeTaken: "50 minutes",
                    },
                    {
                      user: "Emily Davis",
                      test: "Maintenance Technician Qualification",
                      date: "2023-06-22",
                      score: 78,
                      result: "pass",
                      timeTaken: "55 minutes",
                    },
                    {
                      user: "David Wilson",
                      test: "Advanced Crane Operations",
                      date: "2023-06-21",
                      score: 88,
                      result: "pass",
                      timeTaken: "62 minutes",
                    },
                  ].map((result, index) => (
                    <div key={index} className="grid grid-cols-12 gap-2 p-4">
                      <div className="col-span-2 font-medium">
                        {result.user}
                      </div>
                      <div className="col-span-3">{result.test}</div>
                      <div className="col-span-2">{result.date}</div>
                      <div className="col-span-1">{result.score}%</div>
                      <div className="col-span-1">
                        {result.result === "pass" ? (
                          <Badge className="bg-green-500">Pass</Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="border-red-500 text-red-500"
                          >
                            Fail
                          </Badge>
                        )}
                      </div>
                      <div className="col-span-2">{result.timeTaken}</div>
                      <div className="col-span-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Search className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
