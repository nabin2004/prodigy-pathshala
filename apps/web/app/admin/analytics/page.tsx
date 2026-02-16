"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Button } from "@repo/ui/components/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui/components/tabs"
import { Progress } from "@repo/ui/components/progress"
import { Select } from "@repo/ui/components/select"
import {
  TrendingUp,
  Users,
  DollarSign,
  BookOpen,
  Film,
  Eye,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Target,
  Award,
  Activity,
} from "lucide-react"

const kpiMetrics = [
  { label: "Monthly Active Users", value: "8,432", change: "+18%", trend: "up" },
  { label: "Monthly Revenue", value: "$48,250", change: "+23%", trend: "up" },
  { label: "Course Completion Rate", value: "72%", change: "+5%", trend: "up" },
  { label: "Avg Session Duration", value: "34 min", change: "+12%", trend: "up" },
  { label: "Student Retention", value: "89%", change: "+3%", trend: "up" },
  { label: "NPS Score", value: "78", change: "+8", trend: "up" },
]

const engagementData = [
  { period: "Week 1 (Feb)", dau: 2450, classes: 890, assignments: 1200, manimator: 120 },
  { period: "Week 2 (Feb)", dau: 2680, classes: 950, assignments: 1350, manimator: 156 },
  { period: "Week 3 (Feb)", dau: 2890, classes: 1020, assignments: 1400, manimator: 189 },
]

const subjectDistribution = [
  { subject: "Mathematics", students: 4200, percentage: 33 },
  { subject: "Science", students: 3100, percentage: 24 },
  { subject: "English", students: 2000, percentage: 16 },
  { subject: "Computer Science", students: 1800, percentage: 14 },
  { subject: "History", students: 1000, percentage: 8 },
  { subject: "Art", students: 747, percentage: 5 },
]

const revenueBreakdown = [
  { source: "Live Classes", amount: 28400, percentage: 59 },
  { source: "Self-Paced Courses", amount: 12800, percentage: 27 },
  { source: "Manimator Credits", amount: 4200, percentage: 9 },
  { source: "Premium Plans", amount: 2850, percentage: 5 },
]

const manimatorAnalytics = {
  totalVideos: 1456,
  thisMonth: 423,
  avgPerUser: 3.2,
  mostPopularSubject: "Mathematics",
  topPrompts: [
    { prompt: "Pythagorean theorem proof", count: 89 },
    { prompt: "Quadratic formula derivation", count: 67 },
    { prompt: "Cell division animation", count: 54 },
    { prompt: "Newton's laws demonstration", count: 48 },
    { prompt: "Sorting algorithm comparison", count: 42 },
  ],
  generationsBySubject: [
    { subject: "Mathematics", count: 612, percentage: 42 },
    { subject: "Physics", count: 320, percentage: 22 },
    { subject: "Biology", count: 218, percentage: 15 },
    { subject: "Chemistry", count: 146, percentage: 10 },
    { subject: "Computer Science", count: 102, percentage: 7 },
    { subject: "Other", count: 58, percentage: 4 },
  ],
}

const teacherPerformance = [
  { name: "Dr. Michael Chen", courses: 3, students: 1620, rating: 4.9, revenue: "$7,290", completion: 85 },
  { name: "Sarah Johnson", courses: 2, students: 680, rating: 5.0, revenue: "$2,550", completion: 92 },
  { name: "Prof. Rao", courses: 2, students: 920, rating: 4.8, revenue: "$4,600", completion: 78 },
  { name: "Mr. Alex Rivera", courses: 1, students: 2100, rating: 4.9, revenue: "$8,400", completion: 88 },
  { name: "Ms. Elena Rodriguez", courses: 2, students: 540, rating: 4.7, revenue: "$1,890", completion: 75 },
]

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <BarChart3 className="h-8 w-8 text-purple-600" />
            Analytics
          </h1>
          <p className="text-muted-foreground mt-1">
            Platform insights and performance metrics
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30d">
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </Select>
          <Button variant="outline">Export Report</Button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {kpiMetrics.map((metric) => (
          <Card key={metric.label}>
            <CardContent className="p-4 text-center">
              <p className="text-xs text-muted-foreground">{metric.label}</p>
              <p className="text-2xl font-bold mt-1">{metric.value}</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                {metric.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span className={`text-xs font-medium ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                  {metric.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="engagement">
        <TabsList>
          <TabsTrigger value="engagement"><Activity className="h-4 w-4 mr-1" /> Engagement</TabsTrigger>
          <TabsTrigger value="revenue"><DollarSign className="h-4 w-4 mr-1" /> Revenue</TabsTrigger>
          <TabsTrigger value="manimator"><Film className="h-4 w-4 mr-1" /> Manimator</TabsTrigger>
          <TabsTrigger value="teachers"><Award className="h-4 w-4 mr-1" /> Teachers</TabsTrigger>
        </TabsList>

        {/* Engagement Tab */}
        <TabsContent value="engagement">
          <div className="grid gap-6 md:grid-cols-2 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weekly Engagement</CardTitle>
                <CardDescription>User activity breakdown by week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {engagementData.map((week) => (
                    <div key={week.period} className="p-3 rounded-lg border">
                      <p className="font-medium text-sm mb-2">{week.period}</p>
                      <div className="grid grid-cols-4 gap-2 text-center text-xs">
                        <div><p className="font-bold text-blue-600">{week.dau.toLocaleString()}</p><p className="text-muted-foreground">DAU</p></div>
                        <div><p className="font-bold text-green-600">{week.classes}</p><p className="text-muted-foreground">Classes</p></div>
                        <div><p className="font-bold text-orange-600">{week.assignments.toLocaleString()}</p><p className="text-muted-foreground">Assignments</p></div>
                        <div><p className="font-bold text-purple-600">{week.manimator}</p><p className="text-muted-foreground">Videos</p></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Subject Distribution</CardTitle>
                <CardDescription>Student enrollment by subject</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {subjectDistribution.map((subject) => (
                  <div key={subject.subject} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>{subject.subject}</span>
                      <span className="font-medium">{subject.students.toLocaleString()} ({subject.percentage}%)</span>
                    </div>
                    <Progress value={subject.percentage} max={100} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Revenue Tab */}
        <TabsContent value="revenue">
          <div className="grid gap-6 md:grid-cols-2 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Revenue Breakdown</CardTitle>
                <CardDescription>Revenue sources this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {revenueBreakdown.map((source) => (
                  <div key={source.source} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{source.source}</p>
                      <Progress value={source.percentage} className="mt-2" />
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-bold text-green-600">${source.amount.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">{source.percentage}%</p>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-3 flex justify-between font-bold">
                  <span>Total Revenue</span>
                  <span className="text-green-600">${revenueBreakdown.reduce((s, r) => s + r.amount, 0).toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Revenue Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-600">$3.76</p>
                    <p className="text-xs text-muted-foreground">Revenue per Student</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">$206</p>
                    <p className="text-xs text-muted-foreground">Revenue per Course</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-purple-600">92%</p>
                    <p className="text-xs text-muted-foreground">Payment Success Rate</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-orange-600">3.2%</p>
                    <p className="text-xs text-muted-foreground">Churn Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Manimator Tab */}
        <TabsContent value="manimator">
          <div className="grid gap-6 md:grid-cols-2 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Manimator Usage</CardTitle>
                <CardDescription>Video generation analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-purple-50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-purple-600">{manimatorAnalytics.totalVideos.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Total Videos</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">{manimatorAnalytics.thisMonth}</p>
                    <p className="text-xs text-muted-foreground">This Month</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-600">{manimatorAnalytics.avgPerUser}</p>
                    <p className="text-xs text-muted-foreground">Avg per User</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-orange-600">{manimatorAnalytics.mostPopularSubject}</p>
                    <p className="text-xs text-muted-foreground">Top Subject</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="font-medium text-sm">Generation by Subject</p>
                  {manimatorAnalytics.generationsBySubject.map((item) => (
                    <div key={item.subject} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{item.subject}</span>
                        <span className="text-muted-foreground">{item.count} ({item.percentage}%)</span>
                      </div>
                      <Progress value={item.percentage} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Prompts</CardTitle>
                <CardDescription>Most requested animation topics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {manimatorAnalytics.topPrompts.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg border">
                      <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.prompt}</p>
                      </div>
                      <Badge variant="secondary">{item.count} times</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Teachers Tab */}
        <TabsContent value="teachers">
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Teacher Performance</CardTitle>
              <CardDescription>Teaching metrics and rankings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Teacher</th>
                      <th className="text-center py-3 px-4 font-medium text-muted-foreground">Courses</th>
                      <th className="text-center py-3 px-4 font-medium text-muted-foreground">Students</th>
                      <th className="text-center py-3 px-4 font-medium text-muted-foreground">Rating</th>
                      <th className="text-center py-3 px-4 font-medium text-muted-foreground">Revenue</th>
                      <th className="text-center py-3 px-4 font-medium text-muted-foreground">Completion Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teacherPerformance.map((teacher) => (
                      <tr key={teacher.name} className="border-b last:border-0 hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {teacher.name.charAt(0)}
                            </div>
                            <span className="font-medium">{teacher.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">{teacher.courses}</td>
                        <td className="py-3 px-4 text-center">{teacher.students.toLocaleString()}</td>
                        <td className="py-3 px-4 text-center">
                          <Badge variant="secondary">{teacher.rating} ⭐</Badge>
                        </td>
                        <td className="py-3 px-4 text-center font-medium text-green-600">{teacher.revenue}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2 justify-center">
                            <Progress value={teacher.completion} className="w-20" />
                            <span className="text-xs">{teacher.completion}%</span>
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
