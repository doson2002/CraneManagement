import TaskCard from "@/app/manager/maintenance/components/task-card";
import { MaintenanceTask } from "@/app/manager/maintenance/page";

export interface TaskTabContentProps {
    tasks: MaintenanceTask[];
}
export default function TaskTabContent({tasks}: TaskTabContentProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );

}