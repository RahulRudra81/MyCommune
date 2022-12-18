import React from "react";
import "../index.css";
// import "./footer.css";

export default function Footer() {
  return (
    <>
      {/* <div className="b-example-divider"></div> */}
      <div classNameName="container " style={{color:"#C69749"}}>
        {/* customCSS */}
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted" >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">&copy; 2022 DOT</p>
        </footer>
      </div>
    </>
  );
}