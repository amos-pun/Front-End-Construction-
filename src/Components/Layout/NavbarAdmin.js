import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../../api/userAPi";
import "./NavbarAdmin.css";

const NavbarAdmin = () => {
  let { user } = isAuthenticated();
  let navigate = useNavigate();

  const handleSignout = () => {
    signout().then(() => {
      localStorage.removeItem("jwt");
      navigate("/");
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row banner bg-success">

          <div className="col-lg-1"></div>

          <div className="col-lg-3 d-flex flex-start mt-0">
            <Link className="navbar-brand textNav" to="/">
              <span className="name">Nirman</span> <br />
              <span className="com">Construction Company</span>
            </Link>
          </div>

          <div className="col-lg-4"></div>
        
          <div className="col-lg-3 mt-0">
            <div className="col-sm-12 d-flex justify-content-end col-lg-12 user_nav">
            
              {!user && (
                <div className="d-flex justify-content-evenly">
                  <div className="p-3">
                    <Link to={"/login"}>
                      <i className="bi bi-google-play fs-4 px-4 icon"></i>
                    </Link>
                  </div>

                  <div className="p-2">
                    <Link to={"/register"}>
                      <i className="bi bi-person-add fs-3 px-4 icon"></i>
                    </Link>
                  </div>
                </div>
              )}
              
              {user && user.role === 0 && (
                <div className="d-flex justify-content-evenly p-2">
                  <Link to="/user/profile">
                    <i className="bi bi-person-circle text-white fs-3 px-4 icon"></i>
                  </Link>

                  <Link to={"/cart"}>
                    <i className="bi bi-cart fs-3 px-4 icon"></i>
                  </Link>

                  {user && (
                    <span role="button">
                      <i
                        className="bi bi-box-arrow-right text-white  px-4 fs-3 icon"
                        onClick={handleSignout}
                      ></i>
                    </span>
                  )}
                </div>
              )}

              {user && user.role === 1 && (

                <div className="d-flex mt-3 justify-content-evenly ">
                  <Link to="/admin/dashboard">
                    <i className="bi bi-speedometer text-white fs-3 px-4 icon"></i>
                  </Link>

                  <span role="button">
                    <i
                      className="bi bi-box-arrow-right text-white px-4 fs-3 icon"
                      onClick={handleSignout}
                    ></i>
                  </span>
                </div>
              )}

            </div>
          </div>

          <div className="col-lg-1"></div>

        </div>

        <div className="my-3"></div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="wrapper col-lg-10 bg-warning">
              <nav>
                <ul>
                  <Link className="dwnNav">Civil Design</Link>
    
                  <Link to="/cart" className="dwnNav">
                    Products
                  </Link>
    
                  <Link to="/faq" className="dwnNav">
                    FAQ
                  </Link>
    
                  <Link to="/about" className="dwnNav">
                    About
                  </Link>
                </ul>
              </nav>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NavbarAdmin;
