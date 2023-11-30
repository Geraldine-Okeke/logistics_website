import HeaderOne from "../HOME/HeaderOne"
import Footer from "../HOME/Footer"
import SecOne from "../ABOUT/SecOne"
import bg from './images/secone.png'
import SecFive from "../HOME/SecFive"
export default function Help(){
  return(
    <>
    <HeaderOne/>
    <SecOne
        bgImage={bg}
        bgColor='rgb(0, 128, 128)'
        heading='FAQ'
        spanText='At Oltem Logistics, we take pride in offering exceptional customer support. Our website is designed with comprehensive guides, helpful resources, and expert support to ensure that all the information you need is readily available.'
      />
    <SecFive
      showImage={true}
    />
    <Footer/>
    </>
  )
}