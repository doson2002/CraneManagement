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

export default function UsersPage() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)

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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="outline" className="border-green-500 text-green-500">
            <CheckCircle2 className="mr-1 h-3 w-3" /> Active
          </Badge>
        )
      case "inactive":
        return (
          <Badge variant="outline" className="border-red-500 text-red-500">
            <XCircle className="mr-1 h-3 w-3" /> Inactive
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
        <div className="flex items-center gap-2">
          <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>Create a new user account with appropriate role and permissions.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" placeholder="Full name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="Email address" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="role" className="text-right">
                    Role
                  </Label>
                  <Select>
                    <SelectTrigger id="role" className="col-span-3">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="operator">Operator</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="supplier">Supplier</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                  <Input id="password" type="password" placeholder="Set password" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="certifications" className="text-right">
                    Certifications
                  </Label>
                  <div className="col-span-3 space-y-2">
                    {["Crane Operation", "Safety Procedures", "Mechanical Maintenance", "Project Management"].map(
                      (cert, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox id={`cert-${index}`} />
                          <label
                            htmlFor={`cert-${index}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {cert}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" onClick={() => setIsAddUserOpen(false)}>
                  Create User
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
        <TabsList>
          <TabsTrigger value="all">All Users</TabsTrigger>
          <TabsTrigger value="operators">Operators</TabsTrigger>
          <TabsTrigger value="managers">Managers</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="admins">Admins</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
                  <div className="col-span-3">Name</div>
                  <div className="col-span-3">Email</div>
                  <div className="col-span-2">Role</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Last Login</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y">
                  {users.map((user) => (
                    <div key={user.id} className="grid grid-cols-12 gap-2 p-4">
                      <div className="col-span-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{user.name}</span>
                        </div>
                      </div>
                      <div className="col-span-3 flex items-center">{user.email}</div>
                      <div className="col-span-2 flex items-center">
                        <Badge variant="secondary">{user.role}</Badge>
                      </div>
                      <div className="col-span-1 flex items-center">{getStatusBadge(user.status)}</div>
                      <div className="col-span-2 flex items-center text-sm text-muted-foreground">{user.lastLogin}</div>
                      <div className="col-span-1 flex items-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <User className="mr-2 h-4 w-4" />
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit User
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Lock className="mr-2 h-4 w-4" />
                              Reset Password
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2 h-4 w-4" />
                              Delete User
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="operators" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-2 bg-muted p-4 font-medium">
                  <div className="col-span-3">Name</div>
                  <div className="col-span-3">Email</div>
                  <div className="col-span-2">Role</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Last Login</div>
                  <div className="col-span-1">Actions</div>
                </div>
                <div className="divide-y">
                  {users
                    .filter((user) => user.role === "Operator")
                    .map((user) => (
                      <div key={user.id} className="grid grid-cols-12 gap-2 p-4">
                        <div className="col-span-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{user.name}</span>
                          </div>
                        </div>
                        <div className="col-span-3 flex items-center">{user.email}</div>
                        <div className="col-span-2 flex items-center">
                          <Badge variant="secondary">{user.role}</Badge>
                        </div>
                        <div className="col-span-1 flex items-center">{getStatusBadge(user.status)}</div>
                        <div className="col-span-2 flex items-center text-sm text-muted-foreground">
                          {user.lastLogin}
                        </div>
                        <div className="col-span-1 flex items-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Lock className="mr-2 h-4 w-4" />
                                Reset Password
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Similar content for other tabs */}
      </Tabs>
    </div>
  )
}
