import React from 'react'
import './Home.css'
import TAT_logo from '../assets/img/TAT_Logo.jpeg'
const Home = () => {
    return (
        <div className="parent">
        <section className='locate-form'>
            <form className='forms d-flex justify-content-center flex-column'>
                <div className="text-center">
                <img src={TAT_logo} style={{height:"200px",width:"200px",marginBottom:"40px",borderRadius:"15px"}} alt="Error 404" />
                <h1 style={{fontFamily:"Edu SA Hand, cursive",color:"wheat"}}>TheAdiTouch</h1>
                </div>
            </form>
        </section>
        </div>
    )
}

export default Home
