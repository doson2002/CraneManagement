"use client"

import { Bell, Check, Clock, Filter, MoreHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsPage() {
  return (
    <div className="flex flex-col space-y-4 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Thông báo</h1>
          <p className="text-muted-foreground">Quản lý tất cả thông báo của bạn</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-3.5 w-3.5" />
            <span>Lọc</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Check className="h-3.5 w-3.5" />
            <span>Đánh dấu tất cả đã đọc</span>
          </Button>
          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue placeholder="Tất cả thông báo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả thông báo</SelectItem>
              <SelectItem value="unread">Chưa đọc</SelectItem>
              <SelectItem value="read">Đã đọc</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all" className="relative">
            Tất cả
            <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">24</span>
          </TabsTrigger>
          <TabsTrigger value="maintenance">
            Bảo trì
            <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">12</span>
          </TabsTrigger>
          <TabsTrigger value="startup">
            Khởi động
            <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">5</span>
          </TabsTrigger>
          <TabsTrigger value="system">
            Hệ thống
            <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">7</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Hôm nay</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <NotificationItem
                  title="Yêu cầu bảo trì mới"
                  description="Cần cẩu #CR-2023-05 cần được bảo trì khẩn cấp"
                  time="2 giờ trước"
                  type="maintenance"
                  isUnread
                />
                <NotificationItem
                  title="Khởi động cần cẩu hoàn tất"
                  description="Cần cẩu #CR-2023-08 đã được khởi động thành công"
                  time="4 giờ trước"
                  type="startup"
                />
                <NotificationItem
                  title="Cập nhật hệ thống"
                  description="Hệ thống sẽ được bảo trì vào ngày 15/04/2025"
                  time="6 giờ trước"
                  type="system"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Hôm qua</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <NotificationItem
                  title="Bảo trì hoàn tất"
                  description="Cần cẩu #CR-2023-02 đã được bảo trì xong"
                  time="1 ngày trước"
                  type="maintenance"
                />
                <NotificationItem
                  title="Yêu cầu khởi động mới"
                  description="Cần cẩu #CR-2023-07 cần được khởi động"
                  time="1 ngày trước"
                  type="startup"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Tuần này</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <NotificationItem
                  title="Cập nhật quy trình bảo trì"
                  description="Quy trình bảo trì mới đã được cập nhật"
                  time="3 ngày trước"
                  type="system"
                />
                <NotificationItem
                  title="Bảo trì định kỳ"
                  description="Cần cẩu #CR-2023-01 cần được bảo trì định kỳ"
                  time="5 ngày trước"
                  type="maintenance"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Thông báo bảo trì</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <NotificationItem
                  title="Yêu cầu bảo trì mới"
                  description="Cần cẩu #CR-2023-05 cần được bảo trì khẩn cấp"
                  time="2 giờ trước"
                  type="maintenance"
                  isUnread
                />
                <NotificationItem
                  title="Bảo trì hoàn tất"
                  description="Cần cẩu #CR-2023-02 đã được bảo trì xong"
                  time="1 ngày trước"
                  type="maintenance"
                />
                <NotificationItem
                  title="Bảo trì định kỳ"
                  description="Cần cẩu #CR-2023-01 cần được bảo trì định kỳ"
                  time="5 ngày trước"
                  type="maintenance"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="startup" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Thông báo khởi động</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <NotificationItem
                  title="Khởi động cần cẩu hoàn tất"
                  description="Cần cẩu #CR-2023-08 đã được khởi động thành công"
                  time="4 giờ trước"
                  type="startup"
                />
                <NotificationItem
                  title="Yêu cầu khởi động mới"
                  description="Cần cẩu #CR-2023-07 cần được khởi động"
                  time="1 ngày trước"
                  type="startup"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-xl">Thông báo hệ thống</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <NotificationItem
                  title="Cập nhật hệ thống"
                  description="Hệ thống sẽ được bảo trì vào ngày 15/04/2025"
                  time="6 giờ trước"
                  type="system"
                />
                <NotificationItem
                  title="Cập nhật quy trình bảo trì"
                  description="Quy trình bảo trì mới đã được cập nhật"
                  time="3 ngày trước"
                  type="system"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface NotificationItemProps {
  title: string
  description: string
  time: string
  type: "maintenance" | "startup" | "system"
  isUnread?: boolean
}

function NotificationItem({ title, description, time, type, isUnread = false }: NotificationItemProps) {
  const getIcon = () => {
    switch (type) {
      case "maintenance":
        return (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <Bell className="h-4 w-4" />
          </span>
        )
      case "startup":
        return (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
            <Clock className="h-4 w-4" />
          </span>
        )
      case "system":
        return (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            <Bell className="h-4 w-4" />
          </span>
        )
      default:
        return (
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
            <Bell className="h-4 w-4" />
          </span>
        )
    }
  }

  return (
    <div className={`flex items-start gap-4 p-4 ${isUnread ? "bg-muted/50" : ""}`}>
      {getIcon()}
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <p className="font-medium">{title}</p>
          {isUnread && <span className="h-2 w-2 rounded-full bg-primary"></span>}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {time}
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Tùy chọn</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Tùy chọn</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Check className="mr-2 h-4 w-4" />
            <span>Đánh dấu đã đọc</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <X className="mr-2 h-4 w-4" />
            <span>Xóa thông báo</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
