import { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Coin from "./pages/coin/Coin";
import Footer from "./component/footer/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Coin/:coinId" element={<Coin/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
