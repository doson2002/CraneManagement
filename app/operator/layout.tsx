"use client"

import type React from "react"

import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarNav } from "@/components/sidebar"
import { Header } from "@/components/header"

export default function OperatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      
      <div className="flex min-h-screen min-w-full">
      <SidebarNav role={"operator"}/>
        <div className="flex flex-1 flex-col">
          <Header userName="Sam Operator" role="operator" notificationCount={2} />
          
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
