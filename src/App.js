import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutMe } from "./Component/AboutMe";
import { Hero } from "./Component/Hero";
import { Footer } from "./Component/Footer";
import { Project } from "./Component/Project";
import { Navigation } from "./Component/Navigation";
import { ContactMe } from "./Component/ContactMe";
import { Skills } from "./Component/Skills";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>

      {/* <Project />
      <Skills />
      <AboutMe />
      <ContactMe />
      <Footer /> */}
    </div>
  );
}

export default App;
