import '../styles/loginPage.css'
import sideimg from '../assets/sideimage.png'
import logo1 from '../assets/logo.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e: React.FormEvent) => { 
    e.preventDefault();
    
    console.log('BUTTON CLICKED!');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true); 
    setError(''); 

    try {
      const API_URL = 'https://tcxii-team7.onrender.com/auth/login'; 
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email, 
          password: password 
        })
      });

      const data = await response.json();
      
      console.log('Backend response:', data);

      if (response.ok) {
        console.log('Login successful!', data);
        
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
        }
        
        navigate('/chatbot');
      } else {
        setError(data.message || data.detail || 'Invalid credentials');
      }
      
    } catch (err) {
      console.error('Error:', err);
      setError('Cannot connect to server. Please check your connection.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className='main'>
      <div>
        <img src={sideimg} alt="DOXA img" className="DOXAimg" />
      </div>
      <div className='inscription'>
        <div className='container'>
          <form className='form' onSubmit={handleSubmit}>
            <div style={{
              display:'flex',
              flexDirection:'row',
              alignContent: 'center',
              height:'30px',
              gap:'5px',
            }}>
              <img src={logo1} alt="logo" style={{
                height: '28px',
                width: '29px',
              }} />
              <h2>Welcome Back!</h2>
            </div>

            {error && (
              <div style={{ 
                color: 'red', 
                marginBottom: '10px',
                padding: '8px',
                backgroundColor: '#fee',
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}

            <div className='inputs'>
              <label htmlFor="emailInput">Email Address :</label>
              <input 
                required
                id='emailInput'
                className='input'
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                disabled={loading} 
              />
            </div>
            <div className='inputs'>
              <label htmlFor="passwordInput">Password :</label>
              <input 
                required
                id='passwordInput'
                className='input'
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                disabled={loading} 
              />
              <p className='fp'><a href="#">forgot Password?</a></p>
            </div>
            <button type="submit" className='login' disabled={loading}>
              {loading ? 'Loading...' : 'Log In'} 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}