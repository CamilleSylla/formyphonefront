import style from "./menu.module.scss";

export default function Menu() {
  return (
    <div className={style.wrapper}>
      <ul>
        <li>
            <img src="/assets/icon/dashboard.svg"/>
          <p>Tableau de bord</p>
        </li>
        <li>
            <img src="/assets/icon/buy.svg"/>
          <p>Mes commandes</p>
        </li>
        <li>
            <img src="/assets/icon/user.svg"/>
          <p>Mes informations </p>
        </li>
        <li>
            <img src="/assets/icon/like.svg"/>
          <p>Mes favoris</p>
        </li>
      </ul>
    </div>
  );
}
