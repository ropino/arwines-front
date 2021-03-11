import Navbar from './Navbar'
import React from 'react'
const Cart = () => {
    return (
        <div>
            <Navbar />
            <p>Estoy en Cart</p>
        </div>
    )
}
export default Cart
// evalue si el user existe, si no en el use Efect de component did mount un history push a loggin
// si existe lo dejamos pasar 