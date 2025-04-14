"use client"

import type React from "react"

import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarNav } from "@/components/sidebar"
import { Header } from "@/components/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <SidebarNav role="manager" />
        <div className="flex flex-1 flex-col">
          <Header userName="John Manager" role="Manager" notificationCount={3} />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
