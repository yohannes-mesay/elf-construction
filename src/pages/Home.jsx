import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Hero/Slider";
import Info from "../components/Info/Info";
import Values from "../components/Info/Values";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div className="relative">
      <Header />
      <Info />
      <Navbar />
      <Hero />
      <Values />
    </div>
  );
}

export default Home;
