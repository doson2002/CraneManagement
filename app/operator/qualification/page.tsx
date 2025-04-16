"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function QualificationTest() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [testCompleted, setTestCompleted] = useState(false);

  // Sample questions for the professional qualification test
  const questions = [
    {
      id: 1,
      question:
        "What is the maximum safe working load (SWL) for a standard tower crane?",
      options: [
        "It depends on the specific crane model and configuration",
        "Always 10 tons regardless of configuration",
        "There is no limit as long as the crane is properly maintained",
        "Maximum 5 tons for all tower cranes",
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "What should be checked before starting a crane operation?",
      options: [
        "Only the fuel level",
        "Weather conditions, load weight, and crane stability",
        "Just the operator's certification",
        "Nothing if the crane was used the previous day",
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "How often should a crane's safety systems be tested?",
      options: [
        "Once a year",
        "Only when there's a malfunction",
        "Daily before operation",
        "Every 5 years",
      ],
      correctAnswer: 2,
    },
    {
      id: 4,
      question:
        "What is the proper procedure when a crane malfunctions during operation?",
      options: [
        "Continue operation but at a slower pace",
        "Immediately stop operation, secure the load, and report the issue",
        "Finish the current job and then report the issue",
        "Increase the speed to finish the job quickly",
      ],
      correctAnswer: 1,
    },
    {
      id: 5,
      question:
        "What documentation must be available on-site during crane operation?",
      options: [
        "Only the operator's personal ID",
        "Nothing is required to be on-site",
        "Operator certification, crane inspection records, and load charts",
        "Just the crane purchase receipt",
      ],
      correctAnswer: 2,
    },
  ];

  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [currentQuestion]: Number.parseInt(value),
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Clear the selection for the next question if it hasn't been answered yet

      const radioInputs = document.querySelectorAll('input[type="radio"]');
      radioInputs.forEach(
        (input) => ((input as HTMLInputElement).checked = false)
      );
    } else {
      // Calculate score and determine if passed
      setTestCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleComplete = () => {
    router.push("/operator/dashboard");
  };

  // Calculate the score if test is completed
  const calculateScore = () => {
    let correctAnswers = 0;
    Object.keys(answers).forEach((questionIndex) => {
      const index = Number(questionIndex);
      if (answers[index] === questions[index].correctAnswer) {
        correctAnswers++;
      }
    });
    return (correctAnswers / questions.length) * 100;
  };

  const score = testCompleted ? calculateScore() : 0;
  const passed = score >= 70; // Pass threshold is 70%

  return (
    <div className="min-h-fit flex flex-col w-full">
      <div className="container py-4">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Login</span>
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-7xl">
          <CardHeader>
            <CardTitle className="text-2xl">
              Professional Qualification Test
            </CardTitle>
            <CardDescription>
              {!testCompleted
                ? "Please answer the following questions to verify your expertise"
                : "Your test has been completed"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!testCompleted ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span>
                      {Math.round((currentQuestion / questions.length) * 100)}%
                      Complete
                    </span>
                  </div>
                  <Progress
                    value={(currentQuestion / questions.length) * 100}
                    className="h-2"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-medium">
                    {questions[currentQuestion].question}
                  </h3>
                  <RadioGroup
                    value={answers[currentQuestion]?.toString()}
                    onValueChange={handleAnswer}
                    className="space-y-3"
                  >
                    {questions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <RadioGroupItem
                          value={index.toString()}
                          id={`option-${index}`}
                        />
                        <Label
                          htmlFor={`option-${index}`}
                          className="font-normal"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </>
            ) : (
              <div className="space-y-6 text-center">
                <div
                  className={`text-6xl ${
                    passed ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {passed ? <CheckCircle className="mx-auto h-16 w-16" /> : "✗"}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {passed ? "Congratulations!" : "Test Failed"}
                  </h3>
                  <p className="text-muted-foreground">
                    {passed
                      ? "You have passed the professional qualification test."
                      : "You did not meet the required score. Please try again later."}
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-lg font-medium">
                    Your Score: {score.toFixed(0)}%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Passing Score: 70%
                  </p>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {!testCompleted ? (
              <>
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={answers[currentQuestion] === undefined}
                >
                  {currentQuestion < questions.length - 1
                    ? "Next"
                    : "Complete Test"}
                </Button>
              </>
            ) : (
              <Button
                className="w-full"
                onClick={handleComplete}
                disabled={!passed}
              >
                {passed ? "Continue to Dashboard" : "Return to Login"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
