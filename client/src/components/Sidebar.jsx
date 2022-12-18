import React from "react";
// import "./footer.css";
import "../index.css";

function MySideNav() {
  return (
    <>
      <main className="d-flex flex-nowrap sidebar-absolute">
        <div
          className="d-flex flex-column flex-shrink-0 bg-light"
          style={{ width: "4.5rem" }}
        >
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link active py-3 border-bottom rounded-0"
                aria-current="page"
                title="Home"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
              >
                <img src="real-estate.png" alt="home" className="img-icon" />
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link py-3 border-bottom rounded-0"
                title="Orders"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
              >
                <img src="drinking.png" alt="drink" className="img-icon" />
                ABCD
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link py-3 border-bottom rounded-0"
                title="Products"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
              >
                <img src="groceries.png" alt="groceries" className="img-icon" />
                XYZy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link py-3 border-bottom rounded-0"
                title="Customers"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
              >
                <img src="maid.png" alt="home" className="img-icon" />
                QWERTY
              </a>
            </li>
          </ul>
          <div className="dropdown border-top">
            <a
              href="#"
              className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              &nbsp; &nbsp; &nbsp;
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="24"
                height="24"
                className="rounded-circle img-icon-profile"
              />
            </a>
            <ul className="dropdown-menu text-small shadow">
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
export default MySideNav;
