import DifficultyBadge from "@/app/admin/test-management/components/difficulty-badge";
import { Question } from "@/app/admin/test-management/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Edit, ClipboardList, Trash, CheckCircle2 } from "lucide-react";

export interface QuestionCardProps {
  question: Question;
}
export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-base">{question.question}</CardTitle>
            <CardDescription>
              ID: {question.id} • Category: {question.category} •{" "}
              <DifficultyBadge difficulty={question.difficulty} />
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
            <div
              key={index}
              className="flex items-center gap-2 rounded-md border p-2"
            >
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
              <span
                className={
                  option === question.correctAnswer ? "font-medium" : ""
                }
              >
                {option}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
