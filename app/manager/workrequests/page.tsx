import WorkRequestTable from "@/app/manager/workrequests/components/work-request-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
            <WorkRequestTable requests={requests} />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
