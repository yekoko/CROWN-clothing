//import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
//import { UserContext } from "../../contexts/user.context";
// import { CartContext } from "../../contexts/cart.context";
import { signOutStart } from "../../store/user/user.action";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./nav-bar.style";

const NavBar = () => {
  const dispatch = useDispatch();
  //const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = () => {
    dispatch(signOutStart());
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
