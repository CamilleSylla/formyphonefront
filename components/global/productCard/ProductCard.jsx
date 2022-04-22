import style from "./productcard.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data, id }) {
  const { title, short_desc, price, image } = data;
  const { name ,url } = image.data.attributes
  return (
    <Link href={`/produit/${id}`}>
      <article className={style.wrapper}>
        <div className={style.container}>
          <img src={ process.env.NEXT_PUBLIC_API_PRODUCT + url } alt={name} />
          <h2>{title.length > 25 ? title.substring(0,35)+"..." : title}</h2>
          <p>{short_desc.substring(0,50)}</p>
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
