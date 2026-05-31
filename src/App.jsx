import "./App.scss";
import Experience from "./Experience/Experience";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import PortfolioOverlay from "./components/PortfolioOverlay/PortfolioOverlay";

function App() {
  return (
    <>
      <IntroScreen />
      <Experience />
      <PortfolioOverlay />
    </>
  );
}

export default App;
