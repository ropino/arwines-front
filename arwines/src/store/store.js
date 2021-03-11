import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
// import userReducer from './user'
import wineReducer from "./wine"
import winesReducer from "./wines"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: { // aca va todo nuestro estados 
        // user: userReducer, 
        selectedWine: wineReducer,
        wines: winesReducer,
    }
})

export default store