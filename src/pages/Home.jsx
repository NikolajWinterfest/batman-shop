import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutUsSection'
import ShopSection from '../components/ShopSection'
import FeedbackSection from '../components/FeedbackSection'
import './Home.css'
import ModalWindow from '../components/ModalWindow'

const Home = ({ products }) => {
  return (
    <main className="main">
      <ModalWindow />
      <HeroSection />
      <AboutUsSection />
      <ShopSection products={products} />
      <FeedbackSection />
    </main>
  )
}

export default Home
