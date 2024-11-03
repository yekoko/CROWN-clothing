// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
//import "./checkout-item.style.scss";
import {
  CheckOutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Value,
  Arrow,
  RemovedButton,
} from "./checkout-item.style";

const CheckoutItem = ({ cartItem }) => {
  // const { removeItemFromCart, addItemToCart, clearItemFromCart } =
  //   useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, quantity, price, imageUrl } = cartItem;
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#8722;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#43;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemovedButton onClick={clearItemHandler}>&#10005;</RemovedButton>
    </CheckOutItemContainer>
  );
};

export default CheckoutItem;
