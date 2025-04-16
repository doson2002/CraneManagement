import { Settings, ShieldAlert, Mail, Bell } from "lucide-react";

export default function NotificationIcon({ type }: { type: string }) {
  switch (type) {
    case "system":
      return <Settings className="h-4 w-4 text-muted-foreground" />;
    case "alert":
      return <ShieldAlert className="h-4 w-4 text-red-500" />;
    case "email":
      return <Mail className="h-4 w-4 text-blue-500" />;
    default:
      return <Bell className="h-4 w-4 text-muted-foreground" />;
  }
}
