import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

const Header = () => {

    return (
        <>
        <div className="container position-sticky z-index-sticky top-0"><div className="row"><div className="">
<nav className="navbar navbar-expand-lg  blur blur-rounded top-0 z-index-fixed shadow position-absolute my-3 py-4 px-4 start-0 end-0 mx-2">
  <div className="container-fluid px-0">
    <a className="navbar-brand font-weight-bolder ms-lg-3 text-3xl" href="#" rel="tooltip" data-placement="bottom" >
      Mappin
    </a>

    <div className="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
      <ul className="navbar-nav navbar-nav-hover ms-lg-12 ps-lg-5 w-100">





        <li className="nav-item ms-lg-auto">
          <a className="nav-link nav-link-icon me-2" href="https://www.instagram.com/shavgraphics/?hl=en" target="_blank">
            <i className="fa fa-instagram fa-2x me-1"></i>
            <p className="d-inline z-index-1 font-weight-bold text-3xl" data-bs-toggle="tooltip" data-bs-placement="bottom" >Mappin</p>
          </a>
        </li>
        <li className="nav-item my-auto ms-3 ms-lg-0">
          
          <a href="#" className="btn btn-sm  bg-gradient-info  btn-round mb-0 me-1 mt-2 mt-md-0">Home</a>
          
        </li>
      </ul>
    </div>
  </div>
</nav>

</div></div></div>
        </>

    );
}

export default Header;
