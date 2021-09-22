import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "../App.css";

export default function Login() {
    const signUp = () => {

    }
    return (
      <div className="login-items">
        <div className="sign-up">
          <form className="sign-up-form">
            <h3>New User</h3>
            <input type="text" name="name" placeholder="enter name"></input>
            <br></br>
            <br></br>
            <input type="submit"></input>
          </form>
        </div>
        <div className="user-options">
          <div className="options-list">
            <ul>
              <li>
                <a href="a">Sign In</a>
              </li>
              <li>
                <a href="a">Sign In</a>
              </li>
              <li>
                <a href="a">Sign In</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
