import axios from 'axios';
import Header from '../components/global/Header'
import About from '../components/home/about/About'
import Banner from '../components/home/banner/Banner'
import CarouselBanner from '../components/home/carousel/CarouselBanner';
import Promo from '../components/home/promo/Promo'

export default function Home ({carousel}) {
  return (
    <div>
      <Header/>
      <main>
        <CarouselBanner thumbs = {carousel}/>
        <Banner/>
        <About/>
        <Promo/>
      </main>
    </div>
  )
}

export async function getServerSideProps () {

  const carousel = await axios.get(process.env.NEXT_PUBLIC_API_PRODUCT + "/api/carousels?populate=*")
  .then(res => res.data.data)
  .catch(err => err.data)

  return {
    props : {
      carousel
    }
  }
}
