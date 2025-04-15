import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export interface WorkRequest {
  id: string;
  crane: string;
  type: string;
  operator: string;
  status: string;
  date: string;
}
export interface WorkRequestTableProps {
  requests: WorkRequest[];
}
export default function WorkRequestTable({ requests }: WorkRequestTableProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge
            variant="outline"
            className="text-yellow-500 border-yellow-500"
          >
            Pending
          </Badge>
        );
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Crane</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Operator</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {requests.map((request) => (
          <TableRow key={request.id}>
            <TableCell className="font-medium">{request.id}</TableCell>
            <TableCell>{request.crane}</TableCell>
            <TableCell>{request.type}</TableCell>
            <TableCell>{request.operator}</TableCell>
            <TableCell>{request.date}</TableCell>
            <TableCell>{getStatusBadge(request.status)}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                {request.status === "pending" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-500 border-green-500 hover:bg-green-50"
                    >
                      Approve
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-500 border-red-500 hover:bg-red-50"
                    >
                      Reject
                    </Button>
                  </>
                )}
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
