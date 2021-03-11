import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import themes from '../themes/themesConfig'
import styles from '../styles/navbar.module.css'



const Navbar = () => {
    /*     const dispactch = useDispatch() */
    return (
        <div className='barra'>
            <div className={styles.barraD}>
                <div className={styles.orden}>
                    <img src="https://www.ubp.edu.ar/wp-content/uploads/2014/09/logo-de-geovinar-pin-01.png" alt="" />
                    <form action="">
                        <input type="text" placeholder="Busca productos marcas y mas" />
                    </form>
                </div>
                <div className={styles.barraI}>
                    <div className={styles.botonLogIn}>
                        <Button variant="outlined" color='primary'> Log in</Button>
                    </div>
                    <div className={styles.botonLogOut}>
                        <Button variant="outlined" color='primary'> Register</Button>
                    </div>
                    <div className={styles.carrito}>
                        <Link><span className="material-icons">shopping_cart</span></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Navbar