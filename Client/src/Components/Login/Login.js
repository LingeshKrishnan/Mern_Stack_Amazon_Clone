import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const siginIn = e => {
        e.preventDefault();
    }

    return (
        <div className="login">           
            <Link to="/">
                <img 
                    className="login__Image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__Container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={siginIn} className='login__signinButton'>Sign In</button>
                </form>

                <p>
                    By Signing-in you agree to the Conditions
                    of Use & Sale. Please see out Privacy Notice,
                    Our Cookires Notice and our Interese-Based
                    Ads Notice
                </p>
                <Link to="/registration">
                     <button className='login__registerButton'>Create your Amazon account</button>
                </Link>

            </div>
        </div>
    )
}

export default Login
