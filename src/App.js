import GraphicMobile from "./components/GraphicMobile";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import StandOut from "./components/StandOut";
import Transform from "./components/Transform";
import GraphicDesktop from "./components/GraphicDesktop";
import Testimonials from "./components/Testimonials";
import GridMobile from "./components/GridMobile";
import GridDesktop from "./components/GridDesktop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Transform />
      <StandOut />
      <div className="block md:hidden">
        <GraphicMobile />
      </div>
      <div className="hidden md:block">
        <GraphicDesktop />
      </div>
      <Testimonials />
      <div className="block md:hidden">
        <GridMobile />
      </div>
      <div className="hidden md:block">
        <GridDesktop />
      </div>
      <Footer />
    </div>
  );
};

export default App;
