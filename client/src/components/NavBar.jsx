import React from "react";
import {FaUser} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../index.css";

const NavBar = () =>{
  return (
    <div className="nav-bar">
      <Link className="navlink" to="/profile" style={{color:"#C69749"}}>Profile</Link>
      <hr style={{color:"white"}}/>
      <h5 style={{color:"#C69749"}}>Customer</h5>
      <Link className="navlink" to="/customer/service/list">Services</Link> 
      <Link className="navlink" to="/customer/service/accepted/list">Accepted Services</Link>
      <Link className="navlink" to="/customer/request/list">Requests</Link>
      <hr style={{color:"white"}}/>
      <h5 style={{color:"#C69749"}}>Provider</h5>
      <Link className="navlink" to="/provider/request/list">Requests</Link>
      <Link className="navlink" to="/provider/request/accepted/list">Accepted Requests</Link>
      <Link className="navlink" to="/provider/service/list">Services</Link>
    </div>
  );
}

export default NavBar;