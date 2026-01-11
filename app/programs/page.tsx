import Link from 'next/link';
import Image from 'next/image';

export default function Programs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-red-600">Programs</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you&apos;re looking to learn self-defense, get in shape, or compete at the highest level, 
            we have a program designed for you.
          </p>
        </div>
      </section>

      {/* Taekwondo */}
      <section id="taekwondo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg h-80 overflow-hidden">
              <Image
                src="/assets/impact-elite-taekwondo.jpg"
                alt="Taekwondo Training"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-red-600">Taekwondo</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Experience the power and precision of traditional Korean martial arts. Our Taekwondo program 
                emphasizes dynamic kicking techniques, forms (poomsae), sparring, and self-defense applications.
              </p>
              <h3 className="text-2xl font-semibold mb-4">What You&apos;ll Learn:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Traditional forms and patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Dynamic kicking techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Sparring and competition skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Self-defense applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Discipline and mental focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Belt progression system</span>
                </li>
              </ul>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Perfect For:</h4>
                <p className="text-gray-600">Kids, teens, and adults of all skill levels - from complete beginners to advanced practitioners</p>
              </div>
              <Link 
                href="/trial" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Training */}
      <section id="personal-training" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-red-600">Personal Training</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Get customized one-on-one training designed specifically for your goals, fitness level, and schedule. 
                Whether you want to lose weight, build muscle, or improve athletic performance, we&apos;ll create a 
                program that works for you.
              </p>
              <h3 className="text-2xl font-semibold mb-4">What You&apos;ll Get:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Personalized workout plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Nutrition guidance and meal planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Progress tracking and accountability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Expert form correction and technique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Motivation and support</span>
                </li>
              </ul>
              <div className="bg-white p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Perfect For:</h4>
                <p className="text-gray-600">Anyone looking for individualized attention and faster results with expert guidance</p>
              </div>
              <Link 
                href="/trial" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Free Trial
              </Link>
            </div>
            <div className="relative rounded-lg h-80 overflow-hidden order-1 lg:order-2">
              <Image
                src="/assets/impact-elite-personal.jpg"
                alt="Personal Training"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cardio Kickboxing */}
      <section id="cardio-kickboxing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg h-80 overflow-hidden">
              <Image
                src="/assets/impact-elite-cardio.jpg"
                alt="Cardio Kickboxing"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 45%' }}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-red-600">Cardio Kickboxing</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Get an intense, full-body workout that combines martial arts techniques with high-energy cardio.
                Burn calories, build strength, improve coordination, and have a blast doing it!
              </p>
              <h3 className="text-2xl font-semibold mb-4">What You&apos;ll Experience:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>High-intensity calorie burning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Full-body conditioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Stress relief and confidence building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Improved coordination and agility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Fun, energetic group atmosphere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>No experience necessary</span>
                </li>
              </ul>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Perfect For:</h4>
                <p className="text-gray-600">Anyone looking for a fun, challenging workout that delivers real results</p>
              </div>
              <Link
                href="/trial"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Class Options */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="absolute inset-0">
          <Image
            src="/assets/impact-elite-style.jpg"
            alt="Training Style Background"
            fill
            className="object-cover opacity-30"
            style={{ objectPosition: 'center 20%' }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">
            Choose Your <span className="text-red-600">Training Style</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Group Classes</h3>
              <p className="text-gray-300 mb-4">
                Train alongside others in a motivating, energetic environment. Perfect for building camaraderie
                and pushing yourself with the support of fellow students.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Structured class schedule</li>
                <li>• Community atmosphere</li>
                <li>• Cost-effective option</li>
                <li>• All skill levels welcome</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Private Lessons</h3>
              <p className="text-gray-300 mb-4">
                Get personalized, one-on-one instruction tailored to your specific goals and learning pace.
                Ideal for faster progression and individualized attention.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Flexible scheduling</li>
                <li>• Customized curriculum</li>
                <li>• Faster skill development</li>
                <li>• Individual attention</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 relative">
        <div className="absolute inset-0">
          <Image
            src="/assets/impact-elite-trial.jpg"
            alt="Free Trial Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Try any of our programs FREE for 2 weeks - no commitment required!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/trial"
              className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Claim Your Free Trial
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

