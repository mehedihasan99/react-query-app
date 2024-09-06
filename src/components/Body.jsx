import React, { useContext } from 'react'
import { ProductContext } from '../context'
import AddProduct from './AddProduct'
import ProductDetails from './ProductDetails'
import ProductsList from './ProductsList'

export default function Body() {
  const { productId } = useContext(ProductContext)
  return (
    <>
      <div className="flex justify-center gap-x-4 p-5">
        <AddProduct />
        <ProductsList />
        {productId && <ProductDetails />}
      </div>
    </>
  )
}
