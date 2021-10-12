import React from "react";
import Footer from "../Components/Footer";
import LandingPageBody from "../Components/LandingPageBody";
import LandingPageHeader from "../Components/LandingPageHeader";

export default function LandingPage() {
  return (
    <div className="App">
      <div id="landing-page">
        <LandingPageHeader />
        <LandingPageBody />
        <Footer />
      </div>
    </div>
  );
}
