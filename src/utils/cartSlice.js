import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const found = state.items.find((item) => item.id === action.payload.id)
      if (!found) {
        state.items.push(action.payload)
      }
    },
    removeCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})
export const { addToCart, removeCart, clearCart } = cartSlice.actions
export default cartSlice.reducer

/*
create slice of store :
slice name: cart
initial state: items: []
for modifications of cartSlice create reducers :
reducer action name: addToCart
when dispatched action name: addToCart then called reducer function 
*/
