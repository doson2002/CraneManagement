import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Calendar, Tag, ConeIcon } from "lucide-react";

export default function CraneMetric({crane }: { crane: any }) {
    return (
        <div className="grid gap-4 mt-5">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Hours Operated
                  </CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {crane.operationalMetrics.hoursOperatedTotal} hrs
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Hours Last Month
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {crane.operationalMetrics.hoursOperatedLastMonth} hrs
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Load Cycles
                  </CardTitle>
                  <ConeIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {crane.operationalMetrics.loadCycles}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Fuel Consumption
                  </CardTitle>
                  <Tag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {crane.operationalMetrics.fuelConsumption}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Operational Efficiency</CardTitle>
                <CardDescription>Performance metrics over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Overall Efficiency</p>
                      <span className="text-sm">
                        {crane.operationalMetrics.efficiency}%
                      </span>
                    </div>
                    <Progress
                      value={crane.operationalMetrics.efficiency}
                      className="h-2"
                    />
                  </div>

                  <div className="h-[200px] w-full rounded-md border p-4">
                    <div className="flex h-full items-center justify-center">
                      <p className="text-sm text-muted-foreground">
                        Performance chart would be displayed here
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Average Load
                      </p>
                      <p className="font-medium">8.5 tons</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        Peak Usage Time
                      </p>
                      <p className="font-medium">10:00 AM - 2:00 PM</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Downtime</p>
                      <p className="font-medium">24 hours (2%)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
    );
}