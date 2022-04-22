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
export async function getServerSideProps(context) {

    const products = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + '/api/articles?populate=*')
    .then(res => res.data.data)
    return {
      props: {
          products
      }, // will be passed to the page component as props
    }
  }