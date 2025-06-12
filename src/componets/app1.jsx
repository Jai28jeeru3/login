import React from 'react';

export default function CompleteSiteWorxPage() {
  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        
        
      `}</style>

       

        {/* Header */}
        <div className="header">
          <h1>Cheap Web Hosting Provider in India: Your Best Option for Affordable Web Hosting Services</h1>
          <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
            A low price does not mean compromise in quality at <span className="highlight">SiteWorx</span>. Get online with the 
            best and <span className="highlight">cheap web hosting provider in India</span>. We promise all the features your 
            business needs to build a robust presence online!
          </p>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h2 className="section-title">Everything you need to know about SiteWorx</h2>

          {/* First Illustration */}
          <div className="illustration">
            <div className="computer-screen">
              <div className="screen-content">
                <div className="chart-line"></div>
                <div className="chart-dots">
                  <div className="chart-dot"></div>
                  <div className="chart-dot"></div>
                  <div className="chart-dot"></div>
                  <div className="chart-dot"></div>
                </div>
                <div className="chart-bars">
                  <div className="chart-bar"></div>
                  <div className="chart-bar"></div>
                  <div className="chart-bar"></div>
                </div>
              </div>
              <div className="magnifying-glass"></div>
            </div>
            <div className="side-folder"></div>
            <div className="side-chart">
              <div className="mini-bars">
                <div className="mini-bar"></div>
                <div className="mini-bar"></div>
                <div className="mini-bar"></div>
                <div className="mini-bar"></div>
              </div>
            </div>
            <div className="side-plant">
              <div className="plant-stem"></div>
            </div>
          </div>

          <p className="content-text">
            At SiteWorx, we aspire to provide businesses with the greatest hosting solutions, including 
            blazing-fast website performance, higher uptime and cutting-edge technologies to support their 
            online success. Our team has been working on new ways to deliver faster performance in the 
            most user-friendly layout.
          </p>

          <p className="goal-text">Our goal is to work on the 4 basic elements of hosting:</p>

          <ul className="feature-list">
            <li><strong>Uptime</strong> - Offer 24/7 available solution</li>
            <li><strong>Speed</strong> - Reduce down the time spent</li>
            <li><strong>Simplicity</strong> - Build user-friendly cPanel</li>
            <li><strong>Price</strong> - Keep the cost affordable for everyone</li>
          </ul>

          <p className="content-text" style={{ fontSize: '1.15rem' }}>
            Windows Shared hosting is a powerful yet affordable hosting option for businesses that have 
            recently embarked on their online journey but want total control to customize their server. 
            Choosing Windows OS enables you to install apps/plugins, control security and also focus on 
            enhancing the functionality of your business's website.
          </p>

          <p className="tech-text" style={{ fontSize: '1.15rem' }}>Technology behind it:</p>

          <ul className="feature-list" style={{ fontSize: '1.1rem' }}>
            <li>Content Delivery Network (CDN)</li>
            <li>Solid-State Drives (SSDs)</li>
            <li>Server Caching</li>
            <li>PHP and other softwares</li>
            <li>Load balancing</li>
          </ul>

          {/* Second Illustration */}
          <div className="illustration-2">
            <div className="computer-screen-2">
              <div className="screen-content-2">
                <div className="chart-section">
                  <div className="chart-line-orange"></div>
                  <div className="chart-line-orange"></div>
                  <div className="chart-line-orange"></div>
                </div>
                <div className="chart-section">
                  <div className="chart-box"></div>
                  <div className="chart-box"></div>
                </div>
              </div>
              <div className="pie-chart">
                <div className="pie-inner"></div>
              </div>
            </div>
            <div className="folder-2"></div>
            <div className="chart-2">
              <div className="bars-2">
                <div className="bar-2"></div>
                <div className="bar-2"></div>
                <div className="bar-2"></div>
                <div className="bar-2"></div>
              </div>
            </div>
            <div className="robot"></div>
          </div>

          {/* Final Section */}
          <div className="final-section">
            <h3 className="final-title">India's Best Hosting Provider</h3>
            <p className="select-text" style={{ fontSize: '1rem', fontWeight: 500 }}>Select Your</p>
            <h4 className="hosting-plan">Hosting Plan</h4>
            
            <div className="hosting-buttons">
              <button className="hosting-btn">Shared Hosting</button>
              <button className="hosting-btn">Reseller Hosting</button>
              <button className="hosting-btn">Cloud Hosting</button>
              <button className="hosting-btn">VPS Hosting</button>
            </div>
          </div>
        </div>
    </>
  );
}