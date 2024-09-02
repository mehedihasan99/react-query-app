import React, { useContext } from 'react'
import { ProductContext } from '../context'

export default function Product({ product }) {
  const { setProductId } = useContext(ProductContext)
  return (
    <div className="shadow-lg bg-gray-200 border-gray-100 rounded border-2 p-4 w-56 h-full hover:scale-75 transition-all ">
      <img
        className="w-full  h-36 mx-auto object-cover rounded"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="flex flex-col justify-center items-center">
        <h2 className="mt-3 mb-0 text-xl font-medium text-gray-600">
          {product.title}
        </h2>
        <button
          onClick={() => setProductId(product.id)}
          className="px-2 py-1 bg-pink-400 mt-5 rounded text-sm cursor-pointer"
        >
          Show Details
        </button>
      </div>
    </div>
  )
}
