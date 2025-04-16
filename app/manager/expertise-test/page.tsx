"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, ChevronRight, HelpCircle, Info } from "lucide-react"

export default function ExpertiseTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(""))
  const [testCompleted, setTestCompleted] = useState(false)
  const [score, setScore] = useState(0)

  const questions = [
    {
      question: "What is the primary purpose of a limit switch on a crane?",
      options: [
        "To limit the speed of the crane",
        "To prevent the crane from operating beyond safe limits",
        "To control the power supply to the crane",
        "To limit the number of operations per day",
      ],
      correctAnswer: "To prevent the crane from operating beyond safe limits",
    },
    {
      question: "What should be checked before starting a crane operation?",
      options: [
        "Only the fuel level",
        "Only the hydraulic system",
        "All safety systems, fluid levels, and surrounding area",
        "Only the structural components",
      ],
      correctAnswer: "All safety systems, fluid levels, and surrounding area",
    },
    {
      question: "What is the minimum safe distance to maintain from power lines when operating a crane?",
      options: ["3 feet", "10 feet", "20 feet", "It depends on the voltage of the power lines"],
      correctAnswer: "It depends on the voltage of the power lines",
    },
    {
      question: "What does the load chart of a crane indicate?",
      options: [
        "The age of the crane",
        "The maximum load the crane can lift at various radiuses",
        "The maintenance schedule",
        "The crane's fuel consumption",
      ],
      correctAnswer: "The maximum load the crane can lift at various radiuses",
    },
    {
      question: "What is the purpose of outriggers on a mobile crane?",
      options: [
        "To increase the speed of the crane",
        "To provide stability during lifting operations",
        "To reduce fuel consumption",
        "To improve the crane's appearance",
      ],
      correctAnswer: "To provide stability during lifting operations",
    },
    {
      question: "What should you do if you notice a hydraulic leak during crane operation?",
      options: [
        "Continue operation but monitor the leak",
        "Immediately stop operation and report the issue",
        "Increase the hydraulic pressure to compensate",
        "Reduce the load and continue operation",
      ],
      correctAnswer: "Immediately stop operation and report the issue",
    },
    {
      question: "What is the purpose of a pre-use inspection?",
      options: [
        "To comply with company policy only",
        "To identify potential issues before they cause accidents or failures",
        "To delay the start of work",
        "To test the operator's knowledge",
      ],
      correctAnswer: "To identify potential issues before they cause accidents or failures",
    },
    {
      question: "What weather conditions would typically require stopping crane operations?",
      options: ["Light rain", "Temperatures below 50°F", "High winds exceeding safe limits", "Cloudy conditions"],
      correctAnswer: "High winds exceeding safe limits",
    },
    {
      question: "What is the purpose of a tagline when lifting loads?",
      options: [
        "To increase the weight capacity",
        "To control the load and prevent rotation or swinging",
        "To attach the identification tag to the load",
        "To measure the height of the lift",
      ],
      correctAnswer: "To control the load and prevent rotation or swinging",
    },
    {
      question: "What certification is typically required for crane operators?",
      options: [
        "No certification is required",
        "A driver's license only",
        "OSHA or equivalent certification specific to the type of crane",
        "A general construction certification",
      ],
      correctAnswer: "OSHA or equivalent certification specific to the type of crane",
    },
  ]

  const handleAnswerChange = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate score
      let correctCount = 0
      answers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
          correctCount++
        }
      })
      setScore((correctCount / questions.length) * 100)
      setTestCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Professional Expertise Test</h1>
      </div>

      {testCompleted ? (
        <Card>
          <CardHeader>
            <CardTitle>Test Results</CardTitle>
            <CardDescription>Your professional expertise assessment is complete</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center justify-center space-y-2 py-6">
              <div className="relative h-32 w-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{Math.round(score)}%</span>
                </div>
                <svg className="h-32 w-32" viewBox="0 0 100 100">
                  <circle className="stroke-muted" cx="50" cy="50" r="40" fill="transparent" strokeWidth="8" />
                  <circle
                    className={`${score >= 70 ? "stroke-green-500" : "stroke-amber-500"}`}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * score) / 100}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold">{score >= 70 ? "Congratulations!" : "More Training Required"}</h2>
              <p className="text-center text-muted-foreground">
                {score >= 70
                  ? "You have demonstrated sufficient expertise to operate cranes."
                  : "You need additional training before operating cranes."}
              </p>
            </div>

            <Alert className={score >= 70 ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}>
              {score >= 70 ? (
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              ) : (
                <Info className="h-4 w-4 text-amber-600" />
              )}
              <AlertTitle className={score >= 70 ? "text-green-600" : "text-amber-600"}>
                {score >= 70 ? "Certification Valid" : "Certification Pending"}
              </AlertTitle>
              <AlertDescription className={score >= 70 ? "text-green-700" : "text-amber-700"}>
                {score >= 70
                  ? "Your certification is valid for 1 month from today."
                  : "Please contact your supervisor for additional training."}
              </AlertDescription>
            </Alert>

            <div className="space-y-2">
              <h3 className="font-medium">Performance Summary</h3>
              <div className="rounded-md border p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Questions</p>
                    <p className="font-medium">{questions.length}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Correct Answers</p>
                    <p className="font-medium">{Math.round((score / 100) * questions.length)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Score</p>
                    <p className="font-medium">{Math.round(score)}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className={`font-medium ${score >= 70 ? "text-green-600" : "text-amber-600"}`}>
                      {score >= 70 ? "Passed" : "Failed"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">View Detailed Results</Button>
            <Button>Continue to Dashboard</Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>
              Question {currentQuestion + 1} of {questions.length}
            </CardTitle>
            <CardDescription>Select the best answer for each question</CardDescription>
            <Progress value={progress} className="mt-2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <h3 className="font-medium">{questions[currentQuestion].question}</h3>
              </div>

              <RadioGroup value={answers[currentQuestion]} onValueChange={handleAnswerChange} className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex items-center rounded-md bg-blue-50 p-4 text-blue-800">
                <HelpCircle className="mr-2 h-5 w-5 text-blue-500" />
                <p className="text-sm">
                  Answer all questions to the best of your knowledge. Your results will determine your authorization
                  level.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
              Previous
            </Button>
            <Button onClick={handleNext} disabled={!answers[currentQuestion]} className="gap-1">
              {currentQuestion === questions.length - 1 ? "Complete Test" : "Next"}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
