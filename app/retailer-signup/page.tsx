'use client'

import React, { useState } from 'react'

export default function RetailerSignup() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    businessType: '',
    yearsInBusiness: '',
    currentProducts: '',
    monthlyFootTraffic: '',
    servicesInterested: [],
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter(s => s !== service)
        : [...prev.servicesInterested, service]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const response = await fetch('/api/retailer-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          businessName: '',
          contactName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          businessType: '',
          yearsInBusiness: '',
          currentProducts: '',
          monthlyFootTraffic: '',
          servicesInterested: [],
          additionalInfo: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Partner with <span className="text-accent">So‑Cal Shades</span>
          </h1>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Join hundreds of successful retailers who have boosted their counter sales with our premium sunglasses, 
            custom displays, and merchandising expertise. Fill out the form below to get started.
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="bg-green-900/20 border border-green-500/50 rounded-lg p-6 mb-8 text-center">
            <h3 className="text-green-400 text-xl font-bold mb-2">Thank You!</h3>
            <p className="text-green-300">
              Your retailer application has been submitted successfully. Our team will review your information and contact you within 24-48 hours.
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 mb-8 text-center">
            <h3 className="text-red-400 text-xl font-bold mb-2">Error</h3>
            <p className="text-red-300">
              There was an error submitting your application. Please try again or contact us directly.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Information */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-accent">Business Information</h2>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Business Name *</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
                placeholder="Your Business Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Contact Name *</label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
                placeholder="Your Full Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Business Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
                placeholder="Street Address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">City *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
                placeholder="City"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">State *</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text focus:outline-none focus:border-accent"
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="NV">Nevada</option>
                <option value="AZ">Arizona</option>
                <option value="OR">Oregon</option>
                <option value="WA">Washington</option>
                {/* Add more states as needed */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">ZIP Code *</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
                placeholder="12345"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Business Type *</label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text focus:outline-none focus:border-accent"
              >
                <option value="">Select Business Type</option>
                <option value="convenience-store">Convenience Store</option>
                <option value="gas-station">Gas Station</option>
                <option value="liquor-store">Liquor Store</option>
                <option value="smoke-shop">Smoke Shop</option>
                <option value="gift-shop">Gift Shop</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Business Details */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-accent mt-8">Business Details</h2>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Years in Business</label>
              <select
                name="yearsInBusiness"
                value={formData.yearsInBusiness}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text focus:outline-none focus:border-accent"
              >
                <option value="">Select Range</option>
                <option value="less-than-1">Less than 1 year</option>
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="more-than-10">More than 10 years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Monthly Foot Traffic</label>
              <select
                name="monthlyFootTraffic"
                value={formData.monthlyFootTraffic}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text focus:outline-none focus:border-accent"
              >
                <option value="">Select Range</option>
                <option value="less-than-500">Less than 500</option>
                <option value="500-1000">500-1,000</option>
                <option value="1000-2500">1,000-2,500</option>
                <option value="2500-5000">2,500-5,000</option>
                <option value="more-than-5000">More than 5,000</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Current Products/Services</label>
              <textarea
                name="currentProducts"
                value={formData.currentProducts}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
                placeholder="Describe the products and services you currently offer..."
              />
            </div>

            {/* Services Interested */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-accent mt-8">Services Interested In</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Sunglasses Wholesale',
                  'Custom Display Racks',
                  'Merchandising Planning',
                  'Mobile Accessories',
                  'Supplements',
                  'Lighters & Impulse Items',
                  'Store Layout Consultation',
                  'Training & Support'
                ].map((service) => (
                  <label key={service} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.servicesInterested.includes(service)}
                      onChange={() => handleCheckboxChange(service)}
                      className="w-4 h-4 text-accent bg-zinc-800 border-zinc-600 rounded focus:ring-accent focus:ring-2"
                    />
                    <span className="text-text">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Additional Information</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-text placeholder-muted focus:outline-none focus:border-accent"
                placeholder="Tell us more about your goals, questions, or specific needs..."
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              <p className="text-muted text-sm mt-4">
                * Required fields. We'll review your application and contact you within 24-48 hours.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}