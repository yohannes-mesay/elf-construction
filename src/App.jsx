import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Tobe from "./Tobe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/company" element={<Home />} />
        <Route path="/departments" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/contact" element={<Home />} /> */}
        <Route path="*" element={<Tobe />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
