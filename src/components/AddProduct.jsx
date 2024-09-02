import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

export default function AddProduct() {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    thumbnail: '',
  })
  function handleInputChange(e) {
    const name = e.target.name
    const value =
      e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    setFormData({
      id: crypto.randomUUID(),
      ...formData,
      [name]: value,
    })
  }
  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.post('http://localhost:8000/products', newProduct)
    },
  })
  function handleSubmit(e) {
    e.preventDefault()
    mutation.mutate(formData)
    console.log(formData)
    setFormData({
      title: '',
      price: '',
      description: '',
      thumbnail: '',
    })
  }
  return (
    <div className="w-56 h-full">
      <h1 className="text-2xl text-center mt-8 font-semibold text-gray-600 ">
        Add Product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="shadow-lg bg-gray-200 border-gray-100 rounded border-2 p-4 w-full hover:scale-105 transition-transform my-7"
      >
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Title
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          id="title"
          name="title"
          value={formData.title}
          placeholder="Enter product title"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Price
        </label>
        <input
          onChange={handleInputChange}
          type="number"
          id="price"
          name="price"
          value={formData.price}
          placeholder="Enter price"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          onChange={handleInputChange}
          id="description"
          name="description"
          value={formData.description}
          placeholder="Enter product description"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>

        <label
          htmlFor="thumbnail"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Thumbnail URL
        </label>
        <input
          onChange={handleInputChange}
          type="url"
          id="thumbnail"
          name="thumbnail"
          value={formData.thumbnail}
          placeholder="Enter thumbnail URL"
          className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
