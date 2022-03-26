import React from "react";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  function chooseME() {
    return Math.floor(Math.random() * cart.length);
  }

  const random = chooseME();

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
          <button onClick="chooseMe" className="btn btn-primary">
            Choose For Me
          </button>
          <button className="btn btn-danger"> Clear</button>
        </div>
        <div>
          <h2>{random}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
