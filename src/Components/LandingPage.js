import React from "react";

export default function LandingPage() {
  return (
    <div id="landing-page">
      {/* Landing Header with Logo(Left), search bar(middle),
            and button to login(right) */}
      <section id="header">
        <div className="header-icon icon">
          <img src="https://img.icons8.com/dusk/64/000000/e-commerce.png" />
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
              />
            </button>
          </form>
        </div>
        <div className="header-login">
          <button className="button">Log in</button>
        </div>
      </section>

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
            <button>Log in</button>
          </div>
          <div className="body-popular-items">
            <h3>Popular Items</h3>
            <ul className="popular-items">
              <li>
                {" "}
                <img src="https://img.icons8.com/ios-filled/50/000000/sell.png" />
                <h3>Item Name</h3>
                <h5>User Name</h5>
              </li>
              <li>
                {" "}
                <img src="https://img.icons8.com/ios-filled/50/000000/sell.png" />
                <h3>Item Name</h3>
                <h5>User Name</h5>
              </li>
              <li>
                {" "}
                <img src="https://img.icons8.com/ios-filled/50/000000/sell.png" />
                <h3>Item Name</h3>
                <h5>User Name</h5>
              </li>
            </ul>
          </div>
          <div className="extra-information-services">
            <a href="a">Careers</a>
            <a href="a">About</a>
            <a href="a">Contact</a>
            <a href="a">Developers</a>
            <a href="a">Privacy</a>
            <a href="a">Community Guidelines</a>
          </div>
        </div>
        {/* Right Section of Body has a infinite scroll of 
            random items from the store. Each item with item and how many buys, also with add
            to cart button */}

        <div className="col-right">
          <div className="items-scroll">
            <div className="item">
              <div className="item-description">
                {/* <img> user photo </img> */}
                {/* <h2>User name</h2> */}
                {/* <p> item info</p> */}
              </div>
              <div className="item-picture">
                {/* <img> item photo </img> */}
              </div>
              <div className="item-activity">
                {/* <img> icon count for how many people have this in cart</img> */}
                {/* <img> heart to like and add to wishlist</img> */}
                {/* <img> cart icon to add to cart</img> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="landing-footer">
        <div className="landing-info">
          {/* <h4> Made by Dono</h4> */}
          {/* button to scroll to top */}
        </div>
      </section>

      {/* Landing Page footer with "go to top" button, 
            and my "made by statement" */}
    </div>
  );
}
