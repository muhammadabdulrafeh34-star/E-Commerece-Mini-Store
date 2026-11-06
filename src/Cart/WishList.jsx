import React from 'react'
import { createSlice } from '@reduxjs/toolkit' 

const initialState = {
  wishListItems: [],
}

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const product = action.payload
      const existingItem = state.wishListItems.findIndex((item) => item.id === product.id)
      if (existingItem < 0) {
        state.wishListItems.push(product)
      }
    },
    removeFromWishList: (state, action) => {
      const productId = action.payload
      state.wishListItems = state.wishListItems.filter((item) => item.id !== productId)
    }
  }
})

export const { addToWishList, removeFromWishList } = wishListSlice.actions
export default wishListSlice.reducer
