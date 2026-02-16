"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Select } from "@repo/ui/components/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui/components/tabs"
import {
  Users,
  Search,
  UserPlus,
  MoreHorizontal,
  Mail,
  Shield,
  Ban,
  Eye,
  GraduationCap,
  BookOpen,
  UserCheck,
} from "lucide-react"

const users = [
  { id: 1, name: "Aarav Sharma", email: "aarav@student.prodigy.edu", role: "student", status: "active", joinDate: "Jan 15, 2026", lastActive: "2 min ago", classes: 4, points: 2450 },
  { id: 2, name: "Priya Nair", email: "priya@teacher.prodigy.edu", role: "teacher", status: "active", joinDate: "Dec 1, 2025", lastActive: "1 hour ago", classes: 3, students: 89 },
  { id: 3, name: "Ravi Kumar", email: "ravi@parent.prodigy.edu", role: "parent", status: "active", joinDate: "Jan 20, 2026", lastActive: "3 hours ago", children: 2 },
  { id: 4, name: "Ananya Gupta", email: "ananya@teacher.prodigy.edu", role: "teacher", status: "active", joinDate: "Nov 15, 2025", lastActive: "30 min ago", classes: 5, students: 145 },
  { id: 5, name: "Vikram Singh", email: "vikram@student.prodigy.edu", role: "student", status: "active", joinDate: "Feb 1, 2026", lastActive: "5 min ago", classes: 2, points: 890 },
  { id: 6, name: "Lisa Chen", email: "lisa@parent.prodigy.edu", role: "parent", status: "active", joinDate: "Jan 10, 2026", lastActive: "1 day ago", children: 1 },
  { id: 7, name: "Dr. Raj Patel", email: "raj@teacher.prodigy.edu", role: "teacher", status: "pending", joinDate: "Feb 16, 2026", lastActive: "Never", classes: 0, students: 0 },
  { id: 8, name: "Maya Desai", email: "maya@student.prodigy.edu", role: "student", status: "suspended", joinDate: "Dec 20, 2025", lastActive: "1 week ago", classes: 3, points: 1200 },
  { id: 9, name: "Arjun Reddy", email: "arjun@student.prodigy.edu", role: "student", status: "active", joinDate: "Jan 25, 2026", lastActive: "15 min ago", classes: 5, points: 3100 },
  { id: 10, name: "Sarah Johnson", email: "sarah@teacher.prodigy.edu", role: "teacher", status: "active", joinDate: "Oct 1, 2025", lastActive: "10 min ago", classes: 4, students: 210 },
]

const roleIcons: Record<string, React.ElementType> = {
  student: GraduationCap,
  teacher: BookOpen,
  parent: Users,
}

export default function AdminUsersPage() {
  const [search, setSearch] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  const filtered = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    const matchesRole = roleFilter === "all" || u.role === roleFilter
    const matchesTab = activeTab === "all" ||
      (activeTab === "active" && u.status === "active") ||
      (activeTab === "pending" && u.status === "pending") ||
      (activeTab === "suspended" && u.status === "suspended")
    return matchesSearch && matchesRole && matchesTab
  })

  const counts = {
    all: users.length,
    students: users.filter((u) => u.role === "student").length,
    teachers: users.filter((u) => u.role === "teacher").length,
    parents: users.filter((u) => u.role === "parent").length,
    pending: users.filter((u) => u.status === "pending").length,
    suspended: users.filter((u) => u.status === "suspended").length,
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground mt-1">
            {counts.all} total users · {counts.pending} pending approval
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-lg"><GraduationCap className="h-5 w-5 text-blue-500" /></div>
            <div><p className="text-2xl font-bold">{counts.students}</p><p className="text-xs text-muted-foreground">Students</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-green-50 p-2 rounded-lg"><BookOpen className="h-5 w-5 text-green-500" /></div>
            <div><p className="text-2xl font-bold">{counts.teachers}</p><p className="text-xs text-muted-foreground">Teachers</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-purple-50 p-2 rounded-lg"><Users className="h-5 w-5 text-purple-500" /></div>
            <div><p className="text-2xl font-bold">{counts.parents}</p><p className="text-xs text-muted-foreground">Parents</p></div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="bg-yellow-50 p-2 rounded-lg"><UserCheck className="h-5 w-5 text-yellow-500" /></div>
            <div><p className="text-2xl font-bold">{counts.pending}</p><p className="text-xs text-muted-foreground">Pending</p></div>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
          <option value="all">All Roles</option>
          <option value="student">Students</option>
          <option value="teacher">Teachers</option>
          <option value="parent">Parents</option>
        </Select>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All ({counts.all})</TabsTrigger>
          <TabsTrigger value="active">Active ({users.filter((u) => u.status === "active").length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({counts.pending})</TabsTrigger>
          <TabsTrigger value="suspended">Suspended ({counts.suspended})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          <Card className="mt-4">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">User</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Role</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Joined</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">Last Active</th>
                      <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((user) => {
                      const RoleIcon = roleIcons[user.role] || Users
                      return (
                        <tr key={user.id} className="border-b last:border-0 hover:bg-muted/50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {user.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-xs text-muted-foreground">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="outline" className="capitalize">
                              <RoleIcon className="h-3 w-3 mr-1" /> {user.role}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant={
                              user.status === "active" ? "success" :
                              user.status === "pending" ? "warning" : "destructive"
                            }>
                              {user.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{user.joinDate}</td>
                          <td className="py-3 px-4 text-muted-foreground">{user.lastActive}</td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <Button variant="ghost" size="icon-sm"><Eye className="h-4 w-4" /></Button>
                              <Button variant="ghost" size="icon-sm"><Mail className="h-4 w-4" /></Button>
                              {user.status === "pending" && (
                                <Button variant="ghost" size="icon-sm" className="text-green-600"><Shield className="h-4 w-4" /></Button>
                              )}
                              {user.status === "active" && (
                                <Button variant="ghost" size="icon-sm" className="text-red-600"><Ban className="h-4 w-4" /></Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      )
                    })}
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
