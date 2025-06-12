import React, { useState } from 'react';
import Sign from './signin.jsx';
import TwoStepSignup from './twostep.jsx';
import FOREST from '../imge/forest.jpg';


export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotStep, setForgotStep] = useState(1);

  const handleSubmit = (e) => {
    console.log(e.target.value,"From Value");
    
    e.preventDefault();
    // Add your login logic here
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  const handleForgotPassword = () => {
    setShowForgot(true);
    setForgotEmail('');
    setForgotStep(1);
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // center horizontally
      justifyContent: 'center', // center vertically
      background: `url(${FOREST}) center/cover no-repeat`,
      position: 'relative',
    }}>
      {showForgot ? (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ padding: 32, minWidth: 340, background: '#fff', borderRadius: 12 }}>
            {forgotStep === 1 ? (
              <form onSubmit={e => { e.preventDefault(); setForgotStep(2); }}>
                <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Forgot Password</h2>
                <label htmlFor="forgotEmail">Enter your email</label>
                <input
                  id="forgotEmail"
                  type="email"
                  value={forgotEmail}
                  onChange={e => setForgotEmail(e.target.value)}
                  required
                  style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #ccc', marginBottom: 16 }}
                  placeholder="Enter your email"
                />
                <button type="submit" style={{ width: '100%', padding: 12, borderRadius: 4, background: '#6366f1', color: '#fff', fontWeight: 600, border: 'none', fontSize: 16 }}>Send Code</button>
                <button type="button" onClick={() => setShowForgot(false)} style={{ marginTop: 12, width: '100%', background: 'none', border: '1px solid #6366f1', color: '#6366f1', borderRadius: 4, padding: 10, cursor: 'pointer' }}>Back to Login</button>
              </form>
            ) : (
              <>
                {/* Show TwoStepSignup instead of the old forgot password flow */}
                <TwoStepSignup email={forgotEmail} isForgotPassword />
                <button type="button" onClick={() => setShowForgot(false)} style={{ marginTop: 12, width: '100%', background: 'none', border: '1px solid #6366f1', color: '#6366f1', borderRadius: 4, padding: 10, cursor: 'pointer' }}>Back to Login</button>
              </>
            )}
          </div>
        </div>
      ) : showSignUp ? (
        <div style={{
          padding: 0,
          minWidth: 0,
          background: 'none',
          borderRadius: 0,
          width: '100vw',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: `url(${FOREST})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          marginLeft: '20%' // shift the signup form 15% to the right
        }}>
          <Sign />
          <button onClick={() => setShowSignUp(false)} style={{ marginTop: 20, width: '100%', background: 'none', border: '1px solid #6366f1', color: '#6366f1', borderRadius: 4, padding: 10, cursor: 'pointer' }}>
            Back to Login
          </button>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} style={{
            padding: '2rem',
            minWidth: 320,
            marginLeft: 0,
            background: 'rgba(255,255,255,0.95)', // white rectangle background
            borderRadius: 28, // more curved corners
            boxShadow: '0 4px 24px #0002',
            border: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}>
            <h2 style={{ textAlign: 'center', marginBottom: 24, color: 'blue' }}>Login</h2>
            <div style={{ marginBottom: 16 }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: 6, color: 'blue' }}>Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{ width: '100%', padding: 10, borderRadius: 18, border: '1px solid #ccc' }} // more curved input
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: 6, color: 'blue' }}>Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{ width: '100%', padding: 10, borderRadius: 18, border: '1px solid blue' }} // more curved input
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: 12, borderRadius: 8, background: '#6366f1', color: '#fff', fontWeight: 600, border: 'none', fontSize: 16, backgroundColor: '#4C48B0' }}>Login</button>
            <button type="button" onClick={handleForgotPassword} style={{ marginTop: 12, width: '100%', background: 'none', border: 'none', color: '#6366f1', textDecoration: 'underline', cursor: 'pointer', borderRadius: 18 }}>
              Forgot Password?
            </button>
          </form>
          <button type="button" onClick={() => setShowSignUp(true)} style={{ marginTop: 32, width: 320, background: 'none', border: '1px solid #6366f1', color: '#6366f1', borderRadius: 4, padding: 10, cursor: 'pointer', marginLeft: 0 }}>
            Sign Up
          </button>
        </>
      )}
    </div>
  );
}
