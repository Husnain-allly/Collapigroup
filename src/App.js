import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus';
import Home from './Pages/Home';
import Mission from './Components/Mission';
import Application from './Components/Application';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import ExplosionProofMotor from './Products/ExplosionProofMotor';
import HighMediumVoltageMotor from './Products/HighMediumVoltageMotor';
import SmokeExtractionMotor from './Products/SmokeExtractionMotor';
import PermanentMagnetMotor from './Products/PermanentMagnetMotor';
import StandardMotors from './Products/StandardMotors';
import DCMotors from './Products/DCMotors';
import SinglePhaseMotor from './Products/SinglePhaseMotor';
import Synchronousgenerator from './Products/Synchronousgenerators';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ourmission" element={<Mission />} />
         <Route path="/application" element={<Application />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ExplosionProofMotor" element={<ExplosionProofMotor />} />
          <Route path="/High-and-medium-voltage" element={<HighMediumVoltageMotor />} />
           <Route path="/SmokeExtractionMotor" element={<SmokeExtractionMotor />} />
           <Route path="/PermanentMagnetMotor" element={<PermanentMagnetMotor/>} />
           <Route path="/StandardMotors" element={<StandardMotors/>} />
            <Route path="/DCMotors" element={<DCMotors/>} />
           <Route path="/SinglePhaseMotor" element={<SinglePhaseMotor/>} />
          <Route path="/SynchronousGenerators" element={<Synchronousgenerator/>} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
