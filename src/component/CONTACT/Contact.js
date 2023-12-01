import HeaderOne from "../HOME/HeaderOne"
import Footer from "../HOME/Footer"
import bg from './images/secone.png'
import SecOne from "../ABOUT/SecOne"
import SecTwo from "./SecTwo"
import SecThree from "./SecThree"
export default function Contact(){
  return(
    <>
      <HeaderOne/>
      <SecOne
        bgImage={bg}
        bgColor='rgb(20, 0, 12)'
        heading='Get In Contact With Us For Any Inquiry'
        spanText='Our platform provides in-depth guides, top-notch FAQ content, and other resources to ensure that all the necessary information is easily accessible.'
      />
      <SecTwo />
      <SecThree/>
      <Footer/>
    </>
  )
}