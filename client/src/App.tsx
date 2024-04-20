import About from "./components/shared/About";
import { Features } from "./components/shared/Features";
import Footer from "./components/shared/Footer";
import Hero from "./components/shared/Hero";
import Navbar from "./components/shared/Navbar";
import Pricing from "./components/shared/Pricing";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Features />
      <Footer />
    </>
  );
};

export default App;
