import React from 'react';

export default function Cart(props){
    if (props.cart.length) {
      let total = 0;
      props.cart.forEach(ele => {
        total = total + ele.price;
      });
      return (
        <>
          <div
            id="myModal"
            className="modal"
            style={{ display: props.display }}
          >
            <div className="modal-content">
              <h3 style={{ textAlign: "center" }}>My Cart</h3>
              <span
                id="close"
                className="close"
                onClick={props.handleModelClose}
              >
                &times;
              </span>
              <table style={{ width: "80%", margin: "auto" }}>
                <tbody>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                  {props.cart.map((ele, ind) => {
                    return (
                      <tr key={ind}>
                        <td>{ele.productName}</td>
                        <td>${ele.price}</td>
                        <td>
                          <button
                            id="delete"
                            name={ele}
                            onClick={props.handleModelClose}
                            style={{ outline: "none" }}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>Total cost</td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div
            id="myModal"
            className="modal"
            style={{ display: props.display }}
          >
            <div className="modal-content">
              <h3 style={{ textAlign: "center" }}>My Cart</h3>
              <span
                id="close"
                className="close"
                onClick={props.handleModelClose}
              >
                &times;
              </span>
              <p>nothing to show</p>
            </div>
          </div>
        </>
      );
    }
}