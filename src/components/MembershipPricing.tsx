'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'

export default function MembershipPricing() {
  const membershipPlans = [
    {
      name: 'Individual',
      price: 99,
      period: 'month',
      description: 'Perfect for solo players',
      features: [
        'Unlimited court access',
        'Guest privileges (2/month)',
        'Equipment storage',
        'Member events access',
      ],
      buttonText: 'Get Started',
      popular: false,
    },
    {
      name: 'Family',
      price: 199,
      period: 'month',
      description: 'Great for families of all sizes',
      features: [
        'Unlimited court access',
        'Up to 4 family members',
        'Guest privileges (4/month)',
        'Equipment storage',
        'Member events access',
        'Priority booking',
      ],
      buttonText: 'Most Popular',
      popular: true,
    },
    {
      name: 'Junior',
      price: 49,
      period: 'month',
      description: 'For players under 18',
      features: [
        'Unlimited court access',
        'Junior clinics included',
        'Equipment rental discount',
        'Summer camp discount',
      ],
      buttonText: 'Get Started',
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            MEMBERSHIP PACKAGES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect membership plan for your playing style and schedule. All plans include access to our premium facilities and member community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden border-2 ${
                plan.popular
                  ? 'border-green-600 scale-105'
                  : 'border-gray-200 hover:border-green-300'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-green-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/membership"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-100 hover:bg-green-600 text-gray-900 hover:text-white'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-green-600 text-white py-16 px-8 rounded-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Play Your First Lesson on Us?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community of passionate players and take your game to the next level. New members receive a complimentary lesson and court orientation.
            </p>
            <Link
              href="/membership"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg inline-block"
            >
              Start Your Membership Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}