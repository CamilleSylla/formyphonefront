import style from './product.module.scss'

export default function Product ({product}) {
    const {image, desc, galerie} = product.attributes
    const gallery = galerie.data ? [...galerie.data, image.data] : [image.data]
    return( 
        <section className={style.wrapper}>
            <img src={process.env.NEXT_PUBLIC_API_PRODUCT + gallery[gallery.length - 1].attributes.url}/>
                <div className={style.desc} dangerouslySetInnerHTML={{__html: desc}}/>
        </section>
    )
} 