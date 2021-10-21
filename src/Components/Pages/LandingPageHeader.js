import React from "react";
import SignIn from "./SignIn";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

export default function LandingPageHeader(props) {
  let history = useHistory();
  let dispatch = useDispatch();

  let user = useSelector((state) => state.userState.current_user);
  let signin = useSelector((state) => state.userState.signin);
  let items = useSelector((state) => state.itemState.items[0]);

  const myStyle = {
    height: "25px",
    fontSize: "20px",
    fontWeight: "0px",
  };

  const goHome = () => {
    history.push("/");
  };

  const handleMyPage = () => {
    dispatch({ type: "MYPAGE", mypage: true });
  };

  let categories = [];
  let counted = {};
  let countedCat = [];

  items.forEach((item) => categories.push(item.category));

  categories.forEach((cate) => {
    let count = 0;
    for (let i = 0; i < categories.length; i++) {
      if (cate === categories[i]) {
        count = count + 1;
      }
    }
    countedCat.push({ name: cate, amount: count });
    if (Object.keys(counted).includes(cate)) {
    } else {
      counted[cate] = cate;
    }
  });
  for (let i = 0; i < countedCat.length; i++) {
    if (countedCat[i].name === countedCat[i + 1].name) {
      countedCat.splice(i + 1);
    }
  }
  let sorted = countedCat.sort(
    (firstItem, secondItem) => firstItem.amount - secondItem.amount
  );
  let top5 = sorted.slice(Math.max(sorted.length - 5, 0)).reverse();
  console.log(top5);

  return (
    <div id="sep">
      <section id="header-help">
        <div>
          <button>Need Help? Contact Info</button>
        </div>
        <div>
          <button className="helpbutton" onClick={() => console.log("click")}>
            <img
              src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-cart-love-flatart-icons-flat-flatarticons.png"
              alt="cart"
              height="35px"
            />
          </button>
          <button className="helpbutton">
            <img
              src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-notification-social-media-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
              height="35px"
              alt="notifications"
            />
          </button>
        </div>
      </section>
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
          </form>
        </div>
        <div className="header-login">
          {user[0] ? (
            <div className="viewmypage">
              <button className="mypage-button" onClick={handleMyPage}>
                My Page
              </button>
              <button
                className="button"
                style={myStyle}
                onClick={props.handleLogout}
              >
                Log Out
              </button>
            </div>
          ) : (
            <button className="button" onClick={props.handleShowSignIn}>
              Log in
            </button>
          )}
          {signin ? (
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
      <div id="filter">
        <button>Filter</button>
         <div className="categories-bar">
            <ul className="categories">
              {top5 ? top5.map(cate => <li><a href="a">{cate.name}</a></li>) : null}
          </ul>
          </div>
      </div>
    </div>
  );
}
