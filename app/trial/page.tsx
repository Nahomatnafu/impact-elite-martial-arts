'use client';

import { useState } from 'react';

export default function Trial() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    experience: '',
    goals: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Trial signup:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-5xl font-bold mb-6">
            Welcome to <span className="text-red-600">Impact Elite</span>!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for signing up for your FREE 2-week trial! We&apos;ll contact you within 24 hours 
            to schedule your first session.
          </p>
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">What Happens Next?</h2>
            <ul className="text-left space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">1.</span>
                <span>We&apos;ll reach out via text or email to confirm your trial</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">2.</span>
                <span>Schedule your first class at a time that works for you</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">3.</span>
                <span>Come ready to train and have fun!</span>
              </li>
            </ul>
          </div>
          <a 
            href="/" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Start Your <span className="text-red-600">FREE</span> Trial
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience 2 weeks of world-class martial arts training - absolutely FREE!
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">2 Weeks</div>
              <div>Completely FREE</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">No Commitment</div>
              <div>Cancel Anytime</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">All Programs</div>
              <div>Try Any Class</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Claim Your <span className="text-red-600">Free Trial</span>
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out the form below and we&apos;ll get you started on your martial arts journey!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                  Which program interests you most? *
                </label>
                <select
                  id="program"
                  name="program"
                  required
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                >
                  <option value="">Select a program...</option>
                  <option value="taekwondo">Taekwondo</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="cardio-kickboxing">Cardio Kickboxing</option>
                  <option value="not-sure">Not Sure / Want to Try Multiple</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Previous martial arts or fitness experience?
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                >
                  <option value="">Select your experience level...</option>
                  <option value="none">Complete Beginner</option>
                  <option value="some">Some Experience</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  What are your goals? (Optional)
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={4}
                  value={formData.goals}
                  onChange={handleChange}
                  placeholder="e.g., lose weight, learn self-defense, build confidence, compete..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> By submitting this form, you agree to be contacted by Impact Elite
                  Martial Arts and Fitness regarding your free trial. We respect your privacy and will never
                  share your information.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Claim My Free 2-Week Trial
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            What to <span className="text-red-600">Expect</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-3">1. We&apos;ll Contact You</h3>
              <p className="text-gray-600">
                Within 24 hours, we&apos;ll reach out via text or email to confirm your trial and answer any questions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold mb-3">2. Schedule Your First Class</h3>
              <p className="text-gray-600">
                We&apos;ll work with your schedule to find the perfect time for your first session.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🥋</div>
              <h3 className="text-xl font-bold mb-3">3. Start Training!</h3>
              <p className="text-gray-600">
                Show up ready to learn, have fun, and begin your transformation. No special equipment needed!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

