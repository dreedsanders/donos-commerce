import React from "react";
import SignIn from "../Pages/SignIn";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

export default function LandingPageHeader(props) {

  let history = useHistory();
  let dispatch = useDispatch();

  let user = useSelector((state) => state.userState.current_user);
  let signedin = useSelector((state) => state.userState.logged);


  const myStyle = {
    height: "25px",
    fontSize: "20px",
    fontWeight: "0px"
  }

  const goHome = () => {
    history.push("/")
  }

  const handleCheck = () => {
    console.log(user, "sign in box?", props.logged, "signed in?", props.success, "state signed in?", signedin)
  }

  const handleMyPage = () => {
    dispatch({ type: "MYPAGE", mypage: true})
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
              placeholder={"search then press enter"}
              autoComplete="off"
            />
            {/* <button type="submit">
              <img
                src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-search-ecommerce-kiranshastry-lineal-color-kiranshastry.png"
                width="35px"
                height="40px"
                alt="yes"
              />
            </button> */}
          </form>
        </div>
        <div className="header-login">
          <button onClick={handleCheck}>check</button>
          {props.success ? (
            <div className="viewmypage">
              <button className="mypage-button" onClick={handleMyPage}>My Page</button>
              {/* <Link to="mypage" className="mypage-button">
                My Page{" "}
              </Link> */}
              <button
                className="button"
                style={myStyle}
                onClick={props.handleLogout}
              >
                Log Out
              </button>
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
