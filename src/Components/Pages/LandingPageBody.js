import React from "react";
import SignIn from "./SignIn";
import { useSelector, useDispatch } from "react-redux";
import ItemCard from "../Items/ItemCard";
import PopularItemCard from "../Items/PopularItemCard";
import MyPage from "../User/MyPage";

export default function LandingPageBody(props) {
  let user = useSelector((state) => state.userState.current_user);
  let items = useSelector((state) => state.itemState.items[0]);
  let mypage = useSelector((state) => state.userState.mypage);
  let dispatch = useDispatch();
  let signin = useSelector((state) => state.userState.signin);

  let handleMyPage = () => {
    dispatch({ type: "CLOSEPAGE", mypage: false });
  };

  let categories = [];
  items.map((item) => categories.push(item.category));
  let topcategories = [...new Set(categories)]
  console.log(topcategories)

  let popular = [];
  if (items) {
    for (let i = 0; i < 5; i++) {
      popular.push(items[i]);
    }
  }

  return (
    <div>
      {/* Body of Page has two sections */}
      <section id="body">
        {/* Left Section Body has "suggested items"(top)
            and "most searched" low, and mini links for careers etc.(lowest) */}
        <div className="col-left">
          <div className="body-log-in">
            <p>
              Log in to add items to wishlist, add items to cart, and to see
              reviews
            </p>
            {user[0] ? (
              <button className="button" onClick={props.handleLogout}>
                Log Out
              </button>
            ) : (
              <button className="button" onClick={props.handleShowSignIn}>
                Log in
              </button>
            )}
            {signin ? (
              <SignIn handleCloseSignIn={props.handleCloseSignIn} />
            ) : (
              ""
            )}
          </div>
          <div className="body-popular-items">
            <h3>Popular Items</h3>
            <ul className="popular-items">
              {popular
                ? popular.map((pop) =>
                    pop.id < 5 ? (
                      <PopularItemCard item={pop} key={pop.id} />
                    ) : null
                  )
                : null}
              {/* INSERT POPULAR ITEM CARD LIST */}
            </ul>
          </div>
          <div className="extra-information-services">
            <a href="a">Contact</a>
          </div>
        </div>
        {/* Right Section of Body has a infinite scroll of 
            random items from the store. Each item with item and how many buys, also with add
            to cart button */}

        <div className="col-right">
          <div className="categories-bar">
            <ul className="categories">
              {/* {topcategories.forEach((category) => (
                <li>
                  <a href="a">Home</a>
                </li>
              ))} */}

              <li>
                <a href="a">Electronics</a>
              </li>
              <li>
                <a href="a">Books</a>
              </li>
              <li>
                <a href="a">Garden</a>
              </li>
              <li>
                <a href="a">Apparel</a>
              </li>
              <li>
                <a href="a">Houseware</a>
              </li>
              <li>
                <a href="a">Furniture</a>
              </li>
              <li>
                <a href="a">Saved</a>
              </li>
            </ul>
          </div>
          <div className="items-scroll">
            {mypage ? <MyPage handleMyPage={handleMyPage} /> : null}
            {items
              ? items.map((item) => <ItemCard item={item} key={item.id} />)
              : null}
          </div>
        </div>
      </section>
    </div>
  );
}
