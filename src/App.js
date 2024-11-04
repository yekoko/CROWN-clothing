import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import NavBar from "./components/nav-bar/nav-bar.component";
import Authentication from "./routes/authentication/authentication.component";
import CheckOut from "./routes/checkout/checkout.component";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     dispatch(setCurrentUser(user));
  //   });
  //   return unSubscribe;
  // }, [dispatch]);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
