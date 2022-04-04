import Header from '../components/global/Header'
import About from '../components/home/about/About'
import Banner from '../components/home/banner/Banner'
import Promo from '../components/home/promo/Promo'

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <Banner/>
        <About/>
        <Promo/>
      </main>
    </div>
  )
}
