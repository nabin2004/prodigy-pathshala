"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui/components/tabs"
import {
  ClipboardList,
  Search,
  Clock,
  CheckCircle,
  AlertCircle,
  Send,
  FileText,
  Calendar,
} from "lucide-react"

const assignments = [
  {
    id: 1,
    title: "Quadratic Equations Practice Set",
    subject: "Mathematics",
    teacher: "Dr. Michael Chen",
    dueDate: "Feb 16, 2026",
    status: "pending",
    grade: null,
    points: 100,
    description: "Complete problems 1-20 from Chapter 5. Show all work.",
    type: "homework",
  },
  {
    id: 2,
    title: "Essay: Impact of Climate Change",
    subject: "English",
    teacher: "Sarah Johnson",
    dueDate: "Feb 17, 2026",
    status: "pending",
    grade: null,
    points: 150,
    description: "Write a 500-word essay on climate change effects on local ecosystems.",
    type: "essay",
  },
  {
    id: 3,
    title: "Lab Report: Chemical Reactions",
    subject: "Science",
    teacher: "Prof. Rao",
    dueDate: "Feb 14, 2026",
    status: "submitted",
    grade: null,
    points: 120,
    description: "Document observations from the titration experiment.",
    type: "lab-report",
  },
  {
    id: 4,
    title: "World War II Timeline Project",
    subject: "History",
    teacher: "Ms. Elena Rodriguez",
    dueDate: "Feb 12, 2026",
    status: "graded",
    grade: "A",
    points: 100,
    earnedPoints: 95,
    feedback: "Excellent research and presentation! Great use of primary sources.",
    type: "project",
  },
  {
    id: 5,
    title: "Python: Build a Calculator",
    subject: "Computer Science",
    teacher: "Mr. Alex Rivera",
    dueDate: "Feb 10, 2026",
    status: "graded",
    grade: "A+",
    points: 80,
    earnedPoints: 80,
    feedback: "Perfect implementation with error handling. Well done!",
    type: "coding",
  },
  {
    id: 6,
    title: "Trigonometry Worksheet",
    subject: "Mathematics",
    teacher: "Dr. Michael Chen",
    dueDate: "Feb 15, 2026",
    status: "overdue",
    grade: null,
    points: 50,
    description: "Complete the trigonometric identities worksheet.",
    type: "homework",
  },
]

const statusConfig: Record<string, { icon: React.ElementType; color: string; variant: "success" | "info" | "warning" | "destructive" | "outline" }> = {
  pending: { icon: Clock, color: "text-yellow-500", variant: "warning" },
  submitted: { icon: Send, color: "text-blue-500", variant: "info" },
  graded: { icon: CheckCircle, color: "text-green-500", variant: "success" },
  overdue: { icon: AlertCircle, color: "text-red-500", variant: "destructive" },
}

export default function AssignmentsPage() {
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filtered = assignments.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.subject.toLowerCase().includes(search.toLowerCase())
    if (activeTab === "all") return matchesSearch
    return matchesSearch && a.status === activeTab
  })

  const counts = {
    all: assignments.length,
    pending: assignments.filter((a) => a.status === "pending").length,
    submitted: assignments.filter((a) => a.status === "submitted").length,
    graded: assignments.filter((a) => a.status === "graded").length,
    overdue: assignments.filter((a) => a.status === "overdue").length,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
          <p className="text-muted-foreground mt-1">
            {counts.pending} pending · {counts.overdue} overdue · {counts.graded} graded
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-lg">
              <ClipboardList className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{counts.all}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-yellow-50 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{counts.pending}</p>
              <p className="text-xs text-muted-foreground">Pending</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-green-50 p-2 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{counts.graded}</p>
              <p className="text-xs text-muted-foreground">Graded</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-red-50 p-2 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{counts.overdue}</p>
              <p className="text-xs text-muted-foreground">Overdue</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search assignments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All ({counts.all})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({counts.pending})</TabsTrigger>
          <TabsTrigger value="submitted">Submitted ({counts.submitted})</TabsTrigger>
          <TabsTrigger value="graded">Graded ({counts.graded})</TabsTrigger>
          <TabsTrigger value="overdue">Overdue ({counts.overdue})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="space-y-4 mt-4">
            {filtered.map((assignment) => {
              const config = statusConfig[assignment.status] || statusConfig.pending!
              const StatusIcon = config.icon

              return (
                <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg bg-muted`}>
                            <FileText className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{assignment.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <Badge variant="outline">{assignment.subject}</Badge>
                              <span className="text-sm text-muted-foreground">{assignment.teacher}</span>
                            </div>
                            {assignment.description && (
                              <p className="text-sm text-muted-foreground mt-2">{assignment.description}</p>
                            )}
                            {assignment.feedback && (
                              <div className="mt-2 p-3 bg-green-50 rounded-lg text-sm text-green-800">
                                <strong>Feedback:</strong> {assignment.feedback}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 md:text-right">
                        <div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>Due: {assignment.dueDate}</span>
                          </div>
                          <p className="text-sm font-medium mt-1">
                            {assignment.earnedPoints !== undefined
                              ? `${assignment.earnedPoints}/${assignment.points} pts`
                              : `${assignment.points} pts`}
                          </p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <Badge variant={config.variant}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                          </Badge>
                          {assignment.grade && (
                            <span className="text-lg font-bold text-green-600">{assignment.grade}</span>
                          )}
                        </div>
                        {(assignment.status === "pending" || assignment.status === "overdue") && (
                          <Button size="sm">Submit</Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
