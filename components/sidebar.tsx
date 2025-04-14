"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
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
  LogOut,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface SidebarNavProps {
  role: "operator" | "manager" | "admin"
}

export function SidebarNav({ role }: SidebarNavProps) {
  const pathname = usePathname()

  const operatorLinks = [
    { href: "/operator/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/operator/maintenance", label: "Maintenance", icon: Wrench },
    { href: "/operator/startup", label: "Crane Startup", icon: PlayCircle },
    { href: "/operator/qualification", label: "Qualification Test", icon: ClipboardCheck },
  ]

  const managerLinks = [
    { href: "/manager/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/dashboard/cranes", label: "Cranes", icon: Crane },
    { href: "/dashboard/maintenance", label: "Maintenance", icon: Wrench },
    { href: "/dashboard/crane-startup", label: "Crane Startup", icon: PlayCircle },
    { href: "/dashboard/expertise-test", label: "Expertise Test", icon: ClipboardCheck },
    { href: "/dashboard/jobs", label: "Jobs", icon: ClipboardCheck },
    { href: "/dashboard/equipment", label: "Equipment", icon: Package },
    { href: "/dashboard/suppliers", label: "Suppliers", icon: Truck },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ]

  const adminLinks = [
    { href: "/admin/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/admin/users", label: "User Management", icon: Users },
    { href: "/admin/test-management", label: "Test Management", icon: ClipboardCheck },
    { href: "/admin/equipment", label: "Equipment", icon: Package },
    { href: "/admin/suppliers", label: "Suppliers", icon: Truck },
    { href: "/admin/notifications", label: "Notifications", icon: Bell },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
  ]

  const links = role === "operator" ? operatorLinks : role === "manager" ? managerLinks : adminLinks

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-5">
        <div className="flex items-center gap-2">
          <Crane className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">CraneMS</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => {
            const Icon = link.icon
            return (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton asChild isActive={pathname === link.href}>
                  <Link href={link.href}>
                    <Icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
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
  )
}
