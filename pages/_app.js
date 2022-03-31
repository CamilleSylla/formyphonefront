import Nav from '../components/global/nav/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nav/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
