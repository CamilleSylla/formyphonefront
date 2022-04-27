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

    const relatedReqKeys = ["category", "souscategory"]
    const addFiltersUrl = relatedReqKeys.map(key => `&filters[$and][0][${key}][name][$eq]=${product.data.attributes[key].data.attributes.name}`)
    
    let getRelatedProducts = addFiltersUrl.map(el => axios.get(`${URL + el}`).then(res => res.data.data))
    getRelatedProducts = await Promise.all(getRelatedProducts)
    const relatedProducts = [].concat.apply([], getRelatedProducts)
    const removeOccurency = relatedProducts.filter(e => relatedProducts.indexOf(e) == relatedProducts.lastIndexOf(e))
    const relatedProductsIDs = relatedProducts.map(el => {return el.id})
    const uniqueProductsID = [...new Set(relatedProductsIDs)]
    const index = uniqueProductsID.indexOf(product.data.id);
    if (index > -1) {
        uniqueProductsID.splice(index, 1)
    }
    let finalRelatedProducts = uniqueProductsID.map(id => axios.get(process.env.NEXT_PUBLIC_API_PRODUCT +"/api/articles/"+ id +"?populate=*").then(res => res.data.data))
    finalRelatedProducts = await Promise.all(finalRelatedProducts)
    return {
        props: {
            product,
            finalRelatedProducts
        }
    }
}