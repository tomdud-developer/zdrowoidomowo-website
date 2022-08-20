import NavBar from './components/NavBar';
import { Link, animateScroll as scroll } from "react-scroll";
import Button from 'react-bootstrap/Button';
import Top from './components/Top';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Top />
    </div>

  );
}

export default App;
