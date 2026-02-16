"use client"

import * as React from "react"
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Users,
  Calendar,
  ClipboardList,
  Film,
  BarChart3,
  Settings,
  Compass,
  FileText,
} from "lucide-react"

import { NavMain } from "@repo/ui/components/nav-main"
import { NavUser } from "@repo/ui/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@repo/ui/components/sidebar"

const studentNav = [
  {
    title: "Dashboard",
    url: "/student/dashboard",
    icon: LayoutDashboard,
    isActive: true,
    items: [],
  },
  {
    title: "My Classes",
    url: "/student/classes",
    icon: BookOpen,
    items: [
      { title: "Active Classes", url: "/student/classes?tab=active" },
      { title: "Completed", url: "/student/classes?tab=completed" },
    ],
  },
  {
    title: "Assignments",
    url: "/student/assignments",
    icon: ClipboardList,
    items: [
      { title: "Pending", url: "/student/assignments?tab=pending" },
      { title: "Submitted", url: "/student/assignments?tab=submitted" },
      { title: "Graded", url: "/student/assignments?tab=graded" },
    ],
  },
  {
    title: "Schedule",
    url: "/student/schedule",
    icon: Calendar,
    items: [],
  },
  {
    title: "Explore Courses",
    url: "/courses",
    icon: Compass,
    items: [
      { title: "Browse All", url: "/courses" },
      { title: "By Subject", url: "/courses?filter=subject" },
      { title: "By Age", url: "/courses?filter=age" },
    ],
  },
  {
    title: "Manimator Studio",
    url: "/manimator",
    icon: Film,
    items: [
      { title: "Generate Video", url: "/manimator" },
      { title: "My Videos", url: "/manimator/my-videos" },
    ],
  },
]

const adminNav = [
  {
    title: "Overview",
    url: "/admin",
    icon: LayoutDashboard,
    isActive: true,
    items: [],
  },
  {
    title: "User Management",
    url: "/admin/users",
    icon: Users,
    items: [
      { title: "Students", url: "/admin/users?role=student" },
      { title: "Teachers", url: "/admin/users?role=teacher" },
      { title: "Parents", url: "/admin/users?role=parent" },
    ],
  },
  {
    title: "Course Management",
    url: "/admin/courses",
    icon: BookOpen,
    items: [
      { title: "All Courses", url: "/admin/courses" },
      { title: "Create Course", url: "/admin/courses/create" },
      { title: "Categories", url: "/admin/courses/categories" },
    ],
  },
  {
    title: "Manimator",
    url: "/admin/manimator",
    icon: Film,
    items: [
      { title: "Video Queue", url: "/admin/manimator" },
      { title: "Templates", url: "/admin/manimator/templates" },
      { title: "Settings", url: "/admin/manimator/settings" },
    ],
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: BarChart3,
    items: [
      { title: "Platform Metrics", url: "/admin/analytics" },
      { title: "Engagement", url: "/admin/analytics?tab=engagement" },
      { title: "Revenue", url: "/admin/analytics?tab=revenue" },
    ],
  },
  {
    title: "Content",
    url: "/admin/content",
    icon: FileText,
    items: [
      { title: "Lessons", url: "/admin/content" },
      { title: "Quizzes", url: "/admin/content/quizzes" },
      { title: "Resources", url: "/admin/content/resources" },
    ],
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
    items: [
      { title: "General", url: "/admin/settings" },
      { title: "Roles & Permissions", url: "/admin/settings/roles" },
      { title: "Integrations", url: "/admin/settings/integrations" },
    ],
  },
]

const userData = {
  student: {
    name: "Aarav Sharma",
    email: "aarav@student.prodigy.edu",
    avatar: "",
  },
  admin: {
    name: "Admin User",
    email: "admin@prodigy.edu",
    avatar: "",
  },
}

export function AppSidebar({
  role = "student",
  ...props
}: React.ComponentProps<typeof Sidebar> & { role?: "student" | "admin" }) {
  const navItems = role === "admin" ? adminNav : studentNav
  const user = role === "admin" ? userData.admin : userData.student

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href={role === "admin" ? "/admin" : "/student/dashboard"}>
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GraduationCap className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Prodigy Pathshala</span>
                  <span className="truncate text-xs capitalize">{role} Portal</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
