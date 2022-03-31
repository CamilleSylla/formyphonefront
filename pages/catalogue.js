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

    const products = await axios.get('http://localhost:3000/api/allproduct')
    .then(res => res.data)
    return {
      props: {
          products
      }, // will be passed to the page component as props
    }
  }