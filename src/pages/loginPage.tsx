import '../styles/loginPage.css'
import sideimg from '../assets/sideimage.png'
import DOXA from '../assets/Frame.png'
import darkLogo from '../assets/dark logo.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [emailError, setEmailError] = useState(''); 
  const [passwordError, setPasswordError] = useState(''); 

  const handleSubmit = async (e: React.FormEvent) => { 
    e.preventDefault();
    
    if (email === 'ishakakab13@gmail.com' && password === '12345678') {
          navigate('/ChatBot');
    } else if (!email){
      setEmailError('Please fill in email');
    } else if (!password){
      setEmailError('');
      setPasswordError('Please fill in password');
    } else {
      setEmailError('');
      setPasswordError('');
      setError('Invalid email or password , please try again. ');
    };
    return
  }

  return (
    <div className='main'>
      <div className='sideimg'>
        <img src={sideimg} alt="DOXA img" className="DOXAimg" />
      </div>
      <div className='inscription'>
        <div className='container'>
          <form className='form' onSubmit={handleSubmit}>
            <div className='welcomeBack'>
              <img  src={darkLogo}  alt="logo"/>         <img  src={DOXA}  alt="logo" />
              <h2>Welcome Back!</h2>
            </div>

            <div style={{height:'200px',marginBottom:'30px',display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
            <div className='inputs'>
              <label htmlFor="emailInput">Email Address :</label>
              <input 
                id='emailInput'
                className='input'
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  outline: emailError ? '2px solid red' : 'none' 
                }}/>
            </div>
            
            <div className='inputs'>
              <label htmlFor="passwordInput">Password :</label>
              <input 
                id='passwordInput'
                className='input'
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  outline: passwordError ? '2px solid red' : 'none' 
                }}
              />
              <p className='forgetpassword'><a href="#">forgot Password?</a></p>
            </div></div>
              {error && (
              <div className='errorHolder' style={{ 
                color: 'red', 
                marginBottom: '10px',
                padding: '8px',
                backgroundColor: '#fee',
                borderRadius: '4px',
                fontSize: '14px'
              }}>
                {error}
              </div>)}

             <button type="submit" className='login'>Log in</button>
          </form>
        </div>
      </div>
    </div>)}