import style from "./details.module.scss";
import ReactStars from "react-rating-stars-component";
import React from "react";
import AddCartButton from "../../global/button/AddCartButton";

export default function Details({ details }) {
  const { title, price, category } = details;
  const { rate, count } = details.rating;
  const slugs = ["Coque", "Iphone 13", "6'4 pouces"];
  const slugsJoin = slugs.join(", ");
  const stock = 10;
  details.quantity = 1;

  const onQuantityChange = (e) => {
    details.quantity = e.target.value;
    console.log(details);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <section className={style.wrapper}>
      <h1>{title}</h1>
      <h2> {category} </h2>
      <h3> {slugsJoin} </h3>
      <div className={style.inline}>
        <ReactStars
          count={5}
          value={rate}
          isHalf={true}
          onChange={ratingChanged}
          size={24}
          color2={"#ffd700"}
        />
        <p>
          {count} note{count > 1 ? "s" : null}
        </p>
      </div>
      <p className={style.price}>
        <strong>
          <span>{price}€</span>
        </strong>
      </p>
      <div className={style.inline}>
        <input
          onChange={(e) => onQuantityChange(e)}
          type="number"
          min="1"
          max={stock}
          placeholder="1"
        />
        <p>Quantité</p>
      </div>
      <AddCartButton product={details} />
    </section>
  );
}
