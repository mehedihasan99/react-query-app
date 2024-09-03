import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddProduct from './components/AddProduct'
import ProductDetails from './components/ProductDetails'
import ProductsList from './components/ProductsList'
import { ProductContext } from './context'
function App() {
  const [productId, setProductId] = useState(null)
  return (
    <div className="flex justify-center gap-x-4 p-5">
      <ProductContext.Provider value={{ productId, setProductId }}>
        <AddProduct />
        <ProductsList />
        {productId && <ProductDetails />}
        <ToastContainer />
      </ProductContext.Provider>
    </div>
  )
}

export default App
