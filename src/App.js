import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Measurements from './components/Measurements';
import Top from './dataValues/Top';
import Bottom from './dataValues/Bottom';
import FullDress from './dataValues/FullDress';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/measurements' element={<Measurements />} />
        <Route path='/top' element={<Top />} />
        <Route path='/fulldress' element={<FullDress />} />
        <Route path='/bottom' element={<Bottom />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
