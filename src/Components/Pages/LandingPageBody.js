import React from "react";
import SignIn from "../Pages/SignIn";
import { useSelector } from "react-redux";
import ItemCard from "../Items/ItemCard";
import PopularItemCard from "../Items/PopularItemCard";
import MyPage from "../User/MyPage";

export default function LandingPageBody(props) {
  // let user = useSelector((state) => state.userState.current_user);
  let items = useSelector((state) => state.itemState.items[0]);
  let mypage = useSelector((state) => state.userState.mypage);

  let popular = [];
  for (let i = 0; i < 5; i++) {
    popular.push(items[i]);
  }
  // popular.forEach(pop => console.log(pop.name))

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
            {props.success ? (
              <button className="button" onClick={props.handleLogout}>
                Log Out
              </button>
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
          <div className="body-popular-items">
            <h3>Popular Items</h3>
            <ul className="popular-items">
              {popular.map((pop) =>
                pop.id < 5 ? <PopularItemCard item={pop} /> : null
              )}

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
              <li>
                <a href="a">Home</a>
              </li>
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
            {mypage ? <MyPage /> : null}
            {items
              ? items.map((item) => <ItemCard item={item} key={item.id} />)
              : null}
          </div>
        </div>
      </section>
    </div>
  );
}
