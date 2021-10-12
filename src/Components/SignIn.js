import React from "react";

// code for the box that pops up letting users sign in from the main page

export default function SignIn(props) {
  const handleCreateAccount = (e) => {
    e.preventDefault();
    let newUserName = e.target[0].value;
    let newPassword = e.target[1].value;
    let confirmPassword = e.target[2].value;

    if (newPassword !== confirmPassword) {
      console.log("retry password");
    } else {
      let newUser = {
        name: newUserName,
        password: newPassword,
        account_balance: 0,
      };
      let reqPack = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newUser),
      };
      fetch("http://localhost:3000/users", reqPack).then(res => res.json())
        .then(data => console.log(data));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault()
    let user = {
      name: e.target[0].value,
      password: e.target[1].value,
    };

    let reqPackage = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    };
    fetch("http://localhost:3000/login", reqPackage)
      .then(res => res.json())
      .then(data => console.log(data));
  }
  return props.isShowLogin ? (
    <div>
      <div className="container" id="container">
        <button className="close-button" onClick={props.handleClick}>
          &times;
        </button>
        <div className="form-container sign-up-container">
          <form onSubmit={handleCreateAccount}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="submit" />
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Log In</h1>
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <input type="submit" />
          </form>
        </div>
    <div className="container-background">
      <span id="container-background-span"></span>
    </div>
      </div>
    </div>
  ) : (
    ""
  );
}