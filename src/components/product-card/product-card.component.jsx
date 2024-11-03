// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
//import "./product-card.style.scss";
import {ProductCartContainer, Footer, Name, Price} from "./product-card.style";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  //const { addItemToCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        buttonOptions={{ onClick: addProductToCart }}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
