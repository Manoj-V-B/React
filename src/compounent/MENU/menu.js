import React from "react";
import { Link } from "react-router-dom";
// import { Nav,Navlink,Bars,NavMenu,NavBtn,NavBtnLink } from './NavBarElement';

import 'bootstrap/dist/js/bootstrap.bundle'



export function Menu() {
    return(

        <>
    

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">





      <li className="nav-item active">
  <Link to='/' className="nav-link">Home</Link>
      
      </li>
      <li className="nav-item">
        
      <Link to='/SuperOver' className="nav-link">SuperOver</Link>
      </li>
      <li className="nav-item">
       
      <Link to='/Congartscard' className="nav-link">Congartscard</Link>
      </li>
      <li className="nav-item">
       
        <Link to='/SocialButtom' className="nav-link">SocialButtom</Link>
      </li>
      <li className="nav-item">
       
        <Link to='/MobSms' className="nav-link">Notification</Link>
      </li>
      <li className="nav-item">
       
        <Link to='/Login' className="nav-link">Login</Link> 
      </li>
      <li>
        <Link to='/Technology' className="nav-link">Technology</Link>
      </li>
        
        <li>
        <Link to='/responsive/Overall/Overall' className="nav-link">Responsive</Link>
        </li>
        <li>
        <Link to='/compounent/Hooks' className="nav-link">Count</Link>
        </li>
        <li>
        <Link to='/compounent/Fruits' className="nav-link">Fruit</Link>
        </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

        


    
    </>
        );
    
}