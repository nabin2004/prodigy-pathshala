"use client";

import React from 'react';

import { useState } from 'react';
import { 
  Home, BookOpen, ClipboardCheck, Calendar, 
  Bell, MessageCircle, HelpCircle, User,
  Search, ChevronDown, Settings, LogOut,
  Trophy, TrendingUp, Clock, Award,
  Sparkles
} from 'lucide-react';
import { Outlet, useLocation } from 'react-router-dom';
import { usePathname } from 'next/navigation';


export default function StudentLayout() {
  const location = useLocation();
  const pathname = usePathname();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notifications] = useState(3);
  const [messages] = useState(2);

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home, current: pathname === '/dashboard' },
    { name: 'My Classes', href: '/classes', icon: BookOpen, current: pathname === '/classes' },
    { name: 'Assignments', href: '/assignments', icon: ClipboardCheck, current: pathname === '/assignments' },
    { name: 'Schedule', href: '/schedule', icon: Calendar, current: pathname === '/schedule' },
  ];

  const student = {
    name: "Alex Johnson",
    grade: "7th Grade",
    avatar: "AJ",
    streak: 7,
    points: 1250
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo and navigation */}
            <div className="flex items-center">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="mr-4 p-2 rounded-lg hover:bg-gray-100 lg:hidden"
              >
                <Sparkles className="h-6 w-6 text-purple-600" />
              </button>
              
              <div className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-purple-600" />
                <span className="text-xl font-bold text-gray-900">Prodigy Pathshala</span>
                <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">Student</span>
              </div>

              <div className="hidden lg:flex items-center space-x-8 ml-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg ${
                      item.current
                        ? 'bg-purple-50 text-purple-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right side - Search and actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search classes, assignments..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
                />
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2">
                <button className="relative p-2 text-gray-600 hover:text-purple-600 hover:bg-gray-100 rounded-lg">
                  <Bell className="h-6 w-6" />
                  {notifications > 0 && (
                    <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                  )}
                </button>
                
                <button className="relative p-2 text-gray-600 hover:text-purple-600 hover:bg-gray-100 rounded-lg">
                  <MessageCircle className="h-6 w-6" />
                  {messages > 0 && (
                    <span className="absolute top-1 right-1 h-2 w-2 bg-green-500 rounded-full"></span>
                  )}
                </button>
                
                <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-gray-100 rounded-lg">
                  <HelpCircle className="h-6 w-6" />
                </button>

                {/* User profile dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {student.avatar}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="hidden lg:block text-left">
                      <p className="text-sm font-medium text-gray-900">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.grade}</p>
                    </div>
                    <ChevronDown className="hidden lg:block h-4 w-4 text-gray-400" />
                  </button>
                  
                  {/* Dropdown menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 hidden group-hover:block">
                    <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="h-4 w-4 mr-3" />
                      My Profile
                    </a>
                    <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings className="h-4 w-4 mr-3" />
                      Settings
                    </a>
                    <div className="border-t border-gray-200 my-1"></div>
                    <a href="/logout" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <LogOut className="h-4 w-4 mr-3" />
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="lg:hidden py-3 border-t border-gray-200">
            <div className="flex justify-around">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col items-center p-2 ${
                    item.current ? 'text-purple-600' : 'text-gray-600'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-xs mt-1">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for desktop */}
      <aside className={`hidden lg:block fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 transition-all duration-300 ${
        sidebarCollapsed ? '-translate-x-full' : 'translate-x-0'
      }`}>
        <div className="h-full overflow-y-auto py-6 px-4">
          {/* Student stats */}
          <div className="mb-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {student.avatar}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{student.name}</h3>
                <p className="text-sm text-gray-600">{student.grade}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm">Learning Streak</span>
                </div>
                <span className="font-bold">{student.streak} days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-purple-500 mr-2" />
                  <span className="text-sm">Points</span>
                </div>
                <span className="font-bold">{student.points}</span>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">QUICK STATS</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Classes Today</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Assignments Due</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Avg. Grade</span>
                  <span className="font-medium">A-</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">QUICK LINKS</h4>
            <div className="space-y-2">
              <a href="/resources" className="flex items-center p-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                <BookOpen className="h-4 w-4 mr-3" />
                Learning Resources
              </a>
              <a href="/certificates" className="flex items-center p-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                <Award className="h-4 w-4 mr-3" />
                My Certificates
              </a>
              <a href="/calendar" className="flex items-center p-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                <Calendar className="h-4 w-4 mr-3" />
                Full Calendar
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className={`pt-16 min-h-screen transition-all duration-300 ${
        sidebarCollapsed ? 'lg:pl-0' : 'lg:pl-64'
      }`}>
        <Outlet />
      </main>
    </div>
  );
}