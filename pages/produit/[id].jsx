import axios from 'axios'
import Details from '../../components/produit/details/Details'
import Product from '../../components/produit/product/Product'

export default function Produit ({product}) {

    return (
        <div className='wrapping'>
            <div style={{display : "flex",justifyContent: "space-between", width: "100%"}}>
                <Product product={product}/>
                <Details details={product}/>
            </div>
        </div>
    )
}

export async function getServerSideProps (props) {

    const { params } = props
    const product = await axios.post(`http://localhost:3000/api/produit`, {
        id : params.id
    })
    .then(res => res.data)
    .catch(err => err)

    return {
        props: {
            product
        }
    }
}