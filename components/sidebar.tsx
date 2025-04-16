"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BarChart3,
  ConeIcon,
  Wrench,
  PlayCircle,
  ClipboardCheck,
  Users,
  Settings,
  Package,
  Truck,
  Bell,
  LogOut,
  ClipboardList,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import NavItem from "@/components/nav-item";
import { NavLink } from "@/components/nav";

interface SidebarNavProps {
  role: "operator" | "manager" | "admin";
}

export function SidebarNav({ role }: SidebarNavProps) {
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
    { href: "/manager/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/manager/cranes", label: "Cranes", icon: ConeIcon },
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
  const logoLink =
    role === "operator"
      ? "/operator"
      : role === "manager"
      ? "/manager"
      : role === "admin"
      ? "/admin/dashboard"
      : "/login";
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 h-16 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <Link href={logoLink} className="flex items-center gap-2">
            <ConeIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CraneMS</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => {
            return (
              <SidebarMenuItem key={link.href} className="py-1">
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 p-4 h-full w-full ${
                    pathname.includes(link.href) ? "active" : ""
                  } nav-item relative`}
                >
                  <NavItem
                    link={link}
                    width={5}
                    height={5}
                    color="text-primary"
                  />
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/login">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
