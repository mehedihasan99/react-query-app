import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import React from 'react'
import Product from './Product'

async function retrievedProduct({ queryKey }) {
  const response = await axios.get(`http://localhost:8000/${queryKey[0]}`)
  return response.data
}
export default function ProductsList() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: retrievedProduct,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h1 className="text-2xl text-center mt-8 font-semibold text-gray-600 ">
        Product List
      </h1>
      <ul className="grid sm:grid-cols-2 xl:grid-cols-3 flex-shrink-0 my-7 gap-x-4 gap-y-5 justify-items-center">
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}
