import Header from "../components/global/Header";
import SignUp from "../components/inscription/signup/SignUp";

export default function Inscription () {

    return (
        <div>
            <Header/>
            <main>
                <div className="wrapping">
                    <div style={{padding: "5vh 0 5vh 0",display: "flex",alignItems: "center",justifyContent: "space-between", width: "100%"}}>
                        <img src="/assets/img/signup.svg" style={{width: "50%"}}/>
                        <SignUp/>
                    </div>
                </div>
            </main>
        </div>
    )
}