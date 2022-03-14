import "./styles.css";
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
export default function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
      <Link to="/cart">Cart</Link> | <Link to="/wishlist">Wishlist</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}
