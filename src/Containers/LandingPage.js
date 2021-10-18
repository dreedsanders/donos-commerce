import React from "react";
import { useDispatch } from "react-redux";
import Footer from "../Components/Pages/Footer";
import LandingPageBody from "../Components/Pages/LandingPageBody";
import LandingPageHeader from "../Components/Pages/LandingPageHeader";

export default function LandingPage() {
  let dispatch = useDispatch();

  const handleShowSignIn = () => {
    dispatch({ type: "SHOWSIGNIN", signin: true })
  };

  const handleCloseSignIn = () => {
    dispatch({ type: "CLOSESIGNIN", signin: false })
  }

  const handleLogout = () => {
    dispatch({ type: "LOGGEDOUT", current_user: null, loggedin: false });
  };

  const handleCloseDiv = (e) => {
    if (e.target.id === "body" || e.target.id === "header") {
      dispatch({ type: "CLOSEPAGE", mypage: false });
    }
  };


  return (
    <div className="App" onClick={handleCloseDiv}>
      <div id="landing-page">
        <LandingPageHeader
          handleShowSignIn={handleShowSignIn}
          handleCloseSignIn={handleCloseSignIn}
          handleLogout={handleLogout}
        />
        <LandingPageBody
          handleShowSignIn={handleShowSignIn}
          handleCloseSignIn={handleCloseSignIn}
          handleLogout={handleLogout}
        />
        <Footer />
      </div>
    </div>
  );
}
