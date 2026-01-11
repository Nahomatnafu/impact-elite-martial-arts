import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-red-600">UNLEASH</span> YOUR POTENTIAL
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Train with a World Champion. Transform your body, mind, and spirit at Impact Elite Martial Arts and Fitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/trial" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Start Your FREE 2-Week Trial
              </Link>
              <Link 
                href="/programs" 
                className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">World Champion</div>
              <div className="text-lg">ISKA, WMAC, WKC Titles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">All Levels</div>
              <div className="text-lg">Kids to Adults, Beginner to Advanced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our <span className="text-red-600">Programs</span></h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose from our diverse range of training programs designed to meet your fitness and martial arts goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Taekwondo */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="text-red-600 mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Taekwondo</h3>
              <p className="text-gray-600 mb-4">
                Master the art of Korean martial arts with traditional techniques, forms, and sparring. Build discipline, confidence, and self-defense skills.
              </p>
              <Link href="/programs#taekwondo" className="text-red-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Personal Training */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="text-red-600 mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Personal Training</h3>
              <p className="text-gray-600 mb-4">
                One-on-one customized fitness programs tailored to your goals. Get expert guidance and accountability for maximum results.
              </p>
              <Link href="/programs#personal-training" className="text-red-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Cardio Kickboxing */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="text-red-600 mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Cardio Kickboxing</h3>
              <p className="text-gray-600 mb-4">
                High-energy workouts combining martial arts techniques with cardio. Burn calories, build strength, and have fun!
              </p>
              <Link href="/programs#cardio-kickboxing" className="text-red-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose <span className="text-red-600">Impact Elite</span>?</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            We&apos;re not just another gym. Here&apos;s what sets us apart.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">World Champion Instructor</h3>
              <p className="text-gray-400">Train with ISKA, WMAC, and WKC champion Terrance Hinds</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">All Ages & Levels</h3>
              <p className="text-gray-400">Programs for kids, adults, beginners, and advanced students</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Training</h3>
              <p className="text-gray-400">Choose from private lessons or group classes</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-gray-400">15 years of transforming lives through martial arts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet Your <span className="text-red-600">Instructor</span></h2>
              <h3 className="text-2xl font-semibold mb-4">Terrance Hinds</h3>
              <p className="text-gray-600 mb-4">
                With 15 years of teaching experience and a Black Belt in both Taekwondo and Tang Soo Do,
                Master Terrance Hinds brings world-class expertise to every class.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-start">
                  <span className="text-red-600 mr-2">🏆</span>
                  <span>ISKA World Cup Champion - Sydney, Australia</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-2">🏆</span>
                  <span>WMAC World Cup Champion - Chumotov, Czech Republic</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-2">🏆</span>
                  <span>WKC Pan American Champion - San Juan, Puerto Rico</span>
                </div>
              </div>
              <Link
                href="/instructor"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Master Hinds
              </Link>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">Instructor Photo Placeholder<br/>(Add your photo here)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Get 2 weeks of FREE training to experience the Impact Elite difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trial"
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Claim Your Free Trial
            </Link>
            <a
              href="tel:516-366-1146"
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Call Now: 516-366-1146
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

