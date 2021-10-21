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
   )
  let top5 = sorted.slice(Math.max(sorted.length - 5, 0)).reverse();
  console.log(top5)
 


  // still need to get the top 6 out of countCategories

  // Popular items to show on the home screen
  let popular = [];
  if (items) {
    for (let i = 0; i < 5; i++) {
      popular.push(items[i]);
    }
  }
  //

  return (
    <div>
      <section id="body">
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
            <h3>Highlighted Items</h3>
            <ul className="popular-items">
              {popular
                ? popular.map((pop) =>
                    pop.id < 5 ? (
                      <PopularItemCard item={pop} key={pop.id} />
                    ) : null
                  )
                : null}
            </ul>
          </div>
          <div className="extra-information-services">
            <a href="a">Contact</a>
          </div>
        </div>
        <div className="col-right">
          <div className="categories-bar">
            <ul className="categories">
              {top5 ? top5.map(cate => <li><a href="a">{cate.name}</a></li>) : null}
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
