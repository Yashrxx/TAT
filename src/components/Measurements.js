import React from 'react'
import './Measurements.css'
import Shirt from '../assets/img/shirt.jpeg'
import Pant from '../assets/img/pant.jpeg'
import Dress from '../assets/img/dress.jpeg'
import { Link ,useNavigate } from 'react-router-dom'
const Measurements = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className='box'>
        <div className='box-1'>
            <img src={Shirt} alt="Error 404" style={{ cursor: 'pointer' }} onClick={()=>{handleNavigate('/top')}}/>
            <Link to="/top" className="btx">Top</Link>
        </div>
        <div className='box-2'>
            <img src={Pant} alt="Error 404" style={{ cursor: 'pointer' }} onClick={()=>{handleNavigate('/bottom')}}/>
            <Link to="/bottom" className="btx">Bottom</Link>
        </div>
        <div className='box-3'>
            <img src={Dress} alt="Error 404" style={{ cursor: 'pointer' }} onClick={()=>{handleNavigate('/fulldress')}}/>
            <Link to="/fulldress" className="btx">Dress</Link>
        </div>

    </div>
  )
}

export default Measurements
