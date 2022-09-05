import './App.css';
import Homepage from './components/homepage'
import { Routes, Route } from "react-router-dom";
import Newbeer from './components/new-beer';
import Randombeer from './components/random-beer'
import Beers from './components/beers'
import BeerDetails from './components/BeerDetails';





function App() {
  
  
  
  return (
    <div className="App">

      <Routes>      
        <Route path="/" element={ <Homepage /> } />
        <Route path="/beers" element={ <Beers />  } />
        <Route path="/random-beer" element={ <Randombeer /> } />
        <Route path="/new-beer" element={ <Newbeer /> } />
        <Route path='/beers/:id' element={<BeerDetails />}/>
      </Routes>
       
    </div>
  );
}

export default App;
