import React, { useState } from "react";
import HomeTable from "../../components/home/HomeTable";
import Button from "react-bootstrap/Button";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [checkoutState, setCheckoutState] = useState(false);
  const [updateCart, setUpdateCart] = useState();
  const navigate = useNavigate();

  function toCheckout(value) {
    setCheckoutState(value);
  }

  function toCheckoutCart(cart) {
    setUpdateCart(cart);
  }

  function handleClickEvent() {
    if (checkoutState) {
      navigate("/checkout", {
        state: { cart: updateCart },
      });
    }
  }

  return (
    <div>
      <h1>Product Listing</h1>
      <div className="home-table">
        <HomeTable toCheckout={toCheckout} toCheckoutCart={toCheckoutCart} />
      </div>

      <Button
        variant={checkoutState ? "primary" : "secondary"}
        className="checkout-button"
        onClick={handleClickEvent}
      >
        Checkout
      </Button>
    </div>
  );
}

export default Home;
