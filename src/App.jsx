import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Tobe from "./Tobe";
import Footer from "./ui/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Info />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/company" element={<Home />} />
        <Route path="/departments" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/contact" element={<Home />} /> */}
        <Route path="*" element={<Tobe />} />
      </Routes>
      {location.pathname === "/" && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
