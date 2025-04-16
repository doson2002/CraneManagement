import PriorityBadge from "@/app/manager/maintenance/components/priority-badge";
import StatusBadge from "@/app/manager/maintenance/components/status-badge";
import { MaintenanceTask } from "@/app/manager/maintenance/page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import Link from "next/link";

export interface TaskCardProps {
  task: MaintenanceTask;
}
export default function TaskCard({ task }: TaskCardProps) {
  return (
    <Card key={task.id} className="flex flex-col justify-between">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{task.type}</CardTitle>
            <CardDescription>
              {task.crane}: {task.craneName}
            </CardDescription>
          </div>
          <PriorityBadge priority={task.priority} />
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{task.date}</span>
            <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
            <span>{task.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{task.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage
                  src={task.assignee.avatar || "/placeholder.svg"}
                  alt={task.assignee.name}
                />
                <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{task.assignee.name}</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Description</p>
            <p className="line-clamp-2">{task.description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <StatusBadge status={task.status} />
        <Link href={`/dashboard/maintenance/${task.id}`}>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
