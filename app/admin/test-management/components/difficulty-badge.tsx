import { Badge } from "@/components/ui/badge";

export default function DifficultyBadge({
  difficulty,
}: {
  difficulty: string;
}) {
  switch (difficulty) {
    case "easy":
      return (
        <Badge variant="outline" className="border-green-500 text-green-500">
          Easy
        </Badge>
      );
    case "medium":
      return (
        <Badge variant="outline" className="border-amber-500 text-amber-500">
          Medium
        </Badge>
      );
    case "hard":
      return (
        <Badge variant="outline" className="border-red-500 text-red-500">
          Hard
        </Badge>
      );
    default:
      return null;
  }
}
