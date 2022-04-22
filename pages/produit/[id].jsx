import axios from 'axios'
import Header from '../../components/global/Header'
import Details from '../../components/produit/details/Details'
import Product from '../../components/produit/product/Product'

export default function Produit ({product}) {

    return (
        <div className='wrapping'>
            <Header/>
            <main>
            <div style={{display : "flex",justifyContent: "space-between", width: "100%", padding: "5vh 0 5vh 0"}}>
                <Product product={product.data}/>
                <Details details={product.data}/>
            </div>
            </main>
        </div>
    )
}

export async function getServerSideProps (props) {

    const { params } = props
    const product = await axios.get( process.env.NEXT_PUBLIC_API_PRODUCT + `/api/articles/${params.id}?populate=*`)
    .then(res => res.data)
    .catch(err => err)

    return {
        props: {
            product
        }
    }
}