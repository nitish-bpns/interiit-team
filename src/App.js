import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Web from './pages/Web';
import Outreach from './pages/Outreach';
import Logistics from './pages/Logistics';
import Sponsorship from './pages/Sponsorship';
import Events from './pages/Events';
import Media from './pages/media';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Web' element={<Web />}></Route>
        <Route path='/Outreach' element={<Outreach />}></Route>
        <Route path='/Logistics' element={<Logistics />}></Route>
        <Route path='/Sponsorship' element={<Sponsorship />}></Route>
        <Route path='/Events' element={<Events />}></Route>
        <Route path='/Media' element={<Media />}></Route>
      </Routes>
    </div>
  );
}

export default App;
