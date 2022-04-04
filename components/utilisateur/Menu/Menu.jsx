import style from "./menu.module.scss";

export default function Menu() {
  return (
    <div className={style.wrapper}>
      <ul>
        <li>
            <img src="/assets/img/dashboard.svg"/>
          <p>Tableau de bord</p>
        </li>
        <li>
            <img src="/assets/img/buy.svg"/>
          <p>Mes commandes</p>
        </li>
      </ul>
    </div>
  );
}
