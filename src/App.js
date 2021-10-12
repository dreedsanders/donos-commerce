import "./App.css";
import LandingPage from "./Containers/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    getUsers();
})

  const getUsers = () => {
    let reqPack = {
       method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
    fetch("http://localhost:3000/users", reqPack)
      .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome/>
        </Route>
        <Route exact path="/home">
          <LandingPage  />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
