import React from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <div className="container">
        <div className="notFoundPage">
          <div className="header">
            <p>
              <NavLink to={"/"}>Home</NavLink> / 404 Error
            </p>
          </div>
          <div className="notFound">
            <div className="text">
              <p className="head">404 Not Found</p>
              <p>Your visited page not found. You may go home page.</p>
            </div>
            <button>
              <Link to={"/"}>Back to Home page</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
