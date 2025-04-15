import NavItem from "@/components/nav-item";
import {
  BarChart3,
  ConeIcon as Crane,
  Wrench,
  PlayCircle,
  ClipboardCheck,
  Users,
  Settings,
  Package,
  Truck,
  Bell,
  ClipboardList,
} from "lucide-react";
import { usePathname } from "next/navigation";

export interface NavLink {
  href: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface HeaderNavProps {
  role: string;
}

export default function HeaderNav({ role }: HeaderNavProps) {
  const pathname = usePathname();
  const operatorLinks: NavLink[] = [
    { href: "/operator/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/operator/maintenance", label: "Maintenance", icon: Wrench },
    { href: "/operator/startup", label: "Crane Startup", icon: PlayCircle },
    {
      href: "/operator/qualification",
      label: "Qualification Test",
      icon: ClipboardCheck,
    },
  ];

  const managerLinks: NavLink[] = [
    { href: "/manager", label: "Dashboard", icon: BarChart3 },
    { href: "/manager/cranes", label: "Cranes", icon: Crane },
    { href: "/dashboard/maintenance", label: "Maintenance", icon: Wrench },
    {
      href: "/dashboard/expertise-test",
      label: "Expertise Test",
      icon: ClipboardCheck,
    },
    { href: "/manager/jobs", label: "Jobs", icon: ClipboardCheck },
    { href: "/manager/workrequests", label: "Work Requests", icon: ClipboardList },
    { href: "/dashboard/equipment", label: "Equipment", icon: Package },
    { href: "/dashboard/suppliers", label: "Suppliers", icon: Truck },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  const adminLinks: NavLink[] = [
    { href: "/admin/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/admin/users", label: "User Management", icon: Users },
    {
      href: "/admin/test-management",
      label: "Test Management",
      icon: ClipboardCheck,
    },
    { href: "/admin/equipment", label: "Equipment", icon: Package },
    { href: "/admin/suppliers", label: "Suppliers", icon: Truck },
    { href: "/admin/notifications", label: "Notifications", icon: Bell },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  const links =
    role === "operator"
      ? operatorLinks
      : role === "manager"
      ? managerLinks
      : adminLinks;

  return (
    <div className="flex items-center h-full">
      <div className="flex items-center gap-4 h-full">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 p-2 h-full w-fit ${
                pathname === link.href ? "" : ""
              } nav-item relative`}
            >
              <NavItem link={link} width={5} height={5} color="text-primary" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
