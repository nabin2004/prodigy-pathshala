"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui/components/tabs"
import { Progress } from "@repo/ui/components/progress"
import {
  Film,
  Search,
  Clock,
  CheckCircle,
  XCircle,
  Loader2,
  Eye,
  Trash2,
  RefreshCw,
  Server,
  Cpu,
  HardDrive,
  Activity,
  Settings,
  AlertTriangle,
  Play,
  Pause,
} from "lucide-react"

const videoQueue = [
  { id: 1, title: "Pythagorean Theorem Proof", user: "Aarav Sharma", subject: "Mathematics", status: "completed", duration: "2:30", generatedAt: "Feb 16, 10:30 AM", renderTime: "38s", fileSize: "12.4 MB" },
  { id: 2, title: "Cell Division: Mitosis", user: "Priya Nair", subject: "Biology", status: "completed", duration: "3:45", generatedAt: "Feb 16, 10:15 AM", renderTime: "52s", fileSize: "18.2 MB" },
  { id: 3, title: "Newton's Laws of Motion", user: "Aarav Sharma", subject: "Physics", status: "generating", progress: 65, generatedAt: "Feb 16, 10:45 AM", renderTime: "—", fileSize: "—" },
  { id: 4, title: "Quadratic Formula Derivation", user: "Vikram Singh", subject: "Mathematics", status: "queued", generatedAt: "Feb 16, 10:50 AM", renderTime: "—", fileSize: "—" },
  { id: 5, title: "Water Cycle Animation", user: "Arjun Reddy", subject: "Science", status: "queued", generatedAt: "Feb 16, 10:52 AM", renderTime: "—", fileSize: "—" },
  { id: 6, title: "Fibonacci Sequence Spiral", user: "Dr. Michael Chen", subject: "Mathematics", status: "failed", generatedAt: "Feb 16, 9:30 AM", renderTime: "—", error: "Render timeout: Scene too complex", fileSize: "—" },
  { id: 7, title: "Sorting Algorithms Comparison", user: "Mr. Alex Rivera", subject: "CS", status: "completed", duration: "4:10", generatedAt: "Feb 16, 9:00 AM", renderTime: "67s", fileSize: "22.1 MB" },
  { id: 8, title: "Chemical Bonding", user: "Prof. Rao", subject: "Chemistry", status: "completed", duration: "3:20", generatedAt: "Feb 16, 8:45 AM", renderTime: "45s", fileSize: "15.8 MB" },
]

const engineStats = {
  totalGenerated: 1456,
  todayGenerated: 34,
  successRate: 94.2,
  avgRenderTime: "42s",
  queueLength: 2,
  gpuUtilization: 78,
  memoryUsage: 62,
  diskUsage: 45,
  activeWorkers: 3,
  maxWorkers: 4,
}

export default function AdminManimatorPage() {
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filtered = videoQueue.filter((v) => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.user.toLowerCase().includes(search.toLowerCase())
    if (activeTab === "all") return matchesSearch
    return matchesSearch && v.status === activeTab
  })

  const counts = {
    all: videoQueue.length,
    completed: videoQueue.filter((v) => v.status === "completed").length,
    generating: videoQueue.filter((v) => v.status === "generating").length,
    queued: videoQueue.filter((v) => v.status === "queued").length,
    failed: videoQueue.filter((v) => v.status === "failed").length,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Film className="h-8 w-8 text-purple-600" />
            Manimator Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor and manage the AI video generation engine
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Pause className="h-4 w-4 mr-2" /> Pause Queue
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" /> Engine Settings
          </Button>
        </div>
      </div>

      {/* Engine Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Generated</p>
                <p className="text-2xl font-bold">{engineStats.totalGenerated.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{engineStats.todayGenerated} today</p>
              </div>
              <Film className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold">{engineStats.successRate}%</p>
                <p className="text-xs text-muted-foreground">Avg render: {engineStats.avgRenderTime}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Queue Length</p>
                <p className="text-2xl font-bold">{engineStats.queueLength}</p>
                <p className="text-xs text-muted-foreground">
                  {engineStats.activeWorkers}/{engineStats.maxWorkers} workers active
                </p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">GPU Usage</p>
                <p className="text-2xl font-bold">{engineStats.gpuUtilization}%</p>
              </div>
              <Cpu className="h-8 w-8 text-blue-500" />
            </div>
            <Progress value={engineStats.gpuUtilization} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Resource Usage */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Server className="h-5 w-5" /> Resource Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2"><Cpu className="h-4 w-4" /> GPU</span>
                <span className="font-medium">{engineStats.gpuUtilization}%</span>
              </div>
              <Progress value={engineStats.gpuUtilization} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2"><Activity className="h-4 w-4" /> Memory</span>
                <span className="font-medium">{engineStats.memoryUsage}%</span>
              </div>
              <Progress value={engineStats.memoryUsage} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2"><HardDrive className="h-4 w-4" /> Disk</span>
                <span className="font-medium">{engineStats.diskUsage}%</span>
              </div>
              <Progress value={engineStats.diskUsage} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Queue */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search videos..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
        </div>

        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All ({counts.all})</TabsTrigger>
            <TabsTrigger value="generating">Generating ({counts.generating})</TabsTrigger>
            <TabsTrigger value="queued">Queued ({counts.queued})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({counts.completed})</TabsTrigger>
            <TabsTrigger value="failed">Failed ({counts.failed})</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <Card className="mt-4">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Video</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">User</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Subject</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Render Time</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Size</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Requested</th>
                        <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((video) => (
                        <tr key={video.id} className="border-b last:border-0 hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">{video.title}</td>
                          <td className="py-3 px-4 text-muted-foreground">{video.user}</td>
                          <td className="py-3 px-4"><Badge variant="outline">{video.subject}</Badge></td>
                          <td className="py-3 px-4">
                            {video.status === "completed" && (
                              <Badge variant="success"><CheckCircle className="h-3 w-3 mr-1" /> Completed</Badge>
                            )}
                            {video.status === "generating" && (
                              <div className="flex items-center gap-2">
                                <Badge variant="warning"><Loader2 className="h-3 w-3 mr-1 animate-spin" /> Generating</Badge>
                                <div className="w-16"><Progress value={video.progress} /></div>
                              </div>
                            )}
                            {video.status === "queued" && (
                              <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" /> Queued</Badge>
                            )}
                            {video.status === "failed" && (
                              <div>
                                <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" /> Failed</Badge>
                                {video.error && <p className="text-xs text-red-500 mt-1">{video.error}</p>}
                              </div>
                            )}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{video.renderTime}</td>
                          <td className="py-3 px-4 text-muted-foreground">{video.fileSize}</td>
                          <td className="py-3 px-4 text-muted-foreground text-xs">{video.generatedAt}</td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1">
                              {video.status === "completed" && (
                                <Button variant="ghost" size="icon-sm"><Eye className="h-4 w-4" /></Button>
                              )}
                              {video.status === "failed" && (
                                <Button variant="ghost" size="icon-sm"><RefreshCw className="h-4 w-4" /></Button>
                              )}
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
    </div>
  )
}
