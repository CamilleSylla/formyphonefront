import style from './button.module.scss'

export default function SecondaryBtn ({title}) {

    return <button className={style.secondary__btn}>{title}</button>
}