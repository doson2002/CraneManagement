"use client"

import { useState } from "react"
import { CalendarIcon, FilterIcon, PlusIcon, SearchIcon, SettingsIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const equipment = [
  {
    id: "EQ-1001",
    name: "Hydraulic Pump HP-500",
    type: "Hydraulic Component",
    manufacturer: "HydraTech",
    purchaseDate: "2022-05-15",
    lastMaintenance: "2023-09-10",
    nextMaintenance: "2023-12-10",
    status: "Operational",
    location: "Warehouse A",
    assignedTo: "Tower Crane TC-5",
  },
  {
    id: "EQ-1002",
    name: "Steel Cable SC-200",
    type: "Lifting Component",
    manufacturer: "SteelWorks",
    purchaseDate: "2022-08-20",
    lastMaintenance: "2023-08-15",
    nextMaintenance: "2023-11-15",
    status: "Maintenance Required",
    location: "Warehouse B",
    assignedTo: "Mobile Crane MC-3",
  },
  {
    id: "EQ-1003",
    name: "Control Panel CP-100",
    type: "Electronic Component",
    manufacturer: "ElectroSystems",
    purchaseDate: "2023-01-10",
    lastMaintenance: "2023-07-20",
    nextMaintenance: "2023-10-20",
    status: "Operational",
    location: "Warehouse A",
    assignedTo: "Tower Crane TC-1",
  },
  {
    id: "EQ-1004",
    name: "Counterweight CW-1000",
    type: "Structural Component",
    manufacturer: "HeavyMetal Inc",
    purchaseDate: "2021-11-05",
    lastMaintenance: "2023-06-30",
    nextMaintenance: "2023-12-30",
    status: "Operational",
    location: "Warehouse C",
    assignedTo: "Crawler Crane CC-1",
  },
  {
    id: "EQ-1005",
    name: "Engine Block EB-600",
    type: "Power Component",
    manufacturer: "PowerTech",
    purchaseDate: "2022-03-25",
    lastMaintenance: "2023-09-05",
    nextMaintenance: "2023-12-05",
    status: "Under Repair",
    location: "Repair Shop",
    assignedTo: "Unassigned",
  },
]

const spareparts = [
  {
    id: "SP-2001",
    name: "Hydraulic Hose 20m",
    type: "Hydraulic Component",
    manufacturer: "HydraTech",
    quantity: 15,
    minStock: 5,
    location: "Warehouse A",
    lastRestocked: "2023-09-01",
  },
  {
    id: "SP-2002",
    name: "Control Circuit Board",
    type: "Electronic Component",
    manufacturer: "ElectroSystems",
    quantity: 3,
    minStock: 2,
    location: "Warehouse A",
    lastRestocked: "2023-08-15",
  },
  {
    id: "SP-2003",
    name: "Steel Cable 10m",
    type: "Lifting Component",
    manufacturer: "SteelWorks",
    quantity: 8,
    minStock: 3,
    location: "Warehouse B",
    lastRestocked: "2023-09-10",
  },
  {
    id: "SP-2004",
    name: "Engine Oil Filter",
    type: "Power Component",
    manufacturer: "PowerTech",
    quantity: 25,
    minStock: 10,
    location: "Warehouse A",
    lastRestocked: "2023-07-20",
  },
  {
    id: "SP-2005",
    name: "Brake Pads",
    type: "Safety Component",
    manufacturer: "SafetyFirst",
    quantity: 12,
    minStock: 6,
    location: "Warehouse C",
    lastRestocked: "2023-08-25",
  },
]

export default function EquipmentPage() {
  const [isAddEquipmentOpen, setIsAddEquipmentOpen] = useState(false)
  const [isAddSparepartOpen, setIsAddSparepartOpen] = useState(false)
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Operational':
        return 'bg-green-100 text-green-800'
      case 'Maintenance Required':
        return 'bg-yellow-100 text-yellow-800'
      case 'Under Repair':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStockStatus = (quantity: number, minStock: number) => {
    if (quantity <= minStock * 0.5) {
      return <Badge className="bg-red-100 text-red-800">Low Stock</Badge>
    } else if (quantity <= minStock) {
      return <Badge className="bg-yellow-100 text-yellow-800">Reorder Soon</Badge>
    } else {
      return <Badge className="bg-green-100 text-green-800">Sufficient</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Equipment Management</h1>
      </div>

      <Tabs defaultValue="equipment">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="equipment">Equipment</TabsTrigger>
          <TabsTrigger value="spareparts">Spare Parts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="equipment" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-64">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search equipment..."
                className="pl-8"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <FilterIcon className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="operational">Operational</SelectItem>
                  <SelectItem value="maintenance">Maintenance Required</SelectItem>
                  <SelectItem value="repair">Under Repair</SelectItem>
                </SelectContent>
              </Select>
              <Dialog open={isAddEquipmentOpen} onOpenChange={setIsAddEquipmentOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Add Equipment
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Add New Equipment</DialogTitle>
                    <DialogDescription>
                      Enter the details for the new equipment.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="equipment-name">Equipment Name</Label>
                        <Input id="equipment-name" placeholder="Enter name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="equipment-type">Type</Label>
                        <Select>
                          <SelectTrigger id="equipment-type">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hydraulic">Hydraulic Component</SelectItem>
                            <SelectItem value="lifting">Lifting Component</SelectItem>
                            <SelectItem value="electronic">Electronic Component</SelectItem>
                            <SelectItem value="structural">Structural Component</SelectItem>
                            <SelectItem value="power">Power Component</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="manufacturer">Manufacturer</Label>
                        <Input id="manufacturer" placeholder="Enter manufacturer" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="purchase-date">Purchase Date</Label>
                        <div className="relative">
                          <Input id="purchase-date" type="date" />
                          <CalendarIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Storage Location</Label>
                        <Select>
                          <SelectTrigger id="location">
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="warehouse-a">Warehouse A</SelectItem>
                            <SelectItem value="warehouse-b">Warehouse B</SelectItem>
                            <SelectItem value="warehouse-c">Warehouse C</SelectItem>
                            <SelectItem value="repair-shop">Repair Shop</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="assigned-to">Assigned To</Label>
                        <Select>
                          <SelectTrigger id="assigned-to">
                            <SelectValue placeholder="Select crane" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="unassigned">Unassigned</SelectItem>
                            <SelectItem value="tc-1">Tower Crane TC-1</SelectItem>
                            <SelectItem value="tc-3">Tower Crane TC-3</SelectItem>
                            <SelectItem value="tc-5">Tower Crane TC-5</SelectItem>
                            <SelectItem value="mc-1">Mobile Crane MC-1</SelectItem>
                            <SelectItem value="mc-3">Mobile Crane MC-3</SelectItem>
                            <SelectItem value="cc-1">Crawler Crane CC-1</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea id="notes" placeholder="Enter any additional notes" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddEquipmentOpen(false)}>Cancel</Button>
                    <Button onClick={() => setIsAddEquipmentOpen(false)}>Save Equipment</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Manufacturer</TableHead>
                      <TableHead>Maintenance</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {equipment.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>
                          <div>
                            <div>{item.name}</div>
                            <div className="text-xs text-gray-500">
                              Assigned to: {item.assignedTo}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.manufacturer}</TableCell>
                        <TableCell>
                          <div>
                            <div className="text-xs">Last: {new Date(item.lastMaintenance).toLocaleDateString()}</div>
                            <div className="text-xs">Next: {new Date(item.nextMaintenance).toLocaleDateString()}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">
                              <SettingsIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="spareparts" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-64">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search spare parts..."
                className="pl-8"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <FilterIcon className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Stock Status" />
                </Select
