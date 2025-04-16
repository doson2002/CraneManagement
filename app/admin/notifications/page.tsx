import NotificationIcon from "@/app/admin/notifications/components/notification-icon";
import StatusBadge from "@/app/admin/notifications/components/status-badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const notifications = [
    {
      id: "NOT001",
      type: "system",
      message: "System maintenance scheduled for April 15, 2025",
      date: "2025-04-10",
      status: "pending",
    },
    {
      id: "NOT002",
      type: "alert",
      message: "Crane CR004 requires immediate inspection",
      date: "2025-04-09",
      status: "sent",
    },
    {
      id: "NOT003",
      type: "email",
      message: "Certification reminder sent to 5 operators",
      date: "2025-04-08",
      status: "sent",
    },
    {
      id: "NOT004",
      type: "system",
      message: "New safety protocol published",
      date: "2025-04-05",
      status: "sent",
    },
  ];

  return (
    <Card className="w-full h-fit">
      <CardHeader className="flex flex-row items-center justify-between space-x-2">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-2xl font-bold">
            Recent Notifications
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            View and manage your notifications here.
          </CardDescription>
        </div>
        <div className="flex flex-row gap-2 w-fit">
          <Link href="/admin/notifications/send/email" className="w-full">
            <Button className="w-full flex items-center justify-between">
              <Plus className="h-4 w-4 mr-2" />
              Send Email Notification
            </Button>
          </Link>
          <Link href="/admin/notifications/send/system" className="w-full">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Send System Notification
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notifications.map((notification) => (
                  <TableRow key={notification.id}>
                    <TableCell className="font-medium">
                      {notification.id}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <NotificationIcon type={notification.type} />
                        <span className="capitalize">{notification.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>{notification.message}</TableCell>
                    <TableCell>{notification.date}</TableCell>
                    <TableCell>
                      <StatusBadge status={notification.status}/>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
