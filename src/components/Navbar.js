import './Navbar.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import TAT from '../assets/img/TAT_Logo.jpeg';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem('token');
    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
    let location = useLocation();
    useEffect(() => {
    }, [location])

    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                const res = await fetch('https://tat-f2rq.onrender.com/api/auth/getuser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': token
                    }
                });

                const data = await res.json();
                setUsername(data.name);
                console.log(data.name)
            } catch (error) {
                console.error('Failed to fetch user:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/TAT" ><img style={{ height: "25px", width: "25px", filter: "invert(1)" }} src={TAT} alt="Error 404"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                        </li>
                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/measurements">Measurement</Link>
                            </li>
                        )}

                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/fulldress">FullDress</Link>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/top">Top</Link>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/bottom">Bottom</Link>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <Link className="nav-link" aria-disabled="true" to="/about" >AboutUs</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'black' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={() => { props.toggleMode('null') }} id="flexSwitchCheckDefault" />
                        <label className="form-check-label" onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault" >{props.btnText}</label>
                    </div>
                    {!localStorage.getItem('token') ? <form className="d-flex">
                        <Link className='btn btn-primary mx-3' to='/login' role='button'>Login</Link>
                        <Link className='btn btn-primary' to='/signup' role='button'>Sign up</Link>
                    </form>
                        : 
                        <>
                    <div className="bg-white text-[#141414] px-4 py-1 rounded-xl shadow-md text-sm font-semibold">
                        {username}
                    </div>
                    <Link onClick={handleLogout} className='btn btn-primary mx-3' to='/login' role='button'>Logout</Link>
                    </>}
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
export default Navbar