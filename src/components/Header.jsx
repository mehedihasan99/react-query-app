import React from 'react'

export default function Header() {
  return (
    <header className="bg-gray-200 shadow fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="#">CalCu</a>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        {/* Button */}
        <div>
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
