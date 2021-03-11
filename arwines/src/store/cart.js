import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
// import axios from "axios"

export const setNewCart = createAsyncThunk('SET_USER', (newCart, thunkAPI)=>{
    // return axios 
    // .post("http://localhost:5000/api/cart", newCart)
    // .then(res => res.data)
    // .then(data => {
    //     localStorage.setItem("token", JSON.stringify(data));
    // })
})

const cartReducer = createReducer([], {
    [setNewCart.fulfilled]: function (state, action) {
        return action.payload
    }
})

export default cartReducer