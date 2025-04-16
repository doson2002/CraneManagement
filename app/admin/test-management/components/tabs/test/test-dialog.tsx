"use client";

import TestDialogContent from "@/app/admin/test-management/components/tabs/test/test-dialog-content";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function TestDialog() {
  const [isAddTestOpen, setIsAddTestOpen] = useState(false);

  return (
    <Dialog open={isAddTestOpen} onOpenChange={setIsAddTestOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Test
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <TestDialogContent setIsAddTestOpen={setIsAddTestOpen} />
      </DialogContent>
    </Dialog>
  );
}
