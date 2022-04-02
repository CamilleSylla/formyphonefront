import style from "./nav.module.scss";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { UserContext } from "../../../context/UserContext";

const nav = [
  {
    label: "accueil",
    link: "/",
  },
  {
    label: "a propos",
    link: "/a-propos",
  },
  {
    label: "catalogue",
    link: "/catalogue",
  },
  {
    label: "contact",
    link: "/contact",
  },
];

export default function Nav() {

  const [cart, setCart] = useContext(CartContext)
  const [user, setUser] = useContext(UserContext)

  return (
    <nav className={style.wrapper}>
      <div className="wrapping">
        <div className={style.container}>
          <Link href="/">
            <div className={style.logo}>FORMYPHONE</div>
          </Link>
          <ul>
            {nav.map((el, i) => {
              return (
                <Link key={el.label + el.link} href={el.link}>
                  <li> {el.label} </li>
                </Link>
              );
            })}
          </ul>
          <div className={style.user_action}>
            <Link href={user ? `/utilisateur/${user.id}` : "/identification"}>
            <img src="/assets/icon/user.svg" />
            </Link>
            <img src="/assets/icon/like.svg" />
            <Link href="/panier">
              <div style={{position: "relative"}}>
              <img src="/assets/icon/cart.svg" />
              {cart.length ? (<p style={{width: "1.5vw", height: "1.5vw", position: "absolute", top: "-50%", right: "-50%",display: "flex", justifyContent: "center",fontWeight: "bold", alignItems: "center", background: "red", borderRadius: "50%", color: "white", fontSize: ".75rem"}} >{cart.length}</p>) : null}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
