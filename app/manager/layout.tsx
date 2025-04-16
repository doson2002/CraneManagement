"use client"

import type React from "react"

import { SidebarProvider } from "@/components/ui/sidebar"
import { Header } from "@/components/header"
import { SidebarNav } from "@/components/sidebar"

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen min-w-full">
        <SidebarNav role={"manager"}/>
        <div className="flex flex-1 flex-col">
          <Header userName="John Manager" role="manager" notificationCount={3} />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
