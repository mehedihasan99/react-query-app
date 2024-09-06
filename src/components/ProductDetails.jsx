import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { ProductContext } from '../context'
import { addToCart } from '../utils/cartSlice'

const retrieveProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:8000/${queryKey[0]}/${queryKey[1]?.productId}`
  )
  return response.data
}
export default function ProductDetails() {
  const { productId } = useContext(ProductContext)

  const dispatch = useDispatch()

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['products', { productId }],
    queryFn: retrieveProduct,
  })

  function handleAddToCart(product) {
    dispatch(addToCart(product))
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  console.log(product)
  return (
    <>
      {product && (
        <div className="w-64">
          <h1 className="text-2xl text-center font-semibold text-gray-600 ">
            Product Details
          </h1>
          <div className="shadow-lg bg-gray-200 border-gray-100 rounded border-2 p-4  my-7 w-full space-y-2">
            <img
              className="w-48 h-56 object-cover rounded"
              src={product.thumbnail}
              alt={product.title}
            />
            <h1 className="text-xl font-semibold">{product.title}</h1>
            <p className="font-semibold">${product.price}</p>
            <p className="font-medium text-gray-500">{product.description}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="px-3 py-2 bg-blue-400 rounded mt-3 text-white"
            >
              Add to card
            </button>
          </div>
        </div>
      )}
    </>
  )
}
