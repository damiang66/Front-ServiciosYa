import styles from './views.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { UseRouter } from '../router/UseRouter'

function Home() {
  return (
    <>
      <Header />
      <UseRouter/>
      <Banner firstText={"Busca lo que necesites"} secondText={"Tenemos todo tipo de profesionales a tu dispocision"} />
      <Main />
      <Footer />
    </>
  )
}

export default Home