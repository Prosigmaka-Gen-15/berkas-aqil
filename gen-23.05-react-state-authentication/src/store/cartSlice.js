import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        addToCart (state, action){
            state.push(action.payload)
        },
        deleteItemCart(state, action){
            // selain filter untuk mendelete bisa menggunakan "splice"  
            const hasilFilter = state.filter( (cart, index) => {
                return index !== action.payload
            })
            return hasilFilter
        },
        increaseAmount(state, action){
            state[action.payload].amount++
        },
        DecreaseAmount(state, action){
            if(state[action.payload].amount >1){
                state[action.payload].amount--
            }
            state[action.payload].amount
        }
    }
})
export const { DecreaseAmount } = cartSlice.actions
export const { increaseAmount } = cartSlice.actions
export const { addToCart } = cartSlice.actions
export const { deleteItemCart } = cartSlice.actions
export default cartSlice.reducer