import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export default function ItemCard(props) {

  let dispatch = useDispatch();
  let history = useHistory();

  const handleItemClick = (e) => {
    console.log(props.item)
    dispatch({ type: "CLICK", current_item: props.item })
    history.push("/itempage")

  }
  return (
    <div className="item" onClick={handleItemClick}>
      <div className="item-description">
        <p>Item Name.</p>
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
          <p>Add to wishlist</p>
        </div>
      </div>
    </div>
  );
}
