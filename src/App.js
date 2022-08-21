import NavBar from './components/NavBar';
import Top from './components/Top';
import Offer from './components/Offer';
import CakeGallery from './components/CakeGallery';
import PartyGallery from './components/PartyGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Link, animateScroll as scroll } from "react-scroll";
import './fonts/Courgette-Regular.ttf';
import './app.css';


function App() {
  return (
    <div className="font-face-gm">

        <NavBar />
        <div className="top-link"><Top /></div>
        <div className="offer-link"><Offer /></div>
        <div className="cake-gallery-link"><CakeGallery /></div>
        <div className="party-gallery-link"><PartyGallery /></div>
        <div className="contact-link"><Contact /></div>
        <Footer />
      
    </div>

  );
}

export default App;
