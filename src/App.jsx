import "./App.css";
import {
  Cart,
  Home,
  Login,
  ProductList,
  Register,
  SingleProductPage,
  NotFound,
  Success,
} from "./pages";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products/:category" element={<ProductList />} />

      <Route path="/product/:id" element={<SingleProductPage />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

      <Route path="/register" element={<Register />} />
      <Route path="/success" element={<Success />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
