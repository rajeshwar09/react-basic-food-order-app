import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./ui/button";
import CartContext from "../store/cart-context";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);


  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>React Food App</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
