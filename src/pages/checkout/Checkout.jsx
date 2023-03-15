import React from "react";
import "./checkout.css";
import CheckoutTable from "./../../components/checkout/checkout-table/CheckoutTable";
import InfoForm from "../../components/checkout/info-form/InfoForm";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const cartData = location.state.cart;
  return (
    <div>
      <h1>Checkout Page</h1>
      <div className="checkout-table-parent">
        <CheckoutTable cartData={cartData} />
        <br />
        <InfoForm cartData={cartData} />
      </div>
    </div>
  );
}

export default Checkout;
