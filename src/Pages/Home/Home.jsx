import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Hero from "../../components/Hero/Hero";
import Mask from "../../components/Mask/Mask";
import Release from "../../components/Releases/Release";
import Featured from "../../components/Featured/Featured";
import Shop from "../../components/Shop/Shop";
import Blog from "../../components/Blog/Blog";
import Newsletter from "../../components/Footer/Newsletter";

const Home = ({ productItems, cartItem, addToCart }) => {
  return (
    <div>
      <Hero />
      <Mask />
      <Release />
      <Featured />
      <Shop
        productItems={productItems}
        cartItem={cartItem}
        addToCart={addToCart}
      />
      <Blog />
      <Newsletter />
    </div>
  );
};

export default Home;
