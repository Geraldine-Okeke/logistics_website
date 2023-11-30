import HeaderOne from "../HOME/HeaderOne"
import SecOne from "./SecOne"
import SecTwo from "./SecTwo"
import SecThree from "./SecThree"
import SecFour from "./SecFour"
import Footer from "../HOME/Footer"
import bg from './images/secone.png'
export default function About(){
  return(
    <>
      <HeaderOne/>
      <SecOne
        bgImage={bg}
        bgColor='rgb(100, 3, 129)'
        heading='We Are Global Logistic Provider'
        spanText='Universal parcel tracking to track your package from UPS, FedEx, DHL, USPS, China Post, and more.'
      />
      <SecTwo/>
      <SecThree/>
      <SecFour/>
      <Footer/>
      
    </>
  )
}