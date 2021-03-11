import { createAction, createReducer } from "@reduxjs/toolkit";
// aca van a ir las acciones de user
// un usuario loggeado

export const setWines = createAction("SET_WINES", (busqueda) => {
  return axios
    .get(`/*ruta back*/${busqueda}`)
    .then((res) => res.data);
});

// export const setUser = (user) => {
//     return { type: "SET_USER", payload: user} // el user corrosponde al param
// }
// en arr vacio se carga todo del segundo param
const winesReducer = createReducer([], {
  [setWines]: function (state, action) {
    return action.payload;
  },
});

export default winesReducer;
