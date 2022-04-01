import style from "./items.module.scss";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function Items() {
  const [cart, setCart] = useContext(CartContext);

  const stock = 10;

  return (
    <section className={style.list}>
      {cart.map((item, i) => {
        const onQuantityChange = (e) => {
          item.quantity = e.target.value;
        };
        return (
          <article key={`panier/${item.name + i}`} className={style.item}>
            <img src={item.image} />
            <div className={style.content}>
              <h2>{item.title}</h2>
              <p>{item.description.length > 70 ? item.description.substring(0,75)+"..." : item.description}</p>
              <div className={style.inline}>
                <input
                  onChange={(e) => onQuantityChange(e)}
                  type="number"
                  min="1"
                  max={stock}
                  placeholder={item.quantity}
                />
                <p>Quantité</p>
              </div>
              <p className={style.price}><strong><span>{item.price * item.quantity}€</span></strong></p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
