import Aboutsite from "./aboutsiteworex";
import Barnav from "./Counter";
import FAQSection from "./faq";
import Filebox from "./file";
import Footer from "./footer";
import SiteWorxFeaturesSection from "./m";
import Sliderui from "./mand";
import Mypr from "./mypr";
import Sitenav from "./navbar";
import Navtop from "./navtop";
import MyCarousel from "./vot";


const Siteworex=()=>{
    return(
        <div className="h-auto w-full  bg-cover bg-no-repeat">
        <Navtop />
         <Sitenav/>
         <MyCarousel/>
         <Aboutsite/>
         <Mypr/>
         <SiteWorxFeaturesSection/>
         <Filebox/>
         <Sliderui/>
         <FAQSection/>
         <Footer/>
        </div>
    )
}
export default Siteworex;