// app/assignments.tsx - Assignments Page
import { useState } from 'react';
import {
  FileText, Calendar, Clock, CheckCircle,
  AlertCircle, TrendingUp, Filter, Download,
  Upload, Eye, MessageCircle, MoreVertical,
  Search, Star, Award, ChevronDown
} from 'lucide-react';

interface Assignment {
  id: number;
  title: string;
  class: string;
  classCategory: string;
  dueDate: string;
  dueIn: string;
  status: 'pending' | 'submitted' | 'graded' | 'overdue';
  grade?: string;
  points?: number;
  totalPoints: number;
  submittedDate?: string;
  feedback?: string;
}

export default function AssignmentsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('dueDate');

  const assignments: Assignment[] = [
    {
      id: 1,
      title: "Algebra Worksheet #4 - Quadratic Equations",
      class: "Middle Grades Math",
      classCategory: "Math",
      dueDate: "2024-01-15",
      dueIn: "Due tomorrow",
      status: 'pending',
      totalPoints: 100
    },
    {
      id: 2,
      title: "Character Analysis Essay - Hamlet",
      class: "Creative Writing Club",
      classCategory: "English",
      dueDate: "2024-01-12",
      dueIn: "Submitted",
      status: 'submitted',
      submittedDate: "2024-01-10",
      totalPoints: 50
    },
    {
      id: 3,
      title: "Earth Science Experiment Report",
      class: "Intro to Earth Science",
      classCategory: "Science",
      dueDate: "2024-01-10",
      dueIn: "Graded",
      status: 'graded',
      grade: 'A',
      points: 95,
      totalPoints: 100,
      feedback: "Excellent analysis! Your methodology was thorough and well-documented."
    },
    {
      id: 4,
      title: "Ancient Rome Timeline Project",
      class: "Ancient Greek Mythology",
      classCategory: "Social Studies",
      dueDate: "2024-01-05",
      dueIn: "Overdue",
      status: 'overdue',
      totalPoints: 75
    },
    {
      id: 5,
      title: "Spanish Conversation Recording",
      class: "Spanish for Beginners",
      classCategory: "Languages",
      dueDate: "2024-01-18",
      dueIn: "Due in 3 days",
      status: 'pending',
      totalPoints: 30
    },
    {
      id: 6,
      title: "Chemistry Lab Worksheet",
      class: "Middle School Life Science",
      classCategory: "Science",
      dueDate: "2024-01-08",
      dueIn: "Graded",
      status: 'graded',
      grade: 'B+',
      points: 88,
      totalPoints: 100,
      feedback: "Good work overall, but pay attention to significant figures in your calculations."
    }
  ];

  const filteredAssignments = assignments
    .filter(assignment => {
      if (activeTab === 'all') return true;
      return assignment.status === activeTab;
    })
    .filter(assignment =>
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.class.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'dueDate') {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }
      if (sortBy === 'class') {
        return a.class.localeCompare(b.class);
      }
      return 0;
    });

  const stats = {
    total: assignments.length,
    pending: assignments.filter(a => a.status === 'pending').length,
    submitted: assignments.filter(a => a.status === 'submitted').length,
    graded: assignments.filter(a => a.status === 'graded').length,
    averageGrade: 'A-',
    overdue: assignments.filter(a => a.status === 'overdue').length
  };

  const getStatusColor = (status: Assignment['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      case 'graded': return 'bg-green-100 text-green-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Assignment['status']) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'submitted': return <Upload className="h-4 w-4" />;
      case 'graded': return <CheckCircle className="h-4 w-4" />;
      case 'overdue': return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
            <p className="text-gray-600 mt-2">Track and submit all your coursework in one place</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              Submit Assignment
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <p className="text-sm text-gray-600">Total</p>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Submitted</p>
                <p className="text-2xl font-bold text-blue-600">{stats.submitted}</p>
              </div>
              <Upload className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Graded</p>
                <p className="text-2xl font-bold text-green-600">{stats.graded}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Grade</p>
                <p className="text-2xl font-bold text-purple-600">{stats.averageGrade}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search assignments..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="dueDate">Sort by Due Date</option>
                <option value="class">Sort by Class</option>
                <option value="status">Sort by Status</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
            
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mt-6">
          {['all', 'pending', 'submitted', 'graded', 'overdue'].map((tab) => {
            const count = tab === 'all' ? assignments.length : 
              assignments.filter(a => a.status === tab).length;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize ${
                  activeTab === tab
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Assignments list */}
      <div className="space-y-4">
        {filteredAssignments.map((assignment) => (
          <div key={assignment.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Left side - Assignment info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        assignment.classCategory === 'Math' ? 'bg-blue-100' :
                        assignment.classCategory === 'English' ? 'bg-green-100' :
                        assignment.classCategory === 'Science' ? 'bg-purple-100' :
                        'bg-orange-100'
                      }`}>
                        <FileText className={`h-5 w-5 ${
                          assignment.classCategory === 'Math' ? 'text-blue-600' :
                          assignment.classCategory === 'English' ? 'text-green-600' :
                          assignment.classCategory === 'Science' ? 'text-purple-600' :
                          'text-orange-600'
                        }`} />
                      </div>
                      
                      <div>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(assignment.status)} flex items-center gap-1`}>
                          {getStatusIcon(assignment.status)}
                          {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="hidden lg:block text-right">
                      <div className="text-sm text-gray-600">Due</div>
                      <div className="font-medium">{assignment.dueIn}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{assignment.title}</h3>
                  <p className="text-gray-600 mb-4">{assignment.class} • {assignment.totalPoints} points</p>
                  
                  {assignment.status === 'graded' && assignment.feedback && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-semibold text-green-900">
                            Grade: {assignment.grade} ({assignment.points}/{assignment.totalPoints} points)
                          </span>
                        </div>
                      </div>
                      <p className="text-green-800 text-sm">{assignment.feedback}</p>
                    </div>
                  )}
                </div>
                
                {/* Right side - Actions */}
                <div className="lg:w-64 flex flex-col space-y-4">
                  {/* Mobile due date */}
                  <div className="lg:hidden p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">Due Date</div>
                    <div className="font-medium">{assignment.dueIn}</div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    {assignment.status === 'pending' && (
                      <button className="w-full px-4 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 flex items-center justify-center">
                        <FileText className="h-4 w-4 mr-2" />
                        Start Assignment
                      </button>
                    )}
                    
                    {assignment.status === 'graded' && (
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">{assignment.grade}</div>
                        <div className="text-sm text-gray-600">{assignment.points}/{assignment.totalPoints} points</div>
                      </div>
                    )}
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center justify-center">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </button>
                      
                      <button className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm font-medium flex items-center justify-center">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Help
                      </button>
                      
                      <button className="p-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {assignment.status === 'graded' && (
                      <button className="w-full px-4 py-2 bg-white border border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 flex items-center justify-center">
                        <Download className="h-4 w-4 mr-2" />
                        Download Feedback
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredAssignments.length === 0 && (
        <div className="text-center py-16">
          <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No assignments found</h3>
          <p className="text-gray-600 mb-6">You're all caught up! Or try adjusting your search criteria.</p>
        </div>
      )}

      {/* Upcoming deadlines */}
      {stats.pending > 0 && (
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Deadlines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assignments
              .filter(a => a.status === 'pending' || a.status === 'overdue')
              .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
              .slice(0, 3)
              .map((assignment) => (
                <div key={assignment.id} className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                      <span className="font-medium text-gray-900">{assignment.dueIn}</span>
                    </div>
                    <span className="text-sm font-medium text-yellow-800">
                      {assignment.totalPoints} pts
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{assignment.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{assignment.class}</p>
                  <button className="w-full py-2 bg-yellow-600 text-white text-sm font-medium rounded-lg hover:bg-yellow-700">
                    Start Now
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}