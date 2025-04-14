"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Camera, Key, Lock, Save, User } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="flex flex-col space-y-4 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hồ sơ người dùng</h1>
          <p className="text-muted-foreground">Quản lý thông tin cá nhân và tài khoản của bạn</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Thông tin cá nhân</CardTitle>
            <CardDescription>Xem và cập nhật thông tin cá nhân của bạn</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Avatar" />
                <AvatarFallback>NN</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                <Camera className="h-4 w-4" />
                <span className="sr-only">Thay đổi ảnh đại diện</span>
              </Button>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium">Nguyễn Văn A</h3>
              <p className="text-sm text-muted-foreground">nguyenvana@example.com</p>
              <div className="mt-2 flex justify-center gap-2">
                <Badge>Quản lý</Badge>
                <Badge variant="outline">Đã xác thực</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Cài đặt tài khoản</CardTitle>
                <CardDescription>Quản lý cài đặt tài khoản và bảo mật</CardDescription>
              </div>
              {isEditing ? (
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Hủy
                  </Button>
                  <Button onClick={() => setIsEditing(false)}>
                    <Save className="mr-2 h-4 w-4" />
                    Lưu thay đổi
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Chỉnh sửa</Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Cá nhân</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span>Bảo mật</span>
                </TabsTrigger>
                <TabsTrigger value="api" className="flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  <span>API</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="personal" className="space-y-4 pt-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Họ</Label>
                    <Input id="firstName" defaultValue="Nguyễn" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Tên</Label>
                    <Input id="lastName" defaultValue="Văn A" disabled={!isEditing} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="nguyenvana@example.com" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input id="phone" type="tel" defaultValue="0123456789" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Giới thiệu</Label>
                  <Textarea
                    id="bio"
                    placeholder="Giới thiệu về bản thân"
                    defaultValue="Quản lý cần cẩu với hơn 5 năm kinh nghiệm."
                    disabled={!isEditing}
                  />
                </div>
              </TabsContent>
              <TabsContent value="security" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Mật khẩu hiện tại</Label>
                  <Input id="currentPassword" type="password" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Mật khẩu mới</Label>
                  <Input id="newPassword" type="password" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
                  <Input id="confirmPassword" type="password" disabled={!isEditing} />
                </div>
                <div className="pt-4">
                  <h3 className="mb-4 text-lg font-medium">Xác thực hai yếu tố</h3>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">Xác thực hai yếu tố</div>
                      <div className="text-sm text-muted-foreground">Thêm một lớp bảo mật cho tài khoản của bạn</div>
                    </div>
                    <Button variant="outline" disabled={!isEditing}>
                      Cài đặt
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="api" className="space-y-4 pt-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium">API Keys</h3>
                  <p className="text-sm text-muted-foreground">Quản lý API keys để truy cập API của hệ thống</p>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Production Key</div>
                        <div className="text-sm text-muted-foreground">Created on Apr 23, 2023</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Hiển thị
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Development Key</div>
                        <div className="text-sm text-muted-foreground">Created on Jan 12, 2023</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Hiển thị
                      </Button>
                    </div>
                  </div>
                  <Button className="mt-4" disabled={!isEditing}>
                    Tạo API Key mới
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
