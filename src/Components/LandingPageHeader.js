import React, { useState } from "react";
import SignIn from "./SignIn";

export default function LandingPageHeader() {
     const [isShowLogin, setIsShowLogin] = useState(true);

     const handleLoginClick = () => {
       setIsShowLogin((isShowLogin) => !isShowLogin);
     };

  const handleClick = () => {
    handleLoginClick()
  }

  return (
    <div>
      {/* Landing Header with Logo(Left), search bar(middle),
            and button to login(right) */}
      <section id="header">
        <div className="header-icon icon">
          <img
            src="https://img.icons8.com/dusk/64/000000/e-commerce.png"
            alt="yes"
          />
        </div>
        <div className="header-search">
          <form className="searchbar">
            <input
              type="search"
              className="search-input"
              name="search"
              placeholder={"Search Marketplace"}
              autoComplete="off"
            />
            <button type="submit">
              <img
                src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-search-ecommerce-kiranshastry-lineal-color-kiranshastry.png"
                width="35px"
                height="40px"
                alt="yes"
              />
            </button>
          </form>
        </div>
        <div className="header-login">
          <button className="button" onClick={handleClick}>
            Log in
          </button>
          {isShowLogin ? (
            <SignIn isShowLogin={isShowLogin} handleClick={handleClick} />
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}
