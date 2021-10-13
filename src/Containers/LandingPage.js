import React, { useState } from "react";
import Footer from "../Components/Footer";
import LandingPageBody from "../Components/LandingPageBody";
import LandingPageHeader from "../Components/LandingPageHeader";

export default function LandingPage() {
  // HANDLING THE SHOWING OF THE LOG IN AND CREATE ACCOUNT BOX
  const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  const handleClick = () => {
    handleLoginClick();
  };
  // END HANDLING OF THE LOG IN BOX
  return (
    <div className="App">
      <div id="landing-page">
        <LandingPageHeader
          handleClick={handleClick}
          isShowLogin={isShowLogin}
        />
        <LandingPageBody handleClick={handleClick} isShowLogin={isShowLogin} />
        <Footer />
      </div>
    </div>
  );
}
