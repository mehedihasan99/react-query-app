import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import React, { useState } from 'react'
import Product from './Product'

async function retrievedProduct({ queryKey }) {
  const response = await axios.get(
    `http://localhost:8000/products?_page=${queryKey[1].page}&_per_page=6`
  )
  console.log(response.data)
  return response.data
}
export default function ProductsList() {
  const [page, setPage] = useState(1)
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products', { page }],
    queryFn: retrievedProduct,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1 className="text-2xl text-center  font-semibold text-gray-600 ">
        Product List
      </h1>
      {products.data && (
        <ul className="grid sm:grid-cols-2 xl:grid-cols-3 flex-shrink-0 my-7 gap-x-4 gap-y-5 justify-items-center">
          {products.data.map((product) => (
            <li key={product.id}>
              <Product product={product} />
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-center items-center">
        {products.prev && (
          <button
            onClick={() => setPage(products.prev)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
          >
            Previous
          </button>
        )}
        {products.next && (
          <button
            onClick={() => setPage(products.next)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
