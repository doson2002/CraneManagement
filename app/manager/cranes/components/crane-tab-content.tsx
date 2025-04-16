import CraneCard from "@/app/manager/cranes/components/crane-card";
import CraneItem from "@/app/manager/cranes/components/crane-item";
import { Crane } from "@/app/manager/cranes/page";

export interface CraneTabContentProps {
  cranes: Crane[];
  craneStatus: string;
  view: string;
}
export default function CraneTabContent({
  cranes,
  craneStatus,
  view,
}: CraneTabContentProps) {
  const filteredCranes = cranes.filter(
    (crane) => craneStatus === "all" || crane.status === craneStatus
  );

  return view === "grid" ? (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredCranes.map((crane) => (
        <CraneCard key={crane.id} crane={crane} />
      ))}
    </div>
  ) : (
    <div className="rounded-md border">
      <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
        <div className="col-span-3">Name</div>
        <div className="col-span-2">ID</div>
        <div className="col-span-2">Type</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2">Location</div>
        <div className="col-span-1">Actions</div>
      </div>
      <div className="divide-y">
        {filteredCranes.map((crane) => (
          <CraneItem key={crane.id} crane={crane} />
        ))}
      </div>
    </div>
  );
}
