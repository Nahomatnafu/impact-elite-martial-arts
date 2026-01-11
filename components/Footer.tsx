import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                516-366-1146
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                trainimpactelite@gmail.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/programs" className="hover:text-red-600 transition-colors">Programs</Link></li>
              <li><Link href="/instructor" className="hover:text-red-600 transition-colors">Instructor</Link></li>
              <li><Link href="/trial" className="hover:text-red-600 transition-colors">Free Trial</Link></li>
              <li><Link href="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Hours & CTA */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">Get Started</h3>
            <p className="text-gray-300 mb-4">
              Start your martial arts journey today with a FREE 2-week trial!
            </p>
            <Link 
              href="/trial" 
              className="inline-block bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Claim Your Free Trial
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Impact Elite Martial Arts and Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

