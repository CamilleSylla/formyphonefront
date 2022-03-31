import style from "./productcard.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data }) {
  const { title, id, description, price, image } = data;
  return (
    <Link href={`/produit/${id}`}>
      <article className={style.wrapper}>
        <div className={style.container}>
          <img src={image} />
          <h2>{title.length > 25 ? title.substring(0,35)+"..." : title}</h2>
          <p>{description.substring(0,50)}</p>
          <p>
            <span>
              <strong>{price}€</strong>
            </span>
          </p>
        </div>
      </article>
    </Link>
  );
}
