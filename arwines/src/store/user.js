import { createAction, createReducer } from '@reduxjs/toolkit'
// aca van a ir las acciones de user
// un usuario loggeado

export const setUser = createAction('SET_USER')

// export const setUser = (user) => {
//     return { type: "SET_USER", payload: user} // el user corrosponde al param 
// }
// en arr vacio se carga todo del segundo param
const userReducer = createReducer([], {
    [setUser]: function (state, action) {
        return action.payload
    }
})

export default userReducer