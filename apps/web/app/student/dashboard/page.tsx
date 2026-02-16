"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Progress } from "@repo/ui/components/progress"
import { Button } from "@repo/ui/components/button"
import {
  Flame,
  Trophy,
  BookOpen,
  TrendingUp,
  Clock,
  Play,
  Star,
  Calendar,
  Video,
  ArrowRight,
} from "lucide-react"

const stats = [
  { label: "Day Streak", value: "12", icon: Flame, color: "text-orange-500", bg: "bg-orange-50" },
  { label: "XP Points", value: "2,450", icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-50" },
  { label: "Classes Done", value: "24", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Avg Grade", value: "A-", icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
]

const todaySchedule = [
  { time: "9:00 AM", title: "Algebra Fundamentals", teacher: "Dr. Michael Chen", type: "live", duration: "45 min" },
  { time: "11:00 AM", title: "Creative Writing Workshop", teacher: "Sarah Johnson", type: "live", duration: "60 min" },
  { time: "2:00 PM", title: "Physics: Forces & Motion", teacher: "Prof. Rao", type: "recorded", duration: "30 min" },
]

const recentAssignments = [
  { title: "Quadratic Equations Practice", subject: "Math", due: "Today", status: "pending", grade: null },
  { title: "Essay: Climate Change Impact", subject: "English", due: "Tomorrow", status: "pending", grade: null },
  { title: "Lab Report: Chemical Reactions", subject: "Science", due: "Feb 14", status: "submitted", grade: null },
  { title: "World War II Timeline", subject: "History", due: "Feb 12", status: "graded", grade: "A" },
]

const learningProgress = [
  { subject: "Mathematics", progress: 78, total: 24, completed: 19 },
  { subject: "Science", progress: 65, total: 20, completed: 13 },
  { subject: "English", progress: 90, total: 18, completed: 16 },
  { subject: "History", progress: 45, total: 15, completed: 7 },
]

const manimatorVideos = [
  { title: "Pythagorean Theorem Visualized", views: 12, duration: "2:30", status: "ready" },
  { title: "Cell Division Animation", views: 8, duration: "3:15", status: "generating" },
]

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Aarav! 👋</h1>
          <p className="text-muted-foreground mt-1">
            You have 3 classes today and 2 assignments due this week.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <a href="/courses">
              <BookOpen className="mr-2 h-4 w-4" /> Explore Courses
            </a>
          </Button>
          <Button asChild>
            <a href="/manimator">
              <Video className="mr-2 h-4 w-4" /> Manimator Studio
            </a>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-lg`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Today&apos;s Schedule</CardTitle>
              <CardDescription>Sunday, Feb 16, 2026</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="/student/schedule">
                View Full Schedule <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaySchedule.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="text-center min-w-[70px]">
                    <p className="text-sm font-semibold">{item.time}</p>
                    <p className="text-xs text-muted-foreground">{item.duration}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.teacher}</p>
                  </div>
                  <Badge variant={item.type === "live" ? "success" : "info"}>
                    {item.type === "live" ? "🔴 Live" : "📹 Recorded"}
                  </Badge>
                  <Button size="sm">
                    <Play className="h-3 w-3 mr-1" /> Join
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/student/classes">
                <BookOpen className="mr-2 h-4 w-4" /> Continue Learning
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/student/assignments">
                <Clock className="mr-2 h-4 w-4" /> View Assignments
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/manimator">
                <Video className="mr-2 h-4 w-4" /> Create AI Video
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/student/schedule">
                <Calendar className="mr-2 h-4 w-4" /> My Schedule
              </a>
            </Button>

            {/* Manimator Mini Preview */}
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm font-medium mb-3 flex items-center gap-2">
                <Star className="h-4 w-4 text-purple-500" />
                Recent Manimator Videos
              </p>
              {manimatorVideos.map((video, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-md hover:bg-muted/50 text-sm">
                  <Video className="h-4 w-4 text-muted-foreground" />
                  <span className="flex-1 truncate">{video.title}</span>
                  <Badge variant={video.status === "ready" ? "success" : "warning"} className="text-xs">
                    {video.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Learning Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Learning Progress</CardTitle>
            <CardDescription>Your progress across subjects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {learningProgress.map((subject) => (
              <div key={subject.subject} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{subject.subject}</span>
                  <span className="text-sm text-muted-foreground">
                    {subject.completed}/{subject.total} lessons
                  </span>
                </div>
                <Progress value={subject.progress} />
                <p className="text-xs text-muted-foreground text-right">{subject.progress}%</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Assignments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Recent Assignments</CardTitle>
              <CardDescription>Track your homework and projects</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="/student/assignments">View All</a>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAssignments.map((assignment, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{assignment.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">{assignment.subject}</Badge>
                      <span className="text-xs text-muted-foreground">Due: {assignment.due}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    {assignment.status === "graded" ? (
                      <Badge variant="success">{assignment.grade}</Badge>
                    ) : assignment.status === "submitted" ? (
                      <Badge variant="info">Submitted</Badge>
                    ) : (
                      <Badge variant="warning">Pending</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
