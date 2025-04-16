"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle2,
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Truck,
  XCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EquipmentDialogContent from "@/app/admin/equipment/components/dialog-content";
import EquipmentTable from "@/app/admin/equipment/components/equipment-table";

export interface Equipment{
  id: string;
  name: string;
  type: string;
  supplier: string;
  status: string;
  lastMaintenance: string;
  nextMaintenance: string;
  location: string;
  purchaseDate: string;
  warrantyExpiry: string;
}

export default function AdminEquipmentPage() {
  const [isAddEquipmentOpen, setIsAddEquipmentOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
  ];

  const filteredEquipment = equipment.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.supplier.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">
          Equipment Management
        </h1>
        <div className="flex items-center gap-2">
          <Dialog
            open={isAddEquipmentOpen}
            onOpenChange={setIsAddEquipmentOpen}
          >
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Equipment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <EquipmentDialogContent
                setIsAddEquipmentOpen={setIsAddEquipmentOpen}
              />
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
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="all">All Equipment</TabsTrigger>
          <TabsTrigger value="operational">Operational</TabsTrigger>
          <TabsTrigger value="maintenance">Under Maintenance</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <EquipmentTable equipments={filteredEquipment} />
        </TabsContent>
        <TabsContent value="operational" className="mt-6">
          <EquipmentTable
            equipments={filteredEquipment.filter(
              (item) => item.status === "operational"
            )}
          />
        </TabsContent>
        <TabsContent value="maintenance" className="mt-6">
          <EquipmentTable
            equipments={filteredEquipment.filter(
              (item) => item.status === "maintenance"
            )}
          />
        </TabsContent>
        <TabsContent value="inactive" className="mt-6">
          <EquipmentTable
            equipments={filteredEquipment.filter(
              (item) => item.status === "inactive"
            )}
          />
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Equipment Inventory Summary</CardTitle>
          <CardDescription>
            Overview of equipment inventory status
          </CardDescription>
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
                    {
                      equipment.filter((item) => item.status === "operational")
                        .length
                    }
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Operational Equipment
                  </p>
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
                    {
                      equipment.filter((item) => item.status === "maintenance")
                        .length
                    }
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Under Maintenance
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md border p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-red-100 p-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {
                      equipment.filter((item) => item.status === "inactive")
                        .length
                    }
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Inactive Equipment
                  </p>
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
  );
}
