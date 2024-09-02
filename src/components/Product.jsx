import React from 'react'

export default function Product({ product }) {
  return (
    <div className="shadow-lg bg-gray-200 border-gray-100 rounded border-2 p-4 w-56 h-full hover:scale-75 transition-all cursor-pointer">
      <img
        className="w-full h-36 mx-auto object-cover rounded"
        src={product.thumbnail}
        alt={product.title}
      />
      <h2 className="mt-3 text-xl font-medium text-gray-600">
        {product.title}
      </h2>
      <p className="mt-1 text-gray-500">{product.price}</p>
    </div>
  )
}
