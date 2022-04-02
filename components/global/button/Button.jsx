import style from './button.module.scss'

export default function Button ({title}) {

    return <button className={style.primary__btn}>{title}</button>
}