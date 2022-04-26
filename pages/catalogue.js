import Header from "../components/global/Header";
import axios from 'axios'
import Listing from "../components/catalogue/listing/Listing";
import Filters from "../components/catalogue/filters/Filters";
import Promo from '../components/home/promo/Promo'


export default function Catalogue ({products, filtersMenu}) {

    return (
        <div>
            <Header/>
            <main>
                <Promo/>
                <div style={{display : "flex",padding: "5vh 0 5vh 0", width : "80%", margin : "0 auto", justifyContent : "space-between"}}>
                <Filters filtersMenu={filtersMenu}/>
                <Listing products={products}/>
                </div>
            </main>
        </div>
    )
}
export async function getServerSideProps(props) {

    const { query } = props

    const filtersMenu = {}

    const categoriesMenu = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/categories?populate=*")
    .then(res => filtersMenu.categories = res.data.data)
    .catch(err => console.log(err.data))
    const sousCategoriesMenu = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/souscategories?populate=*")
    .then(res => filtersMenu.souscategorie = res.data.data)
    .catch(err => console.log(err.data))
    const brandMenu = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/marques?populate=*")
    .then(res => filtersMenu.marques = res.data.data)
    .catch(err => console.log(err.data))
    const productMenu = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/modeles?populate=*")
    .then(res => filtersMenu.produits = res.data.data)
    .catch(err => console.log(err.data))

    if (query.filter && query.filter === 'true') {
        let URL = process.env.NEXT_PUBLIC_API_PRODUCT + "/api/articles?populate=*"
        
        const removeFilterKey = delete query.filter
        const filters = query
        const keys = Object.keys(filters)

        const addFiltersUrl = keys.map(key => URL += `&filters[$and][0][${key}][name][$eq]=${filters[key]}`)
        console.log(addFiltersUrl[addFiltersUrl.length - 1]);
        const products = await axios.get(`${addFiltersUrl[addFiltersUrl.length - 1]}`)
        .then(res => res.data.data)
        .catch(err => err.data)
        return {
          props: {
              products,
              filtersMenu
          }, // will be passed to the page component as props
        }
    } else {

        const products = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + '/api/articles?populate=*')
        .then(res => res.data.data)
        .catch(err => err)
        return {
          props: {
              products,
              filtersMenu
          }, // will be passed to the page component as props
        }
    }
  }