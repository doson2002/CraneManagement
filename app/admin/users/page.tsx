"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Badge,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui"
import {
  CheckCircle2,
  Download,
  Edit,
  Filter,
  Lock,
  MoreHorizontal,
  Search,
  Trash,
  User,
  UserPlus,
  XCircle,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import UserDialog from "@/app/admin/users/components/user-dialog"
import UserTable from "@/app/admin/users/components/user-tablle"

export interface User {
  id: string
  name: string
  email: string
  role: string
  status: string
  lastLogin: string
  certifications: string[]
  avatar?: string
}

export default function UsersPage() {

  const users = [
    {
      id: "USR001",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Operator",
      status: "active",
      lastLogin: "2023-06-25 09:30 AM",
      certifications: ["Crane Operation", "Safety Procedures"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "USR002",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "Manager",
      status: "active",
      lastLogin: "2023-06-24 02:15 PM",
      certifications: ["Project Management", "Safety Procedures", "Risk Assessment"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "USR003",
      name: "Mike Smith",
      email: "mike.smith@example.com",
      role: "Operator",
      status: "inactive",
      lastLogin: "2023-06-20 11:45 AM",
      certifications: ["Crane Operation"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "USR004",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Maintenance",
      status: "active",
      lastLogin: "2023-06-25 08:00 AM",
      certifications: ["Mechanical Maintenance", "Electrical Systems"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "USR005",
      name: "David Wilson",
      email: "david.wilson@example.com",
      role: "Admin",
      status: "active",
      lastLogin: "2023-06-25 10:20 AM",
      certifications: ["System Administration", "Data Management"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "USR006",
      name: "Lisa Brown",
      email: "lisa.brown@example.com",
      role: "Supplier",
      status: "active",
      lastLogin: "2023-06-23 03:30 PM",
      certifications: ["Supply Chain Management"],
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]


  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
        <div className="flex items-center gap-2">
          <UserDialog />
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search users..." className="pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-9">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="h-9 w-[180px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="operator">Operator</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="supplier">Supplier</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="h-9 w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All Users</TabsTrigger>
          <TabsTrigger value="operators">Operators</TabsTrigger>
          <TabsTrigger value="managers">Managers</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="admins">Admins</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <UserTable users={users} />
        </TabsContent>

        <TabsContent value="operators" className="mt-6">
          <UserTable users={users.filter(user => user.role === "Operator")} />
        </TabsContent>

        <TabsContent value="managers" className="mt-6">
          <UserTable users={users.filter(user => user.role === "Manager")} />
        </TabsContent>
        <TabsContent value="maintenance" className="mt-6">
          <UserTable users={users.filter(user => user.role === "Maintenance")} />
        </TabsContent>
        <TabsContent value="admins" className="mt-6">
          <UserTable users={users.filter(user => user.role === "Admin")} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
