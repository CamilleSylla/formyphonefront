import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import style from './button.module.scss'

export default function AddCartButton ({product}) {
    const [cart, setCart] = useContext(CartContext)

    const addCart = () => {
        cart.push(product)
    }

    return <button onClick={addCart} className={style.addCart}>Ajouter au panier</button>
}