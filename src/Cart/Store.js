import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart";
import wishListReducer from "./WishList";

const store = configureStore({

    reducer: {
        cart: cartReducer,
        wishList: wishListReducer,
    },
}) ;

export default store;