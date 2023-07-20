

import React from "react";

import { useNavigate } from "react-router-dom";
// import NavBar from "./NavBar";
import './style.css';
import { Link } from "react-router-dom";

function Login (){ 
const navigate = useNavigate();
const routeLogin = ()=>{
navigate('/dashboard')
}

  return (
    <div className="container">
      <div className="body">
        {/* <NavBar /> */}

        <div className="bodyChild">
          <div className='bodyChildForm'>
            Login
          </div>
        </div>
        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
           <button onClick={routeLogin}>Login</button>
           <p>don't have a account</p>
          <Link to='/signup'> <button>signup</button></Link>
        </form>



      </div>
    </div>
  );
}

export default Login;
