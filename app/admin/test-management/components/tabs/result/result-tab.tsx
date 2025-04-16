import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import { Search } from "lucide-react";

export default function ResultTab() {
  const results = [
    {
      user: "John Doe",
      test: "Crane Operator Certification",
      date: "2023-06-25",
      score: 85,
      result: "pass",
      timeTaken: "45 minutes",
    },
    {
      user: "Sarah Johnson",
      test: "Safety Procedures Assessment",
      date: "2023-06-24",
      score: 92,
      result: "pass",
      timeTaken: "38 minutes",
    },
    {
      user: "Mike Smith",
      test: "Crane Operator Certification",
      date: "2023-06-23",
      score: 65,
      result: "fail",
      timeTaken: "50 minutes",
    },
    {
      user: "Emily Davis",
      test: "Maintenance Technician Qualification",
      date: "2023-06-22",
      score: 78,
      result: "pass",
      timeTaken: "55 minutes",
    },
    {
      user: "David Wilson",
      test: "Advanced Crane Operations",
      date: "2023-06-21",
      score: 88,
      result: "pass",
      timeTaken: "62 minutes",
    },
  ];

  return (
    <TabsContent value="results" className="mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Test Results</CardTitle>
          <CardDescription>
            View and analyze test results by user and test
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Test</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Result</TableHead>
                <TableHead>Time Taken</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.user}</TableCell>
                  <TableCell>{result.test}</TableCell>
                  <TableCell>{result.date}</TableCell>
                  <TableCell>{result.score}%</TableCell>
                  <TableCell>
                    {result.result === "pass" ? (
                      <Badge className="bg-green-500">Pass</Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="border-red-500 text-red-500"
                      >
                        Fail
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{result.timeTaken}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Search className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
