import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export interface EquipmentDialogContentProps {
  setIsAddEquipmentOpen: (isOpen: boolean) => void;
}

export default function EquipmentDialogContent({
  setIsAddEquipmentOpen,
}: EquipmentDialogContentProps) {
  return (
    <div className="w-full h-fit">
      <DialogHeader>
        <DialogTitle>Add New Equipment</DialogTitle>
        <DialogDescription>Add new equipment to the system</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="equipment-name" className="text-right">
            Name
          </Label>
          <Input
            id="equipment-name"
            placeholder="Enter equipment name"
            className="col-span-3"
          />
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
          <Input
            id="location"
            placeholder="Enter location"
            className="col-span-3"
          />
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
          <Textarea
            id="description"
            placeholder="Enter equipment description"
            className="col-span-3"
          />
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
    </div>
  );
}
