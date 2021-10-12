import React from "react";

export default function LandingPageBody() {
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
            <button>Log in</button>
          </div>
          <div className="body-popular-items">
            <h3>Popular Items</h3>
            <ul className="popular-items">
              <li className="item">
                {" "}
                <img
                  src="https://img.icons8.com/ios/50/000000/sweater.png"
                  height="50px"
                  alt="yes"
                />
                <div>
                  <h4>Item Name</h4>
                  <h5>User Name</h5>
                </div>
                <button>Buy Now</button>
              </li>
              <li className="item">
                {" "}
                <img
                  src="https://img.icons8.com/ios/50/000000/sweater.png"
                  height="50px"
                  alt="yes"
                />
                <div>
                  <h4>Item Name</h4>
                  <h5>User Name</h5>
                </div>
                <button>Buy Now</button>
              </li>
              <li className="item">
                {" "}
                <img
                  src="https://img.icons8.com/ios/50/000000/sweater.png"
                  height="50px"
                  alt="yes"
                />
                <div>
                  <h4>Item Name</h4>
                  <h5>User Name</h5>
                </div>
                <button>Buy Now</button>
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
            <div className="item">
              <div className="item-user">
                <img
                  src="https://img.icons8.com/cute-clipart/64/000000/name.png"
                  alt="yes"
                />
                <h3>User Name</h3>
              </div>
              <div className="item-description">
                <p>
                  Nostrud laborum pariatur ipsum Lorem dolor fugiat aute elit
                  ad.
                </p>
                <div className="item-picture">
                  <div>
                    <img
                      src="https://img.icons8.com/ios/50/000000/ingredients.png"
                      alt="yes"
                    />
                  </div>
                  <br></br>
                  <div>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="item-activity">
                <div>
                  <img
                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-black-friday-flatart-icons-outline-flatarticons.png"
                    alt="yes"
                  />
                  <p>5 people have this in their cart</p>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-like-notifications-justicon-lineal-justicon.png"
                    alt="yes"
                  />
                  <p>5 people have this on their wishlist</p>
                </div>
              </div>
            </div>
            <br></br>
            <div className="item">
              <div className="item-user">
                <img
                  src="https://img.icons8.com/cute-clipart/64/000000/name.png"
                  alt="yes"
                />
                <h3>User Name</h3>
              </div>
              <div className="item-description">
                <p>
                  Nostrud laborum pariatur ipsum Lorem dolor fugiat aute elit
                  ad.
                </p>
                <div className="item-picture">
                  <div>
                    <img
                      src="https://img.icons8.com/ios/50/000000/ingredients.png"
                      alt="yes"
                    />
                  </div>
                  <br></br>
                  <div>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="item-activity">
                <div>
                  <img
                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-black-friday-flatart-icons-outline-flatarticons.png"
                    alt="yes"
                  />
                  <p>5 people have this in their cart</p>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-like-notifications-justicon-lineal-justicon.png"
                    alt="yes"
                  />
                  <p>5 people have this on their wishlist</p>
                </div>
              </div>
            </div>
            <br></br>
            <div className="item">
              <div className="item-user">
                <img
                  src="https://img.icons8.com/cute-clipart/64/000000/name.png"
                  alt="yes"
                />
                <h3>User Name</h3>
              </div>
              <div className="item-description">
                <p>
                  Nostrud laborum pariatur ipsum Lorem dolor fugiat aute elit
                  ad.
                </p>
                <div className="item-picture">
                  <div>
                    <img
                      src="https://img.icons8.com/ios/50/000000/ingredients.png"
                      alt="yes"
                    />
                  </div>
                  <br></br>
                  <div>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="item-activity">
                <div>
                  <img
                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-black-friday-flatart-icons-outline-flatarticons.png"
                    alt="yes"
                  />
                  <p>5 people have this in their cart</p>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-like-notifications-justicon-lineal-justicon.png"
                    alt="yes"
                  />
                  <p>5 people have this on their wishlist</p>
                </div>
              </div>
            </div>
            <br></br>
            <div className="item">
              <div className="item-user">
                <img
                  src="https://img.icons8.com/cute-clipart/64/000000/name.png"
                  alt="yes"
                />
                <h3>User Name</h3>
              </div>
              <div className="item-description">
                <p>
                  Nostrud laborum pariatur ipsum Lorem dolor fugiat aute elit
                  ad.
                </p>
                <div className="item-picture">
                  <div>
                    <img
                      src="https://img.icons8.com/ios/50/000000/ingredients.png"
                      alt="yes"
                    />
                  </div>
                  <br></br>
                  <div>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="item-activity">
                <div>
                  <img
                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-black-friday-flatart-icons-outline-flatarticons.png"
                    alt="yes"
                  />
                  <p>5 people have this in their cart</p>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-like-notifications-justicon-lineal-justicon.png"
                    alt="yes"
                  />
                  <p>5 people have this on their wishlist</p>
                </div>
              </div>
            </div>
            <br></br>
            <div className="item">
              <div className="item-user">
                <img
                  src="https://img.icons8.com/cute-clipart/64/000000/name.png"
                  alt="yes"
                />
                <h3>User Name</h3>
              </div>
              <div className="item-description">
                <p>
                  Nostrud laborum pariatur ipsum Lorem dolor fugiat aute elit
                  ad.
                </p>
                <div className="item-picture">
                  <div>
                    <img
                      src="https://img.icons8.com/ios/50/000000/ingredients.png"
                      alt="yes"
                    />
                  </div>
                  <br></br>
                  <div>
                    <button>Add to cart</button>
                  </div>
                </div>
              </div>
              <div className="item-activity">
                <div>
                  <img
                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cart-black-friday-flatart-icons-outline-flatarticons.png"
                    alt="yes"
                  />
                  <p>5 people have this in their cart</p>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-like-notifications-justicon-lineal-justicon.png"
                    alt="yes"
                  />
                  <p>5 people have this on their wishlist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
