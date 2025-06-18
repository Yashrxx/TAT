import React from 'react'
import { useState } from 'react';
import './Bottom.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bottom = (props) => {
    const [fullLength, setfullLength] = useState('');
    const [hipLength, setHipLength] = useState('');
    const [hipRound, setHipRound] = useState('');
    const [bottomRound, setbottomRound] = useState('');

    const measurementData = {
        fullLength,
        hipLength,
        hipRound,
        bottomRound
    };

    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('auth-token');

    const handlesubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loader
        try {
            const response = await fetch("https://tat-f2rq.onrender.com/api/auth/btx", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'auth-token': token,
                },
                body: JSON.stringify(measurementData)
            });

            const json = await response.json();
            console.log(json);

            if (response.ok) {
                toast.success("Submitted!", {
                    position: "top-center",
                    hideProgressBar: true,
                    pauseOnHover: false,
                    theme: "colored"
                });
                clearForm();
            } else {
                toast.error("Submission failed. Please try again.");
            }

        } catch (error) {
            console.error("Data Submission failed:", error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false); // Hide loader
        }
    };

    const clearForm = () => {
        setfullLength('');
        setHipLength('');
        setHipRound('');
        setbottomRound('');
    };
    return (
        <section className='stc'>
            <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Bottom - Measurements</h1>
            <form className='filler' onSubmit={handlesubmit} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Full-Length</label>
                    <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={fullLength} placeholder={'Full length (inch)'} onChange={(e) => setfullLength(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Hip-Length</label>
                    <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={hipLength} placeholder={'hipLength (inch)'} onChange={(e) => setHipLength(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Hip-Round</label>
                    <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={hipRound} placeholder={'hipRound (inch)'} onChange={(e) => setHipRound(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Bottom-Round</label>
                    <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={bottomRound} placeholder={'bottomRound (inch)'} onChange={(e) => setbottomRound(e.target.value)} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
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
        </section>
    )
}

export default Bottom
