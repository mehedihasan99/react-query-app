import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddProduct from './components/AddProduct'
import Header from './components/Header'
import ProductDetails from './components/ProductDetails'
import ProductsList from './components/ProductsList'
import { ProductContext } from './context'
function App() {
  const [productId, setProductId] = useState(null)
  return (
    <div>
      <ProductContext.Provider value={{ productId, setProductId }}>
        <Header />
        <div className="flex justify-center gap-x-4 mt-11 p-5">
          <AddProduct />
          <ProductsList />
          {productId && <ProductDetails />}
        </div>
        <ToastContainer />
      </ProductContext.Provider>
    </div>
  )
}

export default App
