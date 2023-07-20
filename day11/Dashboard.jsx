import React from 'react';
import './Dashboard.css';
import NavBar from "./NavBar";
import { Link } from 'react-router-dom'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">Toy Shop </h1>
      <div className="graph-container">
        <NavBar />
        {/* Define your graphs and visualizations here */}
      </div>
      {/* Add more components as needed */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li class="nav-item">
              <Link to='/catagory' > <a class="nav-link" href="#">Catagory</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/cart' ><a class="nav-link" href="#">Cart</a></Link>
              </li>
              <li class="nav-item">
               <Link to='/'> <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Logout</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='card-container'>
      <div className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/1409/1409509.png" alt="Avatar" style={{ width: "100%" }} />
  <div className="container">
    <h4>
      <b>CAR</b>
    </h4>
    <p>Rs:1000</p>
  </div><br></br>
</div>
<div className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/5574/5574813.png" alt="Avatar" style={{ width: "100%" }} />
  <div className="container">
    <h4>
      <b>DOLL</b>
      </h4>
    <p>Rs:800</p>
  </div>
<br></br>
</div>
<div className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/551/551239.png" alt="Avatar" style={{ width: "100%" }} />
  <div className="container">
    <h4>
      <b>ROBOT</b>
    </h4>
    <p>Rs:1500r</p>
  </div>
</div><br>
</br>
<div className="card">
  <img src="https://cdn-icons-png.flaticon.com/128/3819/3819596.png" alt="Avatar" style={{ width: "100%" }} />
  <div className="container">
    <h4>
      <b>DRAGON DOLL</b>
    </h4>
    <p>Rs:900</p>
  </div>
</div>

<div>
  <a href='https://twitter.com'>
  <div className="twitter button-big">
    <i className="fa fa-twitter" />
  </div>
    </a>
    <a href='https://facebook.com'>
  <div className="facebook button-big">
    <i className="fa fa-facebook" />
  </div>
  </a>
  <a  href='https://instagram.com'>
  <div className="insta button-big">
    <i className="fa fa-insta" />
  </div>
  </a>
 
</div>
<div className="sidebar-container">
      <ul className="sidebar-menu">
       <li className="sidebar-menu-item">Home</li>
        <Link to="/contact"><li className="sidebar-menu-item">Contact</li></Link>
        <Link to='/about'>  <li className="sidebar-menu-item">About </li></Link>
        
      </ul>
    </div>

    </div>
      </div>
      
  );
}

export default Dashboard;