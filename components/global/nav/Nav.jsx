import style from "./nav.module.scss";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { UserContext } from "../../../context/UserContext";
import Categories from "./categories/Categories";
import Panier from "./panier/Panier";

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
    dropdown: true,
  },
  {
    label: "contact",
    link: "/contact",
  },
];

export default function Nav() {
  const [cart, setCart] = useContext(CartContext);
  const [user, setUser] = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [panier, setPanier] = useState(false)
  const panierRef = useRef()

  useEffect(() => {
    const dropdown = document.getElementById("dropdown");
    dropdown.addEventListener("mouseenter", () => {
      setOpen(true);

      
    });

      panierRef.current.addEventListener('mouseenter', () => {
        
        if (cart.length) {
          setPanier(true)
        }
      })
    
    
  }, []);

  return (
    <>
    <Panier setCart={setCart} setOpen={setPanier} cart={cart} open={panier}/>
    <nav className={style.wrapper}>
      <div className="wrapping">
        <div className={style.container}>
          <Link href="/">
            <div className={style.logo}>FORMYFONE</div>
          </Link>
          <ul>
            {nav.map((el, i) => {
              return (
                <Link key={el.label + el.link} href={el.link}>
                  <li id={el.dropdown ? "dropdown" : null}> {el.label} </li>
                </Link>
              );
            })}
          </ul>
          <div className={style.user_action}>
            <Link href={user ? `/utilisateur/${user.id}` : "/identification"}>
              <img src="/assets/icon/user.svg" />
            </Link>
            <img src="/assets/icon/like.svg" />
              <div style={{ position: "relative" }}>
                <img ref={panierRef} src="/assets/icon/cart.svg" />
                {cart.length ? (
                  <p
                    style={{
                      width: "1.5vw",
                      height: "1.5vw",
                      position: "absolute",
                      top: "-50%",
                      right: "-50%",
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "bold",
                      alignItems: "center",
                      background: "red",
                      borderRadius: "50%",
                      color: "white",
                      fontSize: ".75rem",
                    }}
                  >
                    {cart.length}
                  </p>
                ) : null}
              </div>
          </div>
        </div>
      </div>
        <Categories  open={open} setOpen={setOpen} />
    </nav>
   </>
  );
}
