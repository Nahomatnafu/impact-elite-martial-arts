'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/impact-elite-logo-v02.jpg"
              alt="Impact Elite Martial Arts & Fitness"
              width={120}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/programs" className="hover:text-red-600 transition-colors font-medium">
              Programs
            </Link>
            <Link href="/instructor" className="hover:text-red-600 transition-colors font-medium">
              Instructor
            </Link>
            <Link href="/contact" className="hover:text-red-600 transition-colors font-medium">
              Contact
            </Link>
            <Link
              href="/trial"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-semibold transition-colors"
            >
              Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/programs" className="block px-3 py-2 hover:bg-gray-800 rounded-md">
              Programs
            </Link>
            <Link href="/instructor" className="block px-3 py-2 hover:bg-gray-800 rounded-md">
              Instructor
            </Link>
            <Link href="/contact" className="block px-3 py-2 hover:bg-gray-800 rounded-md">
              Contact
            </Link>
            <Link href="/trial" className="block px-3 py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold">
              Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

