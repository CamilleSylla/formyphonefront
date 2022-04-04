import Header from "../../components/global/Header"
import Menu from "../../components/utilisateur/Menu/Menu"

export default function User ({id}) {
    return (
        <section>
            <Header/>
            <main>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(6, 1fr)",
                    gridTemplateRows: "1fr",
                    gridColumnGap: "0px",
                    gridRowGap: "0px",
                    }}>
                        <Menu/>
                </div>
            </main>
        </section>
    )
}

export async function getServerSideProps (props) {

    const {params} = props
    
    return {
        props : {
            id : params.id
        }
    }
}