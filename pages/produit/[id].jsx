import axios from 'axios'
import Header from '../../components/global/Header'
import Details from '../../components/produit/details/Details'
import Product from '../../components/produit/product/Product'
import Related from '../../components/produit/related/Related'

export default function Produit ({product}) {
    console.log(product);

    return (
        <div className='wrapping'>
            <Header/>
            <main>
            <div style={{display : "flex",justifyContent: "space-between", width: "100%", padding: "5vh 0 5vh 0"}}>
                <Product product={product.data}/>
                <Details details={product.data}/>
            </div>
                <Related/>
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

    const relatedReqKeys = ["category", "souscategory"]
    const addFiltersUrl = relatedReqKeys.map(key => `&filters[$and][0][${key}][name][$eq]=${product.data.attributes[key].data.attributes.name}`)
    
    const getRelatedProducts = async () => addFiltersUrl.map( el => {
        const getPackage = axios.get(`${URL + el}`)
        .then(res => res.data)
        .catch(err => err)
        return getPackage
    })

    console.log(getRelatedProducts());

    return {
        props: {
            product
        }
    }
}