import React from 'react';
import { FaHome, FaUser, FaUsers, FaListAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      {/* Sidebar with 15% width */}
      <div
        className="sidebar d-flex flex-column justify-content-between bg-info text-white"
        style={{ width: '15%' }}
      >
        <div>
          <h3 className="text-center mb-3">Decibels Lab</h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                to=""
                className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 text-white text-decoration-none"
                style={{ fontSize: '1.3rem', paddingLeft: '20px' }}
              >
                <FaHome className="me-2" /> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard/employee"
                className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 text-white text-decoration-none"
                style={{ fontSize: '1.3rem', paddingLeft: '20px' }}
              >
                <FaUsers className="me-2" /> Manage Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard/category"
                className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 text-white text-decoration-none"
                style={{ fontSize: '1.3rem', paddingLeft: '20px' }}
              >
                <FaListAlt className="me-2" /> Category
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard/profile"
                className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 text-white text-decoration-none"
                style={{ fontSize: '1.3rem', paddingLeft: '20px' }}
              >
                <FaUser className="me-2" /> Profile
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link
            to="/logout"
            className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 text-white text-decoration-none"
            style={{ fontSize: '1.3rem', paddingLeft: '20px' }}
          >
            <FaSignOutAlt className="me-2" /> Logout
          </Link>
        </div>
      </div>

      {/* Main content area with 85% width */}
      <div className="col p-0 m-0">
            <div className="p-2 d-flex justify-content-center shadow">
                <h4>Emoployee Management System</h4>
            </div>
            <Outlet />
        </div>
    </div>
  );
};

export default Dashboard;
