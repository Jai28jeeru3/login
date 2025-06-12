import React, { useState } from 'react';



const Filebox = () => {
  const [showForm, setShowForm] = useState(false);
  const [showHostingSubSections, setShowHostingSubSections] = useState(false);
  const [showServerSubSections, setShowServerSubSections] = useState(false);

  const styles = {
    appBackground: {
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(135deg, #FCF0FC 0%, #BBEBFA 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      borderRadius: '20px', // rounded corners for main background
      overflow: 'hidden',
    },
    sectionsBar: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderRadius: '20px', // rounded corners for sections bar
      gap: '30px'
    },
    sectionLink: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1e40af', // changed from green to dark blue
      cursor: 'pointer',
      padding: '10px 15px',
      borderRadius: '25px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      border: '2px solid transparent'
    },
    subSections: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'white',
      borderRadius: '16px', // more rounded
      padding: '15px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      minWidth: '200px',
      zIndex: 101,
      marginTop: '10px'
    },
    subLink: {
      fontSize: '13px',
      color: '#666',
      cursor: 'pointer',
      padding: '8px 12px',
      borderRadius: '6px',
      transition: 'all 0.2s ease'
    },
    chatButton: {
      position: 'fixed',
      right: '32px',
      bottom: '32px',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      background: 'linear-gradient(135deg, #1e40af 0%, #1a3576 100%)', // changed from green to dark blue
      borderRadius: '50px',
      padding: '12px 20px',
      boxShadow: '0 4px 20px rgba(30, 64, 175, 0.3)', // changed shadow color to match dark blue
      transition: 'all 0.3s ease',
      border: 'none',
    },
    formContainer: {
      position: 'fixed',
      right: '32px',
      bottom: '90px',
      zIndex: 1001,
      background: '#BBEBFA',
      padding: '25px',
      borderRadius: '20px', // more rounded
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
      minWidth: '320px',
      maxWidth: '400px'
    },
    formTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1e40af', // changed from green to dark blue
      marginBottom: '20px',
      textAlign: 'center'
    },
    formGroup: {
      marginBottom: '15px'
    },
    formInput: {
      width: '100%',
      padding: '12px',
      border: '2px solid #e1e5e9',
      borderRadius: '8px',
      fontSize: '14px',
      transition: 'border-color 0.3s ease',
      fontFamily: 'inherit'
    },
    formTextarea: {
      width: '100%',
      padding: '12px',
      border: '2px solid #e1e5e9',
      borderRadius: '8px',
      fontSize: '14px',
      resize: 'vertical',
      minHeight: '80px',
      fontFamily: 'inherit'
    },
    submitButton: {
      width: '100%',
      background: 'linear-gradient(135deg, #1e40af 0%, #1a3576 100%)', // changed from green to dark blue
      color: 'white',
      padding: '12px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    heroSection: {
      textAlign: 'center',
      padding: '80px 20px',
      color: 'white'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      marginBottom: '40px',
      opacity: 0.9
    },
    ctaButton: {
      backgroundColor: '#1e40af', // changed from green to dark blue
      color: 'white',
      padding: '15px 35px',
      borderRadius: '50px',
      fontSize: '18px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    servicesSection: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #FCF0FC 0%, #BBEBFA 100%)',
      margin: '40px',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
    },
    servicesTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1e40af', // changed from green to dark blue
      marginBottom: '50px'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns per row
      gap: '30px',
      maxWidth: '1300px',
      margin: '0 auto'
    },
    serviceCard: {
      background: 'linear-gradient(135deg, #FCF0FC 0%, #BBEBFA 100%)',
      padding: '30px',
      borderRadius: '20px', // more rounded
      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      border: '2px solid transparent'
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      display: 'block'
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1e40af', // changed from green to dark blue
      marginBottom: '15px'
    },
    serviceDescription: {
      color: '#666',
      lineHeight: 1.6
    }
  };

  const ContactForm = () => (
    <div style={styles.formContainer}>
     
      <div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.formInput}
            onFocus={(e) => e.target.style.borderColor = '#1e40af'}
            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="email"
            placeholder="Your Email"
            style={styles.formInput}
            onFocus={(e) => e.target.style.borderColor = '#1e40af'}
            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
          />
        </div>
        <div style={styles.formGroup}>
          <textarea
            placeholder="Your Message"
            style={styles.formTextarea}
            onFocus={(e) => e.target.style.borderColor = '#1e40af'}
            onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
          />
        </div>
        <button
          style={styles.submitButton}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 15px rgba(20, 90, 35, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          onClick={() => alert('Message sent!')}
        >
          
        </button>
      </div>
    </div>
  );

  const ServiceCard = ({ icon, title, description }) => (
    <div
      style={styles.serviceCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(30, 64, 175, 0.15)'; // changed shadow color to match dark blue
        e.currentTarget.style.borderColor = '#1e40af'; // changed from green to dark blue
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        e.currentTarget.style.borderColor = 'transparent';
      }}
    >
      <div style={styles.serviceIcon}>{icon}</div>
      <h3 style={styles.serviceTitle}>{title}</h3>
      <p style={styles.serviceDescription}>{description}</p>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(135deg, #FCF0FC 0%, #BBEBFA 100%)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      {/* Navigation Bar */}
      <div style={styles.sectionsBar}>
        <span
          style={styles.sectionLink}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#1e40af'; // changed from green to dark blue
            e.target.style.color = 'white';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#1e40af'; // changed from green to dark blue
            e.target.style.transform = 'translateY(0)';
          }}
        >
          
        </span>

        <div style={{ position: 'relative' }}>
          <span
            style={styles.sectionLink}
            onClick={() => setShowHostingSubSections(!showHostingSubSections)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1e40af'; // changed from green to dark blue
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#1e40af'; // changed from green to dark blue
              e.target.style.transform = 'translateY(0)';
            }}
          >
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                marginLeft: "8px",
                transform: showHostingSubSections ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s"
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>

          {showHostingSubSections && (
            <div style={styles.subSections}>
              <span
                style={styles.subLink}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e6ecfa'; // changed from greenish to blueish
                  e.target.style.color = '#1e40af'; // changed from green to dark blue
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#666';
                }}
              >
                
              </span>
              <span
                style={styles.subLink}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e6ecfa'; // changed from greenish to blueish
                  e.target.style.color = '#1e40af'; // changed from green to dark blue
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#666';
                }}
              >
                
              </span>
            </div>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          <span
            style={styles.sectionLink}
            onClick={() => setShowServerSubSections(!showServerSubSections)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1e40af'; // changed from green to dark blue
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#1e40af'; // changed from green to dark blue
              e.target.style.transform = 'translateY(0)';
            }}
          >
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                marginLeft: "8px",
                transform: showServerSubSections ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.3s"
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>

          {showServerSubSections && (
            <div style={styles.subSections}>
              <span
                style={styles.subLink}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e6ecfa'; // changed from greenish to blueish
                  e.target.style.color = '#1e40af'; // changed from green to dark blue
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#666';
                }}
              >
                
              </span>
              <span
                style={styles.subLink}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e6ecfa'; // changed from greenish to blueish
                  e.target.style.color = '#1e40af'; // changed from green to dark blue
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#666';
                }}
              >
            
              </span>
              <span
                style={styles.subLink}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e6ecfa'; // changed from greenish to blueish
                  e.target.style.color = '#1e40af'; // changed from green to dark blue
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#666';
                }}
              >
                
              </span>
            </div>
          )}
        </div>

        {['', '', '', '', ''].map((item) => (
          <span
            key={item}
            style={styles.sectionLink}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1e40af'; // changed from green to dark blue
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#1e40af'; // changed from green to dark blue
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {item}
          </span>
        ))}
      </div>
       
      {/* <div className='h-[250px] w-full bg-slate-50 mb-10'>
            <p className="text-center text-4xl font-serif ">Sitewprx is been hosting service in india</p>
        </div> */}
     

     
      <div  style={styles.servicesSection}>
        <p className="text-center text-4xl font-serif" style={{ color: '#1e40af' }}>
  How to Choose the Right Cheap Web Hosting Provider in India
</p>
               <p className="m-auto w-[75%] text-md font-serif mt-3" style={{ color: '#1e40af' }}>
  Planning to launch your business’s website? A website hosted by a reliable web host is the first step you need to start your business online. The following are the key factors for choosing the right web host to add advantage to your online business:
</p>
               
        <div  style={styles.servicesGrid}>
          <ServiceCard
             styles={styles}
            icon="🌐" 
            title="Determine Your Hosting Needs"
            description="Consider what type of website you want to host. Different hosting providers offer different plans based on the traffic, storage, and other features you need. Knowing your hosting requirements will help you choose the right provider and plan."
          />
          <ServiceCard
           styles={styles}
            icon="📈"
            title="Website Size and Traffic"
            description="Consider the size of your website and the traffic it generates. A large website with high traffic will require more resources and bandwidth to function properly. Make sure to choose a hosting provider that can handle the amount of traffic and storage requirements you need."
          />
          <ServiceCard
            styles={styles}
            icon="⚙️"
            title="Technical Requirements"
            description="Consider the technical requirements of your website, including the programming languages, content management systems, and other tools. Choose a hosting provider that supports these requirements."
          />
          <ServiceCard
           styles={styles}
            icon="📊"
            title="Compare Plans and Pricing"
            description="Compare the plans and pricing offered by different hosting providers to find the best value for your money. Look for providers that offer competitive pricing and a range of plans."
          />
          <ServiceCard
            styles={styles}
            icon="🧩" 
            title="Features and Add-Ons"
            description="Look for hosting providers that offer additional features and add-ons, such as website builders, SSL certificates, and email hosting. These can add value to your website’s functionality."
          />
          <ServiceCard
            styles={styles}
            icon="💳" 
            title="Pricing and Payment Options"
            description="Look for providers that offer flexible payment options, such as monthly or yearly billing, and accept different payment methods, such as credit cards or PayPal."
          />
        </div>
      </div>

      {/* Chat Button */}
      <div
        style={styles.chatButton}
        onClick={() => setShowForm(!showForm)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 6px 25px rgba(30, 64, 175, 0.4)'; // changed from green to dark blue
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(30, 64, 175, 0.3)'; // changed from green to dark blue
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          
        </svg>
        <span style={styles.chatText}>Open Chat</span>
        
      </div>

      {/* Contact Form */}
      {showForm && <ContactForm />}
    </div>
  );
};

export default Filebox;