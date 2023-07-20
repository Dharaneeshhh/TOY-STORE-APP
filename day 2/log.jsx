

import React from "react";
// eslint-disable-next-line
import Icons from "./Icons";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import './style.css';

function Log (){ 
const navigate = useNavigate();
const routeLogin = ()=>{
navigate('/dashboard')
}

  return (
    <div className="container">
      <div className="body">
        <NavBar />

        <div className="bodyChild">
          <div className='bodyChildForm'>
            Signup
          </div>
        </div>
        <form>
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
           <button onClick={routeLogin}>Login</button>
           <br>
           </br>
           <h3>
            Don't have an account?&nbsp;&nbsp;&nbsp;&nbsp;Create One
           </h3>
        </form>



      </div>
    </div>
  );
}

export default Log;
