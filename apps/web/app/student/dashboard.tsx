"use client";

import { useState } from 'react';
import { 
  Calendar, Clock, Users, TrendingUp, 
  Award, Video, FileText, Star, 
  ChevronRight, PlayCircle, CheckCircle, AlertCircle
} from 'lucide-react';

interface Class {
  id: number;
  title: string;
  teacher: string;
  category: string;
  time: string;
  duration: number;
  status: 'live' | 'upcoming' | 'completed';
  joinLink?: string;
}

interface Assignment {
  id: number;
  title: string;
  class: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
}

export default function DashboardPage() {
  const [upcomingClasses, setUpcomingClasses] = useState<Class[]>([
    {
      id: 1,
      title: "Algebra Fundamentals",
      teacher: "Ms. Daniels",
      category: "Math",
      time: "Today, 2:00 PM",
      duration: 45,
      status: 'upcoming'
    },
    {
      id: 2,
      title: "Creative Writing Workshop",
      teacher: "Mr. Beardsley",
      category: "English",
      time: "Tomorrow, 11:00 AM",
      duration: 60,
      status: 'upcoming'
    }
  ]);

  const [recentAssignments, setRecentAssignments] = useState<Assignment[]>([
    {
      id: 1,
      title: "Algebra Worksheet #4",
      class: "Middle Grades Math",
      dueDate: "Due today, 5:00 PM",
      status: 'pending'
    },
    {
      id: 2,
      title: "Character Analysis Essay",
      class: "Creative Writing Club",
      dueDate: "Due tomorrow",
      status: 'submitted'
    },
    {
      id: 3,
      title: "Science Experiment Report",
      class: "Intro to Earth Science",
      dueDate: "Graded - A",
      status: 'graded',
      grade: 'A'
    }
  ]);

  const stats = {
    streak: 7,
    points: 1250,
    classesCompleted: 12,
    averageGrade: 'A-'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex! 👋</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your learning today.</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Learning Streak</p>
              <p className="text-2xl font-bold text-gray-900">{stats.streak} days</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Achievement Points</p>
              <p className="text-2xl font-bold text-gray-900">{stats.points}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Classes Completed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.classesCompleted}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Average Grade</p>
              <p className="text-2xl font-bold text-gray-900">{stats.averageGrade}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Star className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Upcoming classes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                  Today's Schedule
                </h2>
                <a href="/schedule" className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center">
                  View full schedule
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {upcomingClasses.map((classItem) => (
                <div key={classItem.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          classItem.category === 'Math' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {classItem.category}
                        </span>
                        <span className="ml-2 px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {classItem.duration} mins
                        </span>
                      </div>
                      
                      <h3 className="font-medium text-gray-900 mb-1">{classItem.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">with {classItem.teacher}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {classItem.time}
                        </span>
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 flex items-center">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Join Class
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent assignments */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Assignments</h2>
                <a href="/assignments" className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center">
                  View all assignments
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {recentAssignments.map((assignment) => (
                <div key={assignment.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        assignment.status === 'graded' ? 'bg-green-100' : 
                        assignment.status === 'submitted' ? 'bg-blue-100' : 'bg-yellow-100'
                      }`}>
                        <FileText className={`h-5 w-5 ${
                          assignment.status === 'graded' ? 'text-green-600' : 
                          assignment.status === 'submitted' ? 'text-blue-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-gray-900">{assignment.title}</h3>
                        <p className="text-sm text-gray-600">{assignment.class}</p>
                        <div className="flex items-center mt-1 space-x-4">
                          <span className={`text-sm font-medium ${
                            assignment.status === 'graded' ? 'text-green-600' : 
                            assignment.status === 'submitted' ? 'text-blue-600' : 'text-yellow-600'
                          }`}>
                            {assignment.status === 'graded' ? `Grade: ${assignment.grade}` : 
                             assignment.status === 'submitted' ? 'Submitted' : 'Due: ' + assignment.dueDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <button className={`px-4 py-2 text-sm font-medium rounded-lg ${
                      assignment.status === 'pending' ? 'bg-purple-600 text-white hover:bg-purple-700' : 
                      'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}>
                      {assignment.status === 'pending' ? 'Start Now' : 
                       assignment.status === 'submitted' ? 'View' : 'Review'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Quick actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <a href="/classes" className="flex items-center justify-between p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100">
                <span className="font-medium">Browse New Classes</span>
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="/tutoring" className="flex items-center justify-between p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
                <span className="font-medium">Schedule Tutoring</span>
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="/resources" className="flex items-center justify-between p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100">
                <span className="font-medium">Learning Resources</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Upcoming deadlines */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Upcoming Deadlines</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Math Quiz</p>
                  <p className="text-sm text-gray-600">Due tomorrow</p>
                </div>
                <AlertCircle className="h-5 w-5 text-red-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Science Project</p>
                  <p className="text-sm text-gray-600">Due in 3 days</p>
                </div>
                <Clock className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Reading Assignment</p>
                  <p className="text-sm text-gray-600">Submitted ✓</p>
                </div>
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>

          {/* Learning progress */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-sm p-6 text-white">
            <h3 className="font-semibold mb-4">Weekly Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Classes Attended</span>
                  <span>4/5</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Assignments Done</span>
                  <span>6/8</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Learning Hours</span>
                  <span>12h</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}