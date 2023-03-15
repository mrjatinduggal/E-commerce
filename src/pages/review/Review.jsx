import React from "react";
import ReviewComponent from "../../components/review-component/ReviewComponent";
import CheckoutTable from "./../../components/checkout/checkout-table/CheckoutTable";
import { useLocation } from "react-router-dom";

function Review() {
  const location = useLocation();
  const { cart, firstName, lastName, email, phoneNumber } = location.state;
  return (
    <div>
      <h1>Review and Submit order page</h1>
      <div className="checkout-table-parent">
        <CheckoutTable cartData={cart} />
        <br />
        <ReviewComponent userInfo={[firstName, lastName, email, phoneNumber]} />
      </div>
    </div>
  );
}

export default Review;
