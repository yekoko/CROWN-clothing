import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.reducer";
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
  const dispatch = useDispatch();
  const { name, quantity, price, imageUrl } = cartItem;

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

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
