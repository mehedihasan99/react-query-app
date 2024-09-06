import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cart from './Cart'

export default function Header() {
  const cartItems = useSelector((store) => store.cart.items)
  const [showCart, setShowCart] = useState(false)

  return (
    <header className="bg-gray-200 shadow fixed top-0 left-0 right-0 z-10">
      {showCart && (
        <Cart cartItems={cartItems} onCloseCart={() => setShowCart(false)} />
      )}
      <div className="container mx-auto flex justify-between items-center py-6 px-6">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="#">CalCu</Link>
        </div>
        <nav className="space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            to="/foods"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Foods
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </nav>

        <div>
          <button
            onClick={() => setShowCart(true)}
            to="#"
            className="bg-gray-500  text-white px-3 py-1  rounded-md hover:bg-blue-500 transition"
          >
            Cart
          </button>
          {cartItems.length > 0 && (
            <div className="relative">
              <span className="absolute -top-12 -right-3 bg-red-600 text-white text-xs w-6 h-6 flex justify-center items-center rounded-full">
                {cartItems.length}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
