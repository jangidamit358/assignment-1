import React from "react";
import "../style.css";

export const Showproduct = ({ data }) => {
  return (
    <div className="Box" style={{ backgroundImage: `url(${data.images[0]})` }}>
      <div className="textBox">
        <h5>{data.title}</h5>
        <p className="price">price {data.discounted_price}</p>
      </div>
    </div>
  );
};
