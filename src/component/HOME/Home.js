import HeaderOne from "./HeaderOne"
import SecOne from "./SecOne"
import SecTwo from "./SecTwo"
import SecThree from "./SecThree"
import SecFour from "./SecFour"
import SecFive from "./SecFive"
import SecSix from "./SecSix"
import Footer from "./Footer"
export default function Home(){
  return(
    <>
   
      <HeaderOne/>
      <SecOne/>
      <SecTwo/>
      <SecThree/>
      <SecFour/>
      <SecFive
        show1={true}
        show2={true}
        showImage={true}
      />
      <SecSix/>
      <Footer/>
    </>
  )
}