import { useState } from 'react';
import './Fulldress.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FullDress = (props) => {

    const [shoulderShoulder, setShoulderShoulder] = useState('');
    const [shoulderApex, setShoulderApex] = useState('');
    const [shoulderUnderBurst, setShoulderUnderBurst] = useState('');
    const [apexApex, setApexApex] = useState('');
    const [chestCircumference, setChestCircumference] = useState('');
    const [waistCircumference, setWaistCircumference] = useState('');
    const [waistLength, setWaistLength] = useState('');
    const [hipLength, setHipLength] = useState('');
    const [hipRound, setHipRound] = useState('');
    const [armHole, setArmHole] = useState('');
    const [neckDeepFront, setNeckDeepFront] = useState('');
    const [neckDeepBack, setNeckDeepBack] = useState('');
    const [shoulderNavel, setShoulderNavel] = useState('');

    const measurementData = {
        shoulderShoulder,
        shoulderApex,
        shoulderUnderBurst,
        apexApex,
        chestCircumference,
        waistCircumference,
        waistLength,
        hipLength,
        hipRound,
        armHole,
        neckDeepFront,
        neckDeepBack,
        shoulderNavel
    };
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/dress", {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
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
        }
    };

    const clearForm = () => {
        setShoulderShoulder('');
        setShoulderApex('');
        setShoulderUnderBurst('');
        setApexApex('');
        setChestCircumference('');
        setWaistCircumference('');
        setWaistLength('');
        setHipLength('');
        setHipRound('');
        setArmHole('');
        setNeckDeepFront('');
        setNeckDeepBack('');
        setShoulderNavel('');
    };

    return (
        <>
            <section className='stc'>
                <h1 style={{color : props.mode==='dark'?'white':'black'}}>Full dress - Measurements</h1>
                <form className='filler' onSubmit={handlesubmit} style={{color : props.mode==='dark'?'white':'black'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Shoulder-Shoulder</label>
                        <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={shoulderShoulder} placeholder={'Shoulder to Shoulder (inch)'} onChange={(e) => setShoulderShoulder(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Shoulder-Apex</label>
                        <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={shoulderApex} placeholder={'shoulder to Apex (inch)'} onChange={(e) => setShoulderApex(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Shoulder-under-burst</label>
                        <input required type="number" className="form-control" min="0" step="1" pattern="\d*" aria-describedby="emailHelp" value={shoulderUnderBurst} placeholder={'shoulder to UnderBurst (inch)'} onChange={(e) => setShoulderUnderBurst(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Apex-Apex</label>
                        <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={apexApex} placeholder={'apex to Apex (inch)'} onChange={(e) => setApexApex(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Chest Circumference</label>
                        <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={chestCircumference} placeholder={'chestCircumference (inch)'} onChange={(e) => setChestCircumference(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Waist-Circumference</label>
                        <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={waistCircumference} placeholder={'waistCircumference (inch)'} onChange={(e) => setWaistCircumference(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Waist-Length</label>
                        <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={waistLength} placeholder={'waistLength (inch)'} onChange={(e) => setWaistLength(e.target.value)} />
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
                        <label htmlFor="exampleInputPassword1" className="form-label">Arm-Hole</label>
                        <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={armHole} placeholder={'armHole (inch)'} onChange={(e) => setArmHole(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Neck Deep-Front</label>
                        <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={neckDeepFront} placeholder={'neckDeepFront (inch)'} onChange={(e) => setNeckDeepFront(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Neck Deep-Back</label>
                        <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={neckDeepBack} placeholder={'neckDeepBack (inch)'} onChange={(e) => setNeckDeepBack(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Shoulder-Navel</label>
                        <input required type="number" className="form-control" min="0" step="1" pattern="\d*" value={shoulderNavel} placeholder={'shoulderNavel (inch)'} onChange={(e) => setShoulderNavel(e.target.value)} />
                    </div>
                    <div className="text-center">
                        <button type="submit" id="buttx" className="btn btn-primary">
                            Submit
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
        </>
    )
}

export default FullDress
