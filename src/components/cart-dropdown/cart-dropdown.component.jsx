import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { CartDropDownContainer, EmptyMessage, CartItems } from "./cart-dropdown.style";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonOptions={{ onClick: checkoutHandler }}>
        Go TO Check Out
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
