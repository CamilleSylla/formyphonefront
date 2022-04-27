import ProductCard from '../../global/productCard/ProductCard';
import style from './related.module.scss'

export default function Related ({articles}) {

    return (
        <div className={style.wrapper}>
            <h1 id={style.header}>Vous aimerez aussi :</h1>

            <ul>
                {articles.map((item, i) => {
                return <ProductCard key={item.attributes.name + i} id={item.id} data={item.attributes}/>
            })}
            </ul>
        </div>
    )

}