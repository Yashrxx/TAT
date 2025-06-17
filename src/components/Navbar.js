import './Navbar.css'
import { Link } from 'react-router-dom'
import TAT from '../assets/img/TAT_Logo.jpeg'
import PropTypes from 'prop-types';

const Navbar = (props) => {
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/measurements" >Measurements</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/fulldress" >FullDress</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/top" >Top</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bottom" >Bottom</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-disabled="true" to="/about" >AboutUs</Link>
                        </li>
                    </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'black' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" onClick={() => { props.toggleMode('null') }} id="flexSwitchCheckDefault" />
                            <label className="form-check-label" onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault" >{props.btnText}</label>
                        </div>
                        <Link to='/signup'>Signup</Link>
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