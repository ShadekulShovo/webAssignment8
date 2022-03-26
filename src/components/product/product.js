import React from "react";

const Product = (props) => {
  const { id, name, price, picture } = props.product;
  const { handleaddtocart } = props;
  return (
    <div className="product">
      <img src="{picture}" alt="" />
      <h3>Name:{name}</h3>
      <h4>Price:${price}</h4>

      <button
        onClick={() => props.handleaddtocart(props.product)}
        className="cart-button"
      >
        <p className="button-name">Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
