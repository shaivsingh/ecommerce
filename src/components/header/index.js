import React from 'react';

export default function Header(props){
    return (
      <div className="header">
        <h2
          style={{
            color: "white",
            textAlign: "center",
            display: "inline-block"
          }}
        >
          Welcome to Car Expo 2020
        </h2>
        <div
          onClick={props.handleBuyButton}
          style={{
            borderRadius: 35,
            outline: "none",
            // position: "fixed",
            right: "10px",
            zIndex: 1,
            width: "50px",
            height: "50px",
            float: "right",
            marginTop: 10,
            marginRight: 10
          }}
        >
          <img
            src="assets/redCart.png"
            alt="check url"
            width="100%"
            id="cart"
          />
        </div>
      </div>
    );
}