"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Progress } from "@repo/ui/components/progress"
import { Button } from "@repo/ui/components/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui/components/tabs"
import {
  Star,
  Clock,
  Users,
  BookOpen,
  Video,
  Film,
  CheckCircle,
  Play,
  Calendar,
  Award,
  MessageSquare,
  ArrowLeft,
} from "lucide-react"

const course = {
  id: "algebra-101",
  title: "Algebra Fundamentals: From Basics to Mastery",
  teacher: "Dr. Michael Chen",
  teacherBio: "PhD in Mathematics Education, 15+ years of teaching experience. Specializes in making abstract math concepts visual and intuitive.",
  rating: 4.9,
  reviews: 199,
  students: 1240,
  price: 18,
  ageRange: "12-16",
  subject: "Mathematics",
  type: "live",
  duration: "45 min/session",
  totalLessons: 24,
  hasManimator: true,
  description: "Master algebra from linear equations to quadratic functions with interactive visual lessons powered by Manimator AI-generated animations. Each concept is brought to life with beautiful mathematical visualizations that help you truly understand the 'why' behind every formula.",
  whatYouLearn: [
    "Linear equations and inequalities",
    "Systems of equations",
    "Polynomials and factoring",
    "Quadratic equations and functions",
    "Graphing and coordinate geometry",
    "Word problems and real-world applications",
  ],
  schedule: "Mon, Wed, Fri — 9:00 AM (45 min)",
}

const curriculum = [
  {
    module: "Module 1: Foundations",
    lessons: [
      { title: "Variables and Expressions", duration: "45 min", type: "live", completed: true, hasManimator: true },
      { title: "Order of Operations", duration: "45 min", type: "live", completed: true, hasManimator: true },
      { title: "Practice Set 1", duration: "30 min", type: "assignment", completed: true, hasManimator: false },
    ],
  },
  {
    module: "Module 2: Linear Equations",
    lessons: [
      { title: "Solving One-Step Equations", duration: "45 min", type: "live", completed: true, hasManimator: true },
      { title: "Multi-Step Equations", duration: "45 min", type: "live", completed: true, hasManimator: true },
      { title: "Graphing Linear Equations", duration: "45 min", type: "live", completed: false, hasManimator: true },
      { title: "Practice Set 2", duration: "30 min", type: "assignment", completed: false, hasManimator: false },
    ],
  },
  {
    module: "Module 3: Systems of Equations",
    lessons: [
      { title: "Substitution Method", duration: "45 min", type: "live", completed: false, hasManimator: true },
      { title: "Elimination Method", duration: "45 min", type: "live", completed: false, hasManimator: true },
      { title: "Graphical Solutions", duration: "45 min", type: "live", completed: false, hasManimator: true },
    ],
  },
  {
    module: "Module 4: Quadratics",
    lessons: [
      { title: "Quadratic Expressions", duration: "45 min", type: "live", completed: false, hasManimator: true },
      { title: "Quadratic Formula", duration: "45 min", type: "live", completed: false, hasManimator: true },
      { title: "Graphing Parabolas", duration: "45 min", type: "live", completed: false, hasManimator: true },
      { title: "Final Project", duration: "60 min", type: "assignment", completed: false, hasManimator: false },
    ],
  },
]

const manimatorVideos = [
  { title: "Visualizing Linear Equations", duration: "2:30", views: 856, thumbnail: "📊" },
  { title: "Slope-Intercept Form Animation", duration: "3:15", views: 1200, thumbnail: "📈" },
  { title: "Systems of Equations Intersection", duration: "2:45", views: 934, thumbnail: "🔀" },
  { title: "Quadratic Formula Derivation", duration: "4:20", views: 678, thumbnail: "📐" },
]

const reviews = [
  { name: "Parent of Riya", rating: 5, text: "Dr. Chen makes math so visual and understandable. The Manimator videos are incredible!", date: "Feb 10, 2026" },
  { name: "Arjun's Mom", rating: 5, text: "My son went from hating algebra to actually asking for extra practice. The animations really help.", date: "Feb 5, 2026" },
  { name: "Lisa M.", rating: 4, text: "Great course structure. Would love even more practice problems, but overall excellent.", date: "Jan 28, 2026" },
]

export default function CourseDetailPage() {
  const completedLessons = curriculum.flatMap((m) => m.lessons).filter((l) => l.completed).length
  const totalLessons = curriculum.flatMap((m) => m.lessons).length
  const progress = Math.round((completedLessons / totalLessons) * 100)

  return (
    <div className="space-y-6">
      <Button variant="ghost" size="sm" asChild>
        <a href="/courses"><ArrowLeft className="h-4 w-4 mr-1" /> Back to Courses</a>
      </Button>

      {/* Course Header */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="success">🔴 Live Class</Badge>
            <Badge variant="secondary"><Film className="h-3 w-3 mr-1" /> Manimator Enhanced</Badge>
            <Badge variant="outline">{course.subject}</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
          <p className="text-lg text-muted-foreground">{course.description}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <strong>{course.rating}</strong> ({course.reviews} reviews)
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" /> {course.students.toLocaleString()} students
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" /> {course.totalLessons} lessons
            </span>
            <span>Ages {course.ageRange}</span>
          </div>

          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
              {course.teacher.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{course.teacher}</p>
              <p className="text-sm text-muted-foreground">{course.teacherBio}</p>
            </div>
          </div>
        </div>

        {/* Enrollment Card */}
        <Card className="h-fit">
          <CardContent className="p-6 space-y-4">
            <div className="text-center">
              <span className="text-4xl font-bold text-purple-600">${course.price}</span>
              <span className="text-muted-foreground">/week</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-medium">{completedLessons}/{totalLessons} lessons</span>
              </div>
              <Progress value={progress} />
            </div>
            <Button className="w-full" size="lg">
              <Play className="h-4 w-4 mr-2" /> Continue Learning
            </Button>
            <Button variant="outline" className="w-full">
              <Calendar className="h-4 w-4 mr-2" /> {course.schedule}
            </Button>
            <div className="border-t pt-4 space-y-2 text-sm">
              <p className="font-medium">What you&apos;ll learn:</p>
              {course.whatYouLearn.map((item, i) => (
                <p key={i} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs: Curriculum, Manimator Videos, Reviews */}
      <Tabs defaultValue="curriculum">
        <TabsList>
          <TabsTrigger value="curriculum">📖 Curriculum</TabsTrigger>
          <TabsTrigger value="manimator">🎬 Manimator Videos</TabsTrigger>
          <TabsTrigger value="reviews">⭐ Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="curriculum">
          <div className="space-y-4 mt-4">
            {curriculum.map((module, mi) => (
              <Card key={mi}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{module.module}</CardTitle>
                  <CardDescription>
                    {module.lessons.filter((l) => l.completed).length}/{module.lessons.length} completed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {module.lessons.map((lesson, li) => (
                      <div
                        key={li}
                        className={`flex items-center gap-3 p-3 rounded-lg border ${lesson.completed ? "bg-green-50/50 border-green-200" : "hover:bg-muted/50"} transition-colors`}
                      >
                        {lesson.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                        ) : (
                          <div className="h-5 w-5 border-2 rounded-full shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className={`font-medium text-sm ${lesson.completed ? "text-green-800" : ""}`}>
                            {lesson.title}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                            {lesson.hasManimator && (
                              <Badge variant="secondary" className="text-xs py-0">
                                <Film className="h-2.5 w-2.5 mr-0.5" /> Manimator
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {lesson.type === "live" ? "Live" : "Assignment"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="manimator">
          <div className="mt-4">
            <div className="mb-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-3">
                <Film className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="font-semibold">Manimator AI-Generated Videos</p>
                  <p className="text-sm text-muted-foreground">
                    Each lesson includes beautiful mathematical animations generated by our Manimator AI engine,
                    powered by the Manim library. These videos help visualize abstract concepts.
                  </p>
                </div>
                <Button size="sm" asChild>
                  <a href="/manimator"><Film className="h-3 w-3 mr-1" /> Create Your Own</a>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {manimatorVideos.map((video, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-24 h-16 rounded-lg flex items-center justify-center text-3xl">
                      {video.thumbnail}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{video.title}</p>
                      <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {video.duration}</span>
                        <span>{video.views.toLocaleString()} views</span>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Play className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="space-y-4 mt-4">
            <div className="flex items-center gap-6 p-4 bg-muted/50 rounded-lg">
              <div className="text-center">
                <p className="text-4xl font-bold">{course.rating}</p>
                <div className="flex items-center gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{course.reviews} reviews</p>
              </div>
            </div>
            {reviews.map((review, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm font-bold text-purple-600">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
