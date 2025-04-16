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
import { Building, Mail, MoreHorizontal, Phone } from "lucide-react";
import Link from "next/link";

export interface SupplierTableProps {
  suppliers: Supplier[];
}
export default function SupplierTable({ suppliers }: SupplierTableProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="rounded-md border">
          <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
            <div className="col-span-3">Name</div>
            <div className="col-span-2">Type</div>
            <div className="col-span-2">Contact</div>
            <div className="col-span-2">Email/Phone</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-2">Actions</div>
          </div>
          <div className="divide-y">
            {suppliers.map((supplier) => (
              <div key={supplier.id} className="grid grid-cols-12 gap-2 p-4">
                <div className="col-span-3">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{supplier.name}</div>
                      <div className="text-xs text-muted-foreground">
                        ID: {supplier.id}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">{supplier.type}</div>
                <div className="col-span-2">{supplier.contact}</div>
                <div className="col-span-2">
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
                </div>
                <div className="col-span-1">
                  <StatusBadge status={supplier.status} />
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Link href={`/manager/suppliers`}>
                        View
                      </Link>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
