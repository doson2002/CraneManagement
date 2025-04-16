import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

export interface TestDialogContentProps {
  setIsAddTestOpen: (isOpne: boolean) => void;
}

export default function TestDialogContent({
  setIsAddTestOpen,
}: TestDialogContentProps) {
  return (
    <div className="w-full h-fit">
      <DialogHeader>
        <DialogTitle>Create New Test</DialogTitle>
        <DialogDescription>
          Create a new test for assessing user expertise
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="test-name" className="text-right">
            Test Name
          </Label>
          <Input
            id="test-name"
            placeholder="Enter test name"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="test-description" className="text-right">
            Description
          </Label>
          <Textarea
            id="test-description"
            placeholder="Enter test description"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="passing-score" className="text-right">
            Passing Score (%)
          </Label>
          <Input
            id="passing-score"
            type="number"
            placeholder="70"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="test-category" className="text-right">
            Category
          </Label>
          <Input
            id="test-category"
            placeholder="e.g., Operations, Safety"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right">Status</Label>
          <RadioGroup defaultValue="draft" className="col-span-3 flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="draft" id="status-draft" />
              <Label htmlFor="status-draft">Draft</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="active" id="status-active" />
              <Label htmlFor="status-active">Active</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="inactive" id="status-inactive" />
              <Label htmlFor="status-inactive">Inactive</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={() => setIsAddTestOpen(false)}>
          Cancel
        </Button>
        <Button type="submit" onClick={() => setIsAddTestOpen(false)}>
          Create Test
        </Button>
      </DialogFooter>
    </div>
  );
}
