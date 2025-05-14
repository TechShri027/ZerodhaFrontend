import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="/Image/logo.svg" alt="" style={{ width: "25%" }} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/signup">Dashboard</Link> */}
                <a href="https://zerodha1dashboard.netlify.app/" target='_blank' style={{height: "5.7vh",
                textDecoration:"none",
                color:"#000000",
                marginRight:"15%", // full viewport height
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end", // push content to bottom
  alignItems: "center"}}>Dashboard</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Products">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Supports">Support</Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
