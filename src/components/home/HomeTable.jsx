import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Rows from "./rows/Rows";
import "./home-table.css";

function HomeTable(props) {
  const [finalCart, setFinalCart] = useState([]);

  function toCheckout(value) {
    props.toCheckout(value);
  }

  function toCheckoutCart(cart) {
    setFinalCart((prev) => {
      return [...prev, cart];
    });
  }

  useEffect(() => {
    props.toCheckoutCart(finalCart);
    // eslint-disable-next-line
  }, [finalCart]);

  return (
    <Table className="table-parent text-light" >
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <Rows
          toCheckoutCart={toCheckoutCart}
          toCheckout={toCheckout}
          td1={"Shampoo"}
          td2={"5$"}
        />
        <Rows
          toCheckoutCart={toCheckoutCart}
          toCheckout={toCheckout}
          td1={"Biscuit"}
          td2={"3$"}
        />
        <Rows
          toCheckoutCart={toCheckoutCart}
          toCheckout={toCheckout}
          td1={"Conditioner"}
          td2={"4$"}
        />
        <Rows
          toCheckoutCart={toCheckoutCart}
          toCheckout={toCheckout}
          td1={"Flour"}
          td2={"15$"}
        />
        <Rows
          toCheckoutCart={toCheckoutCart}
          toCheckout={toCheckout}
          td1={"Facewash"}
          td2={"8$"}
        />
        <Rows
          toCheckoutCart={toCheckoutCart}
          toCheckout={toCheckout}
          td1={"Almonds"}
          td2={"5$"}
        />
        <Rows
          toCheckoutCart={toCheckoutCart}
          toCheckout={toCheckout}
          td1={"Cashew"}
          td2={"6$"}
        />
        <Rows
          toCheckoutCart={toCheckoutCart}
          toCheckout={toCheckout}
          td1={"Tea Bag"}
          td2={"3$"}
        />
        <Rows
          toCheckoutCart={toCheckoutCart}
          toCheckout={toCheckout}
          td1={"Coffee"}
          td2={"5$"}
        />
        <Rows
          toCheckoutCart={toCheckoutCart}
          toCheckout={toCheckout}
          td1={"Detergent"}
          td2={"12$"}
        />
      </tbody>
    </Table>
  );
}

export default HomeTable;
