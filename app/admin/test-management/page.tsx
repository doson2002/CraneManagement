"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
} from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"

export default function TestManagementPage() {
  const [isAddTestOpen, setIsAddTestOpen] = useState(false)
  const [isAddQuestionOpen, setIsAddQuestionOpen] = useState(false)

  const tests = [
    {
      id: "TEST001",
      name: "Crane Operator Certification",
      description: "Basic knowledge test for crane operators",
      questions: 10,
      passingScore: 70,
      lastUpdated: "2023-06-15",
      status: "active",
    },
    {
      id: "TEST002",
      name: "Safety Procedures Assessment",
      description: "Test on safety protocols and emergency procedures",
      questions: 15,
      passingScore: 80,
      lastUpdated: "2023-06-10",
      status: "active",
    },
    {
      id: "TEST003",
      name: "Maintenance Technician Qualification",
      description: "Technical assessment for maintenance personnel",
      questions: 20,
      passingScore: 75,
      lastUpdated: "2023-05-28",
      status: "draft",
    },
    {
      id: "TEST004",
      name: "Advanced Crane Operations",
      description: "Advanced techniques and procedures for experienced operators",
      questions: 25,
      passingScore: 85,
      lastUpdated: "2023-06-20",
      status: "active",
    },
    {
      id: "TEST005",
      name: "Equipment Inspection Certification",
      description: "Assessment for equipment inspection procedures",
      questions: 15,
      passingScore: 80,
      lastUpdated: "2023-06-05",
      status: "inactive",
    },
  ]

  const questions = [
    {
      id: "Q001",
      question: "What is the primary purpose of a limit switch on a crane?",
      options: [
        "To limit the speed of the crane",
        "To prevent the crane from operating beyond safe limits",
        "To control the power supply to the crane",
        "To limit the number of operations per day",
      ],
      correctAnswer: "To prevent the crane from operating beyond safe limits",
      difficulty: "medium",
      category: "Safety",
    },
    {
      id: "Q002",
      question: "What should be checked before starting a crane operation?",
      options: [
        "Only the fuel level",
        "Only the hydraulic system",
        "All safety systems, fluid levels, and surrounding area",
        "Only the structural components",
      ],
      correctAnswer: "All safety systems, fluid levels, and surrounding area",
      difficulty: "easy",
      category: "Operations",
    },
    {
      id: "Q003",
      question: "What is the minimum safe distance to maintain from power lines when operating a crane?",
      options: ["3 feet", "10 feet", "20 feet", "It depends on the voltage of the power lines"],
      correctAnswer: "It depends on the voltage of the power lines",
      difficulty: "hard",
      category: "Safety",
    },
    {
      id: "Q004",
      question: "What does the load chart of a crane indicate?",
      options: [
        "The age of the crane",
        "The maximum load the crane can lift at various radiuses",
        "The maintenance schedule",
        "The crane's fuel consumption",
      ],
      correctAnswer: "The maximum load the crane can lift at various radiuses",
      difficulty: "medium",
      category: "Operations",
    },
    {
      id: "Q005",
      question: "What is the purpose of outriggers on a mobile crane?",
      options: [
        "To increase the speed of the crane",
        "To provide stability during lifting operations",
        "To reduce fuel consumption",
        "To improve the crane's appearance",
      ],
      correctAnswer: "To provide stability during lifting operations",
      difficulty: "easy",
      category: "Equipment",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="default" className="bg-green-500">
            Active
          </Badge>
        )
      case "draft":
        return (
          <Badge variant="outline" className="border-amber-500 text-amber-500">
            Draft
          </Badge>
        )
      case "inactive":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            Inactive
          </Badge>
        )
      default:
        return null
    }
  }

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            Easy
          </Badge>
        )
      case "medium":
        return (
          <Badge variant="outline" className="border-amber-500 text-amber-500">
            Medium
          </Badge>
        )
      case "hard":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            Hard
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Test Management</h1>
        <div className="flex items-center gap-2">
          <Dialog open={isAddTestOpen} onOpenChange={setIsAddTestOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Test
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Test</DialogTitle>
                <DialogDescription>Create a new test for assessing user expertise</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="test-name" className="text-right">
                    Test Name
                  </Label>
                  <Input id="test-name" placeholder="Enter test name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="test-description" className="text-right">
                    Description
                  </Label>
                  <Textarea id="test-description" placeholder="Enter test description" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="passing-score" className="text-right">
                    Passing Score (%)
                  </Label>
                  <Input id="passing-score" type="number" placeholder="70" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="test-category" className="text-right">
                    Category
                  </Label>
                  <Input id="test-category" placeholder="e.g., Operations, Safety" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Status</Label>
                  <RadioGroup defaultValue="draft" className="col-span-3 flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="draft" id="status-draft" />
                      <Label htmlFor="status-draft">Draft</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="status-active" />
                      <Label htmlFor="status-active">Active</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="inactive" id="status-inactive" />
                      <Label htmlFor="status-inactive">Inactive</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddTestOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" onClick={() => setIsAddTestOpen(false)}>
                  Create Test
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search tests..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="tests" className="w-full">
        <TabsList>
          <TabsTrigger value="tests">Tests</TabsTrigger>
          <TabsTrigger value="questions">Question Bank</TabsTrigger>
          <TabsTrigger value="results">Test Results</TabsTrigger>
        </TabsList>

        <TabsContent value="tests" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
                  <div className="col-span-3">Test Name</div>
                  <div className="col-span-3">Description</div>
                  <div className="col-span-1">Questions</div>
                  <div className="col-span-1">Pass Score</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Last Updated</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y">
                  {tests.map((test) => (
                    <div key={test.id} className="grid grid-cols-12 gap-2 p-4">
                      <div className="col-span-3">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-500" />
                          <span className="font-medium">{test.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{test.id}</span>
                      </div>
                      <div className="col-span-3 flex items-center">
                        <p className="line-clamp-2 text-sm">{test.description}</p>
                      </div>
                      <div className="col-span-1 flex items-center">{test.questions}</div>
                      <div className="col-span-1 flex items-center">{test.passingScore}%</div>
                      <div className="col-span-1 flex items-center">{getStatusBadge(test.status)}</div>
                      <div className="col-span-2 flex items-center text-sm text-muted-foreground">
                        {test.lastUpdated}
                      </div>
                      <div className="col-span-1 flex items-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <FileText className="mr-2 h-4 w-4" />
                              View Test
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Test
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <ClipboardList className="mr-2 h-4 w-4" />
                              Manage Questions
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Users className="mr-2 h-4 w-4" />
                              View Results
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2 h-4 w-4" />
                              Delete Test
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions" className="mt-6">
          <div className="mb-4 flex justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                All Categories
              </Button>
              <Button variant="outline" size="sm">
                All Difficulties
              </Button>
            </div>
            <Dialog open={isAddQuestionOpen} onOpenChange={setIsAddQuestionOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Question
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Add New Question</DialogTitle>
                  <DialogDescription>Create a new question for the question bank</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="question-text">Question</Label>
                    <Textarea id="question-text" placeholder="Enter question text" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Input id="category" placeholder="e.g., Safety, Operations" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="difficulty">Difficulty</Label>
                      <select
                        id="difficulty"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Answer Options</Label>
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-2">
                          <RadioGroup defaultValue="1" className="flex items-center">
                            <RadioGroupItem value={i.toString()} id={`option-${i}`} />
                          </RadioGroup>
                          <Input placeholder={`Option ${i}`} className="flex-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddQuestionOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" onClick={() => setIsAddQuestionOpen(false)}>
                    Add Question
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {questions.map((question) => (
              <Card key={question.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base">{question.question}</CardTitle>
                      <CardDescription>
                        ID: {question.id} • Category: {question.category} • {getDifficultyBadge(question.difficulty)}
                      </CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Question
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ClipboardList className="mr-2 h-4 w-4" />
                          Add to Test
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete Question
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {question.options.map((option, index) => (
                      <div key={index} className="flex items-center gap-2 rounded-md border p-2">
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full ${
                            option === question.correctAnswer
                              ? "bg-green-100 text-green-600"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {option === question.correctAnswer ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            <span>{String.fromCharCode(65 + index)}</span>
                          )}
                        </div>
                        <span className={option === question.correctAnswer ? "font-medium" : ""}>{option}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="results" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
              <CardDescription>View and analyze test results by user and test</CardDescription>
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
                      <div className="col-span-2 font-medium">{result.user}</div>
                      <div className="col-span-3">{result.test}</div>
                      <div className="col-span-2">{result.date}</div>
                      <div className="col-span-1">{result.score}%</div>
                      <div className="col-span-1">
                        {result.result === "pass" ? (
                          <Badge className="bg-green-500">Pass</Badge>
                        ) : (
                          <Badge variant="outline" className="border-red-500 text-red-500">
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
  )
}
