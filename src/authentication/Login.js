import { useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
    const { setIsAuthenticated } = props
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const response = await fetch('https://tat-f2rq.onrender.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const json = await response.json();
        console.log(json);

        if (json.success === true) {
            setIsAuthenticated(true);

            // Store token and user data
            localStorage.setItem('token', json.authtoken); // use json.authtoken (not authToken)
            localStorage.setItem('username', json.user.name); // <- Save username
            localStorage.setItem('email', json.user.email);   // Optional: save more info if needed

            toast.success("Submitted!", {
                position: "top-center",
                hideProgressBar: true,
                pauseOnHover: false,
                theme: "colored"
            });

            navigate('/');
        } else {
            console.warn("Invalid Credentials");
            toast.error("Invalid Credentials. Please try again.");
        }
    } catch (error) {
        console.error("Login failed:", error);
    } finally {
        setLoading(false);
    }
};

    return (
        <Fragment>
            <div id="login" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="container-x">
                    <section>
                        <Container>
                            <Row style={{ justifyContent: "space-evenly", alignItems: "center", alignContent: "center" }}>
                                <Col xs={12} md={6}>
                                    <h1 className="text-center mb-4">Login to TAT</h1>
                                    <Form onSubmit={handleSubmit}>  {/* 🔹 Ensure form handles submit */}
                                        <Form.Group className="justify-content-md-center  mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className=" mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Form.Group>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                                {loading ? "Submitting..." : "Submit"}
                                            </button>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
            </div>
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
        </Fragment>
    )
}

export default Login;