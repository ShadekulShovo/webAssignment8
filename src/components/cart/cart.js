import React from "react";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  return (
    <div className="cart">
      <h1>Select Your Bat</h1>
      <p>Select Item Length:{cart.length}</p>
      <div>
        {cart.map((item) => (
          <h4>
            <li>{item.name}</li>
          </h4>
        ))}
        <div>
          <button>Choose For Me</button>
          <button> Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
