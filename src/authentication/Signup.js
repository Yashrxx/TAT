import { useContext , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../context/userContext';

const Signup = (props) => {
    const { setUsername, setIsAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();
    const [Credentials, setCredentials] = useState({ name: '', email: '', phone: '', password: '', cpassword: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { name, email, phone, password, cpassword } = Credentials;

        // UPDATED: Check if passwords match before making an API request
        if (password !== cpassword) {
            toast.error("Passwords do not match !!. Please try again.");
            return;
        }

        const trimmedData = {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim().toString(),
            password
        }
        try {
            const response = await fetch('https://tat-f2rq.onrender.com/api/auth/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(trimmedData)
            });

            const text = await response.text(); // Read raw response first
            console.log("Raw response:", text);

            let json;
            try {
                json = JSON.parse(text); // Try parsing JSON
            } catch (error) {
                console.error(error.message);
                throw new Error("Response is not valid JSON");
            }

            console.log("Parsed JSON:", json);

            if (json.success === true) {
                localStorage.setItem('token', json.authToken);
                setIsAuthenticated(true);
                setUsername(json.user.name);
                console.log("Token from localStorage:", localStorage.getItem('token'));
                toast.success("Submitted!", {
                    position: "top-center",
                    hideProgressBar: true,
                    pauseOnHover: false,
                    theme: "colored"
                });
                navigate('/measurements');
            }
            else {
                toast.error("Signup Failed !! User already exists.");
            }
        } catch (error) {
            console.warn("Signup Failed !!");
            toast.error("Signup Failed !! . Please try again.");
        }
        finally {
            setLoading(false); // Hide loader
        }
    };

    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value });
    };
    return (
        <form onSubmit={handleSubmit} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <Col className="container" xs={12} md={6}>
                <h1 className='text-center'>Sign-up</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input required type="text" className="form-control" name='name' id="name" onChange={onChange} minLength={3} aria-describedby="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input required type="email" className="form-control" name='email' id="email" onChange={onChange} aria-describedby="email" />
                    <div id="emailHelp" className="form-text" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">phoneNo</label>
                    <input type="text" className="form-control" name='phone' id="phone" onChange={onChange} minLength={10} maxLength={10} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" onChange={onChange} minLength={5} required />
                    <div id="passwordHelp" className="form-text" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>We'll never share your password with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='cpassword' id="cpassword" onChange={onChange} minLength={5} required />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="submit" className="btn btn-primary" disabled={Credentials.password !== Credentials.cpassword}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </Col>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
        </form>
    )
}

export default Signup