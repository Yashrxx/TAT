import './App.css';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Measurements from './components/Measurements';
import Top from './dataValues/Top';
import Bottom from './dataValues/Bottom';
import FullDress from './dataValues/FullDress';
import About from './components/About';
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import ProtectedRoute from './authentication/ProtectedRoute';
import Dashboard from './dataValues/Dashboard';
import CoverPage from './components/coverPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/userContext';

function App() {
  const { isAuthenticated, setIsAuthenticated, username } = useContext(UserContext);

  const [mode, setmode] = useState('light');
  const [btnText, setbtnTxt] = useState('Enable Dark Mode');

  const removebodycls = () => {
    document.body.classList.remove(
      'bg-light', 'bg-dark', 'bg-success', 'bg-primary', 'bg-danger', 'bg-warning'
    );
  };

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

  // Optional: Keep listening to token changes across tabs
  useEffect(() => {
    const checkAuth = () => setIsAuthenticated(!!localStorage.getItem("token"));
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, [setIsAuthenticated]);

  return (
    <BrowserRouter basename='/TAT'>
      <Navbar btnText={btnText} mode={mode} toggleMode={toggleMode} username={username} />
      <Routes>
        <Route path="/signup" element={<Signup mode={mode} />} />
        <Route path="/login" element={<Login mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />

        {/* Home route: redirect if authenticated */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/measurements" replace />
            ) : (
              <Home mode={mode} />
            )
          }
        />

        <Route path="/dashboard" element={<Dashboard mode={mode} />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/measurements" element={<Measurements mode={mode} />} />
          <Route path="/top" element={<Top mode={mode} />} />
          <Route path="/fulldress" element={<FullDress mode={mode} />} />
          <Route path="/bottom" element={<Bottom mode={mode} />} />
          <Route path="/coverpage" element={<CoverPage mode={mode} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;