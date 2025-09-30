'use client'

import { useState } from 'react'
import { Check, CreditCard, User, Mail, Phone, MapPin } from 'lucide-react'

export default function MembershipSignup() {
  const [selectedPlan, setSelectedPlan] = useState('family')
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [membershipComplete, setMembershipComplete] = useState(false)

  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  })

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  })

  const membershipPlans = {
    individual: {
      name: 'Individual',
      price: 99,
      features: [
        'Unlimited court access',
        'Guest privileges (2/month)',
        'Equipment storage',
        'Member events access',
      ],
    },
    family: {
      name: 'Family',
      price: 199,
      features: [
        'Unlimited court access',
        'Up to 4 family members',
        'Guest privileges (4/month)',
        'Equipment storage',
        'Member events access',
        'Priority booking',
      ],
    },
    junior: {
      name: 'Junior',
      price: 49,
      features: [
        'Unlimited court access',
        'Junior clinics included',
        'Equipment rental discount',
        'Summer camp discount',
      ],
    },
  }

  const handlePersonalInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setMembershipComplete(true)
  }

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    })
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return v
    }
  }

  if (membershipComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to the Club!
          </h2>

          <p className="text-gray-600 mb-6">
            Your {membershipPlans[selectedPlan as keyof typeof membershipPlans].name} membership has been successfully activated. You'll receive an email confirmation shortly with your member ID and access instructions.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-green-800 mb-2">What's Next?</h3>
            <ul className="text-sm text-green-700 text-left space-y-1">
              <li>• Check your email for member welcome packet</li>
              <li>• Schedule your complimentary lesson</li>
              <li>• Visit the clubhouse for your member orientation</li>
              <li>• Download our mobile app for court booking</li>
            </ul>
          </div>

          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Join Dale Tennis & Pickelball Club
            </h1>
            <p className="text-xl text-gray-600">
              Complete your membership signup and start playing today!
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                1
              </div>
              <div className={`h-1 w-16 ${currentStep >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                2
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Plan Selection */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Select Your Plan</h3>

                <div className="space-y-4">
                  {Object.entries(membershipPlans).map(([key, plan]) => (
                    <div
                      key={key}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPlan === key
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                      onClick={() => setSelectedPlan(key)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                        <div className="text-2xl font-bold text-green-600">
                          ${plan.price}<span className="text-sm text-gray-600">/mo</span>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Steps */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {currentStep === 1 ? (
                  // Step 1: Personal Information
                  <div>
                    <div className="flex items-center mb-6">
                      <User className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Personal Information</h3>
                    </div>

                    <form onSubmit={handlePersonalInfoSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={personalInfo.firstName}
                            onChange={handlePersonalInfoChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={personalInfo.lastName}
                            onChange={handlePersonalInfoChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={personalInfo.email}
                          onChange={handlePersonalInfoChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={personalInfo.phone}
                          onChange={handlePersonalInfoChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                          Address *
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          value={personalInfo.address}
                          onChange={handlePersonalInfoChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            value={personalInfo.city}
                            onChange={handlePersonalInfoChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            required
                            value={personalInfo.zipCode}
                            onChange={handlePersonalInfoChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                        >
                          Continue to Payment
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  // Step 2: Payment Information
                  <div>
                    <div className="flex items-center mb-6">
                      <CreditCard className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Payment Information</h3>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-green-800">
                            {membershipPlans[selectedPlan as keyof typeof membershipPlans].name} Membership
                          </h4>
                          <p className="text-sm text-green-700">Monthly subscription</p>
                        </div>
                        <div className="text-2xl font-bold text-green-800">
                          ${membershipPlans[selectedPlan as keyof typeof membershipPlans].price}/month
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="cardholderName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          id="cardholderName"
                          name="cardholderName"
                          required
                          value={paymentInfo.cardholderName}
                          onChange={handlePaymentChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          required
                          value={formatCardNumber(paymentInfo.cardNumber)}
                          onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: e.target.value})}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-semibold text-gray-700 mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            required
                            value={paymentInfo.expiryDate}
                            onChange={handlePaymentChange}
                            placeholder="MM/YY"
                            maxLength={5}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-semibold text-gray-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            required
                            value={paymentInfo.cvv}
                            onChange={handlePaymentChange}
                            placeholder="123"
                            maxLength={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="text-xs text-gray-600 bg-gray-50 p-4 rounded-lg">
                        <p className="mb-2">🔒 Your payment information is secure and encrypted.</p>
                        <p>By completing this purchase, you agree to our Terms of Service and confirm that you are authorized to use this payment method.</p>
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isProcessing}
                          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                            isProcessing
                              ? 'bg-gray-400 cursor-not-allowed text-white'
                              : 'bg-green-600 hover:bg-green-700 text-white'
                          }`}
                        >
                          {isProcessing ? 'Processing...' : 'Complete Membership'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}