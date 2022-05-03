import Header from "../components/global/Header";
import axios from "axios";
import Listing from "../components/catalogue/listing/Listing";
import Filters from "../components/catalogue/filters/Filters";
import Promo from "../components/home/promo/Promo";
import qs from "qs";

export default function Catalogue({ products, filtersMenu}) {
  return (
    <div>
      <Header />
      <main>
        <Promo />
        <div
          style={{
            display: "flex",
            padding: "5vh 0 5vh 0",
            width: "80%",
            margin: "0 auto",
            justifyContent: "space-between",
          }}
        >
          <Filters filtersMenu={filtersMenu} />
          <Listing products={products} />
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps(props) {
  const userQuery = props.query;

  const filtersMenu = {};

  const keys = Object.keys(userQuery);

  let products;

  if (keys.length) {
    const res = keys.map((key) => {
      return { $or: [{ [key]: { name: { $eq: [userQuery[key]] } } }] };
    });

    const newQS = res.map((el) => {
      const filters = el;
      const query = qs.stringify(
        { filters },
        {
          encodeValuesOnly: true, // prettify url
        }
      );
      return query;
    });

    let finalQuery = process.env.NEXT_PUBLIC_API_PRODUCT;

    const createQuery = newQS.map((params, i) => {
      finalQuery += `${i == 0 ? "/api/articles?populate=*&" : "&"}${params}`;
      return params
    });

    const getFilteredItems = await axios
      .get(finalQuery)
      .then((res) => res.data.data)
      .catch((err) => err.data);

    products = getFilteredItems;
  } else {
    const getAllItems = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/articles?populate=*")
    .then((res) => res.data.data)
      .catch((err) => err.data);

    products = getAllItems;
  }

  const categoriesMenu = await axios
    .get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/categories?populate=*")
    .then((res) => (filtersMenu.categories = res.data.data))
    .catch((err) => console.log(err.data));
  const sousCategoriesMenu = await axios
    .get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/souscategories?populate=*")
    .then((res) => (filtersMenu.souscategorie = res.data.data))
    .catch((err) => console.log(err.data));
  const brandMenu = await axios
    .get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/marques?populate=*")
    .then((res) => (filtersMenu.marques = res.data.data))
    .catch((err) => console.log(err.data));
  const productMenu = await axios
    .get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/modeles?populate=*")
    .then((res) => (filtersMenu.produits = res.data.data))
    .catch((err) => console.log(err.data));

  return {
    props: {
      products,
      filtersMenu,
    },
  };
}
