"use client";

import Link from "next/link";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConeIcon as Crane } from "lucide-react";
import HeaderNav from "@/components/nav";
import { useRouter } from "next/navigation";

interface HeaderProps {
  userName: string;
  role: string;
  notificationCount?: number;
}

export function Header({ userName, role, notificationCount = 0 }: HeaderProps) {
  const router = useRouter();
  const onClickLogo = () => {
    if (role === "manager") {
      router.push("/manager");
    } else if (role === "operator") {
      router.push("/operator");
    } else if (role === "admin") {
      router.push("/admin");
    } else {
      router.push("/login");
    }
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex flex-1 items-center justify-between h-full">
        <div className="flex items-center gap-2">
          <Crane className="h-10 w-10 text-primary" />
          <Button variant="logo" size="logo" className="hover:bg-none" onClick={onClickLogo}>
            <span className="text-xl font-bold text-black">CraneMS</span>
          </Button>
        </div>
        <div className="flex items-center gap-4 h-full">
          <HeaderNav role={role} />
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {notificationCount}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notificationCount > 0 ? (
                <>
                  <DropdownMenuItem>
                    Maintenance due for Crane #1234
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    New operator qualification test submitted
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Crane startup checklist completed
                  </DropdownMenuItem>
                </>
              ) : (
                <DropdownMenuItem>No new notifications</DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/notifications">View all notifications</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span>{userName}</span>
                  <span className="text-xs text-muted-foreground">{role}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login" className="text-red-600">
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
