import React from 'react';

import {About, Footer, Header, Skills, Testimonial, Projects, Experiences} from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Testimonial />
      <Footer />

    </div>
  );
}

export default App;