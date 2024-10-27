import Button from "../button/button.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item"></div>
      <Button>Go TO Check Out</Button>
    </div>
  );
};

export default CartDropdown;
