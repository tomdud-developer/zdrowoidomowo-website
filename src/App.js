import NavBar from './components/NavBar';
import Top from './components/Top';
import Offer from './components/Offer';
import CakeGallery from './components/CakeGallery';
import PartyGallery from './components/PartyGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Link, animateScroll as scroll } from "react-scroll";
import Button from 'react-bootstrap/Button';
import './fonts/Courgette-Regular.ttf';
import './app.css';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="font-face-gm">

        <NavBar />
        <Top />
        <Offer />
        <CakeGallery />
        <PartyGallery />
        <Contact />
        <Footer />
      
    </div>

  );
}

export default App;
