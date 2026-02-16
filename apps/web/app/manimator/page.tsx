"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Textarea } from "@repo/ui/components/textarea"
import { Label } from "@repo/ui/components/label"
import { Select } from "@repo/ui/components/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@repo/ui/components/tabs"
import { Progress } from "@repo/ui/components/progress"
import {
  Film,
  Sparkles,
  Play,
  Clock,
  Download,
  Share2,
  Eye,
  Wand2,
  Code,
  Lightbulb,
  RefreshCw,
  CheckCircle,
  Loader2,
  Video,
  BookOpen,
  Zap,
  Copy,
} from "lucide-react"

const templates = [
  {
    id: "explain-concept",
    title: "Explain a Concept",
    description: "Generate an animated explanation of any math/science concept",
    icon: "💡",
    prompt: "Explain the concept of {topic} with step-by-step visual animations",
  },
  {
    id: "solve-problem",
    title: "Solve a Problem",
    description: "Show step-by-step solution with visual animations",
    icon: "🧮",
    prompt: "Solve {problem} step by step with animated visual proof",
  },
  {
    id: "visualize-formula",
    title: "Visualize a Formula",
    description: "Transform a formula into an animated visual proof",
    icon: "📐",
    prompt: "Create a visual proof and animation for the formula {formula}",
  },
  {
    id: "timeline",
    title: "Historical Timeline",
    description: "Animate a historical timeline with key events",
    icon: "📅",
    prompt: "Create an animated timeline showing {events}",
  },
  {
    id: "comparison",
    title: "Compare & Contrast",
    description: "Visual comparison between two or more concepts",
    icon: "⚖️",
    prompt: "Create a visual comparison between {concept_a} and {concept_b}",
  },
  {
    id: "custom",
    title: "Custom Prompt",
    description: "Write your own prompt for the AI to animate",
    icon: "✨",
    prompt: "",
  },
]

const myVideos = [
  {
    id: 1,
    title: "Pythagorean Theorem Visual Proof",
    prompt: "Create a visual proof of the Pythagorean theorem showing a² + b² = c²",
    status: "completed" as const,
    duration: "2:30",
    views: 12,
    createdAt: "Feb 15, 2026",
    thumbnail: "📐",
    subject: "Mathematics",
  },
  {
    id: 2,
    title: "Cell Division: Mitosis Explained",
    prompt: "Animate the process of mitosis showing all phases: prophase, metaphase, anaphase, telophase",
    status: "completed" as const,
    duration: "3:45",
    views: 8,
    createdAt: "Feb 14, 2026",
    thumbnail: "🧬",
    subject: "Biology",
  },
  {
    id: 3,
    title: "Newton's Laws of Motion",
    prompt: "Demonstrate Newton's three laws of motion with practical examples",
    status: "generating" as const,
    progress: 65,
    createdAt: "Feb 16, 2026",
    thumbnail: "🚀",
    subject: "Physics",
  },
  {
    id: 4,
    title: "Quadratic Formula Derivation",
    prompt: "Derive the quadratic formula step by step with animations",
    status: "queued" as const,
    createdAt: "Feb 16, 2026",
    thumbnail: "🔢",
    subject: "Mathematics",
  },
]

const generatedCode = `from manim import *

class PythagoreanTheorem(Scene):
    def construct(self):
        # Title
        title = Text("Pythagorean Theorem", font_size=48)
        self.play(Write(title))
        self.wait()
        self.play(FadeOut(title))

        # Create right triangle
        triangle = Polygon(
            ORIGIN, 3*RIGHT, 3*RIGHT + 4*UP,
            color=WHITE
        )
        self.play(Create(triangle))

        # Label sides
        a_label = MathTex("a = 3").next_to(triangle, DOWN)
        b_label = MathTex("b = 4").next_to(triangle, RIGHT)
        c_label = MathTex("c = 5").move_to(
            triangle.get_center() + LEFT + UP
        )

        self.play(Write(a_label), Write(b_label), Write(c_label))

        # Show squares on each side
        sq_a = Square(side_length=3, color=BLUE, fill_opacity=0.3)
        sq_a.next_to(triangle, DOWN, buff=0)

        sq_b = Square(side_length=4, color=GREEN, fill_opacity=0.3)
        sq_b.next_to(triangle, RIGHT, buff=0)

        self.play(Create(sq_a), Create(sq_b))

        # Show formula
        formula = MathTex("a^2 + b^2 = c^2", font_size=48)
        formula.to_edge(UP)
        self.play(Write(formula))

        # Show numerical values
        values = MathTex("9 + 16 = 25", font_size=36)
        values.next_to(formula, DOWN)
        self.play(Write(values))

        self.wait(2)`

export default function ManimatorStudioPage() {
  const [prompt, setPrompt] = useState("")
  const [subject, setSubject] = useState("mathematics")
  const [complexity, setComplexity] = useState("intermediate")
  const [isGenerating, setIsGenerating] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const handleGenerate = () => {
    if (!prompt.trim()) return
    setIsGenerating(true)
    // Simulate generation
    setTimeout(() => setIsGenerating(false), 3000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Film className="h-8 w-8 text-purple-600" />
            Manimator Studio
          </h1>
          <p className="text-muted-foreground mt-1">
            Generate beautiful math &amp; science animations with AI. Powered by Manim.
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="info" className="text-sm py-1 px-3">
            <Zap className="h-3 w-3 mr-1" /> 15 credits remaining
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="generate">
        <TabsList>
          <TabsTrigger value="generate">
            <Wand2 className="h-4 w-4 mr-1" /> Generate
          </TabsTrigger>
          <TabsTrigger value="my-videos">
            <Video className="h-4 w-4 mr-1" /> My Videos ({myVideos.length})
          </TabsTrigger>
          <TabsTrigger value="templates">
            <Lightbulb className="h-4 w-4 mr-1" /> Templates
          </TabsTrigger>
        </TabsList>

        {/* GENERATE TAB */}
        <TabsContent value="generate">
          <div className="grid gap-6 lg:grid-cols-3 mt-4">
            <div className="lg:col-span-2 space-y-4">
              {/* Prompt Input */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-purple-500" />
                    Describe Your Animation
                  </CardTitle>
                  <CardDescription>
                    Describe what concept or problem you want to visualize. Our AI agent will generate
                    the Manim Python code and render it into a video.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Prompt</Label>
                    <Textarea
                      placeholder="e.g., Create a visual proof of the Pythagorean theorem showing how the squares on each side relate to each other. Include step-by-step annotations."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      rows={4}
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Subject</Label>
                      <Select value={subject} onChange={(e) => setSubject(e.target.value)}>
                        <option value="mathematics">Mathematics</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="biology">Biology</option>
                        <option value="computer-science">Computer Science</option>
                        <option value="history">History</option>
                        <option value="other">Other</option>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Complexity</Label>
                      <Select value={complexity} onChange={(e) => setComplexity(e.target.value)}>
                        <option value="beginner">Beginner (Simple animations)</option>
                        <option value="intermediate">Intermediate (Multi-step)</option>
                        <option value="advanced">Advanced (Complex proofs)</option>
                      </Select>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleGenerate}
                      disabled={!prompt.trim() || isGenerating}
                      className="flex-1"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Generating...
                        </>
                      ) : (
                        <>
                          <Wand2 className="h-4 w-4 mr-2" /> Generate Animation
                        </>
                      )}
                    </Button>
                    <Button variant="outline" onClick={() => setShowCode(!showCode)}>
                      <Code className="h-4 w-4 mr-1" /> {showCode ? "Hide" : "Show"} Code
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Generated Code Preview */}
              {showCode && (
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Code className="h-4 w-4" /> Generated Manim Code
                    </CardTitle>
                    <Button variant="ghost" size="sm">
                      <Copy className="h-3 w-3 mr-1" /> Copy
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-950 text-green-400 p-4 rounded-lg overflow-x-auto text-xs leading-relaxed">
                      <code>{generatedCode}</code>
                    </pre>
                  </CardContent>
                </Card>
              )}

              {/* Preview Area */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-950 rounded-lg aspect-video flex items-center justify-center">
                    {isGenerating ? (
                      <div className="text-center text-white">
                        <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-purple-400" />
                        <p className="font-medium">AI Agent is generating your animation...</p>
                        <p className="text-sm text-gray-400 mt-2">This typically takes 30-60 seconds</p>
                        <div className="mt-4 max-w-xs mx-auto">
                          <Progress value={45} className="bg-gray-800" />
                        </div>
                        <div className="mt-4 text-xs text-gray-500 space-y-1">
                          <p>✅ Analyzing prompt...</p>
                          <p>✅ Planning scene structure...</p>
                          <p className="text-purple-400">⏳ Writing Manim Python code...</p>
                          <p className="text-gray-600">⬜ Rendering animation...</p>
                          <p className="text-gray-600">⬜ Post-processing...</p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">
                        <Film className="h-16 w-16 mx-auto mb-4 opacity-30" />
                        <p className="font-medium">Your animation will appear here</p>
                        <p className="text-sm mt-1">Enter a prompt and click Generate</p>
                      </div>
                    )}
                  </div>
                  {!isGenerating && (
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" disabled className="flex-1">
                        <Download className="h-4 w-4 mr-1" /> Download MP4
                      </Button>
                      <Button variant="outline" disabled>
                        <Share2 className="h-4 w-4 mr-1" /> Share
                      </Button>
                      <Button variant="outline" disabled>
                        <RefreshCw className="h-4 w-4 mr-1" /> Regenerate
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Side Panel */}
            <div className="space-y-4">
              {/* How It Works */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How Manimator Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1.5 rounded-full text-purple-600 font-bold text-xs w-6 h-6 flex items-center justify-center shrink-0">1</div>
                    <div>
                      <p className="font-medium text-sm">Describe your concept</p>
                      <p className="text-xs text-muted-foreground">Write what you want to visualize in natural language</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1.5 rounded-full text-purple-600 font-bold text-xs w-6 h-6 flex items-center justify-center shrink-0">2</div>
                    <div>
                      <p className="font-medium text-sm">AI Agent writes Manim code</p>
                      <p className="text-xs text-muted-foreground">Our agentic AI generates Python code using the Manim library</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1.5 rounded-full text-purple-600 font-bold text-xs w-6 h-6 flex items-center justify-center shrink-0">3</div>
                    <div>
                      <p className="font-medium text-sm">Renders animation</p>
                      <p className="text-xs text-muted-foreground">The code is executed to produce a high-quality video</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-1.5 rounded-full text-purple-600 font-bold text-xs w-6 h-6 flex items-center justify-center shrink-0">4</div>
                    <div>
                      <p className="font-medium text-sm">Download & share</p>
                      <p className="text-xs text-muted-foreground">Get your video as MP4 or embed in your courses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Templates */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Quick Prompts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    "Visualize the Fibonacci sequence spiral",
                    "Animate sorting algorithms comparison",
                    "Show how derivatives work geometrically",
                    "Explain the water cycle with animations",
                    "Derive the area of a circle visually",
                  ].map((p, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-xs h-auto py-2 text-left"
                      onClick={() => setPrompt(p)}
                    >
                      <Lightbulb className="h-3 w-3 mr-2 shrink-0 text-yellow-500" />
                      <span className="truncate">{p}</span>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* MY VIDEOS TAB */}
        <TabsContent value="my-videos">
          <div className="space-y-4 mt-4">
            {myVideos.map((video) => (
              <Card key={video.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-20 h-14 rounded-lg flex items-center justify-center text-2xl shrink-0">
                      {video.thumbnail}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{video.title}</h3>
                        <Badge variant="outline" className="text-xs">{video.subject}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{video.prompt}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span>{video.createdAt}</span>
                        {video.duration && (
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {video.duration}</span>
                        )}
                        {video.views !== undefined && (
                          <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {video.views} views</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {video.status === "completed" && (
                        <>
                          <Badge variant="success"><CheckCircle className="h-3 w-3 mr-1" /> Ready</Badge>
                          <Button size="sm" variant="outline"><Play className="h-3 w-3 mr-1" /> Play</Button>
                          <Button size="sm" variant="outline"><Download className="h-3 w-3" /></Button>
                        </>
                      )}
                      {video.status === "generating" && (
                        <div className="flex items-center gap-3">
                          <Badge variant="warning"><Loader2 className="h-3 w-3 mr-1 animate-spin" /> Generating</Badge>
                          <div className="w-24">
                            <Progress value={video.progress} />
                          </div>
                          <span className="text-xs text-muted-foreground">{video.progress}%</span>
                        </div>
                      )}
                      {video.status === "queued" && (
                        <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" /> Queued</Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* TEMPLATES TAB */}
        <TabsContent value="templates">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`cursor-pointer hover:shadow-md transition-all ${
                  selectedTemplate === template.id ? "ring-2 ring-purple-500" : ""
                }`}
                onClick={() => {
                  setSelectedTemplate(template.id)
                  if (template.prompt) setPrompt(template.prompt)
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{template.icon}</div>
                  <h3 className="font-semibold">{template.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{template.description}</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Use Template
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
