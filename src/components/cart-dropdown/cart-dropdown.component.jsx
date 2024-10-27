import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go TO Check Out</Button>
    </div>
  );
};

export default CartDropdown;
