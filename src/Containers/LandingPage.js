import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../Components/Footer";
import LandingPageBody from "../Components/LandingPageBody";
import LandingPageHeader from "../Components/LandingPageHeader";


export default function LandingPage() {

  let dispatch = useDispatch();

  const [logged, setLogged] = useState(false)
  // if logged true it shows the sign in box 

  const [success, setSuccess] = useState(false)
  // if success true it means user successfuly logged in

  const handleClick = () => {
    setLogged(!logged)
  }

  const handleLogout = () => {
    setSuccess(false)
    dispatch({ type: "LOGGEDOUT", current_user: {}})

  }

  console.log(logged, success)
  
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
