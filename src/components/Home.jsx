import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Slider from "./Hero/Slider";
import Info from "./Info/Info";
import Navbar from "./Navbar/Navbar";

function Home() {
  return (
    <div className="relative">
      <Header />
      <Info />
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
