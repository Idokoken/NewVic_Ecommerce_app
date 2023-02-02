import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Messages from "./components/Messages";
import Errorpage from "./components/Errorpage";
import * as dotenv from "dotenv";
dotenv.config();

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="About" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
