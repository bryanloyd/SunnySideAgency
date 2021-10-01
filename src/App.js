import GraphicMobile from "./components/GraphicMobile";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import StandOut from "./components/StandOut";
import Transform from "./components/Transform";
import GraphicDesktop from "./components/GraphicDesktop";

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
    </div>
  );
};

export default App;
