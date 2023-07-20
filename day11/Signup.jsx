

import React from "react";

import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import './style.css';

function Signup (){ 
const navigate = useNavigate();
const routeLogin = ()=>{
navigate('/')
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
          <input type="text" placeholder="Enter name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
           <button onClick={routeLogin}>Signup</button>
        </form>



      </div>
    </div>
  );
}

export default Signup;
