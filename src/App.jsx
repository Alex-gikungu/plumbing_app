// App.js

import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './componets/Home';// Corrected import path
import About from './componets/About';
import Projects from './componets/Projects';
import ServicesSection from './componets/ServicesSection';

const App = () => {
  return (
<Router>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/services" element={<ServicesSection />} />
  <Route path="/projects" element={<Projects />} />

</Routes>
</Router>

  );
};

export default App;
