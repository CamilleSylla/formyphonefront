import { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "../components/global/Header";
import Items from "../components/panier/items/Items";
import Order from "../components/panier/order/Order";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

export default function Panier(props) {
  const [stripePromise, setStripePromise] = useState(() =>
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK)
  );
  const [user, setUser] = useContext(UserContext);
  const [cart, setCart] = useContext(CartContext);

  return (
    <div>
      <Header />
      <main>
        <div
          className="wrapping"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5vh 0 5vh 0",
          }}
        >
          <Items />
          <Elements stripe={stripePromise}>
            <Order />
          </Elements>
        </div>
      </main>
    </div>
  );
}
