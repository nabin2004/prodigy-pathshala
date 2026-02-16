"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Select } from "@repo/ui/components/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui/components/tabs"
import {
  Search,
  Star,
  Clock,
  Users,
  Filter,
  BookOpen,
  Video,
  Film,
} from "lucide-react"

const courses = [
  {
    id: "algebra-101",
    title: "Algebra Fundamentals: From Basics to Mastery",
    teacher: "Dr. Michael Chen",
    rating: 4.9,
    reviews: 199,
    students: 1240,
    price: 18,
    ageRange: "12-16",
    subject: "Mathematics",
    type: "live" as const,
    duration: "45 min/session",
    totalLessons: 24,
    hasManimator: true,
    description: "Master algebra from linear equations to quadratic functions with interactive visual lessons.",
    image: "📐",
  },
  {
    id: "creative-writing",
    title: "Young Author Academy: Write & Publish Your Book",
    teacher: "Sarah Johnson, M.Ed.",
    rating: 5.0,
    reviews: 87,
    students: 680,
    price: 15,
    ageRange: "9-14",
    subject: "English",
    type: "self-paced" as const,
    duration: "Flexible",
    totalLessons: 18,
    hasManimator: false,
    description: "Learn storytelling, character development, and publishing through guided creative writing exercises.",
    image: "✍️",
  },
  {
    id: "physics-motion",
    title: "Physics: Forces, Motion & Energy",
    teacher: "Prof. Rao",
    rating: 4.8,
    reviews: 156,
    students: 920,
    price: 20,
    ageRange: "13-18",
    subject: "Science",
    type: "live" as const,
    duration: "50 min/session",
    totalLessons: 20,
    hasManimator: true,
    description: "Explore the laws of physics with hands-on experiments and Manimator visual explanations.",
    image: "🔬",
  },
  {
    id: "world-history",
    title: "World History: Ancient Civilizations to Modern Era",
    teacher: "Ms. Elena Rodriguez",
    rating: 4.7,
    reviews: 98,
    students: 540,
    price: 14,
    ageRange: "11-16",
    subject: "History",
    type: "self-paced" as const,
    duration: "Flexible",
    totalLessons: 30,
    hasManimator: true,
    description: "Journey through time from ancient Egypt to the modern world with animated timelines.",
    image: "🏛️",
  },
  {
    id: "python-beginners",
    title: "Python Programming for Young Coders",
    teacher: "Mr. Alex Rivera",
    rating: 4.9,
    reviews: 312,
    students: 2100,
    price: 22,
    ageRange: "10-16",
    subject: "Computer Science",
    type: "live" as const,
    duration: "60 min/session",
    totalLessons: 16,
    hasManimator: false,
    description: "Learn Python through fun projects: games, calculators, and web scrapers.",
    image: "🐍",
  },
  {
    id: "digital-art",
    title: "Digital Art & Comic Creation for Beginners",
    teacher: "Ms. Priya Nair",
    rating: 5.0,
    reviews: 89,
    students: 430,
    price: 25,
    ageRange: "7-12",
    subject: "Art",
    type: "live" as const,
    duration: "60 min/session",
    totalLessons: 12,
    hasManimator: false,
    description: "Create amazing digital art and comics using professional tools and techniques.",
    image: "🎨",
  },
  {
    id: "calculus-intro",
    title: "Introduction to Calculus with Visual Proofs",
    teacher: "Dr. Michael Chen",
    rating: 4.8,
    reviews: 67,
    students: 380,
    price: 24,
    ageRange: "15-18",
    subject: "Mathematics",
    type: "live" as const,
    duration: "50 min/session",
    totalLessons: 20,
    hasManimator: true,
    description: "Understand limits, derivatives, and integrals with beautiful Manimator visual proofs.",
    image: "∫",
  },
  {
    id: "biology-life",
    title: "Biology: The Science of Life",
    teacher: "Dr. Ananya Gupta",
    rating: 4.9,
    reviews: 134,
    students: 780,
    price: 18,
    ageRange: "12-16",
    subject: "Science",
    type: "self-paced" as const,
    duration: "Flexible",
    totalLessons: 22,
    hasManimator: true,
    description: "Explore cells, genetics, and ecosystems with animated Manimator visualizations.",
    image: "🧬",
  },
]

const subjects = ["All", "Mathematics", "Science", "English", "History", "Computer Science", "Art"]

export default function CoursesPage() {
  const [search, setSearch] = useState("")
  const [subject, setSubject] = useState("All")
  const [activeTab, setActiveTab] = useState("all")

  const filtered = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.teacher.toLowerCase().includes(search.toLowerCase())
    const matchesSubject = subject === "All" || c.subject === subject
    const matchesTab = activeTab === "all" ||
      (activeTab === "live" && c.type === "live") ||
      (activeTab === "self-paced" && c.type === "self-paced") ||
      (activeTab === "manimator" && c.hasManimator)
    return matchesSearch && matchesSubject && matchesTab
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Explore Courses</h1>
          <p className="text-muted-foreground mt-1">
            Discover {courses.length}+ courses from expert teachers
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses, teachers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={subject} onChange={(e) => setSubject(e.target.value)}>
          {subjects.map((s) => (
            <option key={s} value={s}>{s === "All" ? "All Subjects" : s}</option>
          ))}
        </Select>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="live">🔴 Live</TabsTrigger>
          <TabsTrigger value="self-paced">📚 Self-Paced</TabsTrigger>
          <TabsTrigger value="manimator">🎬 With Manimator</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
            {filtered.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{course.image}</div>
                    <div className="flex flex-col gap-1 items-end">
                      <Badge variant={course.type === "live" ? "success" : "info"}>
                        {course.type === "live" ? "🔴 Live" : "📚 Self-Paced"}
                      </Badge>
                      {course.hasManimator && (
                        <Badge variant="secondary" className="text-xs">
                          <Film className="h-3 w-3 mr-1" /> Manimator
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-base mt-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    <a href={`/courses/${course.id}`}>{course.title}</a>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{course.teacher}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" /> {course.rating}
                      <span className="text-xs">({course.reviews})</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> {course.students.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline">{course.subject}</Badge>
                    <span>Ages {course.ageRange}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {course.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div>
                      <span className="text-2xl font-bold text-purple-600">${course.price}</span>
                      <span className="text-sm text-muted-foreground">/week</span>
                    </div>
                    <Button size="sm" asChild>
                      <a href={`/courses/${course.id}`}>
                        <BookOpen className="h-3 w-3 mr-1" /> Enroll
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
