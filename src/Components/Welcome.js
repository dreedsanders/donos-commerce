import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="welcome">
      <div>
        <img
          src="https://image.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg"
          id="welcome-img"
          alt="yes"
        ></img>
      </div>
      <div className="welcome-link">
        <div>
          <h1>Welcome to Dono's Shop</h1>
        </div>
        <div>
          <Link to="/home" id="home-link">
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
}
