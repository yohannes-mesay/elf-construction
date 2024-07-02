import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Hero/Slider";
import Info from "../components/Info/Info";
import Recent from "../components/Info/Recent";
import Values from "../components/Info/Values";
import Footer from "../ui/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Values />
      <Recent />
    </div>
  );
}

export default Home;
