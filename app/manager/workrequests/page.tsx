import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { Search, Plus } from "lucide-react";

export default function WorkRequestPage() {
  const requests = [
    {
      id: "WR001",
      crane: "CR001",
      type: "Operation",
      operator: "John Smith",
      status: "pending",
      date: "2025-04-10",
    },
    {
      id: "WR002",
      crane: "CR002",
      type: "Maintenance",
      operator: "Jane Doe",
      status: "approved",
      date: "2025-04-05",
    },
    {
      id: "WR003",
      crane: "CR003",
      type: "Operation",
      operator: "Mike Johnson",
      status: "pending",
      date: "2025-04-12",
    },
    {
      id: "WR004",
      crane: "CR004",
      type: "Inspection",
      operator: "Sarah Williams",
      status: "rejected",
      date: "2025-04-03",
    },
  ];

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
    <Card>
      <CardHeader className="flex flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Work Requests</h2>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search requests..."
              className="pl-8 w-[250px]"
            />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Request
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Card>
          <CardContent className="p-0">
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
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
