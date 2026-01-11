import Link from 'next/link';
import Image from 'next/image';

export default function Instructor() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/impact-elite-program.jpg"
            alt="Impact Elite Martial Arts"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet Your <span className="text-red-600">Instructor</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Train with a world champion who has dedicated his life to martial arts excellence
          </p>
        </div>
      </section>

      {/* Main Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-96 lg:h-[500px]">
              <Image
                src="/assets/instructor/impact-elite-instructor.jpg"
                alt="Master Terrance Hinds"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Master <span className="text-red-600">Terrance Hinds</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Black Belt in Taekwondo & Tang Soo Do
              </p>
              <p className="text-gray-600 mb-6">
                With over 15 years of teaching experience, Master Terrance Hinds has dedicated his life to 
                the martial arts. His journey has taken him around the world, competing at the highest levels 
                and bringing home championship titles from three continents.
              </p>
              <p className="text-gray-600 mb-6">
                Master Hinds believes in developing not just skilled martial artists, but well-rounded individuals. 
                His teaching philosophy emphasizes discipline, respect, perseverance, and personal growth alongside 
                technical excellence.
              </p>
              <p className="text-gray-600">
                Whether you&apos;re a complete beginner or an experienced practitioner, Master Hinds brings the same 
                level of dedication and expertise to every student, helping them achieve their personal best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Championships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            World <span className="text-red-600">Championships</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Proven excellence on the world stage
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/gold-trophy.png"
                  alt="Trophy"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-red-600">ISKA World Cup</h3>
              <p className="text-gray-600 mb-2">Champion</p>
              <p className="text-gray-500">Sydney, Australia</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/gold-trophy.png"
                  alt="Trophy"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-red-600">WMAC World Cup</h3>
              <p className="text-gray-600 mb-2">Champion</p>
              <p className="text-gray-500">Chumotov, Czech Republic</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src="/assets/gold-trophy.png"
                  alt="Trophy"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-red-600">WKC Pan American</h3>
              <p className="text-gray-600 mb-2">Champion</p>
              <p className="text-gray-500">San Juan, Puerto Rico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Credentials & <span className="text-red-600">Experience</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 text-white p-3 rounded-lg flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Black Belt - Taekwondo</h3>
                <p className="text-gray-600">Mastery of traditional Korean martial arts</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 text-white p-3 rounded-lg flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Black Belt - Tang Soo Do</h3>
                <p className="text-gray-600">Expert in traditional Korean karate</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 text-white p-3 rounded-lg flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">15+ Years Teaching</h3>
                <p className="text-gray-600">Extensive experience with students of all ages and levels</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-600 text-white p-3 rounded-lg flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">International Competitor</h3>
                <p className="text-gray-600">Competed and won on three continents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/bruce-lee.jpg"
            alt="Bruce Lee"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Teaching <span className="text-red-600">Philosophy</span>
          </h2>
          <blockquote className="text-xl italic text-gray-300 mb-8">
            &quot;Empty your mind, be formless. Shapeless, like water. If you put water into a cup,
            it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in
            a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.&quot;
          </blockquote>
          <p className="text-gray-400">― Bruce Lee</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Train with a Champion</h2>
          <p className="text-xl mb-8">
            Experience world-class instruction with your FREE 2-week trial!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trial"
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Free Trial
            </Link>
            <Link
              href="/contact"
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

