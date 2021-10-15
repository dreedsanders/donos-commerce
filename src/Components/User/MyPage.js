import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import PopularItemCard from "../Items/PopularItemCard";

export default function MyPage() {

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
            <ul>
              <li>Transactions</li>
              <li>Items</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Bio</li>
            </ul>
          </div>
        </div>
        <div className="mypage-right">
          <div className="mypage-header">
            <h1>Welcome To Your Dashboard</h1>
            <img
              src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
              height="50px"
            />
            <h5>{user[0].name}</h5>
          </div>
          <div className="mypage-info">
            <div className="mypage-bio">
              {/* profile photo img */}
              <img
                src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                height="50px"
              />
              ${user[0].account_balance}
            </div>
            <div className="mypage-items">
              <h5>Most Recent Items</h5>
              {/* scrollable list of my items */}
              {myItems.map((item) =>
                item.id < 15 ? (
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
