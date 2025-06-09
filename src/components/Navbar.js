import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/Yashrxx/TAT/" style={{color:"white"}}>TAT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Yashrxx/TAT/" style={{color:"white"}}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Yashrxx/TAT/measurements" style={{color:"white"}}>Measurements</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/Yashrxx/TAT/fulldress" style={{color:"white"}}>FullDress</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Yashrxx/TAT/top" style={{color:"white"}}>Top</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Yashrxx/TAT/bottom" style={{color:"white"}}>Bottom</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-disabled="true" to="/Yashrxx/TAT/about" style={{color:"white"}}>AboutUs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar