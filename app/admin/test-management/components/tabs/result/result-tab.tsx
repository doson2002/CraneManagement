import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
              <div className="col-span-2">User</div>
              <div className="col-span-3">Test</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-1">Score</div>
              <div className="col-span-1">Result</div>
              <div className="col-span-2">Time Taken</div>
              <div className="col-span-1">Actions</div>
            </div>
            <div className="divide-y">
              {results.map((result, index) => (
                <div key={index} className="grid grid-cols-12 gap-2 p-4">
                  <div className="col-span-2 font-medium">{result.user}</div>
                  <div className="col-span-3">{result.test}</div>
                  <div className="col-span-2">{result.date}</div>
                  <div className="col-span-1">{result.score}%</div>
                  <div className="col-span-1">
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
                  </div>
                  <div className="col-span-2">{result.timeTaken}</div>
                  <div className="col-span-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Search className="h-4 w-4" />
                    </Button>
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
