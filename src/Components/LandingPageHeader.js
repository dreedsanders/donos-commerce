import React from "react";
import SignIn from "./SignIn";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function LandingPageHeader(props) {

  let history = useHistory();
      let user = useSelector((state) => state.userState.current_user);


  const goHome = () => {
    history.push("/")
  }

  const handleCheck = () => {
    console.log(user)
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
            onClick={goHome}
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
          <button onClick={handleCheck}>check</button>
          {props.success || user.name ? (
            <div>
            <button className="button" onClick={props.handleLogout}>
              Log Out
            </button>
            <Link to="mypage" >My Page </Link>
            </div>
          ) : (
            <button className="button" onClick={props.handleClick}>
              Log in
            </button>
          )}
          {props.logged ? (
            <SignIn
              handleClick={props.handleClick}
              success={props.success}
              setSuccess={props.setSuccess}
              setLogged={props.setLogged}
            />
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}
