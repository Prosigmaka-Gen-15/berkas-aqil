import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name: 'cart',
    initialState: {cartItems: []},
    reducers:{
        addToCart (state, action){
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id)
            if(existingItem){
                existingItem.amount += action.payload.amount;
            }else{
                state.cartItems.push(action.payload)  
            }                   
        },
        deleteItemCart(state, action){
            // selain filter untuk mendelete bisa menggunakan "splice"  
            const hasilFilter = state.cartItems.filter( (item) => {
                return item.id !== action.payload
            })
            state.cartItems = hasilFilter
        },
        increaseAmount(state, action){
            // pakai id
            const findId = state.cartItems.find((item) =>  item.id === action.payload)
            if(findId && (findId.amount < 99)){findId.amount++}

            //pakai index
            // state.cartItems[action.payload].amount++
        },
        DecreaseAmount(state, action){
            //pakai id
            const findId = state.cartItems.find((item) =>  item.id === action.payload)
            if(findId && (findId.amount > 1)){findId.amount--}

            //pakai index
            // if(state.cartItems[action.payload].amount >1){
            //     state.cartItems[action.payload].amount--
            // }else{
            //     state.cartItems[action.payload].amount
            // }
        },
        checkoutCart(state, action){
            state.cartItems = []
            alert('Pesnaan Berhasil Dibuat')
        }
    }
})
export const { DecreaseAmount } = cartSlice.actions
export const { increaseAmount } = cartSlice.actions
export const { addToCart } = cartSlice.actions
export const { deleteItemCart } = cartSlice.actions
export const { checkoutCart } = cartSlice.actions
export default cartSlice.reducer