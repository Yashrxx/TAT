import TAT_logo from '../assets/img/TAT_Logo.jpeg'
import './Measurements.css'
import Shirt from '../assets/img/shirt.jpeg'
import Pant from '../assets/img/pant.jpeg'
import Dress from '../assets/img/dress.jpeg'
import { Link, useNavigate } from 'react-router-dom'
const Measurements = (props) => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };
    return (
        <>
            <div className='parentx'>
                <section className={`locate-form ${props.mode === 'dark' ? 'box-shadow-dark' : 'box-shadow-light'}`}>
                    <form className='forms d-flex justify-content-center flex-column'>
                        <div className="text-center">
                            <img src={TAT_logo} style={{ height: "200px", width: "200px", marginBottom: "40px", borderRadius: "15px" }} alt="Error 404" />
                            <h1 className={`head ${props.mode === 'dark' ? 'text-shadow-dark' : 'text-shadow-light'}`} style={{ fontFamily: "Edu SA Hand, cursive", color: "white" }}>TheAdiTouch</h1>
                            <Link style={{ backgroundColor:props.mode==='dark'?'greenyellow':'cyan',display: "inline-flex", boxSizing: "border-box", borderRadius: "16px", marginTop: "10px", borderStyle: "none", color: "black", fontWeight: "600", listStyle: "none", textDecoration: "none", height: "35px", width: "150px", justifyContent: "center", alignItems: "center" }} to="/coverpage" >Dashboard</Link>
                        </div>
                    </form>
                </section>
                <div className='box'>
                    <div className='box-1'>
                        <img className={`box-1 ${props.mode === 'dark' ? 'box-shadow-dark' : 'box-shadow-light'}`} style={{ cursor: 'pointer' }} src={Shirt} alt="Error 404" onClick={() => { handleNavigate('/top') }} />
                        <Link to="/top" className={`btx ${props.mode === 'dark' ? 'box-shadow-dark' : 'box-shadow-light'}`} style={{backgroundColor:props.mode==='dark'?'greenyellow':'cyan'}}>Top</Link>
                    </div>
                    <div className='box-2'>
                        <img className={`box-2 ${props.mode === 'dark' ? 'box-shadow-dark' : 'box-shadow-light'}`} src={Pant} alt="Error 404" style={{ cursor: 'pointer' }} onClick={() => { handleNavigate('/bottom') }} />
                        <Link to="/bottom" className={`btx ${props.mode === 'dark' ? 'box-shadow-dark' : 'box-shadow-light'}`} style={{backgroundColor:props.mode==='dark'?'greenyellow':'cyan'}}>Bottom</Link>
                    </div>
                    <div className='box-3'>
                        <img className={`box-3 ${props.mode === 'dark' ? 'box-shadow-dark' : 'box-shadow-light'}`} src={Dress} alt="Error 404" style={{ cursor: 'pointer' }} onClick={() => { handleNavigate('/fulldress') }} />
                        <Link to="/fulldress" className={`btx ${props.mode === 'dark' ? 'box-shadow-dark' : 'box-shadow-light'}`} style={{backgroundColor:props.mode==='dark'?'greenyellow':'cyan'}}>Dress</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Measurements
