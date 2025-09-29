import Header from '@/components/Header'
import EventsCalendar from '@/components/EventsCalendar'
import LessonBooking from '@/components/LessonBooking'
import Footer from '@/components/Footer'

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Programs & Events
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Join our vibrant community through lessons, tournaments, social events, and specialized programs designed for players of all skill levels.
          </p>
        </div>
      </section>

      <EventsCalendar />
      <LessonBooking />
      <Footer />
    </div>
  )
}