import { useRef, useState } from "react";
import Switch from "react-switch"
/* Option 2: Import via CSS */

const Mypr=()=>{
  
    const [cheked,setCheked]=  useState(false)
    const [ulone,setulone]= useState("1 Cpanel account")
    const [ultwo,setultwo]= useState("5 Cpanel accounts")
    const [ulthree,setulthree]= useState("10 Cpanel accounts")
    const [ulfour,setulfour]= useState("Unlimited Cpanel")
    function handle(){
      setCheked(!cheked)
      if(cheked){
        setulone("1 Cpanel account")
        setultwo("5 Cpanel accounts")
        setulthree("10 Cpanel accounts")
        setulfour("Unlimited Cpanel")
      }else{
        setulone("1 Plesk account")
        setultwo("5 Plesk accounts")
        setulthree("10 Plesk accounts")
        setulfour("Unlimited Plesk")
      }
      
    }
    return(
        <div className="mt-10" style={{ background: 'linear-gradient(135deg, #FCF0FC 0%, #BBEBFA 100%)', borderRadius: '24px', overflow: 'hidden' }}>
        <div className="mt-4 h-[250px]" style={{ borderRadius: '20px' }}>
             <p className="text-center text-5xl text-[#115256] font-serif ">India's Best Hosting Provider</p>
             <p className="text-center text-[#096D72] text-md font-serif mt-3">Select Your</p>
             <p className="text-center text-[#1A1C26] text-4xl font-serif mt-3">Hosting Plan</p>

               <div className="flex justify-center mb-10 md:mb-0 mt-10 sm:mb-0 md:mt-10  items-center  md:gap-6">
                  <button className="bg-[#BBEBFA] text-blue md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4 ">Shared Hosting</button>
                  <button className="bg-[#BBEBFA] text-blue md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4">Reseller Hosting</button>
                  <button className="bg-[#BBEBFA] text-blue md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4">Cloud Hosting</button>
                  <button className="bg-[#BBEBFA] text-blue md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4">VPS Hosting</button>
                  
               </div>
          </div>
           <div className="text-center justify-center items-center flex h-[60px]">
              <h1 className="text-2xl text-[#707070] font-mono font-semibold p-5" >Linux</h1>
              <div className="h-[20px]">
          <Switch className="bg-gray-500"
            value={cheked}
            checked={cheked}
            onChange={handle}
            onColor="#1e40af" // blue when switched on
            offColor="#d1d5db" // gray when off
            handleDiameter={22}
            uncheckedIcon={false}
            checkedIcon={false}
            activeBoxShadow="0 0 2px 3px #1e40af55"
          />  
        </div>
        <h1 className="text-2xl text-[#707070] font-mono font-semibold p-5">Windows</h1>
           </div>
           <hr style={{ borderColor: cheked ? '#1e40af' : '#e5e7eb', borderWidth: 3, transition: 'border-color 0.3s' }} />

     <div className="flex justify-center flex-wrap  items-center gap-7 mt-10 ">
<div className="px-2 py-2 shadow-2xl rounded-lg overflow-hidden w-[270px] h-[36%] text-center border" style={{ borderRadius: '20px' }}>
   
    <div className="font-bold text-xl mb-2 h-[170px]   bg-[#1E3C72] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Beginner Plan</span>
  <p className="font-normal text-[#87ADAF] text-sm font-serif">Start from</p>
  <h1 className="text-2xl text-white">INR 161 <span className="text-sm ">p/mo</span></h1></div>
   <div className="bg-white bottom text-left">
     <ul>
        
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>1 Website</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>{ulone}</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>2 GB Storage</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>5   GB  Bandwidth  </li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>5  Email Accounts</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>  Sub <br />  <span className="ml-8">Domains</span></li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>1 Myaql <br />  <span className="ml-8">Database</span></li>
        
    </ul>
   </div>
    <div class="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#9CE5F0] h-[100px]">
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>
  
<div className="px-2 py-2 shadow-2xl rounded-lg overflow-hidden w-[270px] h-[36%] text-center border" style={{ borderRadius: '20px' }}>
   
    <div className="font-bold text-xl mb-2 h-[170px]  bg-[#1E3C72] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Beginner Plan</span>
  <p className="font-normal text-[#87ADAF] text-sm font-serif">Start from</p>
  <h1 className="text-2xl text-white">INR 221 <span className="text-sm ">p/mo</span></h1></div>
   <div className="bg-white bottom text-left">
     <ul>
        
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>5 Website</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>{ultwo}</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>5 GB Storage</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Bandwidth</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Email <span className="ml-8">Accounts</span></li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Sub Domains</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Mysql  <span className="ml-8">Database</span></li>
        
    </ul>
   </div>
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#BBEBFA] h-[100px]">
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>

  <div className="px-2 py-2  shadow-2xl rounded-lg overflow-hidden w-[270px] h-[36%] text-center border" style={{ borderRadius: '20px' }}>
   
    <div className="font-bold text-xl mb-2 h-[170px]  bg-[#1E3C72] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Traffic Plan</span>
  <p className="font-normal text-[#87ADAF] text-sm font-serif">Start from</p>
  <h1 className="text-2xl text-white">INR 311 <span className="text-sm ">p/mo</span></h1></div>
   <div className="bg-white bottom text-left">
     <ul>
        
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>10 Websites</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>{ulthree}</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>10 GB Storage</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Bandwidth</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Email <span className="ml-8">Accounts</span></li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Sub Domains</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Mysql  <span className="ml-8">Database</span></li>
        
    </ul>
   </div>
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#9CE5F0] h-[100px]">
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>

  <div className="px-2 py-2 shadow-2xl rounded-lg overflow-hidden w-[270px] h-[36%] text-center border" style={{ borderRadius: '20px' }}>
   
    <div className="font-bold text-xl mb-2 h-[170px]  bg-[#1E3C72] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Standard Plan</span>
  <p className="font-normal text-[#87ADAF] text-sm font-serif">Start from</p>
  <h1 className="text-2xl text-white">INR 521 <span className="text-sm ">p/mo</span></h1></div>
   <div className="bg-white bottom text-left">
     <ul>
        
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Websites</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>{ulfour}</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>20 GB Storage</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i> Unlimited Bandwidth</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Email  <span className="ml-8">Accounts</span></li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Sub Domains</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Mysql <span className="ml-8">Database</span></li>
        
    </ul>
   </div>
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#9CE5F0] h-[100px]">
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>

  
 

 
     </div>


    </div>

        
    )
}
export default Mypr;