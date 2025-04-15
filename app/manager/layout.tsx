"use client"

import type React from "react"

import { SidebarProvider } from "@/components/ui/sidebar"
import { Header } from "@/components/header"

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen min-w-full">
        <div className="flex flex-1 flex-col">
          <Header userName="John Manager" role="manager" notificationCount={3} />
          <main className="flex-1 p-4 md:p-6 w-[1440px] mx-auto my-0">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
