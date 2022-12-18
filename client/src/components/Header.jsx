import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark head-nav" style={{backgroundColor:"#1A1A1B" }}>
      <div className="container-fluid" >
        <a className="navbar-brand" style={{color:"#C69749" , fontSize:"28px" , fontWeight:"800", padding:"10px"}} href="#">
         {props.title}
        </a>
        <form className="d-flex" >
        <input className="form-control me-2 search-css" type="search" placeholder="Search" aria-label="Search" />
        &nbsp;
        <button className="btn btn-outline-success search-but-css" type="submit" >Search</button>
      </form>
      </div>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
};
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
};
// #endregion

export default Header;
