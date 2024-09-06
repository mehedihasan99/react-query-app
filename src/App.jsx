import { useState } from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { ProductContext } from './context'
import store from './utils/store'

function App() {
  const [productId, setProductId] = useState(null)
  return (
    <div>
      <Provider store={store}>
        <ProductContext.Provider value={{ productId, setProductId }}>
          <Header />
          <Outlet />
        </ProductContext.Provider>
      </Provider>
    </div>
  )
}

export default App
