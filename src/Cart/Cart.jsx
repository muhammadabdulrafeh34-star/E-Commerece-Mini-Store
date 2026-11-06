import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    
    
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // sab se pehly hum ne product lana hai so use farmula
            const product = action.payload

            console.log("Cart Items:", state.cartItems),
        console.log("Action Payload:", action.payload);

            // hum ne check krna hai allready product hai k navigation.activation
            const existingItem = state.cartItems.findIndex((item) => item.id === product.id)
            if (existingItem >= 0) {
                state.cartItems[existingItem].quantity += 1;
            } else {
                state.cartItems.push({...product, quantity : 1})
            }
        },
        
        // Increase Item..
        IncreaseQty: (state, action) => {
            // check item id
            const id = action.payload
            // check existing item..
            const existingItems = state.cartItems.findIndex((item) => item.id === id)
            if (existingItems >= 0) {
                state.cartItems[existingItems].quantity += 1;
            }
        },
        // decrease item...
        DecreaseQty: (state, action) => {
            const id = action.payload
            const existingItems = state.cartItems.findIndex((item) => item.id === id)
            if (existingItems >= 0) {
                state.cartItems[existingItems].quantity -= 1;
                if (state.cartItems[existingItems].quantity === 0) {
                    state.cartItems.splice(existingItems, 1)
        }
         }
        },
        // remove item from cart
        removeItem: (state, action) => {
            const id = action.payload
                state.cartItems = state.cartItems.filter((item) => item.id !== id)
        },
        //  cart Total
        CartTotal: (state) => {
            state.cartItems = []
        }
    },
})  


export const { addToCart, IncreaseQty, DecreaseQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;