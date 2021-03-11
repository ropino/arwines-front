// esto es el corazon de nuestro store
// van a estar todos los estados 
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from './user'
import cartReducer from './cart'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: { // aca va todo nuestro estados 
        user: userReducer, // es user reducer van a ir todas las cosas que van a ir dentro de user
        cart: cartReducer,
    }
})

export default store