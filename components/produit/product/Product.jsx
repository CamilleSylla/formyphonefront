import style from './product.module.scss'

export default function Product ({product}) {
    const {image, description} = product

    return( 
        <section className={style.wrapper}>
            <img src={image}/>
                <div className={style.desc} dangerouslySetInnerHTML={{__html: description}}/>
        </section>
    )
}