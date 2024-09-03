import Header from '../components/Header'
import Banner from '../components/Banner'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { UseRouter } from '../router/UseRouter'

export const Home = () => {
  return (
    <>
      <Header />
      {/* <UseRouter/> */}
      <Banner firstText={"Busca lo que necesites"} secondText={"Tenemos todo tipo de profesionales a tu dispocision"} />
      <Main />
      <Footer />
    </>
  )
}
