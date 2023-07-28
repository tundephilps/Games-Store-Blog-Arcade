import React from "react";

import "./App.css";
import "./Index.css";
import "./Styles.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import aos (animate on scroll)
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";

import ShopData from "../src/components/Shop/ShopData";
import Header from "./components/Header/Header";
import Arcade from "./Pages/Arcade/Arcade";
import Footer from "./components/Footer/Footer";
import GameBlog from "./Pages/Game Blog/GameBlog";

function App() {
  const { productItems } = ShopData;

  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 200,
    });
  });

  const addToCart = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = cartItem.find((item) => item.id === product.id);
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = cartItem.find((item) => item.id === product.id);

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <div>
        <Router>
          <Header cartItem={cartItem} />
          <Routes>
            <Route
              path="/"
              element={
                <Home productItems={productItems} addToCart={addToCart} />
              }
            />
            <Route
              path="/Cart"
              element={
                <Cart
                  cartItem={cartItem}
                  addToCart={addToCart}
                  decreaseQty={decreaseQty}
                />
              }
            />

            <Route path="/GameBlog" element={<GameBlog />} />

            <Route path="/Arcade" element={<Arcade />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
