"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Progress } from "@repo/ui/components/progress"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui/components/tabs"
import {
  BookOpen,
  Search,
  Star,
  Clock,
  Users,
  Play,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

const classes = [
  {
    id: 1,
    title: "Algebra Fundamentals",
    teacher: "Dr. Michael Chen",
    subject: "Mathematics",
    progress: 78,
    lessonsCompleted: 19,
    totalLessons: 24,
    rating: 4.9,
    students: 28,
    nextClass: "Today, 9:00 AM",
    status: "active",
    image: "📐",
  },
  {
    id: 2,
    title: "Creative Writing Workshop",
    teacher: "Sarah Johnson, M.Ed.",
    subject: "English",
    progress: 90,
    lessonsCompleted: 16,
    totalLessons: 18,
    rating: 5.0,
    students: 15,
    nextClass: "Today, 11:00 AM",
    status: "active",
    image: "✍️",
  },
  {
    id: 3,
    title: "Physics: Forces & Motion",
    teacher: "Prof. Rao",
    subject: "Science",
    progress: 65,
    lessonsCompleted: 13,
    totalLessons: 20,
    rating: 4.8,
    students: 32,
    nextClass: "Tomorrow, 2:00 PM",
    status: "active",
    image: "🔬",
  },
  {
    id: 4,
    title: "World History: Ancient Civilizations",
    teacher: "Ms. Elena Rodriguez",
    subject: "History",
    progress: 45,
    lessonsCompleted: 7,
    totalLessons: 15,
    rating: 4.7,
    students: 22,
    nextClass: "Wed, 10:00 AM",
    status: "active",
    image: "🏛️",
  },
  {
    id: 5,
    title: "Introduction to Python",
    teacher: "Mr. Alex Rivera",
    subject: "Computer Science",
    progress: 100,
    lessonsCompleted: 12,
    totalLessons: 12,
    rating: 4.9,
    students: 40,
    nextClass: null,
    status: "completed",
    image: "🐍",
  },
  {
    id: 6,
    title: "Digital Art Basics",
    teacher: "Ms. Priya Nair",
    subject: "Art",
    progress: 100,
    lessonsCompleted: 8,
    totalLessons: 8,
    rating: 5.0,
    students: 18,
    nextClass: null,
    status: "completed",
    image: "🎨",
  },
]

export default function ClassesPage() {
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filtered = classes.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.teacher.toLowerCase().includes(search.toLowerCase())
    if (activeTab === "all") return matchesSearch
    return matchesSearch && c.status === activeTab
  })

  const activeCount = classes.filter((c) => c.status === "active").length
  const completedCount = classes.filter((c) => c.status === "completed").length

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Classes</h1>
          <p className="text-muted-foreground mt-1">
            {activeCount} active classes · {completedCount} completed
          </p>
        </div>
        <Button asChild>
          <a href="/courses">
            <BookOpen className="mr-2 h-4 w-4" /> Browse More Courses
          </a>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-lg">
              <BookOpen className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{classes.length}</p>
              <p className="text-xs text-muted-foreground">Total Classes</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-green-50 p-2 rounded-lg">
              <Play className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{activeCount}</p>
              <p className="text-xs text-muted-foreground">Active</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-purple-50 p-2 rounded-lg">
              <CheckCircle className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{completedCount}</p>
              <p className="text-xs text-muted-foreground">Completed</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-yellow-50 p-2 rounded-lg">
              <Star className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">4.9</p>
              <p className="text-xs text-muted-foreground">Avg Rating</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search classes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All ({classes.length})</TabsTrigger>
          <TabsTrigger value="active">Active ({activeCount})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedCount})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {filtered.map((cls) => (
              <Card key={cls.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="text-3xl">{cls.image}</div>
                    <Badge variant={cls.status === "active" ? "success" : "secondary"}>
                      {cls.status === "active" ? "Active" : "Completed"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">{cls.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{cls.teacher}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" /> {cls.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> {cls.students}
                    </span>
                    <Badge variant="outline" className="text-xs">{cls.subject}</Badge>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{cls.lessonsCompleted}/{cls.totalLessons} lessons</span>
                    </div>
                    <Progress value={cls.progress} />
                  </div>

                  {cls.nextClass && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span>Next: {cls.nextClass}</span>
                    </div>
                  )}

                  <Button className="w-full" variant={cls.status === "active" ? "default" : "outline"}>
                    {cls.status === "active" ? (
                      <>
                        <Play className="mr-1 h-3 w-3" /> Continue
                      </>
                    ) : (
                      <>
                        <ArrowRight className="mr-1 h-3 w-3" /> View Certificate
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
