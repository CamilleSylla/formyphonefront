import Header from "../components/global/Header";
import axios from 'axios'
import Listing from "../components/catalogue/listing/Listing";



export default function Catalogue ({products}) {

    return (
        <div>
            <Header/>
            <main>
                <Listing products={products}/>
            </main>
        </div>
    )
}
export async function getServerSideProps(props) {

    const { query } = props

    if (query.filter && query.filter === 'true') {
        let URL = process.env.NEXT_PUBLIC_API_PRODUCT + "/api/articles?populate=*"
        
        const removeFilterKey = delete query.filter
        const filters = query
        const keys = Object.keys(filters)

        const addFiltersUrl = keys.map(key => URL += `&filters[$and][0][${key}][name][$eq]=${filters[key]}`)
        
        const products = await axios.get(`${addFiltersUrl}`)
        .then(res => res.data.data)
        .catch(err => err.data)

        console.log(URL ,products);
        return {
          props: {
              products
          }, // will be passed to the page component as props
        }
    } else {

        const products = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + '/api/articles?populate=*')
        .then(res => res.data.data)
        .catch(err => err)
        return {
          props: {
              products
          }, // will be passed to the page component as props
        }
    }
  }