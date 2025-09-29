'use client'

import { useState } from 'react'
import { Calendar, Clock, MapPin, Users, Filter, ChevronLeft, ChevronRight } from 'lucide-react'

export default function EventsCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedFilter, setSelectedFilter] = useState('all')

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const events = [
    {
      id: 1,
      title: 'Beginner Tennis Clinic',
      date: '2025-01-15',
      time: '10:00 AM - 12:00 PM',
      type: 'lesson',
      location: 'Court 1-2',
      spots: 12,
      price: 45,
      description: 'Perfect for beginners wanting to learn the fundamentals of tennis.',
    },
    {
      id: 2,
      title: 'Monthly Tennis Tournament',
      date: '2025-01-20',
      time: '9:00 AM - 4:00 PM',
      type: 'tournament',
      location: 'All Courts',
      spots: 32,
      price: 25,
      description: 'Competitive singles tournament for intermediate and advanced players.',
    },
    {
      id: 3,
      title: 'Pickleball Social Hour',
      date: '2025-01-25',
      time: '6:00 PM - 8:00 PM',
      type: 'social',
      location: 'Pickleball Courts',
      spots: 20,
      price: 0,
      description: 'Casual play and social networking for pickleball enthusiasts.',
    },
    {
      id: 4,
      title: 'Junior Summer Camp - Week 1',
      date: '2025-02-01',
      time: '9:00 AM - 3:00 PM',
      type: 'program',
      location: 'Various Courts',
      spots: 24,
      price: 180,
      description: 'Full-day tennis instruction and activities for ages 8-16.',
    },
    {
      id: 5,
      title: 'Adult Mixed Doubles League',
      date: '2025-02-08',
      time: '7:00 PM - 9:00 PM',
      type: 'league',
      location: 'Court 3-6',
      spots: 16,
      price: 35,
      description: 'Weekly mixed doubles league play for all skill levels.',
    },
    {
      id: 6,
      title: 'Cardio Tennis Workout',
      date: '2025-02-12',
      time: '8:00 AM - 9:00 AM',
      type: 'fitness',
      location: 'Court 7',
      spots: 10,
      price: 20,
      description: 'High-energy fitness class combining tennis drills with cardio.',
    },
  ]

  const eventTypes = [
    { value: 'all', label: 'All Events', color: 'bg-gray-100' },
    { value: 'lesson', label: 'Lessons', color: 'bg-blue-100 text-blue-800' },
    { value: 'tournament', label: 'Tournaments', color: 'bg-red-100 text-red-800' },
    { value: 'social', label: 'Social Events', color: 'bg-purple-100 text-purple-800' },
    { value: 'program', label: 'Programs', color: 'bg-green-100 text-green-800' },
    { value: 'league', label: 'Leagues', color: 'bg-orange-100 text-orange-800' },
    { value: 'fitness', label: 'Fitness', color: 'bg-pink-100 text-pink-800' },
  ]

  const filteredEvents = selectedFilter === 'all'
    ? events
    : events.filter(event => event.type === selectedFilter)

  const getEventTypeColor = (type: string) => {
    const eventType = eventTypes.find(t => t.value === type)
    return eventType ? eventType.color : 'bg-gray-100'
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (selectedMonth === 0) {
        setSelectedMonth(11)
        setSelectedYear(selectedYear - 1)
      } else {
        setSelectedMonth(selectedMonth - 1)
      }
    } else {
      if (selectedMonth === 11) {
        setSelectedMonth(0)
        setSelectedYear(selectedYear + 1)
      } else {
        setSelectedMonth(selectedMonth + 1)
      }
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events & Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay active and engaged with our comprehensive calendar of lessons, tournaments, social events, and specialized programs.
          </p>
        </div>

        {/* Calendar Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-white rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900">
              {months[selectedMonth]} {selectedYear}
            </h3>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-white rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Event Type Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 focus:border-transparent"
            >
              {eventTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getEventTypeColor(event.type)}`}>
                    {eventTypes.find(t => t.value === event.type)?.label}
                  </span>
                  <div className="text-2xl font-bold text-green-600">
                    {event.price === 0 ? 'Free' : `$${event.price}`}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>

                <div className="space-y-2 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.spots} spots available</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  {event.description}
                </p>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Events Found</h3>
            <p className="text-gray-600">
              No events match your current filter. Try selecting a different category.
            </p>
          </div>
        )}

        {/* Upcoming Programs Section */}
        <div className="mt-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Programs
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Tennis Lessons</h4>
                <p className="text-gray-600 text-sm">Private and group lessons for all skill levels with certified pros</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Junior Development</h4>
                <p className="text-gray-600 text-sm">Comprehensive programs for young players including camps and leagues</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Fitness Classes</h4>
                <p className="text-gray-600 text-sm">Tennis-based fitness programs combining cardio, strength, and agility training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}