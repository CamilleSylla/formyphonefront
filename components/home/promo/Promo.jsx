import Button from '../../global/button/Button'
import style from './promo.module.scss'

export default function Promo () {

    return (
        <section className={style.wrapper}>
            <div className={style.ill}/>
            <div className={style.content}>
                <div className='wrapping'>
                <h3>La promotion du moment</h3>
                <p>This is the smal description of the article that is supposed to be promoted</p>
                <div className={style.pricing}>
                <p>100€</p>
                <p className={style.original}>150€</p>
                <div>
                <Button title="Consulter l'article"/>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}