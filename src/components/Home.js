import { Link } from 'react-router-dom'
import './Home.css'
import TAT_logo from '../assets/img/TAT_Logo.jpeg'
const Home = () => {
    return (
        <div className="parent">
            <section className='locate-form'>
                <form className='forms d-flex justify-content-center flex-column'>
                    <div className="text-center">
                        <img src={TAT_logo} style={{ height: "200px", width: "200px", marginBottom: "40px", borderRadius: "15px" }} alt="Error 404" />
                        <h1 style={{ fontFamily: "Edu SA Hand, cursive", color: "white" }}>TheAdiTouch</h1>
                        <Link style={{ display:"inline-flex",boxSizing:"border-box", backgroundColor: "greenyellow", borderRadius: "16px", marginTop: "10px", borderStyle: "none", color: "black", fontWeight: "600", listStyle: "none", textDecoration: "none", height: "35px", width: "150px" ,justifyContent:"center",alignItems:"center"}} to="/measurements" >Measurement</Link>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Home
