
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Drinks from './components/pages/Drinks';
import Confectionary from './components/pages/Confectionary';
import Food from './components/pages/Food';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header"></header>
        <Nav />
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/Drinks" element={ <Drinks />} />
          <Route path="/Confectionary" element={ <Confectionary />} />
          <Route path="/Food" element={ <Food />} />
          <Route path="/aayushi1852.github.io/bootstrap-assignment" element={ <Home/>} />

          {/* <Route path="/bootstrap-assignment" element={( <div>here we try</div>)} /> */}

          
    </Routes>
    <Footer />
      
    </div>
    </Router>
  );
}

export default App;
