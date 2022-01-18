import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />
        
        <Route path="/products/" element={<ProductList />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default App;
