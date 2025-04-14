import { ConeIcon as Crane, Calendar, Clock, User, Tag, MapPin, AlertTriangle, CheckCircle2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function CraneDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the crane data based on the ID
  const crane = {
    id: params.id,
    name: `Tower Crane ${params.id}`,
    model: "Liebherr 200 EC-H",
    status: "operational",
    location: "Construction Site Alpha",
    lastMaintenance: "2023-10-15",
    nextMaintenance: "2023-11-15",
    operator: "Sam Smith",
    maxLoad: "12 tons",
    height: "60 meters",
    reachRadius: "65 meters",
    installationDate: "2023-01-10",
    maintenanceHistory: [
      {
        date: "2023-10-15",
        type: "Regular",
        technician: "Mike Johnson",
        notes: "All systems checked, replaced hydraulic fluid",
      },
      {
        date: "2023-09-01",
        type: "Emergency",
        technician: "Sarah Williams",
        notes: "Fixed electrical issue in control panel",
      },
      { date: "2023-08-15", type: "Regular", technician: "Mike Johnson", notes: "Routine inspection, no issues found" },
    ],
    startupChecks: [
      { date: "2023-10-20", operator: "Sam Smith", status: "Passed" },
      { date: "2023-10-19", operator: "Sam Smith", status: "Passed" },
      { date: "2023-10-18", operator: "John Doe", status: "Failed", notes: "Hydraulic pressure below threshold" },
    ],
    operationalMetrics: {
      hoursOperatedTotal: 1250,
      hoursOperatedLastMonth: 160,
      loadCycles: 3450,
      fuelConsumption: "45L/day",
      efficiency: 85,
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">{crane.name}</h2>
          <p className="text-muted-foreground">
            Model: {crane.model} | ID: {crane.id}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant={
              crane.status === "operational" ? "success" : crane.status === "maintenance" ? "warning" : "destructive"
            }
          >
            {crane.status === "operational"
              ? "Operational"
              : crane.status === "maintenance"
                ? "In Maintenance"
                : "Out of Service"}
          </Badge>
          <Button variant="outline">Edit</Button>
          <Button>Schedule Maintenance</Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="startup">Startup Checks</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Location</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{crane.location}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Max Load</CardTitle>
                <Crane className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{crane.maxLoad}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Maintenance</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{crane.nextMaintenance}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Operator</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{crane.operator}</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Model</p>
                      <p className="font-medium">{crane.model}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Height</p>
                      <p className="font-medium">{crane.height}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Reach Radius</p>
                      <p className="font-medium">{crane.reachRadius}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Installation Date</p>
                      <p className="font-medium">{crane.installationDate}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Maintenance Status</p>
                      <Badge variant="outline" className="font-normal">
                        Last: {crane.lastMaintenance}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span>All systems operational</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Load Capacity</p>
                      <span className="text-sm">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Operational Hours</p>
                      <span className="text-sm">1250 hrs</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance History</CardTitle>
              <CardDescription>View all maintenance records for this crane</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {crane.maintenanceHistory.map((record, index) => (
                  <div key={index} className="flex items-start space-x-4 rounded-md border p-4">
                    <div className="space-y-1">
                      <p className="font-medium">
                        {record.date} - {record.type} Maintenance
                      </p>
                      <p className="text-sm text-muted-foreground">Technician: {record.technician}</p>
                      <p className="text-sm">{record.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schedule Maintenance</CardTitle>
              <CardDescription>Plan the next maintenance for this crane</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Maintenance Type</label>
                    <select className="w-full rounded-md border p-2">
                      <option>Regular Maintenance</option>
                      <option>Emergency Repair</option>
                      <option>Inspection</option>
                      <option>Part Replacement</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date</label>
                    <input type="date" className="w-full rounded-md border p-2" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Technician</label>
                    <select className="w-full rounded-md border p-2">
                      <option>Mike Johnson</option>
                      <option>Sarah Williams</option>
                      <option>David Chen</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Priority</label>
                    <select className="w-full rounded-md border p-2">
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Critical</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Notes</label>
                  <textarea className="w-full rounded-md border p-2" rows={3}></textarea>
                </div>
                <Button>Schedule Maintenance</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="startup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Startup Check History</CardTitle>
              <CardDescription>Recent pre-operation checks for this crane</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {crane.startupChecks.map((check, index) => (
                  <div key={index} className="flex items-start space-x-4 rounded-md border p-4">
                    <div className={`rounded-full p-1 ${check.status === "Passed" ? "bg-green-100" : "bg-red-100"}`}>
                      {check.status === "Passed" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{check.date}</p>
                      <p className="text-sm text-muted-foreground">Operator: {check.operator}</p>
                      <p className="text-sm">
                        Status:{" "}
                        <span className={check.status === "Passed" ? "text-green-500" : "text-red-500"}>
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
              <CardDescription>Start a new pre-operation safety check</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Start New Check</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Hours Operated</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{crane.operationalMetrics.hoursOperatedTotal} hrs</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hours Last Month</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{crane.operationalMetrics.hoursOperatedLastMonth} hrs</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Load Cycles</CardTitle>
                <Crane className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{crane.operationalMetrics.loadCycles}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Fuel Consumption</CardTitle>
                <Tag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{crane.operationalMetrics.fuelConsumption}</div>
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
                    <span className="text-sm">{crane.operationalMetrics.efficiency}%</span>
                  </div>
                  <Progress value={crane.operationalMetrics.efficiency} className="h-2" />
                </div>

                <div className="h-[200px] w-full rounded-md border p-4">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-muted-foreground">Performance chart would be displayed here</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Average Load</p>
                    <p className="font-medium">8.5 tons</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Peak Usage Time</p>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
