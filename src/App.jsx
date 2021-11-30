import "./App.css";
import {
  Cart,
  Home,
  Login,
  ProductList,
  Register,
  SingleProductPage,
  NotFound,
} from "./pages";
import { Route, Routes, Link, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products/:category" element={<ProductList />} />

      <Route path="/product/:id" element={<SingleProductPage />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
