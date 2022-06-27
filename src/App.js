
import './App.css';
import Footer from './pages/components/Footer';
import Home from './pages/components/Home';
import Nav from './pages/components/Nav';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Drinks from './pages/Drinks';
import Confectionary from './pages/Confectionary';
import Food from './pages/Food';

// import tt  from './pages/functions';

// import 
// import Orders from './components/Orders';
// import Card from './components/Card';

// 1. Aayushi shah-N01523081 and

// 2. Jude Okagu -N01407704

function App() {

  const tt = 'gsgsgs'
  return (
    <Router>
    <div className="App">
      <header className="App-header"></header>
        <Nav />
      <Routes>
          <Route path="/drinks" element={ <Drinks title={tt}/>} />
          <Route path="/confectionary" element={ <Confectionary />} />
          <Route path="/food" element={ <Food />} />
          {/* <Route path="/card" element={ <Card />} /> */}
          {/* <Route path="/orders" element={ <Orders name='juud'/>} /> */}
          <Route path="/bootstrap-assignment" element={ <Home/>} />    
    </Routes>
    <Footer />
      
    </div>
    </Router>
  );
}

export default App;
