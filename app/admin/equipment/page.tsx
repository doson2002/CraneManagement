"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Download, Filter, MoreHorizontal, Plus, Search, Settings, Truck, XCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminEquipmentPage() {
  const [isAddEquipmentOpen, setIsAddEquipmentOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const equipment = [
    {
      id: "EQ001",
      name: "Hydraulic Pump XL-5000",
      type: "Hydraulic System",
      supplier: "CraneTech Inc.",
      status: "operational",
      lastMaintenance: "2023-06-15",
      nextMaintenance: "2023-09-15",
      location: "Site A - North Tower",
      purchaseDate: "2022-03-10",
      warrantyExpiry: "2025-03-10",
    },
    {
      id: "EQ002",
      name: "Cable Assembly Pro",
      type: "Cable System",
      supplier: "MobileLift Co.",
      status: "maintenance",
      lastMaintenance: "2023-05-20",
      nextMaintenance: "2023-08-20",
      location: "Warehouse",
      purchaseDate: "2022-04-15",
      warrantyExpiry: "2025-04-15",
    },
    {
      id: "EQ003",
      name: "Control Panel CP-2000",
      type: "Control System",
      supplier: "IndustrialCranes Ltd.",
      status: "operational",
      lastMaintenance: "2023-06-01",
      nextMaintenance: "2023-09-01",
      location: "Site B - Main Building",
      purchaseDate: "2022-02-20",
      warrantyExpiry: "2025-02-20",
    },
    {
      id: "EQ004",
      name: "Counterweight Set 10T",
      type: "Structural Component",
      supplier: "HeavyDuty Systems",
      status: "inactive",
      lastMaintenance: "2023-04-10",
      nextMaintenance: "2023-07-10",
      location: "Warehouse",
      purchaseDate: "2021-11-05",
      warrantyExpiry: "2024-11-05",
    },
    {
      id: "EQ005",
      name: "Slewing Ring Assembly",
      type: "Mechanical Component",
      supplier: "PortEquipment Inc.",
      status: "operational",
      lastMaintenance: "2023-06-10",
      nextMaintenance: "2023-09-10",
      location: "Site D - Bridge Construction",
      purchaseDate: "2022-05-15",
      warrantyExpiry: "2025-05-15",
    },
    {
      id: "EQ006",
      name: "Jib Extension Kit",
      type: "Structural Component",
      supplier: "CraneTech Inc.",
      status: "operational",
      lastMaintenance: "2023-05-25",
      nextMaintenance: "2023-08-25",
      location: "Site A - South Tower",
      purchaseDate: "2022-06-20",
      warrantyExpiry: "2025-06-20",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return (
          <Badge className="bg-green-500">
            <CheckCircle2 className="mr-1 h-3 w-3" /> Operational
          </Badge>
        )
      case "maintenance":
        return (
          <Badge className="bg-amber-500">
            <Settings className="mr-1 h-3 w-3" /> Under Maintenance
          </Badge>
        )
      case "inactive":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            <XCircle className="mr-1 h-3 w-3" /> Inactive
          </Badge>
        )
      default:
        return <Badge>Unknown</Badge>
    }
  }

  const filteredEquipment = equipment.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.supplier.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">Equipment Management</h1>
        <div className="flex items-center gap-2">
          <Dialog open={isAddEquipmentOpen} onOpenChange={setIsAddEquipmentOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Equipment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Equipment</DialogTitle>
                <DialogDescription>Add new equipment to the system</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="equipment-name" className="text-right">
                    Name
                  </Label>
                  <Input id="equipment-name" placeholder="Enter equipment name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="equipment-type" className="text-right">
                    Type
                  </Label>
                  <Select>
                    <SelectTrigger id="equipment-type" className="col-span-3">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hydraulic">Hydraulic System</SelectItem>
                      <SelectItem value="cable">Cable System</SelectItem>
                      <SelectItem value="control">Control System</SelectItem>
                      <SelectItem value="structural">Structural Component</SelectItem>
                      <SelectItem value="mechanical">Mechanical Component</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="supplier" className="text-right">
                    Supplier
                  </Label>
                  <Select>
                    <SelectTrigger id="supplier" className="col-span-3">
                      <SelectValue placeholder="Select supplier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cranetech">CraneTech Inc.</SelectItem>
                      <SelectItem value="mobilelift">MobileLift Co.</SelectItem>
                      <SelectItem value="industrial">IndustrialCranes Ltd.</SelectItem>
                      <SelectItem value="heavyduty">HeavyDuty Systems</SelectItem>
                      <SelectItem value="port">PortEquipment Inc.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="location" className="text-right">
                    Location
                  </Label>
                  <Input id="location" placeholder="Enter location" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="purchase-date" className="text-right">
                    Purchase Date
                  </Label>
                  <Input id="purchase-date" type="date" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="warranty-expiry" className="text-right">
                    Warranty Expiry
                  </Label>
                  <Input id="warranty-expiry" type="date" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea id="description" placeholder="Enter equipment description" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddEquipmentOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" onClick={() => setIsAddEquipmentOpen(false)}>
                  Add Equipment
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search equipment..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="h-9 w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="operational">Operational</SelectItem>
              <SelectItem value="maintenance">Under Maintenance</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="h-9 w-[180px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="hydraulic">Hydraulic System</SelectItem>
              <SelectItem value="cable">Cable System</SelectItem>
              <SelectItem value="control">Control System</SelectItem>
              <SelectItem value="structural">Structural Component</SelectItem>
              <SelectItem value="mechanical">Mechanical Component</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Equipment</TabsTrigger>
          <TabsTrigger value="operational">Operational</TabsTrigger>
          <TabsTrigger value="maintenance">Under Maintenance</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Warranty Expiry</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEquipment.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.id}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.supplier}</TableCell>
                      <TableCell>{getStatusBadge(item.status)}</TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell>{item.warrantyExpiry}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Equipment</DropdownMenuItem>
                            <DropdownMenuItem>Schedule Maintenance</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Decommission</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Similar content for other tabs */}
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Equipment Inventory Summary</CardTitle>
          <CardDescription>Overview of equipment inventory status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-md border p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-100 p-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {equipment.filter((item) => item.status === "operational").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Operational Equipment</p>
                </div>
              </div>
            </div>
            <div className="rounded-md border p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <Settings className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {equipment.filter((item) => item.status === "maintenance").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Under Maintenance</p>
                </div>
              </div>
            </div>
            <div className="rounded-md border p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-red-100 p-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{equipment.filter((item) => item.status === "inactive").length}</p>
                  <p className="text-sm text-muted-foreground">Inactive Equipment</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            <Truck className="mr-2 h-4 w-4" />
            Generate Inventory Report
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
