import Image from 'next/image'

export default function FacilitiesGallery() {
  const facilities = [
    {
      title: 'Professional Tennis Courts',
      description: 'State-of-the-art tennis courts with premium surfaces',
      image: '/generated/hero-tennis-court.jpg',
    },
    {
      title: 'Pickleball Courts',
      description: 'Dedicated pickleball courts for all skill levels',
      image: '/generated/pickleball-court.jpg',
    },
    {
      title: 'Modern Clubhouse',
      description: 'Luxurious clubhouse with lounge and pro shop',
      image: '/generated/clubhouse-interior.jpg',
    },
  ]

  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            OUR FACILITIES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class facilities designed for players of all levels. From championship courts to premium amenities, we provide everything you need to elevate your game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">LED Lighting</h4>
            <p className="text-gray-600 text-sm">Professional LED lighting for evening play</p>
          </div>

          <div className="p-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Equipment Rental</h4>
            <p className="text-gray-600 text-sm">Premium racquets and equipment available</p>
          </div>

          <div className="p-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Prime Location</h4>
            <p className="text-gray-600 text-sm">Convenient riverside location with ample parking</p>
          </div>

          <div className="p-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Extended Hours</h4>
            <p className="text-gray-600 text-sm">Open from 6 AM to 10 PM daily</p>
          </div>
        </div>
      </div>
    </section>
  )
}