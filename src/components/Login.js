// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      console.alert('login is succesful');
      navigate('/'); 
      // Navigating to the homepage after successful login
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show error message)
    }
  };

  const handleGoogleSignIn = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.alert(`successfully logged via google.`);
        navigate('/');

    } catch (error) {
        console.error("Error during Google sign in:", error);
        alert("Google sign-in failed!");
    }
  };
  
  return (
    <div>
    <div className="p-4  flex justify-center">
      <div className='border-2 w-96 h-96 p-24 '>
      <form onSubmit={handleLogin}>
        <input type="email" className='mb-8 h-8 bg-gray-100' placeholder="Email" onChange={e => setEmail(e.target.value)} /> <br></br>
        <input type="password" className='mb-8 h-8 bg-gray-100' placeholder="Password" onChange={e => setPassword(e.target.value)} /> <br></br>
        <button className='btn w-32 ml-6 mb-4' type="submit">Login</button>
        <button className='ml-2 btn' onClick={handleGoogleSignIn}>Sign in with Google</button>
      </form> 
      </div>

   
    
    </div>
    <div>

         
      </div>
      </div>
  );
};

export default Login;
