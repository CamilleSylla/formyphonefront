import ProductCard from '../../global/productCard/ProductCard'
import style from './listing.module.scss'

export default function Listing ({products}) {

    return (
        <div className='wrapping'>
        <section className={style.wrapper}>
            {products.map((item, i) => {
                return <ProductCard key={item.attributes.name + i} id={item.id} data={item.attributes}/>
            })}
        </section>
        </div>
    )
}