import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

export const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios.get("http://localhost:5000/auth/logout").then((result) => {
      if (result.data.Status) {
        navigate("/adminlogin");
      }
    });
  };

  // A helper function to get the class name for active nav links.
  const getNavLinkClass = ({ isActive }) =>
    "nav-link text-white px-0 align-middle" + (isActive ? " active" : "");

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Sidebar */}
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <NavLink
              to="/dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">MENU</span>
            </NavLink>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <NavLink to="/dashboard" className={getNavLinkClass}>
                  <i className="fs-4 bi-speedometer2 ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink to="/dashboard/employee" className={getNavLinkClass}>
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Manage Employees</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink to="/dashboard/category" className={getNavLinkClass}>
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Category</span>
                </NavLink>
              </li>
              <li className="w-100">
                <NavLink to="/dashboard/profile" className={getNavLinkClass}>
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Profile</span>
                </NavLink>
              </li>
              <li className="w-100" onClick={handleLogout} style={{ cursor: "pointer" }}>
                {/* For logout, since you're not navigating to a route,
                    you can simply render a clickable element rather than a NavLink */}
                <span className="nav-link text-white px-0 align-middle">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Employee Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
