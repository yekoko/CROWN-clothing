import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonOptions={{ onClick: checkoutHandler }}>
        Go TO Check Out
      </Button>
    </div>
  );
};

export default CartDropdown;
