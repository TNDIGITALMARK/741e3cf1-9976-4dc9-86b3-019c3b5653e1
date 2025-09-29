'use client'

import { useState } from 'react'
import { Calendar, Clock, User, DollarSign, Check } from 'lucide-react'

export default function LessonBooking() {
  const [selectedInstructor, setSelectedInstructor] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [lessonType, setLessonType] = useState('private')
  const [sport, setSport] = useState('tennis')
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)

  const instructors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Head Tennis Pro',
      experience: '12 years',
      specialties: ['Advanced Technique', 'Tournament Prep', 'Mental Game'],
      rate: 85,
      availability: ['Mon', 'Wed', 'Fri', 'Sat'],
      image: '/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      title: 'Tennis & Pickleball Pro',
      experience: '8 years',
      specialties: ['Beginner Friendly', 'Pickleball', 'Doubles Strategy'],
      rate: 75,
      availability: ['Tue', 'Thu', 'Sat', 'Sun'],
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'Emily Chen',
      title: 'Junior Development Coach',
      experience: '6 years',
      specialties: ['Youth Programs', 'Fundamental Skills', 'Fun Learning'],
      rate: 65,
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      image: '/api/placeholder/300/300'
    },
  ]

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ]

  const getLessonPrice = () => {
    const instructor = instructors.find(i => i.id === parseInt(selectedInstructor))
    if (!instructor) return 0

    if (lessonType === 'private') {
      return instructor.rate
    } else if (lessonType === 'semi-private') {
      return Math.round(instructor.rate * 0.75) // 25% discount for semi-private
    } else {
      return Math.round(instructor.rate * 0.6) // 40% discount for group
    }
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate booking process
    setTimeout(() => {
      setBookingComplete(true)
      setShowBookingForm(false)
    }, 1000)
  }

  if (bookingComplete) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lesson Booked Successfully!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your lesson has been confirmed. Check your email for booking details and instructor contact information.
            </p>
            <button
              onClick={() => {
                setBookingComplete(false)
                setShowBookingForm(false)
                setSelectedInstructor('')
                setSelectedDate('')
                setSelectedTime('')
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Another Lesson
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="lessons" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Lesson
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from certified professionals with personalized instruction tailored to your skill level and goals.
          </p>
        </div>

        {!showBookingForm ? (
          <>
            {/* Lesson Type Selection */}
            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Lesson Type</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Sport Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Sport</label>
                  <select
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="tennis">Tennis</option>
                    <option value="pickleball">Pickleball</option>
                  </select>
                </div>

                {/* Lesson Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Lesson Format</label>
                  <select
                    value={lessonType}
                    onChange={(e) => setLessonType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="private">Private (1-on-1)</option>
                    <option value="semi-private">Semi-Private (2-3 people)</option>
                    <option value="group">Group (4-6 people)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <User className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Private</h4>
                  <p className="text-sm text-gray-600 mb-3">One-on-one personalized instruction</p>
                  <p className="text-2xl font-bold text-green-600">$65-85</p>
                  <p className="text-xs text-gray-500">per hour</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <svg className="w-8 h-8 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h4 className="font-bold text-gray-900 mb-2">Semi-Private</h4>
                  <p className="text-sm text-gray-600 mb-3">Small group with focused attention</p>
                  <p className="text-2xl font-bold text-blue-600">$50-65</p>
                  <p className="text-xs text-gray-500">per person/hour</p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                  <svg className="w-8 h-8 text-purple-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h4 className="font-bold text-gray-900 mb-2">Group</h4>
                  <p className="text-sm text-gray-600 mb-3">Fun group learning environment</p>
                  <p className="text-2xl font-bold text-purple-600">$40-50</p>
                  <p className="text-xs text-gray-500">per person/hour</p>
                </div>
              </div>
            </div>

            {/* Instructor Selection */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Instructor</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {instructors.map((instructor) => (
                  <div
                    key={instructor.id}
                    className={`bg-white border-2 rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg ${
                      selectedInstructor === instructor.id.toString()
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => setSelectedInstructor(instructor.id.toString())}
                  >
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3"></div>
                      <h4 className="text-xl font-bold text-gray-900">{instructor.name}</h4>
                      <p className="text-green-600 font-semibold">{instructor.title}</p>
                      <p className="text-sm text-gray-600">{instructor.experience} experience</p>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Specialties:</h5>
                      <div className="flex flex-wrap gap-1">
                        {instructor.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Available:</h5>
                      <div className="flex flex-wrap gap-1">
                        {instructor.availability.map((day, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                          >
                            {day}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        ${instructor.rate}
                      </div>
                      <p className="text-xs text-gray-500">per hour (private)</p>
                    </div>
                  </div>
                ))}
              </div>

              {selectedInstructor && (
                <div className="text-center">
                  <button
                    onClick={() => setShowBookingForm(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Continue to Booking
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Booking Form */
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Booking</h3>

              {/* Booking Summary */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-green-800">
                      {lessonType.charAt(0).toUpperCase() + lessonType.slice(1)} {sport.charAt(0).toUpperCase() + sport.slice(1)} Lesson
                    </h4>
                    <p className="text-sm text-green-700">
                      with {instructors.find(i => i.id === parseInt(selectedInstructor))?.name}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-green-800">
                    ${getLessonPrice()}
                  </div>
                </div>
              </div>

              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lessonDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="lessonDate"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="lessonTime" className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="lessonTime"
                      required
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="studentName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Full name of student"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="skillLevel" className="block text-sm font-semibold text-gray-700 mb-2">
                    Skill Level
                  </label>
                  <select
                    id="skillLevel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Requests or Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Any specific goals or requests for your lesson..."
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    Book Lesson - ${getLessonPrice()}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}