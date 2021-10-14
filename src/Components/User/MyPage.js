import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MyPage() {
  let user = useSelector((state) => state.userState.current_user);
  let items = useSelector((state) => state.itemState.items);
  let myItems = items[0].filter((item) => item.user_id === user[0].id);

  const handleClick = () => {
    console.log(user);
  };

  return (
    <div>
      <div>
        <h1>Welcome {user[0].name}</h1>
        <h2>you have {myItems.length} items</h2>
        <Link to="/home">Home</Link>
        <button onClick={handleClick}>here</button>
      </div>
      <div className="mypage">
        <div className="mypage-left">
          {/* <img> *PUT PAGE ICON HERE</img> */}
                  <div className="mypage-dashboard">
                      {/* li with transactions, items, cart, wishlist, bio */}
          </div>
        </div>
        <div className="mypage-right">
          <div className="mypage-header">
            {/* h1 welcome to your dashboard */}
            {/* <img>PUT PROFILE ICON</img> */}
            <h5>{user[0].name}</h5>
          </div>
          <div className="mypage-info">
                      <div className="mypage-bio">
                          {/* profile photo img */}
                          {/* profile bio items */}
            </div>
                      <div className="mypage-items">
                          {/* scrollable list of my items */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
