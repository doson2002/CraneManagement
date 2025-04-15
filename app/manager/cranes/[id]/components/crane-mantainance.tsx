import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CraneMantainance({ crane }: { crane: any }) {
    return (
        <div className="grid gap-4 mt-5">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance History</CardTitle>
                <CardDescription>
                  View all maintenance records for this crane
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {crane.maintenanceHistory.map((record : any, index : any) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 rounded-md border p-4"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">
                          {record.date} - {record.type} Maintenance
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Technician: {record.technician}
                        </p>
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
                <CardDescription>
                  Plan the next maintenance for this crane
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Maintenance Type
                      </label>
                      <select className="w-full rounded-md border p-2">
                        <option>Regular Maintenance</option>
                        <option>Emergency Repair</option>
                        <option>Inspection</option>
                        <option>Part Replacement</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date</label>
                      <input
                        type="date"
                        className="w-full rounded-md border p-2"
                      />
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
                    <textarea
                      className="w-full rounded-md border p-2"
                      rows={3}
                    ></textarea>
                  </div>
                  <Button>Schedule Maintenance</Button>
                </div>
              </CardContent>
            </Card>
          </div>
    )
}