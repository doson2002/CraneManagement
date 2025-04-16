import { Badge } from "@/components/ui/badge";

export default function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "pending":
      return (
        <Badge variant="outline" className="text-yellow-500 border-yellow-500">
          Pending
        </Badge>
      );
    case "sent":
      return <Badge className="bg-green-500">Sent</Badge>;
    default:
      return <Badge>Unknown</Badge>;
  }
}
