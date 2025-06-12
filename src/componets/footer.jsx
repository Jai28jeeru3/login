import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import siteworex from "../imge/siteworex.png"

const Footer = () => {
  return (
    <footer className="py-12 px-6" style={{ background: '#1e40af', color: '#fff', fontSize: '17px', borderRadius: '24px' }}>
      <div className="max-w-7xl mx-auto" style={{ borderRadius: '20px', overflow: 'hidden' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ borderRadius: '20px' }}>
          {/* Company Info Section */}
          <div className="lg:col-span-1" style={{ borderRadius: '18px', background: 'rgba(255,255,255,0.03)', padding: 8 }}>
            <div className="flex items-center mb-6" style={{ borderRadius: '12px', background: 'white', padding: 4 }}>
              <div className="bg-white rounded-lg p-2 mr-3">
                  <img src={siteworex} className="h-[40px] w-[150px] rounded-lg" alt="" />
              </div>
            </div>
            
            <p className="mb-6 leading-relaxed" style={{ color: '#fff', fontSize: '17px' }}>
              Siteworx offers the complete solution for online businesses including Domain Registration, Web Designing, Web Development, App Development, Software Development, MLM Software Development, Web Hosting, VPS Server, Dedicated Server, Email Marketing Server, Business Email, cPanel Licenses Etc. Working 24/7 at your service.
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3" style={{ color: '#FCF0FC' }}>Payments We Accept</h4>
              <div className="flex space-x-2">
                <button style={{ background: '#ED4C2C', color: '#fff', padding: '6px 18px', borderRadius: 8, fontWeight: 600, fontSize: 15, border: 'none', outline: 'none', display: 'flex', alignItems: 'center', boxShadow: '0 2px 8px #ed4c2c22', cursor: 'pointer', borderRadius: '12px' }}>MasterCard</button>
                <button style={{ background: '#005BAA', color: '#fff', padding: '6px 18px', borderRadius: 8, fontWeight: 600, fontSize: 15, border: 'none', outline: 'none', display: 'flex', alignItems: 'center', boxShadow: '0 2px 8px #005baa22', cursor: 'pointer', borderRadius: '12px' }}>RuPay</button>
                <button style={{ background: '#003087', color: '#fff', padding: '6px 18px', borderRadius: 8, fontWeight: 600, fontSize: 15, border: 'none', outline: 'none', display: 'flex', alignItems: 'center', boxShadow: '0 2px 8px #00308722', cursor: 'pointer', borderRadius: '12px' }}>PayPal</button>
                <button style={{ background: '#FF671F', color: '#fff', padding: '6px 18px', borderRadius: 8, fontWeight: 600, fontSize: 15, border: 'none', outline: 'none', display: 'flex', alignItems: 'center', boxShadow: '0 2px 8px #ff671f22', cursor: 'pointer', borderRadius: '12px' }}>UPI</button>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div style={{ marginLeft: 80 }}>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide" style={{ color: '#FCF0FC' }}>
              Services
            </h3>
            <ul className="space-y-3">
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Dedicated Hosting</a></li>
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Email Marketing Server</a></li>
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Cloud Hosting</a></li>
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">VPS</a></li>
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Reseller Hosting</a></li>
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Shared Hosting</a></li>
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Java Hosting</a></li>
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">CMS Hosting</a></li>
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Ecommerce Hosting</a></li>
            </ul>
          </div>

          {/* Products Section */}
          <div style={{ marginLeft: 80 }}>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide" style={{ color: '#FCF0FC' }}>
              Products
            </h3>
            <ul className="space-y-3">
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Google Workspace</a></li>
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Licenses</a></li>
            </ul>

            <h3 className="text-lg font-semibold mb-6 mt-8 uppercase tracking-wide" style={{ color: '#FCF0FC' }}>
              Legal
            </h3>
            <ul className="space-y-3">
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Privacy policy</a></li>
              <li><a href="#" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">Refund policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide" style={{ color: '#FCF0FC' }}>
              Contact - Us
            </h3>
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 mr-3" style={{ color: '#FCF0FC' }} />
              <a href="mailto:info@siteworx.in" style={{ color: '#fff' }} className="hover:text-blue-700 transition-colors">
                info@siteworx.in
              </a>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ background: '#25D366', borderRadius: '50%', padding: 8, display: 'flex', alignItems: 'center' }}>
                <svg width="22" height="22" fill="#fff" viewBox="0 0 32 32"><path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41l-1.84 6.73 6.9-1.81c1.87 1.02 3.98 1.56 6.01 1.56h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm6.97 18.77c-.29.81-1.7 1.59-2.34 1.7-.6.11-1.36.16-2.19-.14-.5-.17-1.14-.37-1.97-.73-3.47-1.5-5.74-5.01-5.91-5.25-.17-.23-1.41-1.87-1.41-3.57 0-1.7.9-2.54 1.22-2.89.32-.35.7-.44.93-.44.23 0 .46.01.66.01.21 0 .5-.08.78.6.29.7.99 2.41 1.08 2.59.09.18.15.4.03.64-.12.23-.18.37-.36.57-.18.2-.38.44-.54.59-.18.18-.37.37-.16.72.21.35.93 1.53 2.01 2.48 1.38 1.23 2.54 1.62 2.89 1.8.35.18.55.15.75-.09.2-.23.86-.99 1.09-1.33.23-.35.46-.29.78-.17.32.12 2.04.96 2.39 1.13.35.17.58.26.66.41.08.15.08.87-.21 1.68z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/siteworx" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ background: '#0077b5', borderRadius: '50%', padding: 8, display: 'flex', alignItems: 'center' }}>
                <svg width="22" height="22" fill="#fff" viewBox="0 0 32 32"><path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zm-19.5 27h-4v-13h4v13zm-2-14.5c-1.28 0-2.25-1.02-2.25-2.25 0-1.23.97-2.25 2.25-2.25s2.25 1.02 2.25 2.25c0 1.23-.97 2.25-2.25 2.25zm19.5 14.5h-4v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43v6.61h-4v-13h3.84v1.78h.05c.54-1.02 1.86-2.09 3.83-2.09 4.1 0 4.86 2.7 4.86 6.22v7.09z"/></svg>
              </a>
              <a href="https://www.instagram.com/siteworx" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', borderRadius: '50%', padding: 8, display: 'flex', alignItems: 'center' }}>
                <svg width="22" height="22" fill="#fff" viewBox="0 0 32 32"><path d="M16 7.6c2.3 0 2.6 0 3.5.1.9.1 1.4.2 1.7.4.4.2.7.4 1 .7.3.3.5.6.7 1 .2.3.3.8.4 1.7.1.9.1 1.2.1 3.5s0 2.6-.1 3.5c-.1.9-.2 1.4-.4 1.7-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.3.2-.8.3-1.7.4-.9.1-1.2.1-3.5.1s-2.6 0-3.5-.1c-.9-.1-1.4-.2-1.7-.4-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.2-.3-.3-.8-.4-1.7-.1-.9-.1-1.2-.1-3.5s0-2.6.1-3.5c.1-.9.2-1.4.4-1.7.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.3-.2.8-.3 1.7-.4.9-.1 1.2-.1 3.5-.1zm0-2.6c-2.4 0-2.7 0-3.6.1-1 .1-1.7.2-2.3.5-.6.2-1.1.5-1.6 1-.5.5-.8 1-1 1.6-.3.6-.4 1.3-.5 2.3-.1.9-.1 1.2-.1 3.6s0 2.7.1 3.6c.1 1 .2 1.7.5 2.3.2.6.5 1.1 1 1.6.5.5 1 0.8 1.6 1 .6.3 1.3.4 2.3.5.9.1 1.2.1 3.6.1s2.7 0 3.6-.1c1-.1 1.7-.2 2.3-.5.6-.2 1.1-.5 1.6-1 .5-.5.8-1 1-1.6.3-.6.4-1.3.5-2.3.1-.9.1-1.2.1-3.6s0-2.7-.1-3.6c-.1-1-.2-1.7-.5-2.3-.2-.6-.5-1.1-1-1.6-.5-.5-1-0.8-1.6-1-.6-.3-1.3-.4-2.3-.5-.9-.1-1.2-.1-3.6-.1zm0 4.4c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm0 9.2c-2 0-3.6-1.6-3.6-3.6s1.6-3.6 3.6-3.6 3.6 1.6 3.6 3.6-1.6 3.6-3.6 3.6zm7.2-9.4c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3.6-1.3 1.3-1.3 1.3.6 1.3 1.3zm-2.2 9.4c0 2.9-2.3 5.2-5.2 5.2s-5.2-2.3-5.2-5.2 2.3-5.2 5.2-5.2 5.2 2.3 5.2 5.2z"/></svg>
              </a>
              <a href="https://www.pinterest.com/siteworx" target="_blank" rel="noopener noreferrer" title="Pinterest" style={{ background: '#E60023', borderRadius: '50%', padding: 8, display: 'flex', alignItems: 'center' }}>
                <svg width="22" height="22" fill="#fff" viewBox="0 0 32 32"><path d="M16 2.9c-7.2 0-13.1 5.9-13.1 13.1 0 5.2 3.1 9.6 7.6 11.6-.1-.9-.2-2.3 0-3.3.2-.9 1.3-5.7 1.3-5.7s-.3-.7-.3-1.7c0-1.6.9-2.8 2-2.8.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.4-.3 1 .6 1.8 1.6 1.8 1.9 0 3.3-2 3.3-4.8 0-2-1.4-3.4-3.5-3.4-2.4 0-3.8 1.8-3.8 3.7 0 .7.3 1.5.7 1.9.1.1.1.2.1.3-.1.4-.2 1.2-.1 1.4.1.2.2.2.5.1.6-.2.8-.6 1.2-1.2.2-.3.3-.6.5-.9.2.3.7.6 1.3.6 1.7 0 2.9-1.6 2.9-3.7 0-1.6-1.1-2.7-2.7-2.7-1.9 0-3.1 1.5-3.1 3.1 0 .6.2 1.1.5 1.5.1.1.1.2.1.3-.1.4-.2 1.2-.1 1.4.1.2.2.2.5.1.6-.2.8-.6 1.2-1.2.2-.3.3-.6.5-.9.2.3.7.6 1.3.6 1.7 0 2.9-1.6 2.9-3.7 0-1.6-1.1-2.7-2.7-2.7-1.9 0-3.1 1.5-3.1 3.1 0 .6.2 1.1.5 1.5.1.1.1.2.1.3-.1.4-.2 1.2-.1 1.4.1.2.2.2.5.1.6-.2.8-.6 1.2-1.2.2-.3.3-.6.5-.9.2.3.7.6 1.3.6z"/></svg>
              </a>
              <a href="https://twitter.com/siteworx" target="_blank" rel="noopener noreferrer" title="Twitter" style={{ background: '#1DA1F2', borderRadius: '50%', padding: 8, display: 'flex', alignItems: 'center' }}>
                <svg width="22" height="22" fill="#fff" viewBox="0 0 32 32"><path d="M32 6.076a13.14 13.14 0 0 1-3.769 1.031 6.601 6.601 0 0 0 2.887-3.631 13.195 13.195 0 0 1-4.169 1.594 6.563 6.563 0 0 0-11.188 5.98A18.635 18.635 0 0 1 2.228 4.15a6.563 6.563 0 0 0 2.031 8.75A6.533 6.533 0 0 1 1.28 11.1v.083a6.563 6.563 0 0 0 5.262 6.437 6.575 6.575 0 0 1-2.888.11 6.568 6.568 0 0 0 6.131 4.563A13.172 13.172 0 0 1 0 28.292a18.616 18.616 0 0 0 10.063 2.949c12.072 0 18.675-10.002 18.675-18.675 0-.285-.007-.568-.02-.85A13.348 13.348 0 0 0 32 6.076z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8" style={{ borderColor: '#FCF0FC' }}>
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="text-sm mb-4 md:mb-0" style={{ color: '#fff' }}>
              © Copyright 2024 Site Worx
            </div>
           
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;