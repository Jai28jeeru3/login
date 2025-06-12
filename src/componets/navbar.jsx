import React, { useState } from "react";
import { Link } from "react-router-dom";
import siteworex from "../imge/siteworex.png";
import LOGIN from "./login.jsx";
import Sign from "./signin.jsx";
import TwoStepSignup from "./twostep.jsx";

const Sitenav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clientDropdownOpen, setClientDropdownOpen] = useState(false);
  const [clientForm, setClientForm] = useState(null);

  return (
   <div className="h-[50px]  w-[100%] m-auto ">
     <nav className="bg-white  shadow-md bg-opacity-50 backdrop-blur-sm fixed-top w-[100%] m-auto ">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Brand */}
          <div className="flex float-left">
            
            <Link className="text-2xl font-bold text-blue-600">
             <button>
                <img src={siteworex} className="h-[45px] w-[160px] rounded-lg" alt="" />
             </button>
            </Link>
            {/* Email next to logo */}
            <a href="mailto:info@siteworx.in" className="ml-10 text-blue-900 font-semibold hidden md:inline hover:underline focus:outline-none px-3 py-1 rounded transition-colors" style={{ cursor: 'pointer', background: 'none' }}>info@siteworx.in</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-normal ml-48 items-center ">
            <Link className="text-black hover:text-blue-600" to="/">
              DOMAINS 
            </Link>
            <Link className="text-black hover:text-blue-600" to="/about">
              HOSTING
            </Link>
            <Link className="text-black hover:text-blue-600" to="/services">
              SERVERS
            </Link>
            <Link className="text-black hover:text-blue-600" to="/contact">
              EMAIL MARKETING
            </Link>

             <Link className="text-black hover:text-blue-600" to="/">
              GOOGLE WORKSPACE
            </Link>
            <Link className="text-black hover:text-blue-600" to="/about">
              LICENSE
            </Link>
            <Link className="text-black hover:text-blue-600" to="/services">
              SUPPORT
            </Link>
            <Link className="text-black hover:text-blue-600" to="/contact">
              ABOUT
            </Link>
            <div className="relative group" style={{ position: 'absolute', right: 0 }}>
              <button
                className="flex items-center gap-1 px-3 py-1 rounded hover:bg-blue-100 transition-colors focus:outline-none border border-blue-100 text-black font-semibold"
                onClick={() => setClientDropdownOpen(v => !v)}
                aria-haspopup="true"
                aria-expanded={clientDropdownOpen}
                type="button"
                id="clientAreaDropdownBtnDesktop"
              >
                Client Area
                <svg className={`ml-1 transition-transform duration-200 ${clientDropdownOpen ? 'rotate-180' : ''}`} width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#1e40af" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {clientDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded shadow-lg border border-blue-100 z-50 animate-fadeIn p-4">
                  <div className="flex gap-2 mb-2">
                    <button onClick={() => setClientForm('login')} className={`flex-1 px-2 py-1 rounded ${clientForm === 'login' ? 'bg-blue-200' : 'bg-blue-50'} hover:bg-blue-100 text-black font-semibold`}>Login</button>
                    <button onClick={() => setClientForm('signin')} className={`flex-1 px-2 py-1 rounded ${clientForm === 'signin' ? 'bg-blue-200' : 'bg-blue-50'} hover:bg-blue-100 text-black font-semibold`}>Sign Up</button>
                  </div>
                  {clientForm === 'login' && (
                    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60 w-screen h-screen left-0 top-0 overflow-auto" style={{ minHeight: '100vh', minWidth: '100vw' }}>
                      <div className="bg-white rounded-lg shadow-lg p-8 relative w-full max-w-md mx-auto flex flex-col items-center justify-center" style={{ maxHeight: '90vh', overflowY: 'auto', color: 'black' }}>
                        <button onClick={() => { setClientForm(null); setClientDropdownOpen(false); }} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold">&times;</button>
                        <LOGIN />
                      </div>
                    </div>
                  )}
                  {clientForm === 'signin' && (
                    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60 w-screen h-screen left-0 top-0 overflow-auto" style={{ minHeight: '100vh', minWidth: '100vw' }}>
                      <div className="bg-white rounded-lg shadow-lg p-8 relative w-full max-w-md mx-auto flex flex-col items-center justify-center" style={{ maxHeight: '90vh', overflowY: 'auto', color: 'black' }}>
                        <button onClick={() => { setClientForm(null); setClientDropdownOpen(false); }} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold">&times;</button>
                        <Sign />
                      </div>
                    </div>
                  )}
                  {!clientForm && (
                    <div className="text-black text-center">Select an option above</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex flex-col gap-2">
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black focus:outline-none ml-[230px] flex items-center"
              >
                <svg
                  className="h-6 w-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Dropdown arrow */}
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="#1e40af"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg border border-blue-100 z-50 animate-fadeIn">
                  <div className="px-4 py-2 text-black border-b border-blue-50">info@siteworx.in</div>
                  <Link className="block px-4 py-2 text-black hover:text-blue-600" to="/">Home</Link>
                  <Link className="block px-4 py-2 text-black hover:text-blue-600" to="/about">About</Link>
                  <Link className="block px-4 py-2 text-black hover:text-blue-600" to="/services">Services</Link>
                  <Link className="block px-4 py-2 text-black hover:text-blue-600" to="/contact">Contact</Link>
                </div>
              )}
            </div>
            {/* New Client Area Dropdown */}
            <div className="relative">
              <button
                onClick={() => setClientDropdownOpen(v => !v)}
                className="flex items-center gap-1 px-3 py-1 rounded hover:bg-blue-100 transition-colors focus:outline-none border border-blue-100 text-black font-semibold w-full justify-between"
                aria-haspopup="true"
                aria-expanded={clientDropdownOpen}
                type="button"
                id="clientAreaDropdownBtn"
              >
                Client Area
                <svg className={`ml-1 transition-transform duration-200 ${clientDropdownOpen ? 'rotate-180' : ''}`} width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#1e40af" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              {clientDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded shadow-lg border border-blue-100 z-50 animate-fadeIn p-4">
                  <div className="flex gap-2 mb-2">
                    <button onClick={() => setClientForm('login')} className="flex-1 px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 text-black font-semibold">Login</button>
                    <button onClick={() => setClientForm('signin')} className="flex-1 px-2 py-1 rounded bg-blue-50 hover:bg-blue-100 text-black font-semibold">Sign Up</button>
                  </div>
                  {clientForm === 'login' && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 w-screen h-screen left-0 top-0 overflow-auto" style={{ minHeight: '100vh', minWidth: '100vw' }}>
                      <div className="bg-white rounded-lg shadow-lg p-8 relative w-full max-w-md mx-auto flex flex-col items-center justify-center" style={{ maxHeight: '90vh', overflowY: 'auto', color: 'black' }}>
                        <button onClick={() => { setClientForm(null); setClientDropdownOpen(false); }} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold">&times;</button>
                        <LOGIN />
                      </div>
                    </div>
                  )}
                  {clientForm === 'signin' && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 w-screen h-screen left-0 top-0 overflow-auto" style={{ minHeight: '100vh', minWidth: '100vw' }}>
                      <div className="bg-white rounded-lg shadow-lg p-8 relative w-full max-w-md mx-auto flex flex-col items-center justify-center" style={{ maxHeight: '90vh', overflowY: 'auto', color: 'black' }}>
                        <button onClick={() => { setClientForm(null); setClientDropdownOpen(false); }} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold">&times;</button>
                        <Sign />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } px-4 pb-4 transition-all duration-300`}
      >

        <Link className="block py-2 text-black hover:text-blue-600" to="/">Home</Link>
        <Link className="block py-2 text-black hover:text-blue-600" to="/about">About</Link>
        <Link className="block py-2 text-black hover:text-blue-600" to="/services">Services</Link>
        <Link className="block py-2 text-black hover:text-blue-600" to="/contact">Contact</Link>
      </div>
    </nav>

  


   </div>
   
  );
};

export default Sitenav;
