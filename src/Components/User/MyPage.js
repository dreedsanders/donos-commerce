import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import PopularItemCard from "../Items/PopularItemCard";

export default function MyPage(props) {

  let history = useHistory();

  let user = useSelector((state) => state.userState.current_user);
  let items = useSelector((state) => state.itemState.items);
  let myItems = items[0].filter((item) => item.user_id === user[0].id);

   const goHome = () => {
     history.push("/");
   };

  return (
    <div>
      <div className="mypage">
        <div className="mypage-left">
          <img
            src="https://img.icons8.com/dusk/64/000000/e-commerce.png"
            alt="yes"
            onClick={goHome}
            id="mypage-icon"
          />
          <div className="mypage-dashboard">
            <ul id="categories">
              <li>
                <div id="single-category">
                  <img
                    src="https://img.icons8.com/office/50/000000/ledger.png"
                    alt="transactions"
                  />
                  Transactions{" "}
                </div>
              </li>
              <li>
                <div id="single-category">
                  {" "}
                  <img
                    src="https://img.icons8.com/color/48/000000/overview-pages-3.png"
                    alt="items"
                  />
                  All Items{" "}
                </div>
              </li>
              <li>
                <div id="single-category">
                  <img
                    src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-cart-love-flatart-icons-flat-flatarticons.png"
                    alt="cart"
                  />
                  Cart{" "}
                </div>
              </li>
              <li>
                <div id="single-category">
                  <img
                    src="https://img.icons8.com/cute-clipart/64/000000/wish-list.png"
                    alt="wishlist"
                  />
                  Wishlist{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mypage-right">
          <div className="mypage-header">
            <div>
            <h1>{user[0].name}'s Dashboard</h1>
              <p>Welcome to your Store Dashboard </p>
            </div>
            <div>
              <img
                src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                height="50px"
                alt="profile"
              />
              <h5>{user[0].name}</h5>
            </div>
          </div>
          <div className="mypage-info">
            <div className="mypage-bio">
              {/* profile photo img */}
              <div>
                <img
                  src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                  height="300px"
                  alt="profile"
                />
                <h4>My Profile</h4>
              </div>
              <p>Last log in: (login model that creates instances)</p>
              <div>
                <h4>Account Balance </h4>
                ${user[0].account_balance}
                <br></br>
                <br></br>
                <br></br>
                <button>Edit</button>
              </div>
            </div>
            <div className="mypage-items">
              <h5>Recent Items</h5>
              {/* scrollable list of my items */}
              {myItems.map((item) =>
                item.id < 25 ? (
                  <PopularItemCard item={item} key={item.id} />
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
