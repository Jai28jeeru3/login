import about1img from "../imge/about-a.gif"
import about2img from "../imge/about-b.svg"
const Aboutsite=()=>{
    return(
        <div style={{ background: 'linear-gradient(135deg, #FCF0FC 0%, #BBEBFA 100%)' }}>
            <div className="w-[90%] text-center m-auto h-auto">
                <p className="text-center text-4xl text-[#1e40af]  font-serif">Cheap Web Hosting Provider in India: Your Best Option for Affordable Web Hosting Services</p>
            <div className="m-auto w-[80%] ">
                <p className="  text-center  text-black text-md font-serif mt-3">A low price does not mean compromise in quality at SiteWorx. Get online with the best and cheap web hosting provider in India. We promise all the features your business needs to build a robust presence online!</p>
            </div>
            </div>
            <div className="mt-[100px]">
               <p className="text-4xl mb-10 text-center font-serif">Everything you need to know about SiteWorx</p>
            </div>
             <div className="flex flex-col m-auto w-[90%] sm:flex-row  font-sans ">
                  <div className="w-[100%] overflow-hidden sm:w-[50%]  h-[400px] md:h-[550px]">
                     <img src={about1img} alt="" className="w-full h-auto object-center " />
                  </div>
                  <div className="w-[100%]   sm:w-[50%]  h-auto md:h-[550px] ">
                    <p className="sm:mt-6 ml-[50px] sm:ml-0 ">At SiteWorx, we aspire to provide businesses with the greatest hosting solutions, including blazing-fast website performance, higher uptime and cutting-edge technologies to support their online success. Our team has been working on new ways to deliver faster performance in the most user-friendly layout.</p>
                    <p className="mt-8 ml-[50px] sm:ml-0">Our goal is to work on the 4 basic elements of hosting:</p>
                    <div>
                        <ul className="list-disc w-[360px] ml-[70px] sm:ml-4  mt-3 sm:mt-5 ">
                        <li className="pb-1">Uptime - Offer 24/7 available solution</li>
                        <li className="pb-1">Speed - Reduce down the time spent</li>
                        <li className="pb-1">Simplicity - Build user-friendly cPanel</li>
                        <li className="pb-1">Price - Keep the cost affordable for everyone</li>
                    </ul>
                    </div>
                  </div>
             </div>




             <div className="flex flex-col  sm:mt-[50px] w-[90%] m-auto sm:flex-row  font-sans ">
                  
                  <div className="w-[100%]  mt-[100px] sm:mt-0 sm:w-[50%]  h-[480px] md:h-[550px] ">
                    <p className="sm:mt-6  ml-[50px] sm:ml-0 ">Windows Shared hosting is a powerful yet affordable hosting option for businesses that have recently embarked on their online journey but want total control to customize their server. Choosing Windows OS enables you to install apps/plugins, control security and focus on enhancing the functionality of your business's website.</p>
                    <p className="mt-8 ml-[50px] sm:ml-0">Technology behind it.</p>
                    <div>
                        <ul className="list-disc w-[360px] ml-[70px] sm:ml-4  mt-3 sm:mt-5 ">
                        <li className="pb-1">Content Delivery Network (CDN)</li>
                        <li className="pb-1">Solid-State Drives (SSDs):</li>
                        <li className="pb-1">Server Caching</li>
                        <li className="pb-1">PHP and other softwares</li>
                        <li className="pb-1">Load balancing</li>
                    </ul>
                    </div>
                  </div>

                  <div className="w-[100%] overflow-hidden sm:w-[50%]  h-[400px] md:h-[550px]">
                     <img src={about2img} alt="" className="w-full h-auto object-center " />
                  </div>
             </div>
        </div>
    )
}
export default Aboutsite;