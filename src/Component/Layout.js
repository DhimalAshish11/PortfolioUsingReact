import React from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Project } from "./Project";
import { Skills } from "./Skills";

export const Layout = () => {
  return (
    <div>
      {/* header  */}
      <NavBar />
      <Project />
      <Skills />

      <Footer />
    </div>
  );
};
export default Layout;
