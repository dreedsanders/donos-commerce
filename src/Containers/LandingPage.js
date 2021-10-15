import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Pages/Footer";
import LandingPageBody from "../Components/Pages/LandingPageBody";
import LandingPageHeader from "../Components/Pages/LandingPageHeader";
import MyPage from "../Components/User/MyPage";

export default function LandingPage() {
  let dispatch = useDispatch();


  const [logged, setLogged] = useState(false);
  // if logged true it shows the sign in box

  const [success, setSuccess] = useState(false);
  // if success true it means user successfuly logged in

  const handleClick = () => {
    setLogged(!logged);
  };

  const handleLogout = () => {
    setSuccess(false);
    setLogged(false);
    dispatch({ type: "LOGGEDOUT", current_user: null, loggedin: false });
  };


  return (
    <div className="App">
      <div id="landing-page">
        <LandingPageHeader
          handleClick={handleClick}
          logged={logged}
          setLogged={setLogged}
          success={success}
          handleLogout={handleLogout}
          />
        <LandingPageBody
          handleClick={handleClick}
          logged={logged}
          setLogged={setLogged}
          success={success}
          setSuccess={setSuccess}
          handleLogout={handleLogout}
        />
        <Footer />
      </div>
    </div>
  );
}
