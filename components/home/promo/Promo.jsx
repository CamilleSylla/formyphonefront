import style from './promo.module.scss'

export default function Promo () {

    return (
        <section className={style.wrapper}>
            <div className={style.ill}/>
            <div className={style.content}>
                <div className='wrapping'>
                <h3>La promotion du moment</h3>
                </div>
            </div>
        </section>
    )
}