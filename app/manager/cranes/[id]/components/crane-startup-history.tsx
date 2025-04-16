import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export default function CraneStartupHistory({ crane }: { crane: any }) {
  return (
    <div className="grid gap-4 mt-5">
      <Card>
        <CardHeader>
          <CardTitle>Startup Check History</CardTitle>
          <CardDescription>
            Recent pre-operation checks for this crane
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {crane.startupChecks.map((check: any, index: any) => (
              <div
                key={index}
                className="flex items-start space-x-4 rounded-md border p-4"
              >
                <div
                  className={`rounded-full p-1 ${
                    check.status === "Passed" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {check.status === "Passed" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div className="space-y-1">
                  <p className="font-medium">{check.date}</p>
                  <p className="text-sm text-muted-foreground">
                    Operator: {check.operator}
                  </p>
                  <p className="text-sm">
                    Status:{" "}
                    <span
                      className={
                        check.status === "Passed"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {check.status}
                    </span>
                  </p>
                  {check.notes && <p className="text-sm">{check.notes}</p>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Initiate Startup Check</CardTitle>
          <CardDescription>
            Start a new pre-operation safety check
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Start New Check</Button>
        </CardContent>
      </Card>
    </div>
  );
}
