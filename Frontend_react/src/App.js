import React from "react";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Projects,
  Experiences,
  Education,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Education />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;
