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
import { useState ,useEffect } from 'react';
import Signup from './authentication/Signup'
import Login from './authentication/Login'
import ProtectedRoute from './authentication/ProtectedRoute';
import Dashboard from './dataValues/Dashboard';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    const checkAuth = () => setIsAuthenticated(!!localStorage.getItem("token"));
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const [mode, setmode] = useState('light');
  const [btnText, setbtnTxt] = useState('Enable Dark Mode')
  const removebodycls = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls) => {
    removebodycls();
    document.body.classList.add('bg-' + cls);

    if (mode === 'light') {
      setmode('dark');
      setbtnTxt('Enable Light Mode');
      document.body.style.backgroundColor = '#141414';
    } else {
      setmode('light');
      setbtnTxt('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  };
  const [username, setUsername] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('username');
        if (name) setUsername(name);
    }, []);
  return (
    <BrowserRouter basename='/TAT'>
      <Navbar btnText={btnText} mode={mode} toggleMode={toggleMode} username={username}/>
      <Routes>
        <Route path='/signup' element={<Signup setIsAuthenticated={setIsAuthenticated} mode={mode}/>} />
        <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} mode={mode}/>} />
        <Route path='/dashboard' element={<Dashboard mode={mode}/>} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path='/' element={<Home />} />
        <Route path='/measurements' element={<Measurements mode={mode}/>} />
        <Route path='/top' element={<Top mode={mode}/>} />
        <Route path='/fulldress' element={<FullDress mode={mode} />} />
        <Route path='/bottom' element={<Bottom mode={mode}/>} />
        <Route path='/about' element={<About mode={mode}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
