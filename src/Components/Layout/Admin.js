import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../api/userAPi";
import { signout } from "../../api/userAPi";

const Admin = ({ category, product, users, order }) => {
  const { user } = isAuthenticated();
  const navigate = useNavigate();

  const handleSignout = () => {
    signout().then(() => {
      localStorage.removeItem("jwt");
      navigate("/");
    });
  };

  return (
    <div>
      <div>
        <div className="d-flex flex-column admin_board flex-shrink-0 p-3">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none py-2"
          >
            <i className="bi bi-dash-square fs-3 m-1 mx-2" />
            <span className="fs-5 fw-bold ">Admin Dash-Board</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              {category ? (
                <Link to="/admin/category" className="nav-link active active_item">
                  <i className="bi bi-grid m-1 mx-2" />
                  Categories
                </Link>
              ) : (
                <Link to="/admin/category" className="nav-link link-dark">
                  <i className="bi bi-grid m-1 mx-2" />
                  Categories
                </Link>
              )}
            </li>

            <li>
              {product ? (
                <Link to="/cart" className="nav-link active active_item">
                  <i className="bi bi-grid m-1 mx-2" />
                  Products
                </Link>
              ) : (
                <Link to="/cart" className="nav-link link-dark">
                  <i className="bi bi-grid m-1 mx-2" />
                  Products
                </Link>
              )}
            </li>

            <li>
              {order ? (
                <Link to="#" className="nav-link active_item active">
                  <i className="bi bi-bag-plus-fill m-1 mx-2"></i>
                  Orders
                </Link>
              ) : (
                <Link to="#" className="nav-link link-dark">
                  <i className="bi bi-bag-plus-fill m-1 mx-2"></i>
                  Orders
                </Link>
              )}
            </li>

            <li>
              {users ? (
                <Link to="#" className="nav-link active active_item">
                  <i className="bi bi-person-circle m-1 mx-2" />
                  Users
                </Link>
              ) : (
                <Link to="#" className="nav-link link-dark">
                  <i className="bi bi-person-circle m-1 mx-2" />
                  Users
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div>
          <div className="dropdown">
            <Link
              to="#"
              className="p-2 d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="../Image/zoom.jpg"
                alt=""
                width="48"
                height="52"
                className="rounded-circle me-2"
              />
              <strong>{user.username}</strong>
            </Link>
            <ul className="dropdown-menu text-small shadow mx-2">
              <li>
                <Link className="dropdown-item" to="#">
                  {user.email}
                </Link>
              </li>
              <hr />
              <li>
                <button className="dropdown-item" onClick={handleSignout}>
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
