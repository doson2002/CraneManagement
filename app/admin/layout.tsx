"use client"

import type React from "react"

import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarNav } from "@/components/sidebar"
import { Header } from "@/components/header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen min-w-full">
        <SidebarNav role="admin" />
        <div className="flex flex-1 flex-col">
          <Header userName="Admin User" role="Administrator" notificationCount={5} />
          <main className="flex-1 p-4 md:p-6 w-screen lg:w-full ">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
