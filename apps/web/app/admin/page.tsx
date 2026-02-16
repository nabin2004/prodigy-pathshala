"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Button } from "@repo/ui/components/button"
import { Progress } from "@repo/ui/components/progress"
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  Film,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Eye,
  Clock,
  Server,
} from "lucide-react"

const platformStats = [
  { label: "Total Students", value: "12,847", change: "+12%", trend: "up", icon: Users, color: "text-primary", bg: "bg-red-50 dark:bg-red-950/30" },
  { label: "Active Courses", value: "234", change: "+8%", trend: "up", icon: BookOpen, color: "text-green-500", bg: "bg-green-50 dark:bg-green-950/30" },
  { label: "Revenue (MTD)", value: "$48,250", change: "+23%", trend: "up", icon: DollarSign, color: "text-primary", bg: "bg-red-50 dark:bg-red-950/30" },
  { label: "Manimator Videos", value: "1,456", change: "+45%", trend: "up", icon: Film, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-950/30" },
]

const recentActivity = [
  { action: "New student registration", user: "Priya Sharma", time: "2 min ago", type: "user" },
  { action: "Course published", user: "Dr. Michael Chen", time: "15 min ago", type: "course" },
  { action: "Manimator video generated", user: "Aarav Kumar", time: "32 min ago", type: "manimator" },
  { action: "Assignment graded", user: "Sarah Johnson", time: "1 hour ago", type: "course" },
  { action: "New teacher application", user: "Dr. Raj Patel", time: "2 hours ago", type: "user" },
  { action: "Payment received", user: "Lisa Chen", time: "3 hours ago", type: "payment" },
  { action: "Manimator video failed", user: "System", time: "4 hours ago", type: "error" },
  { action: "Course review submitted", user: "Marcus J.", time: "5 hours ago", type: "course" },
]

const topCourses = [
  { title: "Python Programming for Young Coders", teacher: "Mr. Alex Rivera", students: 2100, revenue: "$8,400", rating: 4.9 },
  { title: "Algebra Fundamentals", teacher: "Dr. Michael Chen", students: 1240, revenue: "$5,580", rating: 4.9 },
  { title: "Physics: Forces & Motion", teacher: "Prof. Rao", students: 920, revenue: "$4,600", rating: 4.8 },
  { title: "Biology: The Science of Life", teacher: "Dr. Ananya Gupta", students: 780, revenue: "$3,510", rating: 4.9 },
  { title: "Creative Writing Workshop", teacher: "Sarah Johnson", students: 680, revenue: "$2,550", rating: 5.0 },
]

const systemHealth = [
  { service: "Web App", status: "healthy", uptime: "99.9%", latency: "45ms" },
  { service: "Manimator Engine", status: "healthy", uptime: "98.7%", latency: "2.3s" },
  { service: "Video Renderer", status: "warning", uptime: "97.2%", latency: "8.5s" },
  { service: "Database", status: "healthy", uptime: "99.99%", latency: "12ms" },
  { service: "CDN / Storage", status: "healthy", uptime: "99.95%", latency: "85ms" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Platform overview for Prodigy Pathshala — February 16, 2026
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <a href="/admin/analytics">View Analytics</a>
          </Button>
          <Button asChild>
            <a href="/admin/courses/create">
              <BookOpen className="mr-2 h-4 w-4" /> Create Course
            </a>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {platformStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                      {stat.change}
                    </span>
                    <span className="text-xs text-muted-foreground">vs last month</span>
                  </div>
                </div>
                <div className={`${stat.bg} p-3 rounded-lg`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
            <CardDescription>Live feed of platform events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                  <div className={`w-2 h-2 rounded-full ${
                    item.type === "error" ? "bg-red-500" :
                    item.type === "user" ? "bg-primary" :
                    item.type === "manimator" ? "bg-primary/70" :
                    item.type === "payment" ? "bg-green-500" : "bg-gray-400"
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{item.action}</span>
                      {item.user !== "System" && (
                        <span className="text-muted-foreground"> — {item.user}</span>
                      )}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Server className="h-5 w-5" /> System Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {systemHealth.map((service) => (
              <div key={service.service} className="flex items-center justify-between p-2 rounded-lg border">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    service.status === "healthy" ? "bg-green-500" :
                    service.status === "warning" ? "bg-yellow-500" : "bg-red-500"
                  }`} />
                  <span className="text-sm font-medium">{service.service}</span>
                </div>
                <div className="text-right text-xs text-muted-foreground">
                  <p>{service.uptime} uptime</p>
                  <p>{service.latency} avg</p>
                </div>
              </div>
            ))}
            <div className="pt-2 border-t">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1 text-yellow-600">
                  <AlertTriangle className="h-4 w-4" /> 1 warning
                </span>
                <Button variant="link" size="sm" className="text-xs p-0 h-auto">View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Courses */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-lg">Top Courses by Enrollment</CardTitle>
            <CardDescription>Most popular courses this month</CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href="/admin/courses">View All</a>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Course</th>
                  <th className="text-left py-3 px-2 font-medium text-muted-foreground">Teacher</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Students</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Revenue</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">Rating</th>
                </tr>
              </thead>
              <tbody>
                {topCourses.map((course, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/50">
                    <td className="py-3 px-2 font-medium">{course.title}</td>
                    <td className="py-3 px-2 text-muted-foreground">{course.teacher}</td>
                    <td className="py-3 px-2 text-right">{course.students.toLocaleString()}</td>
                    <td className="py-3 px-2 text-right font-medium text-green-600">{course.revenue}</td>
                    <td className="py-3 px-2 text-right">
                      <Badge variant="secondary">{course.rating} ⭐</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Manimator Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Film className="h-5 w-5 text-primary" /> Manimator Usage Overview
          </CardTitle>
          <CardDescription>AI video generation statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <p className="text-2xl font-bold">1,456</p>
              <p className="text-xs text-muted-foreground">Total Videos Generated</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <p className="text-2xl font-bold">23</p>
              <p className="text-xs text-muted-foreground">In Queue</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <p className="text-2xl font-bold">94.2%</p>
              <p className="text-xs text-muted-foreground">Success Rate</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-center">
              <p className="text-2xl font-bold">42s</p>
              <p className="text-xs text-muted-foreground">Avg Generation Time</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
