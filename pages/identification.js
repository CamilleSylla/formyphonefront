import Header from "../components/global/Header";
import Login from "../components/identification/login/Login";
import SignUp from "../components/identification/signup/SignUp";

export default function Inscription () {

    return (
        <div>
            <Header/>
            <main>
                    <div style={{ height: "90vh" ,display: "flex",alignItems: "center",justifyContent: "space-between", width: "100%"}}>
                        <SignUp/>
                        <Login/>
                    </div>
            </main>
        </div>
    )
}