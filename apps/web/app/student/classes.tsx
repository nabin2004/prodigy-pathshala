// app/classes.tsx - My Classes Page
import { useState } from 'react';
import {
  Video, Clock, Users, Star, Calendar,
  BookOpen, TrendingUp, Award, MoreVertical,
  Filter, Search, PlayCircle, Download,
  Bookmark, Share2, MessageCircle
} from 'lucide-react';

interface Class {
  id: number;
  title: string;
  teacher: string;
  teacherAvatar: string;
  category: string;
  progress: number;
  nextSession: string;
  totalSessions: number;
  completedSessions: number;
  rating: number;
  type: 'live' | 'self-paced' | 'recorded';
  status: 'active' | 'completed' | 'upcoming';
  bookmarked: boolean;
}

export default function MyClassesPage() {
  const [activeTab, setActiveTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');

  const classes: Class[] = [
    {
      id: 1,
      title: "Middle Grades Math 6th-8th Skill Builders",
      teacher: "Courtney Daniels, Ed.S.",
      teacherAvatar: "CD",
      category: "Math",
      progress: 75,
      nextSession: "Today, 3:00 PM",
      totalSessions: 12,
      completedSessions: 9,
      rating: 4.7,
      type: 'live',
      status: 'active',
      bookmarked: true
    },
    {
      id: 2,
      title: "Creative Writing Club",
      teacher: "Writers Of The World by Luke Beardsley",
      teacherAvatar: "LW",
      category: "English",
      progress: 40,
      nextSession: "Tomorrow, 2:00 PM",
      totalSessions: 10,
      completedSessions: 4,
      rating: 4.8,
      type: 'live',
      status: 'active',
      bookmarked: false
    },
    {
      id: 3,
      title: "Ancient Greek Mythology",
      teacher: "Sondra Rapoport",
      teacherAvatar: "SR",
      category: "Social Studies",
      progress: 100,
      nextSession: "Completed",
      totalSessions: 8,
      completedSessions: 8,
      rating: 4.8,
      type: 'recorded',
      status: 'completed',
      bookmarked: true
    },
    {
      id: 4,
      title: "Intro to Earth Science",
      teacher: "Dr Pete PhD Earth Science",
      teacherAvatar: "DP",
      category: "Science",
      progress: 20,
      nextSession: "Next week",
      totalSessions: 10,
      completedSessions: 2,
      rating: 5.0,
      type: 'self-paced',
      status: 'active',
      bookmarked: false
    },
    {
      id: 5,
      title: "Spanish for Little Learners",
      teacher: "Profe Victoria",
      teacherAvatar: "PV",
      category: "Languages",
      progress: 0,
      nextSession: "Starts Jan 15",
      totalSessions: 12,
      completedSessions: 0,
      rating: 4.9,
      type: 'live',
      status: 'upcoming',
      bookmarked: true
    }
  ];

  const filteredClasses = classes.filter(cls => {
    if (activeTab === 'all') return true;
    return cls.status === activeTab;
  }).filter(cls => 
    cls.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cls.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cls.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = {
    totalClasses: classes.length,
    activeClasses: classes.filter(c => c.status === 'active').length,
    completedClasses: classes.filter(c => c.status === 'completed').length,
    averageProgress: Math.round(classes.filter(c => c.status === 'active').reduce((acc, c) => acc + c.progress, 0) / 
      classes.filter(c => c.status === 'active').length) || 0
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Classes</h1>
            <p className="text-gray-600 mt-2">Track your learning progress across all enrolled classes</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium">
              Browse New Classes
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Classes</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalClasses}</p>
              </div>
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Classes</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeClasses}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.completedClasses}</p>
              </div>
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Progress</p>
                <p className="text-2xl font-bold text-gray-900">{stats.averageProgress}%</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and search */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search your classes..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Sort by Date
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 border-b border-gray-200 mt-6">
          {['all', 'active', 'completed', 'upcoming'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium capitalize ${
                activeTab === tab
                  ? 'border-b-2 border-purple-600 text-purple-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab} ({tab === 'all' ? classes.length : classes.filter(c => c.status === tab).length})
            </button>
          ))}
        </div>
      </div>

      {/* Classes grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredClasses.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    classItem.category === 'Math' ? 'bg-blue-100' :
                    classItem.category === 'English' ? 'bg-green-100' :
                    classItem.category === 'Science' ? 'bg-purple-100' :
                    'bg-orange-100'
                  }`}>
                    <BookOpen className={`h-5 w-5 ${
                      classItem.category === 'Math' ? 'text-blue-600' :
                      classItem.category === 'English' ? 'text-green-600' :
                      classItem.category === 'Science' ? 'text-purple-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                  <div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      classItem.type === 'live' ? 'bg-red-100 text-red-800' :
                      classItem.type === 'self-paced' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {classItem.type === 'live' ? '🎯 Live' : 
                       classItem.type === 'self-paced' ? '📚 Self-Paced' : '📼 Recorded'}
                    </span>
                    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      classItem.status === 'active' ? 'bg-green-100 text-green-800' :
                      classItem.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {classItem.status === 'active' ? 'Active' :
                       classItem.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-purple-600">
                    {classItem.bookmarked ? (
                      <Bookmark className="h-5 w-5 fill-current text-purple-600" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Class info */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{classItem.title}</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {classItem.teacherAvatar}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{classItem.teacher}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  {classItem.rating}
                </div>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium">{classItem.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      classItem.progress === 100 ? 'bg-green-500' : 'bg-purple-500'
                    }`}
                    style={{ width: `${classItem.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{classItem.completedSessions} of {classItem.totalSessions} sessions</span>
                  {classItem.status === 'active' && (
                    <span className="font-medium">{classItem.nextSession}</span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <button className={`px-4 py-2 text-sm font-medium rounded-lg ${
                    classItem.status === 'active' ? 'bg-purple-600 text-white hover:bg-purple-700' :
                    'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    {classItem.status === 'active' ? (
                      <>
                        <PlayCircle className="h-4 w-4 inline mr-2" />
                        {classItem.type === 'live' ? 'Join Class' : 'Continue'}
                      </>
                    ) : 'View Details'}
                  </button>
                  
                  <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-3">
                  {classItem.status === 'completed' && (
                    <button className="px-3 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      Certificate
                    </button>
                  )}
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredClasses.length === 0 && (
        <div className="text-center py-16">
          <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No classes found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
          >
            View All Classes
          </button>
        </div>
      )}
    </div>
  );
}