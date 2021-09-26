import React from 'react'

export default function LandingPageHeader() {
    return (
      <div>
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
      </div>
    );
}
