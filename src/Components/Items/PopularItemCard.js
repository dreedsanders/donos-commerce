import React from "react";

export default function PopularItemCard(props) {
  return (
    <div className="popularitem">
      <img
        src="https://img.icons8.com/ios/50/000000/sweater.png"
        height="50px"
        alt="yes"
      />
      <h5>{props.item.name}</h5>
      <button>Buy Now</button>
    </div>
  );
}
