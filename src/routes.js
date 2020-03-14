import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Cart from "./views/cart";
import ProductList from "./views/productList";
import Detail from "./views/details";
import Header from "./components/header";

export default function Routes(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3 style={{ color: "red" }}>
        No matching url for<code>{location.pathname}</code>
      </h3>
    </div>
  );
}
// const liStyle = {
//   display: "inline-block",
//   margin: "10px",
//   padding: "10px 20px",
//   borderRadius: "4px",
//   boxShadow: "0px 0px 3px 2px #ccc"
// };
// const linkStyle = {
//   textDecoration: "none",
//   color: "black"
// };
