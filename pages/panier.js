import Header from "../components/global/Header";
import Items from "../components/panier/items/Items";
import Order from "../components/panier/order/Order";

export default function Panier () {

    return(
        <div>
            <Header/>
            <main>
                <div className="wrapping" style={{display: "flex", justifyContent: "space-between", padding: "5vh 0 5vh 0"}}>
                    <Items/>
                    <Order/>
                </div>
            </main>
        </div>
    )
}