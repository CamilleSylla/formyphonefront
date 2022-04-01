import style from "./nav.module.scss";
import Link from "next/link";

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
            <img src="/assets/icon/user.svg" />
            <img src="/assets/icon/like.svg" />
            <Link href="/panier">
              <img src="/assets/icon/cart.svg" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
