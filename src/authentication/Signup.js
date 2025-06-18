import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Col } from 'react-bootstrap';
const Signup = (props) => {
    const navigate = useNavigate();
    const [Credentials, setCredentials] = useState({ name: '', email: '', phone: '', password: '', cpassword: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, phone, password, cpassword } = Credentials;

        // UPDATED: Check if passwords match before making an API request
        if (password !== cpassword) {
            if (props.showalert) {
                props.showalert("Passwords do not match", "danger");
            }
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
                body: JSON.stringify( trimmedData )
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
                console.log("Token from localStorage:", localStorage.getItem('token'));
                navigate('/');

                // UPDATED: Ensure `props.showalert` exists before calling
                if (props.showalert) {
                    props.showalert("Account Created Successfully", "success");
                }
            } else {
                if (props.showalert) {
                    props.showalert("Invalid Details", "danger");
                }
            }
        } catch (error) {
            console.error("Signup failed:", error);
            if (props.showalert) {
                props.showalert("Something went wrong. Please try again.", "danger");
            }
        }
    };

    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value });
    };
    return (
        <form onSubmit={handleSubmit}>
            <Col className="container" xs={12} md={6}>
                <h1 className='text-center'>Sign-up</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input required type="text" className="form-control" name='name' id="name" onChange={onChange} minLength={3} aria-describedby="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input required type="email" className="form-control" name='email' id="email" onChange={onChange} aria-describedby="email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">phoneNo</label>
                    <input type="text" className="form-control" name='phone' id="phone" onChange={onChange} minLength={10} maxLength={10} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" onChange={onChange} minLength={5} required />
                    <div id="passwordHelp" className="form-text">We'll never share your password with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='cpassword' id="cpassword" onChange={onChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary my-1" disabled={Credentials.password !== Credentials.cpassword}>Submit</button>
            </Col>
        </form>
    )
}

export default Signup