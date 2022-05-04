import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import style from "./panier.module.scss";

export default function Panier({ open, setOpen, cart, setCart }) {
  const wrapperRef = useRef();
const router = useRouter()

  const total = cart
    .map((item) => {
      return item.quantity * item.attributes.price;
    })
    .reduce((partialSum, a) => partialSum + a, 0);

    const removeFromCart = id => {
        const newCart = cart.filter(item => {
            return item.id !== id
        }) 
        setCart(newCart)
    }

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (router.pathname === '/panier') setOpen(false)

    if (cart.length) {
      wrapper.addEventListener("mouseleave", () => {
        setOpen(false);
      });
    }

    if (open === true) {
      wrapper.style.top = "10vh";
    } else {
      wrapper.style.top = "-100%";
    }
  }, [open, cart]);

  return (
    <div ref={wrapperRef} className={style.wrapper}>
      <div className={style.head}>
        <div>
          <h5>
            Mon panier,{" "}
            <span>
              {cart.length} article{cart.length > 1 ? "s" : ""}
            </span>
          </h5>
          <img
            onClick={() => setOpen(false)}
            src="/assets/icon/cross.svg"
            alt="formyphone-close"
          />
        </div>
      </div>
      <div className={style.items}>
        <div className={style.container}>
          {cart.map((el, i) => {
            const { marques, title, modeles, image, price } = el.attributes;
            return (
                <div className={style.article_wrapper}>
                <div className={style.article}>
                  <Link href={`/produit/${el.id}`}>
                  <img className={style.art_img} src={process.env.NEXT_PUBLIC_API_PRODUCT + image.data.attributes.url} alt={"formyfone " + title}/>
              </Link>
                  <div className={style.info}>
                  <Link href={`/produit/${el.id}`}>
                      <>
                    <span>{price}€</span>
                    <p>{marques.data.map((el, i) => {
        return <span key={el.attributes.name+i}>{el.attributes.name} {i < marques.data.length - 1 ? ", " : null}</span>
      })}, {modeles.data.map((el, i) => {
        return <span key={el.attributes.name+i}>{el.attributes.name} {i < modeles.data.length - 1 ? ", " : null}</span>
      })} - {title}</p>
                      </>
              </Link>
                    <div className={style.bottom}>
                    <p>Qte : {el.quantity}</p>
                    <img onClick={() => removeFromCart(el.id)} src="/assets/icon/trash.svg" alt="formyphone - trash"/>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.head} style={{backgorund : "#F2F2F2", borderTop : ".5px solid lightgrey"}} >
          <div>
          <h5>Sous-total : </h5>
          <p>{total}€</p>
          </div>
      </div>
      <div className={style.action}>
          <div>
              <Link href="/panier">
          <button style={{background : "lightgrey"}}>Voir panier</button>
              </Link>
          <button style={{background : "green", color: "#F2F2F2"}}>Payer</button>
          </div>
      </div>
    </div>
  );
}
