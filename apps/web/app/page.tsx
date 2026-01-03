import { Button, buttonVariants } from '@repo/ui/components/button';
import { Star, Users, Clock, Calendar, Award, Shield, Sparkles, BookOpen, Target, Heart, CheckCircle } from 'lucide-react';

// Teacher data interface
interface Teacher {
  name: string;
  title: string;
  rating: number;
  reviews: number;
  image: string;
}

// Course data interface
interface Course {
  title: string;
  teacher: string;
  rating: number;
  reviews: number;
  ageRange: string;
  price: number;
  duration?: string;
  type: 'live' | 'self-paced';
}

export default function Home() {
  // Featured courses data
  const featuredCourses: Course[] = [
    {
      title: "Young Author Academy: Write and Publish Your Book",
      teacher: "Sarah Johnson, M.Ed.",
      rating: 4.9,
      reviews: 27,
      ageRange: "9-12",
      price: 15,
      type: "self-paced"
    },
    {
      title: "Master Multiplication Facts: Interactive Math Games",
      teacher: "Dr. Michael Chen",
      rating: 4.8,
      reviews: 199,
      ageRange: "7-12",
      price: 18,
      type: "self-paced"
    },
    {
      title: "Interactive Shakespeare: Romeo & Juliet Adventure",
      teacher: "Prof. Elizabeth Moore",
      rating: 4.8,
      reviews: 63,
      ageRange: "13-18",
      price: 16,
      type: "live",
      duration: "45 mins"
    },
    {
      title: "Digital Art & Comic Creation for Beginners",
      teacher: "Mr. Alex Rivera",
      rating: 5.0,
      reviews: 89,
      ageRange: "7-10",
      price: 25,
      type: "live",
      duration: "60 mins"
    }
  ];

  // Featured teachers data
  const featuredTeachers: Teacher[] = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Cognitive Development Specialist",
      rating: 5.0,
      reviews: 874,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Prof. James Wilson",
      title: "STEM Education Expert",
      rating: 4.9,
      reviews: 632,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Ms. Elena Rodriguez",
      title: "Multilingual Educator",
      rating: 5.0,
      reviews: 421,
      image: "/api/placeholder/100/100"
    },
    {
      name: "Dr. Marcus Johnson",
      title: "Child Psychology & Learning",
      rating: 4.9,
      reviews: 589,
      image: "/api/placeholder/100/100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 text-center">
        <p className="text-lg font-semibold">
          🎉 First month free with code: <span className="bg-white text-purple-600 px-2 py-1 rounded font-bold">NEWYEAR2026</span>
        </p>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">Prodigy Pathshala</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Explore Classes</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">For Parents</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">For Teachers</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">About Us</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Log In</Button>
              <Button className="">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Custom learning
              <span className="block text-purple-600">paths for the</span>
              prodigy
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Live and self-paced online classes with expert teachers that support 
              core learning, enrichment, and real-world skills. Personalized education 
              that grows with your child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className=" text-lg px-8 py-6">
                Find Your Child's Path
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Meet Our Teachers
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">4.9/5 average rating from 10,000+ families</span>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm">
                  <div className="text-center">
                    <BookOpen className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Personalized Learning</h3>
                    <p className="text-gray-600">Tailored to your child's unique interests and learning style</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Classes</h2>
            <p className="text-xl text-gray-600">Discover classes that spark curiosity and build confidence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${course.type === 'live' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {course.type === 'live' ? '🎯 Live Class' : '📚 Self-Paced'}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration || 'Flexible schedule'}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.teacher}</p>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 font-medium">{course.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{course.reviews} reviews</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-gray-700">
                      <span className="font-medium">Ages {course.ageRange}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">${course.price}</div>
                      <div className="text-sm text-gray-500">per week</div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t px-6 py-4">
                  <Button className="w-full ">
                    Enroll Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-3">
              View All 1000+ Classes
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why choose Prodigy Pathshala?</h2>
            <p className="text-xl text-gray-600">Education that adapts to your child, not the other way around</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Built for your child's unique needs</h3>
              <p className="text-gray-600">
                Choose from 1000s of classes, from core academics to enrichment, 
                supported by our personalized learning concierge service.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live classes on your schedule</h3>
              <p className="text-gray-600">
                Get personalized recommendations that fit your daily life by 
                adding your child's specific learning needs and availability.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible plans for every family</h3>
              <p className="text-gray-600">
                Plans designed to grow with you. Change anytime, and unused 
                credits roll over each month. No long-term commitments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teachers Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Teachers</h2>
            <p className="text-xl text-gray-300">
              Learn from vetted teachers with real-world experience and academic expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTeachers.map((teacher, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors duration-300">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">{teacher.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{teacher.name}</h3>
                <p className="text-purple-300 mb-4">{teacher.title}</p>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{teacher.rating}</span>
                  <span className="text-gray-400">({teacher.reviews} reviews)</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              With an average 5:1 student-teacher ratio, your child gets the attention and mentorship they need to thrive.
            </p>
            <Button className="bg-white text-gray-900 hover:bg-gray-200">
              Browse All Teachers
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Families Worldwide</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Sometimes in classroom settings, children are supposed to retain & perform exactly the same. At Prodigy Pathshala, I love that each child receives a personalized education experience.",
                author: "Lisa Chen",
                role: "Parent of 2 students"
              },
              {
                quote: "The flexibility has been a game-changer. The instructors have a remarkable ability to make learning fun and interactive, keeping our child fully engaged.",
                author: "Marcus Johnson",
                role: "Homeschool Parent"
              },
              {
                quote: "Watching returning students grow over time—from shy learners into confident, engaged participants who take pride in their work—has been incredibly rewarding.",
                author: "Sarah Williams",
                role: "Prodigy Pathshala Educator"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic text-lg mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Child's Learning Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your first month free with code <span className="font-bold bg-white/20 px-3 py-1 rounded">NEWYEAR2024</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
              Claim Your Free Month
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-8 text-gray-200">
            80 credits to explore thousands of live classes and tutoring sessions
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">Prodigy Pathshala</span>
              </div>
              <p className="text-gray-400">Personalized learning for every child's unique journey.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Classes by Age</a></li>
                <li><a href="#" className="hover:text-white">Classes by Subject</a></li>
                <li><a href="#" className="hover:text-white">Homeschool Resources</a></li>
                <li><a href="#" className="hover:text-white">Tutoring</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
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
  );
}