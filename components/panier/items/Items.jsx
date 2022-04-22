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
        const { title,image, price, category, modele, souscategory, marque, tags, desc } = item.attributes;

        return (
          <article key={`panier/${item.name + i}`} className={style.item}>
            <img src={process.env.NEXT_PUBLIC_API_PRODUCT + image.data.attributes.url} />
            <div className={style.content}>
              <h2>{title}</h2>
              <h2>{category.data.attributes.name} - {souscategory.data.attributes.name}</h2>
      <h3> {marque.data.attributes.name} - {modele.data.attributes.name} </h3>
      {/* <h4> {slugsJoin} </h4> */}
              <p>{desc.length > 70 ? desc.substring(0,75)+"..." : desc}</p>
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
              <p className={style.price}><strong><span>{Math.round((price * item.quantity) * 100) / 100}€</span></strong></p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
