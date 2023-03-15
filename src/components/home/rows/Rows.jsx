import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./rows.css";

function Rows(props) {
  const [cart, setCart] = useState();
  const [addedItem, setAddedItem] = useState(false);

  function handleClick(e) {
    const buttonName = e.target.name;

    if (buttonName === props.td1) {
      setAddedItem(true);
    }
    setCart(props.td1);
  }

  useEffect(() => {
    if (cart) {
      props.toCheckout(addedItem);
      props.toCheckoutCart(cart);
    }
    // eslint-disable-next-line
  }, [cart, addedItem]);

  return (
    <tr>
      <td>{props.td1}</td>
      <td>{props.td2}</td>
      <td>
        <Button
          style={{ paddingTop: "2px", paddingBottom: "2px" }}
          name={props.td1}
          variant={addedItem ? "secondary" : "primary"}
          onClick={handleClick}
        >
          Buy
        </Button>
      </td>
    </tr>
  );
}

export default Rows;
