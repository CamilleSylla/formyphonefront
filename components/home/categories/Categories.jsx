import Link from "next/link";
import style from "./categories.module.scss";

export default function Categories({ categories }) {
  return (
    <div className={style.wrapper}>
      <ul className={style.grid}>
        {categories.map((el, i) => {
          const { name, image, categorie } = el.attributes;
          console.log(el);
          return (
            <Link
              href={{
                pathname: "/catalogue",
                query: {
                  filter: true,
                  category: categorie.data.attributes.name,
                  souscategory: name,
                },
              }}
            >
              <li key={name + i}>
                <img
                  src={
                    process.env.NEXT_PUBLIC_API_PRODUCT +
                    image.data.attributes.url
                  }
                />
                <h3>{name}</h3>
                <h4>{categorie.data.attributes.name}</h4>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
