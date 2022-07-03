
import './App.css';
import Footer from './pages/components/Footer';
import Home from './pages/components/Home';
import Nav from './pages/components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDrinks from './pages/CardDrinks';
import CardFood from './pages/CardFood';
import CardConfectionary from './pages/CardConfectionary';
import About from './pages/components/About';
import Landing from './pages/components/Landing';


// 1. Aayushi shah-N01523081 and

// 2. Jude Okagu -N01407704

function App() {

  return (
    <Router>
    <div className="App">
      <header className="App-header"></header>
        <Nav />
      <Routes>
  
          <Route path="/confectionary" element={ <CardConfectionary />} /> 
          <Route path="/food" element={ <CardFood />} />
          <Route path="/drinks" element={ <CardDrinks />} />
          <Route path="/" element={ <Home/>} />   
          <Route path="/bootstrap-assignment" element={ <Landing/>} />   
           
    </Routes>

    <Footer />
      
    </div>
    </Router>
  );
}

export default App;
