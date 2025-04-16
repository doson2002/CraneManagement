import StatusBadge from "@/app/manager/suppliers/components/status-badge";
import { Supplier } from "@/app/manager/suppliers/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building, Mail, MoreHorizontal, Phone } from "lucide-react";
import Link from "next/link";

export interface SupplierTableProps {
  suppliers: Supplier[];
}
export default function SupplierTable({ suppliers }: SupplierTableProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Email/Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {suppliers.map((supplier) => (
              <TableRow key={supplier.id} >
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{supplier.name}</div>
                      <div className="text-xs text-muted-foreground">
                        ID: {supplier.id}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{supplier.type}</TableCell>
                <TableCell>{supplier.contact}</TableCell>
                <TableCell>
                  <div className="flex flex-col text-sm">
                    <div className="flex items-center">
                      <Mail className="mr-1 h-3 w-3 text-muted-foreground" />
                      {supplier.email}
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-1 h-3 w-3 text-muted-foreground" />
                      {supplier.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <StatusBadge status={supplier.status} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Link href={`/manager/suppliers`}>View</Link>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit Supplier</DropdownMenuItem>
                        <DropdownMenuItem>Contact Supplier</DropdownMenuItem>
                        <DropdownMenuItem>View Orders</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {supplier.status === "active" ? (
                          <DropdownMenuItem className="text-red-600">
                            Deactivate
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-green-600">
                            Activate
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
