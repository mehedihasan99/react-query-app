import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice, // here "cart" ==> name of the slice and carSlice
  },
})
export default store
