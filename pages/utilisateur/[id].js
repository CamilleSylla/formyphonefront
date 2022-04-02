import Header from "../../components/global/Header"

export default function User ({id}) {
    return (
        <section>
            <Header/>
            <main>
            {id}
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