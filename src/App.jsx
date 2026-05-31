import { useState } from "react";
import "./App.scss";
import Experience from "./Experience/Experience";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import PortfolioOverlay, {
  ProjectModal,
} from "./components/PortfolioOverlay/PortfolioOverlay";
import SceneStoryOverlay from "./components/SceneStoryOverlay/SceneStoryOverlay";

function App() {
  const [progress, setProgress] = useState(0);
  const [isFullViewOpen, setIsFullViewOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <IntroScreen />
      <Experience onProgressChange={setProgress} />
      <SceneStoryOverlay progress={progress} onProjectOpen={setActiveProject} />
      <PortfolioOverlay
        isOpen={isFullViewOpen}
        onOpen={() => setIsFullViewOpen(true)}
        onClose={() => setIsFullViewOpen(false)}
        onProjectOpen={setActiveProject}
      />
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}

export default App;
