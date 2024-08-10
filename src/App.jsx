import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/Offer/Offer";
import Man from "./components/Prodects/Man";
import Women from "./components/Prodects/Women";
import ShopIcons from "./components/shopIcons/shopIcons";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      <Offer />
      <ShopIcons />
      <Man />
      <Women />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
