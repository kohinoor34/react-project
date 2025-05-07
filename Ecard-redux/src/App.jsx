
import "./App.css";
import Cart from './Component/Cart'
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Product />}/>
        <Route path="/cart" element={ <Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
