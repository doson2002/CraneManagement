import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Email Notification</CardTitle>
        <CardDescription>Send email notifications to users</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="recipient-type">Recipient Type</Label>
            <select
              id="recipient-type"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="all">All Users</option>
              <option value="operators">Operators Only</option>
              <option value="managers">Managers Only</option>
              <option value="admins">Admins Only</option>
              <option value="custom">Custom Selection</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter email subject" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[150px]"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Send Email</Button>
      </CardFooter>
    </Card>
  );
}
