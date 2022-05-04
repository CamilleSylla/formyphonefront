import axios from "axios";
import Header from "../components/global/Header";
import Form from "../components/paiement/infos/form/Form";

export default function Paiement ({form}) {

    return (
        <div>
            <Header/>
            <main>
                <div style={{width : "60%", margin: "0 auto", padding: "5vh 0 5vh 0"}}>
                    <h1 style={{textTransform: "uppercase"}}>Paiement</h1>
                    <div style={{display: 'flex', paddingTop: "5vh"}}>

                    <Form form={form}/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps () {
    const form = {}

    const getCountries = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/countries?populate=*")
    .then(res => form.countries = res.data.data)
    .catch(err => err.data)

    return  {
        props : {
            form
        }
    }
}