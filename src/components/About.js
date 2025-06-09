import './About.css'
import Aditi from '../assets/img/aditiimg.jpeg'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const About = () => {
  return (
    <div className='abt'>
      <div className="imgh">
        <img className='adz' src={Aditi} alt="Error 404" />
      </div>
      <div className="conth">
        <div className="txtmy">
          <h2 style={{ color: "white", fontWeight: "bold" }}>About us</h2>
          <h1 style={{ color: "#D91747", fontWeight: "bold" }}>Fashion designer</h1>
          <p>Hi, I’m a passionate fashion designer who recently completed my design course and turned my love for fashion into a profession. I specialize in creating custom-made outfits that are stylish, comfortable, and tailored to your unique taste. Every piece is crafted with creativity, care, and attention to detail—because you deserve fashion that fits both your body and your personality.</p>
        </div>
        <div className="contactInfo">
          <div className="ci-1">
            <p><FiberManualRecordIcon fontSize='small' />  Name : Aditi Jain</p>
            <p><FiberManualRecordIcon fontSize='small' />  Email : aditisushil30@gmail.com</p>
            <p><FiberManualRecordIcon fontSize='small' />  ph-no : 9789800288</p>
          </div>
          <div className="ci-2">
            <div className="ci-12" style={{display:"flex",flexDirection:"row"}}>
              <FiberManualRecordIcon fontSize='small' style={{marginTop:"4px",marginRight:"4px"}}/>
              <p> Address - Nattu pilliyar koil st , sowcarpet , chennai</p>
            </div>
            <p><FiberManualRecordIcon fontSize='small' /> Postal code - 600001</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
