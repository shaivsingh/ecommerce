import React from "react";
import "./App.css";
import ProductList from "./views/productList";
import Routes from "./routes";

function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Routes>
        <ProductList />
      </Routes>
    </div>
  );
}

export default App;
