import "./App.css";
import LandingPage from "./Containers/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import MyPage from "./Components/MyPage";
function App() {

  let dispatch = useDispatch();

  useEffect(() => {
    getUsers();
    getItems();
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
      .then(data => dispatch({ type: "GETUSERS", users: data }))
  }
  const getItems = () => {
    let reqPack = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch("http://localhost:3000/items", reqPack)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GETITEMS", items: data}));
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome/>
        </Route>
        <Route exact path="/home">
          <LandingPage  />
        </Route>
        <Route exact path="/mypage">
          <MyPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
