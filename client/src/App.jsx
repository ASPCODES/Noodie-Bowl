import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"
import "./styles/cart.scss"
import "./styles/shipping.scss"
import "./styles/confirmOrder.scss"
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmOrder" element={<ConfirmOrder />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
