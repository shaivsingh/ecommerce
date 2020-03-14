import React from "react";
import "./style.css";
import Modal from "../../components/modal";
import { Products } from "../../constants/products";
import Header from "../../components/header";
import Detail from "../details";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplay: "none",
      name: "",
      cart: [],
      type: "",
      details: "",
      flag: ""
    };
  }

  handleBuyButton = e => {
    // console.log(e.target.name);
    if (e.target.id === "close") {
      this.setState({
        modalDisplay: "none",
        name: "",
        type: ""
      });
    } else if (e.target.id === "cart") {
      this.setState({ modalDisplay: "block", type: "cart" });
    } else if (e.target.id === "delete") {
      let { cart } = this.state;
      cart.splice(cart.indexOf(e.target.name), 1);
      this.setState({ modalDisplay: "block", type: "cart", flag: '' });
    } else {
      let { cart } = this.state;
      let data = Products.filter(
        (ele, ind) => ele.productName === e.target.name
      );
      if (cart.find(ele => ele.productName===e.target.name)) {
        alert("item already present in cart");
      } else {
        cart.push(...data);
        this.setState({
          name: e.target.name,
          modalDisplay: "block",
          type: "msg"
        });
      }
    }
  };
  
  handleDetails = e => {
    this.setState({
      details: e.target.id,
      flag: this.state.cart.filter(ele => ele.productId === Number(e.target.id))
        .length
    });
  };

  render() {
    console.log(this.state.cart);
    return (
      <>
        <div className="container">
          <header>
            <Header handleBuyButton={this.handleBuyButton} />
          </header>
          {this.state.details ? (
            <div>
              <Detail
                productId={this.state.details}
                cart={this.state.cart}
                handleBuyButton={this.handleBuyButton}
                flag={this.state.flag}
              />
            </div>
          ) : (
            <>
              <div
                style={{
                  background: "url(carsBack.jpg) no-repeat center center/cover",
                  boxShadow: "1px 1px 1px 12px black",
                  height: "100vh"
                }}
              ></div>
              <div className="flex-container">
                {Products.map((ele, ind) => {
                  return (
                    <div className="card" key={ind}>
                      <div className="productTitle">
                        <h3>{ele.productName}</h3>
                      </div>
                      <div className="image">
                        <img
                          src={ele["img"]}
                          width="100%"
                          height="180px"
                          alt="check url"
                          draggable="false"
                        ></img>
                        <div className="overlay">
                          <button
                            id={ele["addedToCart"] ? "delete" : "buy"}
                            name={ele["productName"]}
                            style={{
                              padding: 15,
                              borderRadius: 50,
                              outline: "none",
                              width: "100%",
                              backgroundColor: "black",
                              color: "white",
                              opacity: 1,
                              fontSize: "1em",
                              cursor: "pointer"
                            }}
                            onClick={this.handleBuyButton}
                          >
                            {ele["addedToCart"] ? "Remove" : "Buy"}
                          </button>
                        </div>
                      </div>
                      <div className="description">
                        <p>{ele.description}</p>
                        <p
                          style={{
                            width: "50%",
                            display: "inline",
                            marginRight: 10
                          }}
                        >
                          Price : ${ele.price}
                        </p>
                        <button
                          id={ele.productId}
                          style={{}}
                          onClick={this.handleDetails}
                        >
                          details...
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <Modal
          display={this.state.modalDisplay}
          handleModelClose={this.handleBuyButton}
          name={this.state.name}
          cart={this.state.cart}
          type={this.state.type}
        />
      </>
    );
  }
}
