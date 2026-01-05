// app/schedule.tsx - Schedule Page
import { useState } from 'react';
import {
  Calendar, Clock, Video, Users, MapPin,
  ChevronLeft, ChevronRight, Plus, Filter,
  MoreVertical, Bell, Download, Share2,
  PlayCircle, MessageCircle, ExternalLink
} from 'lucide-react';

interface Event {
  id: number;
  title: string;
  type: 'class' | 'assignment' | 'exam' | 'personal';
  teacher?: string;
  class?: string;
  startTime: string;
  endTime: string;
  date: string;
  day: string;
  location: 'zoom' | 'google-meet' | 'platform';
  joinLink?: string;
  status: 'upcoming' | 'live' | 'completed' | 'cancelled';
  reminders: boolean;
}

export default function SchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'day' | 'week' | 'month'>('week');
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );

  const events: Event[] = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      type: 'class',
      teacher: "Ms. Courtney Daniels",
      class: "Middle Grades Math",
      startTime: "14:00",
      endTime: "14:45",
      date: "2024-01-15",
      day: "Mon",
      location: 'zoom',
      joinLink: "https://zoom.us/j/123456",
      status: 'upcoming',
      reminders: true
    },
    {
      id: 2,
      title: "Creative Writing Workshop",
      type: 'class',
      teacher: "Mr. Luke Beardsley",
      class: "Creative Writing Club",
      startTime: "11:00",
      endTime: "12:00",
      date: "2024-01-16",
      day: "Tue",
      location: 'platform',
      status: 'upcoming',
      reminders: true
    },
    {
      id: 3,
      title: "Science Quiz",
      type: 'exam',
      class: "Intro to Earth Science",
      startTime: "15:30",
      endTime: "16:30",
      date: "2024-01-17",
      day: "Wed",
      location: 'platform',
      status: 'upcoming',
      reminders: true
    },
    {
      id: 4,
      title: "Math Assignment Due",
      type: 'assignment',
      class: "Middle Grades Math",
      startTime: "23:59",
      endTime: "23:59",
      date: "2024-01-15",
      day: "Mon",
      location: 'platform',
      status: 'upcoming',
      reminders: true
    },
    {
      id: 5,
      title: "Spanish Conversation Practice",
      type: 'class',
      teacher: "Profe Victoria",
      class: "Spanish for Beginners",
      startTime: "13:00",
      endTime: "13:30",
      date: "2024-01-18",
      day: "Thu",
      location: 'google-meet',
      joinLink: "https://meet.google.com/abc-defg-hij",
      status: 'upcoming',
      reminders: false
    },
    {
      id: 6,
      title: "Parent-Teacher Meeting",
      type: 'personal',
      startTime: "18:00",
      endTime: "19:00",
      date: "2024-01-19",
      day: "Fri",
      location: 'zoom',
      joinLink: "https://zoom.us/j/789012",
      status: 'upcoming',
      reminders: true
    }
  ];

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`);

  const getEventsForDay = (date: string) => {
    return events.filter(event => event.date === date);
  };

  const getEventColor = (type: Event['type']) => {
    switch (type) {
      case 'class': return 'bg-blue-100 border-blue-200 text-blue-800';
      case 'assignment': return 'bg-purple-100 border-purple-200 text-purple-800';
      case 'exam': return 'bg-red-100 border-red-200 text-red-800';
      case 'personal': return 'bg-green-100 border-green-200 text-green-800';
    }
  };

  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'class': return <Video className="h-3 w-3" />;
      case 'assignment': return <Clock className="h-3 w-3" />;
      case 'exam': return <Users className="h-3 w-3" />;
      case 'personal': return <Calendar className="h-3 w-3" />;
    }
  };

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - date.getDay() + 1 + i);
    return date;
  });

  const stats = {
    totalClasses: 4,
    assignmentsDue: 3,
    studyHours: 8,
    freeSlots: 2
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
            <p className="text-gray-600 mt-2">View and manage your classes, assignments, and deadlines</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export
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
              <Video className="h-8 w-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Assignments Due</p>
                <p className="text-2xl font-bold text-gray-900">{stats.assignmentsDue}</p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Study Hours</p>
                <p className="text-2xl font-bold text-gray-900">{stats.studyHours}h</p>
              </div>
              <Calendar className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Free Slots</p>
                <p className="text-2xl font-bold text-gray-900">{stats.freeSlots}</p>
              </div>
              <Users className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Calendar controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-bold text-gray-900">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => {
                  const newDate = new Date(currentDate);
                  newDate.setMonth(newDate.getMonth() - 1);
                  setCurrentDate(newDate);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <button 
                onClick={() => setCurrentDate(new Date())}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Today
              </button>
              
              <button 
                onClick={() => {
                  const newDate = new Date(currentDate);
                  newDate.setMonth(newDate.getMonth() + 1);
                  setCurrentDate(newDate);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {(['day', 'week', 'month'] as const).map((viewOption) => (
                <button
                  key={viewOption}
                  onClick={() => setView(viewOption)}
                  className={`px-4 py-2 text-sm font-medium rounded capitalize ${
                    view === viewOption
                      ? 'bg-white shadow text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {viewOption}
                </button>
              ))}
            </div>
            
            <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg">
              <Filter className="h-5 w-5" />
            </button>
            
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Week view header */}
        {view === 'week' && (
          <div className="grid grid-cols-8 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
            {/* Time column */}
            <div className="bg-gray-50 p-4">
              <div className="h-12"></div>
              {hours.map((hour) => (
                <div key={hour} className="h-16 border-t border-gray-200 text-sm text-gray-500">
                  {hour}
                </div>
              ))}
            </div>
            
            {/* Day columns */}
            {weekDates.map((date) => {
              const dateStr = date.toISOString().split('T')[0];
              const dayEvents = getEventsForDay(dateStr);
              const isToday = dateStr === selectedDate;
              
              return (
                <div key={dateStr} className="bg-white">
                  <div className={`p-4 border-b border-gray-200 ${isToday ? 'bg-purple-50' : ''}`}>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">{days[date.getDay() - 1]}</div>
                      <div className={`text-lg font-bold ${
                        isToday ? 'text-purple-600' : 'text-gray-900'
                      }`}>
                        {date.getDate()}
                      </div>
                    </div>
                  </div>
                  
                  {/* Events container */}
                  <div className="relative">
                    {hours.map((hour) => (
                      <div key={hour} className="h-16 border-t border-gray-100"></div>
                    ))}
                    
                    {/* Events */}
                    {dayEvents.map((event) => {
                      const startHour = parseInt(event.startTime.split(':')[0]);
                      const top = (startHour - 8) * 64 + 12;
                      const height = (parseInt(event.endTime.split(':')[0]) - startHour) * 64;
                      
                      return (
                        <div
                          key={event.id}
                          className={`absolute left-1 right-1 rounded-lg border p-2 ${getEventColor(event.type)}`}
                          style={{ top: `${top}px`, height: `${height}px` }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {getEventIcon(event.type)}
                              <span className="ml-1 text-xs font-medium">{event.startTime}</span>
                            </div>
                            {event.reminders && <Bell className="h-3 w-3" />}
                          </div>
                          <div className="mt-1">
                            <div className="font-medium text-sm truncate">{event.title}</div>
                            {event.teacher && (
                              <div className="text-xs opacity-75 truncate">{event.teacher}</div>
                            )}
                          </div>
                          {event.type === 'class' && event.status === 'upcoming' && (
                            <button className="mt-2 w-full py-1 text-xs font-medium bg-white/50 hover:bg-white rounded">
                              Join
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Month view */}
        {view === 'month' && (
          <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
            {days.map((day) => (
              <div key={day} className="bg-gray-50 p-4 text-center font-medium text-gray-700">
                {day}
              </div>
            ))}
            
            {Array.from({ length: 35 }, (_, i) => {
              const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i - 10);
              const dateStr = date.toISOString().split('T')[0];
              const dayEvents = getEventsForDay(dateStr);
              const isToday = dateStr === selectedDate;
              
              return (
                <div
                  key={i}
                  className={`bg-white min-h-32 p-2 ${isToday ? 'bg-purple-50' : ''}`}
                  onClick={() => setSelectedDate(dateStr)}
                >
                  <div className={`text-right font-medium ${
                    isToday 
                      ? 'bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center ml-auto'
                      : 'text-gray-900'
                  }`}>
                    {date.getDate()}
                  </div>
                  
                  <div className="mt-2 space-y-1">
                    {dayEvents.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className={`text-xs p-1 rounded truncate ${getEventColor(event.type)}`}
                        title={event.title}
                      >
                        {event.startTime} {event.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <div className="text-xs text-gray-500">+{dayEvents.length - 2} more</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Upcoming events list */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming events */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
            </div>
            
            <div className="divide-y divide-gray-200">
              {events
                .filter(event => event.status === 'upcoming')
                .sort((a, b) => {
                  const dateA = new Date(`${a.date}T${a.startTime}`);
                  const dateB = new Date(`${b.date}T${b.startTime}`);
                  return dateA.getTime() - dateB.getTime();
                })
                .map((event) => (
                  <div key={event.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className={`px-2 py-1 text-xs rounded-full flex items-center ${getEventColor(event.type)}`}>
                            {getEventIcon(event.type)}
                            <span className="ml-1 capitalize">{event.type}</span>
                          </span>
                          {event.reminders && (
                            <span className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full flex items-center">
                              <Bell className="h-3 w-3 mr-1" />
                              Reminder
                            </span>
                          )}
                        </div>
                        
                        <h4 className="font-medium text-gray-900 mb-1">{event.title}</h4>
                        {event.class && (
                          <p className="text-sm text-gray-600 mb-2">{event.class}</p>
                        )}
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {event.date} • {event.day}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {event.startTime} - {event.endTime}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                      
                      <div className="ml-4 flex flex-col space-y-2">
                        {event.type === 'class' && event.status === 'upcoming' && (
                          <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 flex items-center">
                            <PlayCircle className="h-4 w-4 mr-2" />
                            Join
                          </button>
                        )}
                        
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 flex items-center">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Today's schedule */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Today's Schedule</h3>
            <div className="space-y-4">
              {events
                .filter(event => event.date === selectedDate)
                .map((event) => (
                  <div key={event.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className={`px-2 py-1 text-xs rounded-full ${getEventColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                      <span className="text-sm font-medium">{event.startTime}</span>
                    </div>
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.class || 'Personal'}</p>
                  </div>
                ))}
              
              {events.filter(event => event.date === selectedDate).length === 0 && (
                <div className="text-center py-4">
                  <Calendar className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500">No events scheduled</p>
                </div>
              )}
            </div>
          </div>

          {/* Add to calendar */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Add to Calendar</h3>
            <p className="text-sm text-gray-600 mb-4">Sync your schedule with external calendars</p>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center justify-between">
                <span>Google Calendar</span>
                <ExternalLink className="h-4 w-4" />
              </button>
              <button className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center justify-between">
                <span>Apple Calendar</span>
                <ExternalLink className="h-4 w-4" />
              </button>
              <button className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center justify-between">
                <span>Outlook</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Share schedule */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Share Schedule</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 font-medium flex items-center justify-center">
                <Share2 className="h-4 w-4 mr-2" />
                Generate Share Link
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                Share with Parents
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">
                Print Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}