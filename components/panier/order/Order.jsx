import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import style from "./order.module.scss";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Checkout from "../checkout/checkout";
import Cookies from "js-cookie";
import axios from "axios";

export default function Order({stripePromise}) {
  const [cart, setCart] = useContext(CartContext);
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [data, setData] = useState({
    address: "",
    city: "",
    state: "",
    stripe_id: "",
  });
//   console.log(stripe);

  const total = cart
    .map((item) => {
      return item.quantity * item.attributes.price;
    })
    .reduce((partialSum, a) => partialSum + a, 0);

    async function submitOrder() {
    
        const cardElement = elements.getElement(CardElement);
        const token = await stripe.createToken(cardElement);
        console.log(token.token.id);
        const userToken = Cookies.get("user");
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
            method: "POST",
            headers: userToken && { Authorization: `Bearer ${userToken}` },
            body: JSON.stringify({
              amount: Number(Math.round(total + "e2") + "e-2"),
              dishes: cart,
              address: data.address,
              city: data.city,
              state: data.state,
              token: token.token.id,
            }),
          });
      
          if (!response.ok) {
            setError(response.statusText);
          } else {
              console.log(response);
          }
      }

  return (
    <section className={style.wrapper}>
      <div className="wrapping">
        <h1>Résumé de votre commande</h1>
        {cart.map((item, i) => {
          const { title, price } = item.attributes;

          return (
            <div className={style.item}>
              <h3>
                {title} x {item.quantity}
              </h3>
              <p>{Math.round(price * item.quantity * 100) / 100}€</p>
            </div>
          );
        })}
        <div className={style.total}>
          <h2>Total</h2>
          <p>
            <strong>{Math.round(total * 100) / 100}€</strong>
          </p>
        </div>
        <Checkout data={data} stripeError={error} submitOrder={submitOrder}/>
      </div>
    </section>
  );
}
