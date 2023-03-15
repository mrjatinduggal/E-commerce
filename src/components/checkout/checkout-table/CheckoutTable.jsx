import React from "react";
import Table from "react-bootstrap/Table";

function CheckoutTable(props) {
  return (
    <Table className="text-light" bordered hover>
      <thead>
        <tr>
          <th>Selected items</th>
        </tr>
      </thead>
      <tbody>
        {props.cartData.map((value) => {
          return (
            <tr>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default CheckoutTable;
