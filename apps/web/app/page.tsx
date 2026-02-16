"use client"

import { Card, CardContent } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Progress } from "@repo/ui/components/progress"
import { Button } from "@repo/ui/components/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui/components/tabs"
import { ThemeToggle } from "@repo/ui/components/theme-toggle"
import Link from "next/link"
import {
  Star,
  Users,
  Clock,
  Award,
  Shield,
  Sparkles,
  BookOpen,
  Target,
  Heart,
  CheckCircle,
  Film,
  Play,
  Zap,
  Code,
  ArrowRight,
  GraduationCap,
  Globe,
} from "lucide-react"

interface Teacher {
  name: string
  title: string
  rating: number
  reviews: number
  subject: string
}

interface Course {
  title: string
  teacher: string
  rating: number
  reviews: number
  ageRange: string
  price: number
  duration?: string
  type: "live" | "self-paced"
  subject: string
  enrolled: number
}

export default function Home() {
  const featuredCourses: Course[] = [
    {
      title: "Young Author Academy: Write and Publish Your Book",
      teacher: "Sarah Johnson, M.Ed.",
      rating: 4.9,
      reviews: 27,
      ageRange: "9-12",
      price: 15,
      type: "self-paced",
      subject: "English",
      enrolled: 342,
    },
    {
      title: "Master Multiplication Facts: Interactive Math Games",
      teacher: "Dr. Michael Chen",
      rating: 4.8,
      reviews: 199,
      ageRange: "7-12",
      price: 18,
      type: "self-paced",
      subject: "Mathematics",
      enrolled: 1280,
    },
    {
      title: "Interactive Shakespeare: Romeo & Juliet Adventure",
      teacher: "Prof. Elizabeth Moore",
      rating: 4.8,
      reviews: 63,
      ageRange: "13-18",
      price: 16,
      type: "live",
      duration: "45 mins",
      subject: "Literature",
      enrolled: 456,
    },
    {
      title: "Digital Art & Comic Creation for Beginners",
      teacher: "Mr. Alex Rivera",
      rating: 5.0,
      reviews: 89,
      ageRange: "7-10",
      price: 25,
      type: "live",
      duration: "60 mins",
      subject: "Art",
      enrolled: 890,
    },
  ]

  const featuredTeachers: Teacher[] = [
    { name: "Dr. Sarah Mitchell", title: "Cognitive Development Specialist", rating: 5.0, reviews: 874, subject: "Psychology" },
    { name: "Prof. James Wilson", title: "STEM Education Expert", rating: 4.9, reviews: 632, subject: "Science" },
    { name: "Ms. Elena Rodriguez", title: "Multilingual Educator", rating: 5.0, reviews: 421, subject: "Languages" },
    { name: "Dr. Marcus Johnson", title: "Child Psychology & Learning", rating: 4.9, reviews: 589, subject: "Education" },
  ]

  const platformStats = [
    { label: "Active Students", value: "10,000+", icon: Users, color: "text-purple-600" },
    { label: "Expert Teachers", value: "500+", icon: GraduationCap, color: "text-blue-600" },
    { label: "Courses Available", value: "1,200+", icon: BookOpen, color: "text-green-600" },
    { label: "Countries Reached", value: "45+", icon: Globe, color: "text-orange-600" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-[oklch(0.44_0.16_25)] to-[oklch(0.30_0.12_17)] text-white py-3 px-4 text-center">
        <p className="text-lg font-semibold">
          🎉 First month free with code:{" "}
          <Badge variant="secondary" className="bg-white text-[oklch(0.44_0.16_25)] px-2 py-1 font-bold text-sm ml-1">NEWYEAR2026</Badge>
        </p>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Prodigy Pathshala</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/courses" className="text-muted-foreground hover:text-primary font-medium">Explore Classes</Link>
              <Link href="/manimator" className="text-muted-foreground hover:text-primary font-medium">Manimator</Link>
              <Link href="/courses" className="text-muted-foreground hover:text-primary font-medium">For Parents</Link>
              <a href="#about" className="text-muted-foreground hover:text-primary font-medium">About Us</a>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/auth/login"><Button variant="ghost">Log In</Button></Link>
              <Link href="/auth/register"><Button>Get Started</Button></Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="info" className="mb-4 text-sm px-3 py-1">
              <Sparkles className="h-3 w-3 mr-1" /> #1 AI-Powered Learning Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Custom learning
              <span className="block text-primary">paths for the</span>
              prodigy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Live and self-paced online classes with expert teachers that support
              core learning, enrichment, and real-world skills. Now with{" "}
              <span className="font-semibold text-primary">Manimator AI</span> for
              stunning animated video lessons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button size="lg" className="text-lg px-8 py-6">
                  Find Your Child&apos;s Path
                </Button>
              </Link>
              <Link href="/manimator">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Film className="mr-2 h-5 w-5" /> Try Manimator AI
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground font-medium">4.9/5 average rating from 10,000+ families</span>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-rose-50 dark:from-red-950/30 dark:to-rose-950/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 bg-card p-4 rounded-xl shadow-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <Card className="shadow-2xl max-w-sm">
                  <CardContent className="p-8 text-center">
                    <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Personalized Learning</h3>
                    <p className="text-muted-foreground">Tailored to your child&apos;s unique interests and learning style</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platformStats.map((stat) => (
            <Card key={stat.label} className="border-none shadow-md">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Courses Section — with Tabs */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Classes</h2>
            <p className="text-xl text-muted-foreground">Discover classes that spark curiosity and build confidence</p>
          </div>

          <Tabs defaultValue="all">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Courses</TabsTrigger>
                <TabsTrigger value="live">🔴 Live Classes</TabsTrigger>
                <TabsTrigger value="self-paced">📚 Self-Paced</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="live">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredCourses.filter(c => c.type === "live").map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="self-paced">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredCourses.filter(c => c.type === "self-paced").map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button variant="outline" className="px-8 py-3">
                View All 1,200+ Classes <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why choose Prodigy Pathshala?</h2>
            <p className="text-xl text-muted-foreground">Education that adapts to your child, not the other way around</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                iconBg: "bg-red-100 dark:bg-red-950/30",
                iconColor: "text-primary",
                title: "Built for your child's unique needs",
                description: "Choose from 1000s of classes, from core academics to enrichment, supported by our personalized learning concierge service.",
                stat: "93% parents satisfied",
              },
              {
                icon: Clock,
                iconBg: "bg-rose-100 dark:bg-rose-950/30",
                iconColor: "text-primary",
                title: "Live classes on your schedule",
                description: "Get personalized recommendations that fit your daily life by adding your child's specific learning needs and availability.",
                stat: "24/7 class availability",
              },
              {
                icon: Shield,
                iconBg: "bg-green-100 dark:bg-green-950/30",
                iconColor: "text-green-600",
                title: "Flexible plans for every family",
                description: "Plans designed to grow with you. Change anytime, and unused credits roll over each month. No long-term commitments.",
                stat: "Cancel anytime",
              },
            ].map((feature) => (
              <Card key={feature.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className={`${feature.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Badge variant="secondary">{feature.stat}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manimator AI Section */}
      <section className="bg-gradient-to-b from-secondary to-[oklch(0.12_0.02_17)] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="info" className="mb-4">
                <Film className="h-3 w-3 mr-1" /> Powered by AI
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.55_0.18_25)] to-[oklch(0.65_0.20_15)]">Manimator</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Type any topic and watch AI generate beautiful animated math &amp; science
                videos using Manim — the same engine behind 3Blue1Brown. Learning has never
                been this visual.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Zap, text: "Generate animations in seconds with natural language prompts" },
                  { icon: Code, text: "Full Manim Python code generated — learn programming too" },
                  { icon: Play, text: "Download, share, or embed videos in your coursework" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="bg-[oklch(0.44_0.16_25)]/30 p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-[oklch(0.65_0.18_25)]" />
                    </div>
                    <span className="text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link href="/manimator">
                <Button size="lg" className="bg-gradient-to-r from-[oklch(0.44_0.16_25)] to-[oklch(0.55_0.18_25)] text-white text-lg px-8 hover:from-[oklch(0.38_0.14_25)] hover:to-[oklch(0.48_0.16_25)]">
                  Try Manimator Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div>
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-400 ml-2">Manimator Studio</span>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4 mb-4">
                    <p className="text-sm text-gray-400 mb-2">Prompt:</p>
                    <p className="text-white font-medium">&ldquo;Explain the Pythagorean theorem with a visual proof using area of squares&rdquo;</p>
                  </div>
                  <div className="bg-gradient-to-br from-[oklch(0.44_0.16_25)]/20 to-[oklch(0.30_0.12_17)]/20 rounded-xl p-8 flex items-center justify-center mb-4 min-h-[200px]">
                    <div className="text-center">
                      <div className="bg-[oklch(0.44_0.16_25)]/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Play className="h-8 w-8 text-[oklch(0.65_0.18_25)]" />
                      </div>
                      <p className="text-gray-300 text-sm">Generated animation preview</p>
                      <p className="text-[oklch(0.55_0.18_25)] text-xs mt-1">a² + b² = c² visualization</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="success" className="text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" /> Generated in 12s
                    </Badge>
                    <span className="text-gray-400">720p • 45s duration</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teachers Section */}
      <section className="bg-secondary text-secondary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Teachers</h2>
            <p className="text-xl text-gray-300">
              Learn from vetted teachers with real-world experience and academic expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTeachers.map((teacher, index) => (
              <Card key={index} className="bg-[oklch(0.22_0.01_17)] border-[oklch(0.27_0.01_17)] hover:bg-[oklch(0.25_0.01_17)] transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[oklch(0.44_0.16_25)] to-[oklch(0.30_0.12_17)] mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{teacher.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">{teacher.name}</h3>
                  <p className="text-[oklch(0.65_0.18_25)] mb-1 text-sm">{teacher.title}</p>
                  <Badge variant="outline" className="mb-3 border-[oklch(0.35_0.01_17)] text-gray-300">{teacher.subject}</Badge>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium text-white">{teacher.rating}</span>
                    <span className="text-gray-400">({teacher.reviews} reviews)</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              With an average 5:1 student-teacher ratio, your child gets the attention and mentorship they need to thrive.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Browse All Teachers
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Loved by Families Worldwide</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Sometimes in classroom settings, children are supposed to retain & perform exactly the same. At Prodigy Pathshala, I love that each child receives a personalized education experience.",
                author: "Lisa Chen",
                role: "Parent of 2 students",
              },
              {
                quote: "Manimator changed everything — my daughter typed in a math concept and watched a beautiful animated explanation appear. She's gone from struggling to excited about algebra!",
                author: "Marcus Johnson",
                role: "Homeschool Parent",
              },
              {
                quote: "Watching returning students grow over time—from shy learners into confident, engaged participants who take pride in their work—has been incredibly rewarding.",
                author: "Sarah Williams",
                role: "Prodigy Pathshala Educator",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-lg border-none">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic text-lg mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[oklch(0.44_0.16_25)] to-[oklch(0.30_0.12_17)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[oklch(0.44_0.16_25)] to-[oklch(0.30_0.12_17)] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Child&apos;s Learning Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your first month free with code{" "}
            <Badge variant="secondary" className="bg-white/20 text-white font-bold border-none text-base px-3 py-1">NEWYEAR2026</Badge>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="bg-white text-[oklch(0.44_0.16_25)] hover:bg-gray-100 text-lg px-8">
                Claim Your Free Month
              </Button>
            </Link>
            <Link href="/manimator">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                <Film className="mr-2 h-5 w-5" /> Try Manimator
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-gray-200">
            80 credits to explore thousands of live classes and tutoring sessions
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Prodigy Pathshala</span>
              </div>
              <p className="text-gray-400">Personalized learning for every child&apos;s unique journey.</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/courses" className="hover:text-white">Browse Courses</Link></li>
                <li><Link href="/manimator" className="hover:text-white">Manimator Studio</Link></li>
                <li><Link href="/courses" className="hover:text-white">By Subject</Link></li>
                <li><Link href="/courses" className="hover:text-white">By Age Group</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Teach with Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Safety</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} Prodigy Pathshala. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ── Course Card component using Card, Badge, Progress ── */
function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Badge variant={course.type === "live" ? "success" : "info"}>
            {course.type === "live" ? "🔴 Live Class" : "📚 Self-Paced"}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {course.subject}
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">{course.title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{course.teacher}</p>

        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 font-medium text-sm">{course.rating}</span>
          </div>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground text-sm">{course.reviews} reviews</span>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span>Ages {course.ageRange}</span>
          <span>{course.duration || "Flexible"}</span>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>{course.enrolled.toLocaleString()} enrolled</span>
          </div>
          <Progress value={Math.min((course.enrolled / 1500) * 100, 95)} />
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="text-2xl font-bold text-primary">${course.price}</div>
            <div className="text-xs text-muted-foreground">per week</div>
          </div>
          <Link href="/courses">
            <Button size="sm">Enroll Now</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
