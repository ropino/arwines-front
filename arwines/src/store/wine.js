import { createAction, createReducer } from '@reduxjs/toolkit'
// aca van a ir las acciones de user
// un usuario loggeado

export const setWine = createAction('SET_WINE',(id)=> {
    return axios
    .get(`/*ruta back*/${id}`)
    .then((res) => res.data)
})

// export const setUser = (user) => {
//     return { type: "SET_USER", payload: user} // el user corrosponde al param 
// }
// en arr vacio se carga todo del segundo param
const wineReducer = createReducer([], {
    [setWine]: function (state, action) {
        return action.payload
    }
})

export default wineReducer