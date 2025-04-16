import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Notifications</CardTitle>
        <CardDescription>Send system-wide notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="notification-type">Notification Type</Label>
            <select
              id="notification-type"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="info">Information</option>
              <option value="warning">Warning</option>
              <option value="alert">Alert</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter notification title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Enter notification content"
              className="min-h-[150px]"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Send Notification</Button>
      </CardFooter>
    </Card>
  );
}
