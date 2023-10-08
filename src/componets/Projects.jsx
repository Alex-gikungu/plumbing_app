// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';

// const Projects = () => {
//   return (
//     <>
//     <Header/>
//     <div className="pro">
//       <h2>Projects Completed</h2>
//       <h3>Here are some of the projects completed this year.</h3>
//       <div className="main">
//         <div className="image">
//           <img src="./plumb1.jpeg" alt="image" />
//           <h2>Solar Water Heating System Installation</h2>
//           <p>
//             We offer solar water heating system installation installations. We
//             can repair any existing or install new ones to update your bathroom.
//             We make sure that all our work is done to the highest standards of
//             safety and efficiency.
//           </p>
//         </div>
//         <div className="image">
//           <img src="./pro1.jpeg" alt="image" />
//           <h2>Solar Water Heating System Installation</h2>
//           <p>
//             We offer solar water heating system installation installations. We
//             can repair any existing or install new ones to update your bathroom.
//             We make sure that all our work is done to the highest standards of
//             safety and efficiency.
//           </p>
//         </div>
//         <div className="image">
//           <img src="./pro2.jpeg" alt="image" />
//           <h2>Piping & Drainage Installation</h2>
//           <p>
//             We offer piping and installations to enhance proper drainage in your
//             apartment and also proper supply of water in your bathroom and
//             kitchen. We make sure that all our work is done to the highest
//             standards of safety and efficiency.
//           </p>
//         </div>
//         <div className="image">
//           <img src="./plumb4.jpeg" alt="image" />
//           <h2>Table Top Wash Hand Basins Installation</h2>
//           <p>
//             We offer washroom toilets repairs and installations. This caters to
//             people with disabilities and those with special needs. We make sure
//             that all our work is done to the highest standards of safety and
//             efficiency.
//           </p>
//         </div>
//         <div className="image">
//           <img src="./plumb3.jpeg" alt="image" />
//           <h2>Pressure Piping Installation & Repair</h2>
//           <p>
//             We offer pressure piping repairs and installations. We install
//             pressure piping on the rooftop to increase the supply of water in
//             your apartment and for storage. We make sure that all our work is
//             done to the highest standards of safety and efficiency.
//           </p>
//         </div>
//         <div className="image">
//           <img src="./pro4.jpeg" alt="image" />
//           <h2>Meter Installation & Repair</h2>
//           <p>
//             We offer meter box repairs and installations. We offer installation
//             of the meter box to apartments under construction and also repair
//             leaking meter boxes. We make sure that all our work is done to the
//             highest standards of safety and efficiency.
//           </p>
//         </div>
//         <div className="image">
//           <img src="./bio2 gas.jpeg" alt="image" />
//           <h2>Bio Digestor Construction & Repair</h2>
//           <p>
//             We offer bio digestor construction and repairs. We can construct a
//             new bio digestor and even repair an existing one to update your
//             biogas system. We make sure that all our work is done to the highest
//             standards of safety and efficiency.
//           </p>
//         </div>
//         <div className="image">
//           <img src="./well.jpeg" alt="image" />
//           <h2>Pressure Piping Installation & Repair</h2>
//           <p>
//             We offer pressure piping repairs and installations. We install
//             pressure piping on the rooftop to increase the supply of water in
//             your apartment and for storage. We make sure that all our work is
//             done to the highest standards of safety and efficiency.
//           </p>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Projects;
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Basin from './Basin';
import Shower from './Showers';
import Last from './Latrine';
import Piping from './Piping';
import Pointing from './pointing';
import Sewer from './sewer';
import Bio from './Bio';
const Projects = () => {
  return (
    <>
      <Header />

      <h2>Projects Completed</h2>
        <h3>Here are some of the projects completed this year.</h3>
      <div className="pro">
        <nav>
        <ul className="tab-list">
  <li className="tab-item"><Link to="/projects/basin">TableTop Wash hand Basin</Link></li>
  <li className="tab-item"><Link to="/projects/shower">Hot& Cold Water Installation</Link></li>
  <li className="tab-item"><Link to="/projects/last">Urinal bowl installation</Link></li>
  <li className="tab-item"><Link to="/projects/piping">Water Pumps Installation</Link></li>
  <li className="tab-item"><Link to="/projects/pointing">Sub Meter Connection</Link></li>
  <li className="tab-item"><Link to="/projects/sewer">Sub Sewer Connection</Link></li>
  <li className="tab-item"><Link to="/projects/bio">Bio Digester</Link></li>
</ul>

        </nav>

        <Routes>
          <Route path="basin" element={<Basin />} />
          <Route path="shower" element={<Shower />} />
          <Route path="last" element={<Last />} />
          <Route path="piping" element={<Piping />} />
          <Route path='sewer' element={<Sewer />} />
          <Route path='bio' element={<Bio />} />
          <Route path="pointing" element={<Pointing />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Projects;

