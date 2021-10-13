import React from "react";
import SignIn from "./SignIn";

export default function LandingPageHeader(props) {

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
          <button className="button" onClick={props.handleClick}>
            Log in
          </button>
          {props.isShowLogin ? (
            <SignIn isShowLogin={props.isShowLogin} handleClick={props.handleClick} />
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}
