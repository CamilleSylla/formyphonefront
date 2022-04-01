import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import style from './order.module.scss'

export default function Order () {

    const [cart, setCart] = useContext(CartContext)

    const total = cart.map(item => {
        return item.quantity * item.price
    }).reduce((partialSum, a) => partialSum + a, 0)


    return (
        <section className={style.wrapper}>
            <div className='wrapping'>
            <h1>Résumé de votre commande</h1>
            {cart.map((item, i) => {
                return (
                    <div className={style.item}>
                    <h3>{item.title} x {item.quantity}</h3>
                    <p>{item.price * item.quantity}€</p>
                    </div>    
                )
            })}
            <div className={style.total}>
                <h2>Total</h2>
                <p><strong>{Math.round((total) * 100) / 100}€</strong></p>
            </div>
            </div>

        </section>
    )
}