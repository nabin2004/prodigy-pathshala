"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Button } from "@repo/ui/components/button"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Video,
  BookOpen,
  ClipboardList,
} from "lucide-react"

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const scheduleData: Record<string, { time: string; title: string; teacher: string; type: "live" | "recorded" | "assignment"; duration: string }[]> = {
  "2026-02-16": [
    { time: "9:00 AM", title: "Algebra Fundamentals", teacher: "Dr. Michael Chen", type: "live", duration: "45 min" },
    { time: "11:00 AM", title: "Creative Writing Workshop", teacher: "Sarah Johnson", type: "live", duration: "60 min" },
    { time: "2:00 PM", title: "Physics: Forces & Motion", teacher: "Prof. Rao", type: "recorded", duration: "30 min" },
  ],
  "2026-02-17": [
    { time: "10:00 AM", title: "World History", teacher: "Ms. Elena Rodriguez", type: "live", duration: "45 min" },
    { time: "1:00 PM", title: "Essay Due: Climate Change", teacher: "Sarah Johnson", type: "assignment", duration: "—" },
    { time: "3:00 PM", title: "Python Coding Lab", teacher: "Mr. Alex Rivera", type: "live", duration: "60 min" },
  ],
  "2026-02-18": [
    { time: "9:00 AM", title: "Algebra Fundamentals", teacher: "Dr. Michael Chen", type: "live", duration: "45 min" },
    { time: "11:00 AM", title: "Science Lab: Chemistry", teacher: "Prof. Rao", type: "live", duration: "90 min" },
  ],
  "2026-02-19": [
    { time: "10:00 AM", title: "Creative Writing Workshop", teacher: "Sarah Johnson", type: "live", duration: "60 min" },
    { time: "2:00 PM", title: "History: Medieval Europe", teacher: "Ms. Elena Rodriguez", type: "recorded", duration: "35 min" },
  ],
  "2026-02-20": [
    { time: "9:00 AM", title: "Math Quiz", teacher: "Dr. Michael Chen", type: "assignment", duration: "30 min" },
    { time: "11:00 AM", title: "Physics: Energy", teacher: "Prof. Rao", type: "live", duration: "45 min" },
    { time: "3:00 PM", title: "Art & Design Workshop", teacher: "Ms. Priya Nair", type: "live", duration: "60 min" },
  ],
}

const typeConfig = {
  live: { icon: Video, color: "bg-green-100 text-green-800", label: "🔴 Live" },
  recorded: { icon: BookOpen, color: "bg-blue-100 text-blue-800", label: "📹 Recorded" },
  assignment: { icon: ClipboardList, color: "bg-orange-100 text-orange-800", label: "📝 Assignment" },
}

export default function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 16)) // Feb 16, 2026
  const [view, setView] = useState<"week" | "day">("week")

  const getWeekDates = () => {
    const start = new Date(currentDate)
    start.setDate(start.getDate() - start.getDay())
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(start)
      date.setDate(start.getDate() + i)
      return date
    })
  }

  const weekDates = getWeekDates()

  const formatDateKey = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`

  const navigateWeek = (dir: number) => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + dir * 7)
    setCurrentDate(newDate)
  }

  const isToday = (date: Date) => {
    const today = new Date(2026, 1, 16) // simulated today
    return date.toDateString() === today.toDateString()
  }

  const totalClasses = Object.values(scheduleData).flat().filter((e) => e.type === "live").length
  const totalAssignments = Object.values(scheduleData).flat().filter((e) => e.type === "assignment").length

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
          <p className="text-muted-foreground mt-1">
            {totalClasses} live classes · {totalAssignments} assignments this week
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={view === "day" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("day")}
          >
            Day
          </Button>
          <Button
            variant={view === "week" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("week")}
          >
            Week
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-green-50 p-2 rounded-lg"><Video className="h-5 w-5 text-green-500" /></div>
            <div><p className="text-2xl font-bold">{totalClasses}</p><p className="text-xs text-muted-foreground">Live Classes</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-orange-50 p-2 rounded-lg"><ClipboardList className="h-5 w-5 text-orange-500" /></div>
            <div><p className="text-2xl font-bold">{totalAssignments}</p><p className="text-xs text-muted-foreground">Due This Week</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-lg"><BookOpen className="h-5 w-5 text-blue-500" /></div>
            <div><p className="text-2xl font-bold">6.5h</p><p className="text-xs text-muted-foreground">Study Hours</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-purple-50 p-2 rounded-lg"><Clock className="h-5 w-5 text-purple-500" /></div>
            <div><p className="text-2xl font-bold">3</p><p className="text-xs text-muted-foreground">Free Slots</p></div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar Navigation */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => navigateWeek(-1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <CardTitle className="text-lg">
              {weekDates[0]?.toLocaleDateString("en-US", { month: "long", day: "numeric" })} –{" "}
              {weekDates[6]?.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </CardTitle>
            <Button variant="outline" size="icon" onClick={() => navigateWeek(1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date(2026, 1, 16))}>
            Today
          </Button>
        </CardHeader>
        <CardContent>
          {/* Week View */}
          <div className="grid grid-cols-7 gap-2">
            {weekDates.map((date) => {
              const key = formatDateKey(date)
              const events = scheduleData[key] || []
              const today = isToday(date)

              return (
                <div
                  key={key}
                  className={`min-h-[200px] border rounded-lg p-2 ${today ? "border-purple-400 bg-purple-50/50" : ""}`}
                >
                  <div className={`text-center mb-2 pb-2 border-b ${today ? "font-bold" : ""}`}>
                    <p className="text-xs text-muted-foreground">{daysOfWeek[date.getDay()]}</p>
                    <p className={`text-lg ${today ? "bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto" : ""}`}>
                      {date.getDate()}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    {events.map((event, i) => {
                      const config = typeConfig[event.type]
                      return (
                        <div
                          key={i}
                          className={`p-1.5 rounded text-xs cursor-pointer hover:opacity-80 ${config.color}`}
                        >
                          <p className="font-medium truncate">{event.title}</p>
                          <p className="opacity-70">{event.time}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Today's Detail */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Today&apos;s Detail — February 16, 2026
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {(scheduleData["2026-02-16"] || []).map((event, i) => {
              const config = typeConfig[event.type]
              return (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="text-center min-w-[80px]">
                    <p className="text-sm font-semibold">{event.time}</p>
                    <p className="text-xs text-muted-foreground">{event.duration}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.teacher}</p>
                  </div>
                  <Badge className={config.color}>{config.label}</Badge>
                  {event.type === "live" && (
                    <Button size="sm">
                      <Video className="h-3 w-3 mr-1" /> Join
                    </Button>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
