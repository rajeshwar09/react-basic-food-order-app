import React, { useContext } from "react";
import Modal from "./ui/modal";
import CartContext from "../store/cart-context";
import { currencyFormatter } from "../util/formatting.js";
import Input from "./ui/input";
import Button from "./ui/button.jsx";
import UserProgressContext from "../store/user-progress-context.jsx";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form action="">
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="Email" type="email" id="email" />
        <Input label="Address" type="text" id="address" />
        <div className="control-row">
          <Input label="City" type="text" id="city" />
          <Input label="Postal Code" type="text" id="postal-code" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
