import Button from "../../global/button/Button";
import style from "./about.module.scss";
import Link from 'next/link'

export default function About() {
  return (
    <section className={style.wrapper}>
      <div className="wrapping">
        <div className={style.container}>
          <div className={style.ill_container}>
            <div />
            <img src="https://images.unsplash.com/photo-1613484037537-99ad6c5bc79e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </div>
          <div className={style.content}>
            <div className={style.box}>
              <h2>ForMyPhone la protection qui vous correspond</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                eros tellus, semper a sagittis iaculis, laoreet ut leo. Duis non
                sodales dui, ut facilisis risus.
              </p>
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <span>700+</span>
                    <p>Nombre de produits totaux</p>
                </div>
                <div className={style.card}>
                    <span>10 ans</span>
                    <p>phrase d'accroche pour attirer le client</p>
                </div>
                <div className={style.card}>
                    <span>48h</span>
                    <p>Temps de livraison</p>
                </div>
            </div>
            <Link href="/entreprise">
                <Button title="A propos"/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
