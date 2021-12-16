import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Registration.css"
import { useDispatch } from 'react-redux'
import { createLogin, getLogin } from '../../actions/login';
import { BrowserRouter as history } from 'react-router-dom';
function Registration() {
    const [loginData, setloginData] = useState(
        {fullname: 'fullname', email: 'email', password: 'password', phonenumber: 'phonenumber'}
    );
    
    const dispatch = useDispatch();
    // const history = useNavigate();
    const register =  e => {
        e.preventDefault();
        dispatch(createLogin(loginData));
        // history.push("/");

    };
    
    useEffect(() => {
        dispatch(getLogin())
        },[dispatch]);
    return (
        <div className="registration">
            <Link to="/">
                <img 
                    className="registration__Image"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="registration__Container">
                <h1>Register An Account</h1>

                <form>
                    <h5>Fullname</h5>
                    <input type="text" value={loginData.fullname} onChange={(e) => setloginData({ ...loginData, fullname: e.target.value})} />

                    <h5>Phone Number</h5>
                    <input type="text" value={loginData.phonenumber} onChange={(e) => setloginData({ ...loginData, phonenumber: e.target.value})} />

                    <h5>E-mail</h5>
                    <input type="text" value={loginData.email} onChange={(e) => setloginData({ ...loginData, email: e.target.value})} />

                    <h5>Password</h5>
                    <input type="password" value={loginData.password} onChange={(e) => setloginData({ ...loginData, password: e.target.value})} />

                    <button type='submit' onClick={register} className='registration__registerButton'>Register</button>
                </form>

                <p>
                    By Signing-in you agree to the Conditions
                    of Use & Sale. Please see out Privacy Notice,
                    Our Cookies Notice and our Interese-Based
                    Ads Notice
                </p>

            </div>
            
        </div>
    )
}

export default Registration
