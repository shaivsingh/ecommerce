import React from "react";
import { Products } from "../../constants/products";
import "./details.css";

export default function Detail(props) {
  let data = {};
  data = Products.filter(ele => ele.productId === Number(props.productId));
  return (
    <>
      <div style={{ backgroundColor: "white", color: "black", marginTop: 80, height:'90vh' }}>
        <div style={{ marginTop: 50, position: "relative" }}>
          <h4 style={{ textAlign: "center", marginTop: 10 }}>Details</h4>
        </div>
        <div style={{ width: "40%", margin: 10, display: "inline-block" }}>
          <h3 style={{ textAlign: "center" }}>{data[0].productName}</h3>
          <img src={data[0].img} alt="check url" width="100%" />
        </div>
        <div
          style={{
            width: "40%",
            display: "inline-block",
            marginTop: "60px",
            marginLeft: "60px"
          }}
        >
          <table style={{ borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td>Mileage</td>
                <td style={rightCol}>240Kms</td>
              </tr>
              <tr>
                <td>Manufacturing Year</td>
                <td style={rightCol}>2009</td>
              </tr>
              <tr>
                <td>Model</td>
                <td style={rightCol}>Top</td>
              </tr>
              <tr>
                <td>Color</td>
                <td style={rightCol}>black</td>
              </tr>
              <tr>
                <td>Fuel Type</td>
                <td style={rightCol}>Diesel</td>
              </tr>
              <tr>
                <td>Transmission</td>
                <td style={rightCol}>Automatic</td>
              </tr>
              <tr>
                <td>Gear Box</td>
                <td style={rightCol}>5</td>
              </tr>
              <tr>
                <td>Color</td>
                <td style={rightCol}>black</td>
              </tr>
              <tr>
                <td>Fuel Type</td>
                <td style={rightCol}>Diesel</td>
              </tr>
              <tr>
                <td>Transmission</td>
                <td style={rightCol}>Automatic</td>
              </tr>
              <tr>
                <td>Gear Box</td>
                <td style={rightCol}>5</td>
              </tr>
            </tbody>
          </table>
          <button
            id={props.flag ? "delete" : "buy"}
            name={data[0]["productName"]}
            style={{
              padding: 15,
              borderRadius: 50,
              outline: "none",
              width: "50%",
              backgroundColor: "black",
              color: "white",
              opacity: 1,
              fontSize: "1em",
              cursor: "pointer"
            }}
            onClick={props.handleBuyButton}
          >
            {props.flag? "Remove" : "Buy"}
          </button>
        </div>
      </div>
    </>
  );
}

const rightCol = {
  paddingLeft: "20px"
};
