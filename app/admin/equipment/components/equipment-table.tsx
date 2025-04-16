import EquipmentTableItem from "@/app/admin/equipment/components/equipment-table.item";
import { Equipment } from "@/app/admin/equipment/page";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface EquipmentTableProps {
  equipments: Equipment[];
}
export default function EquipmentTable({ equipments }: EquipmentTableProps) {
  return (
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
            {equipments.map((item) => (
              <EquipmentTableItem key={item.id} item={item}/>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
