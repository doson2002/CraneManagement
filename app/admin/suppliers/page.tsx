

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Download, Plus, XCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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

// export default function AdminSuppliersPage() {
//   const [isAddSupplierOpen, setIsAddSupplierOpen] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")

//   const suppliers = [
//     {
//       id: "SUP001",
//       name: "CraneTech Inc.",
//       type: "Equipment Supplier",
//       contact: "John Smith",
//       email: "contact@cranetech.com",
//       phone: "+1 (555) 123-4567",
//       address: "123 Industrial Blvd, New York, NY 10001",
//       status: "active",
//       products: ["Crane Parts", "Hydraulic Systems", "Control Panels"],
//     },
//     {
//       id: "SUP002",
//       name: "MobileLift Co.",
//       type: "Equipment Supplier",
//       contact: "Sarah Johnson",
//       email: "info@mobilelift.com",
//       phone: "+1 (555) 234-5678",
//       address: "456 Manufacturing Ave, Chicago, IL 60601",
//       status: "active",
//       products: ["Mobile Cranes", "Lifting Equipment", "Spare Parts"],
//     },
//     {
//       id: "SUP003",
//       name: "SafetyFirst Certifications",
//       type: "Certification Provider",
//       contact: "Michael Brown",
//       email: "cert@safetyfirst.com",
//       phone: "+1 (555) 345-6789",
//       address: "789 Safety Road, Houston, TX 77001",
//       status: "active",
//       products: ["Safety Certifications", "Training Programs", "Compliance Services"],
//     },
//     {
//       id: "SUP004",
//       name: "CraneParts Direct",
//       type: "Parts Supplier",
//       contact: "Emily Davis",
//       email: "parts@cranepartsdirect.com",
//       phone: "+1 (555) 456-7890",
//       address: "101 Component Street, Los Angeles, CA 90001",
//       status: "inactive",
//       products: ["Crane Components", "Replacement Parts", "Maintenance Kits"],
//     },
//     {
//       id: "SUP005",
//       name: "Global Crane Services",
//       type: "Service Provider",
//       contact: "David Wilson",
//       email: "service@globalcraneservices.com",
//       phone: "+1 (555) 567-8901",
//       address: "202 Service Road, Miami, FL 33101",
//       status: "active",
//       products: ["Maintenance Services", "Repair Services", "Technical Support"],
//     },
//     {
//       id: "SUP006",
//       name: "IndustrialCranes Ltd.",
//       type: "Equipment Supplier",
//       contact: "Lisa Brown",
//       email: "sales@industrialcranes.com",
//       phone: "+1 (555) 678-9012",
//       address: "303 Industrial Park, Seattle, WA 98101",
//       status: "active",
//       products: ["Industrial Cranes", "Heavy Duty Equipment", "Custom Solutions"],
//     },
//   ]

//   const getStatusBadge = (status: string) => {
//     switch (status) {
//       case "active":
//         return (
//           <Badge variant="outline" className="border-green-500 text-green-500">
//             <CheckCircle2 className="mr-1 h-3 w-3" /> Active
//           </Badge>
//         )
//       case "inactive":
//         return (
//           <Badge variant="outline" className="border-red-500 text-red-500">
//             <XCircle className="mr-1 h-3 w-3" /> Inactive
//           </Badge>
//         )
//       default:
//         return null
//     }
//   }

//   const filteredSuppliers = suppliers.filter(
//     (supplier) =>
//       supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       supplier.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       supplier.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       supplier.contact.toLowerCase().includes(searchQuery.toLowerCase()),
//   )

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
//         <h1 className="text-2xl font-bold tracking-tight">Supplier Management</h1>
//         <div className="flex items-center gap-2">
//           <Dialog open={isAddSupplierOpen} onOpenChange={setIsAddSupplierOpen}>
//             <DialogTrigger asChild>
//               <Button>
//                 <Plus className="mr-2 h-4 w-4" />
//                 Add Supplier
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[600px]">
//               <DialogHeader>
//                 <DialogTitle>Add New Supplier</DialogTitle>
//                 <DialogDescription>Add a new supplier to the system</DialogDescription>
//               </DialogHeader>
//               <div className="grid gap-4 py-4">
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="supplier-name" className="text-right">
//                     Name
//                   </Label>
//                   <Input id="supplier-name" placeholder="Enter supplier name" className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="supplier-type" className="text-right">
//                     Type
//                   </Label>
//                   <Select>
//                     <SelectTrigger id="supplier-type" className="col-span-3">
//                       <SelectValue placeholder="Select type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="equipment">Equipment Supplier</SelectItem>
//                       <SelectItem value="parts">Parts Supplier</SelectItem>
//                       <SelectItem value="service">Service Provider</SelectItem>
//                       <SelectItem value="certification">Certification Provider</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="contact-name" className="text-right">
//                     Contact Person
//                   </Label>
//                   <Input id="contact-name" placeholder="Enter contact name" className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="email" className="text-right">
//                     Email
//                   </Label>
//                   <Input id="email" type="email" placeholder="Enter email address" className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="phone" className="text-right">
//                     Phone
//                   </Label>
//                   <Input id="phone" placeholder="Enter phone number" className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="address" className="text-right">
//                     Address
//                   </Label>
//                   <Textarea id="address" placeholder="Enter address" className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="products" className="text-right">
//                     Products/Services
//                   </Label>
//                   <Textarea id="products" placeholder="Enter products or services" className="col-span-3" />
//                 </div>
//               </div>
//               <DialogFooter>
//                 <Button variant="outline" onClick={() => setIsAddSupplierOpen(false)}>
//                   Cancel
//                 </Button>
//                 <Button type="submit" onClick={() => setIsAddSupplierOpen(false)}>
//                   Add Supplier
//                 </Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//           <Button variant="outline">
//             <Download className="mr-2 h-4 w-4" />
//             Export
//           </Button>
//         </div>
//       </div>


// \
