// App.js

// import React from 'react';
// import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import Home from './componets/Home';// Corrected import path
// import About from './componets/About';
// import Projects from './componets/Projects';
// import ServicesSection from './componets/ServicesSection';
// import Basin from './componets/Basin';
// import Shower from './componets/Showers';
// import Piping from './componets/Piping';
// import Last from './componets/Latrine';
// const App = () => {
//   return (
// <Router>
// <Routes>
//   <Route path="/" element={<Home/>} />
//   <Route path="/about" element={<About/>} />
//   <Route path="/services" element={<ServicesSection />} />
//   <Route path="/projects" element={<Projects />} />
//   <Route path="/basin" element={<Basin />} />
//   <Route path="/shower" element={<Shower />} />
//   <Route path="/last" element={<Last />} />
//   <Route path="/piping" element={<Piping />} />

// </Routes>
// </Router>

//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componets/Home';
import About from './componets/About';
import Projects from './componets/Projects';
import ServicesSection from './componets/ServicesSection';
import Basin from './componets/Basin';
import Shower from './componets/Showers';
import Last from './componets/Latrine';
import Pointing from './componets/pointing';
import Piping from './componets/Piping';
import Sewer from './componets/sewer';
import Bio from './componets/Bio';


const App = () => {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />}>
          <Route path="basin" element={<Basin />} />
          <Route path="shower" element={<Shower />} />
          <Route path="last" element={<Last />} />
          <Route path='pointing' element={<Pointing />} />
          <Route path="piping" element={<Piping />} />
          <Route path='sewer' element={<Sewer/>}/>
          <Route path='bio' element={<Bio/>}/>
        </Route>
        <Route path="/services" element={<ServicesSection />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
