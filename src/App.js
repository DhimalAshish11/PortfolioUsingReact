import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutMe } from "./Component/AboutMe";
import { Hero } from "./Component/Hero";
import { Footer } from "./Component/Footer";
import { Project } from "./Component/Project";
import { Navigation } from "./Component/Navigation";
import { ContactMe } from "./Component/ContactMe";
import { Skills } from "./Component/Skills";

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <Hero />

      <Project />
      <Skills />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
