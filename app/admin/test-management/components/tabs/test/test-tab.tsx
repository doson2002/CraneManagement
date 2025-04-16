import StatusBadge from "@/app/admin/test-management/components/status-bade";
import TestDialog from "@/app/admin/test-management/components/tabs/test/test-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { ClipboardList, Edit, FileText, MoreHorizontal, Search, Trash, Users } from "lucide-react";

export default function TestTab() {
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
      description:
        "Advanced techniques and procedures for experienced operators",
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
  ];
  return (
    <TabsContent value="tests" className="mt-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-2 w-full">
              <Search className="absolute top-1/2 left-0 h-4 w-4 text-muted-foreground -translate-y-1/2 translate-x-1/2" />
              <Input
                type="search"
                placeholder="Search tests..."
                className="pl-8"
              />
            </div>
          </div>
          <TestDialog />
        </CardHeader>
        <CardContent className="p-4">
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
                    <span className="text-xs text-muted-foreground">
                      {test.id}
                    </span>
                  </div>
                  <div className="col-span-3 flex items-center">
                    <p className="line-clamp-2 text-sm">{test.description}</p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    {test.questions}
                  </div>
                  <div className="col-span-1 flex items-center">
                    {test.passingScore}%
                  </div>
                  <div className="col-span-1 flex items-center">
                    <StatusBadge status={test.status} />
                  </div>
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
  );
}
