import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { ProductContext } from '../context'

export default function Product({ product }) {
  const { setProductId } = useContext(ProductContext)
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (id) => {
      return axios.delete(`http://localhost:8000/products/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products'])
    },
  })
  const handleDeleteProduct = (id) => {
    mutation.mutate(id)
    toast.warning(`Product  ${product.title} deleted successfully`, {
      message: 'Product deleted successfully',
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }) // * toast message
  }
  if (mutation.isLoading) {
    return <p className="text-center mt-8">Loading...</p>
  }
  if (mutation.isError) {
    return <p className="text-center mt-8">{mutation.error.message}; </p>
  }
  return (
    <div className="shadow-lg bg-gray-200 border-gray-100 rounded border-2 p-4 w-56 h-full hover:scale-75 transition-all ">
      <img
        className="w-full  h-36 mx-auto object-cover rounded"
        src={product.thumbnail}
        alt={product.title}
      />
      <h2 className="mt-3 mb-0 text-xl font-medium text-gray-600">
        {product.title}
      </h2>
      <div className="flex gap-2 justify-center items-center">
        <button
          onClick={() => setProductId(product.id)}
          className="px-2 py-1 bg-green-400 mt-5 rounded text-sm cursor-pointer"
        >
          Show Details
        </button>
        <button
          onClick={() => handleDeleteProduct(product.id)}
          className="px-2 py-1 bg-red-500 mt-5 rounded text-white text-sm cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
