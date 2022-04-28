import axios from 'axios'
import Header from '../../components/global/Header'
import Details from '../../components/produit/details/Details'
import Product from '../../components/produit/product/Product'
import Related from '../../components/produit/related/Related'

export default function Produit ({product, finalRelatedProducts}) {

    return (
        <div className='wrapping'>
            <Header/>
            <main>
            <div style={{display : "flex",justifyContent: "space-between", width: "100%", padding: "5vh 0 5vh 0"}}>
                <Product product={product.data}/>
                <Details details={product.data}/>
            </div>
            {finalRelatedProducts.length ? (<Related articles={finalRelatedProducts}/>) : null} 
            </main>
        </div>
    )
}

export async function getServerSideProps (props) {

    let URL = process.env.NEXT_PUBLIC_API_PRODUCT + "/api/articles?populate=*"

    const { params } = props
    const product = await axios.get( process.env.NEXT_PUBLIC_API_PRODUCT + `/api/articles/${params.id}?populate=*`)
    .then(res => res.data)
    .catch(err => err)

    let finalRelatedProducts = []

    if (product.data.attributes.marques.data[0]) {
        const relatedBrand = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/articles?populate=*" + `&filters[$and][0][marques][name][$eq]=${product.data.attributes.marques.data[0].attributes.name}`)
        .then(res => res.data.data)
        .catch(err => err.data)
        finalRelatedProducts = relatedBrand.filter(el => {
            if (el.id !== product.data.id) {
                return el
            }
        })
    } 
    return {
        props: {
            product,
            finalRelatedProducts
        }
    }
}