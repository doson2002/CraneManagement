import CraneTabContent from "@/app/manager/cranes/components/crane-tab-content";
import { Crane } from "@/app/manager/cranes/page";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

export interface CraneTabsProps {
  cranes: Crane[];
  view: string;
}

export default function CraneTabs({ cranes, view }: CraneTabsProps) {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="w-full grid grid-cols-4 gap-2">
        <TabsTrigger value="all">All Cranes</TabsTrigger>
        <TabsTrigger value="operational">Operational</TabsTrigger>
        <TabsTrigger value="maintenance">Under Maintenance</TabsTrigger>
        <TabsTrigger value="inactive">Inactive</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="py-5">
        <CraneTabContent craneStatus="all" cranes={cranes} view={view} />
      </TabsContent>
      <TabsContent value="operational" className="py-5">
        <CraneTabContent
          craneStatus="operational"
          cranes={cranes}
          view={view}
        />
      </TabsContent>
      <TabsContent value="maintenance" className="py-5">
        <CraneTabContent
          craneStatus="maintenance"
          cranes={cranes}
          view={view}
        />
      </TabsContent>
      <TabsContent value="inactive" className="py-5">
        <CraneTabContent craneStatus="inactive" cranes={cranes} view={view} />
      </TabsContent>
    </Tabs>
  );
}
