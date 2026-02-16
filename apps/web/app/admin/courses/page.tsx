"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Select } from "@repo/ui/components/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui/components/tabs"
import { Progress } from "@repo/ui/components/progress"
import {
  BookOpen,
  Search,
  Plus,
  Star,
  Users,
  DollarSign,
  Eye,
  Pencil,
  Trash2,
  Film,
  BarChart3,
  TrendingUp,
} from "lucide-react"

const courses = [
  { id: 1, title: "Python Programming for Young Coders", teacher: "Mr. Alex Rivera", subject: "Computer Science", status: "published", students: 2100, revenue: 8400, rating: 4.9, hasManimator: false, created: "Oct 15, 2025" },
  { id: 2, title: "Algebra Fundamentals", teacher: "Dr. Michael Chen", subject: "Mathematics", status: "published", students: 1240, revenue: 5580, rating: 4.9, hasManimator: true, created: "Nov 1, 2025" },
  { id: 3, title: "Physics: Forces & Motion", teacher: "Prof. Rao", subject: "Science", status: "published", students: 920, revenue: 4600, rating: 4.8, hasManimator: true, created: "Nov 15, 2025" },
  { id: 4, title: "Creative Writing Workshop", teacher: "Sarah Johnson", subject: "English", status: "published", students: 680, revenue: 2550, rating: 5.0, hasManimator: false, created: "Dec 1, 2025" },
  { id: 5, title: "Introduction to Calculus", teacher: "Dr. Michael Chen", subject: "Mathematics", status: "draft", students: 0, revenue: 0, rating: 0, hasManimator: true, created: "Feb 10, 2026" },
  { id: 6, title: "Advanced Biology: Genetics", teacher: "Dr. Ananya Gupta", subject: "Science", status: "review", students: 0, revenue: 0, rating: 0, hasManimator: true, created: "Feb 12, 2026" },
  { id: 7, title: "World History: Modern Era", teacher: "Ms. Elena Rodriguez", subject: "History", status: "published", students: 340, revenue: 1190, rating: 4.7, hasManimator: true, created: "Jan 5, 2026" },
  { id: 8, title: "Digital Art Masterclass", teacher: "Ms. Priya Nair", subject: "Art", status: "archived", students: 430, revenue: 2150, rating: 5.0, hasManimator: false, created: "Sep 1, 2025" },
]

export default function AdminCoursesPage() {
  const [search, setSearch] = useState("")
  const [subjectFilter, setSubjectFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  const filtered = courses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.teacher.toLowerCase().includes(search.toLowerCase())
    const matchesSubject = subjectFilter === "all" || c.subject.toLowerCase() === subjectFilter
    const matchesTab = activeTab === "all" || c.status === activeTab
    return matchesSearch && matchesSubject && matchesTab
  })

  const totalRevenue = courses.reduce((sum, c) => sum + c.revenue, 0)
  const totalStudents = courses.reduce((sum, c) => sum + c.students, 0)
  const publishedCount = courses.filter((c) => c.status === "published").length

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Course Management</h1>
          <p className="text-muted-foreground mt-1">{courses.length} courses · {publishedCount} published</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Course
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-lg"><BookOpen className="h-5 w-5 text-blue-500" /></div>
            <div><p className="text-2xl font-bold">{courses.length}</p><p className="text-xs text-muted-foreground">Total Courses</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-green-50 p-2 rounded-lg"><Users className="h-5 w-5 text-green-500" /></div>
            <div><p className="text-2xl font-bold">{totalStudents.toLocaleString()}</p><p className="text-xs text-muted-foreground">Total Enrollments</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-purple-50 p-2 rounded-lg"><DollarSign className="h-5 w-5 text-purple-500" /></div>
            <div><p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p><p className="text-xs text-muted-foreground">Total Revenue</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-orange-50 p-2 rounded-lg"><Film className="h-5 w-5 text-orange-500" /></div>
            <div><p className="text-2xl font-bold">{courses.filter((c) => c.hasManimator).length}</p><p className="text-xs text-muted-foreground">With Manimator</p></div>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}>
          <option value="all">All Subjects</option>
          <option value="mathematics">Mathematics</option>
          <option value="science">Science</option>
          <option value="english">English</option>
          <option value="history">History</option>
          <option value="computer science">Computer Science</option>
          <option value="art">Art</option>
        </Select>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All ({courses.length})</TabsTrigger>
          <TabsTrigger value="published">Published ({publishedCount})</TabsTrigger>
          <TabsTrigger value="draft">Draft ({courses.filter((c) => c.status === "draft").length})</TabsTrigger>
          <TabsTrigger value="review">In Review ({courses.filter((c) => c.status === "review").length})</TabsTrigger>
          <TabsTrigger value="archived">Archived ({courses.filter((c) => c.status === "archived").length})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <Card className="mt-4">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Course</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Subject</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Students</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Revenue</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Rating</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((course) => (
                      <tr key={course.id} className="border-b last:border-0 hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium flex items-center gap-2">
                              {course.title}
                              {course.hasManimator && (
                                <Badge variant="secondary" className="text-xs py-0">
                                  <Film className="h-2.5 w-2.5 mr-0.5" /> Manimator
                                </Badge>
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">{course.teacher}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4"><Badge variant="outline">{course.subject}</Badge></td>
                        <td className="py-3 px-4">
                          <Badge variant={
                            course.status === "published" ? "success" :
                            course.status === "draft" ? "secondary" :
                            course.status === "review" ? "warning" : "outline"
                          }>
                            {course.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-right">{course.students.toLocaleString()}</td>
                        <td className="py-3 px-4 text-right font-medium text-green-600">
                          {course.revenue > 0 ? `$${course.revenue.toLocaleString()}` : "—"}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {course.rating > 0 ? (
                            <span className="flex items-center justify-end gap-1">
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" /> {course.rating}
                            </span>
                          ) : "—"}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Button variant="ghost" size="icon-sm"><Eye className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="icon-sm"><Pencil className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="icon-sm"><BarChart3 className="h-4 w-4" /></Button>
                            <Button variant="ghost" size="icon-sm" className="text-red-600"><Trash2 className="h-4 w-4" /></Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
