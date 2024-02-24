import HeroPage from "./components/Heropage/hero";
import Mainpage from "./components/Mainpage/mainpage";
import PricePage from "./components/Pricepage/pricePage";
import FormPage from "./components/Formpage/formpage";
import FaqPage from "./components/Faqpage/faqpage";
import OptimizePage from "./components/Optimizepage/optimizePage";
import Footer from "./components/Footer/footer";
import Data from "./data";
import PriceData from "./pricedata.js";

const App = () => {
  return (
    <div >
      <HeroPage />
      <Mainpage />
      <PricePage PriceData = {PriceData} />
      <FormPage />
      <FaqPage Data = {Data} />
      <OptimizePage />
      <Footer />
    </div>
  )
}

export default App;