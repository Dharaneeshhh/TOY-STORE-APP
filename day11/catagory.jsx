import React from 'react';
import './catagory.css';
import { Link } from 'react-router-dom';


const Catagory = () => {
  return (
    
   <div>
    <div className="sidebar-container">
      <ul className="sidebar-menu">
       <li className="sidebar-menu-item">Home</li>
        <Link to="/catagory"><li className="sidebar-menu-item">Low Price</li></Link>
        <Link to='/high'>  <li className="sidebar-menu-item">Hign Price </li></Link>
        
      </ul>
    </div>
  <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
    <div className="card">
      <div className="wrapper">
        <img src="https://images.unsplash.com/photo-1581557991964-125469da3b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="cover-image" />
      </div>
      <h4 style={{marginTop:'250px'}}>RS 100</h4>
      <img src="https://images.unsplash.com/photo-1546776230-bb86256870ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="character" />
    </div>
  </a>
  <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
    <div className="card">
      <div className="wrapper">
        <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" className="cover-image" />
      </div>
      <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" className="title" />
      <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" className="character" />
    </div>
  </a>
</div>



  );
}

export default Catagory;