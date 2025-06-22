import { Link } from 'react-router-dom';
import './coverPage.css';
import Illustration from '../assets/img/TAT_Logo.jpeg'; // Replace with your image path
import Slicker from '../silder/Slider';

const CoverPage = () => {
    return (
        <div className="cover-container">
            <div className="hero-section">
                <img src={Illustration} alt="Form Illustration" className="hero-image" />
                <div className="hero-text">
                    <h1>Effortless Form Filling, One Click Away.</h1>
                    <p>Simplify your paperwork with our intuitive form filler.<br />
                        Track submissions, edit anytime, and stay organized.
                    </p>
                    <div className="hero-buttons">
                        <Link className="btn login" to='/login'>Log in</Link>
                        <Link className="btn signup" to='/signup'>Sign up</Link>
                    </div>
                </div>
            </div>
            <Slicker />
            <div className="benefits-section">
                <h2>Key Benefits</h2>
                <p className="benefits-subtitle">
                    Discover how our form filler can streamline your workflow and enhance productivity.
                </p>
                <div className="benefit-cards">
                    <div className="card">
                        <h3>📄 Track Your Submissions</h3>
                        <p>Easily monitor the status of your submitted forms and keep a record of all your entries.</p>
                        <Link className='btn dashboard'>Dashboard</Link>
                    </div>
                    <div className="card">
                        <h3>✏️ Edit Anytime</h3>
                        <p>Make changes to your forms whenever needed, ensuring accuracy and up-to-date information.</p>
                    </div>
                    <div className="card">
                        <h3>🗂️ Stay Organized</h3>
                        <p>Keep all your forms neatly organized in one place, making it simple to find and manage your documents.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverPage;