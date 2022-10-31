import React from 'react';
import {auth , provider}  from './firebasecomps.js';
import Button from '@mui/material/Button';
  
const Login = () => {
  
    // Sign in with google
    const signin = () => {
        auth.signInWithRedirect(provider).catch(alert);
    }
      
    return (
        <div>  
                 <Button variant="contained" onClick={signin}>Sign In with Google</Button>
        </div>
    );
}
  
export default Login;