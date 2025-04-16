import QuestionCard from "@/app/admin/test-management/components/tabs/question/question-card";
import QuestionDialog from "@/app/admin/test-management/components/tabs/question/question-dialog";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";

export interface QuestionTabProps {}
export default function QuestionTab({}: QuestionTabProps) {
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
      question:
        "What is the minimum safe distance to maintain from power lines when operating a crane?",
      options: [
        "3 feet",
        "10 feet",
        "20 feet",
        "It depends on the voltage of the power lines",
      ],
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
  ];
  return (
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
        <QuestionDialog />
      </div>

      <div className="space-y-4">
        {questions.map((question) => (
          <QuestionCard question={question} key={question.id} />
        ))}
      </div>
    </TabsContent>
  );
}
