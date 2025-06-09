import React from 'react'
import { useState } from 'react';
import './Fulldress.css'
// import { useNavigate } from 'react-router-dom';
const FullDress = () => {
    // const navigate = useNavigate();
    // const [placeholder1, setPlaceholder1] = useState('Enter your name');
    // const [placeholder2, setPlaceholder2] = useState('Enter your city');
    // const [placeholder3, setPlaceholder3] = useState('Enter your email');
    // const [placeholder4, setPlaceholder4] = useState('Enter your password');
    // const [placeholder5, setPlaceholder5] = useState('Enter your city');
    // const [placeholder6, setPlaceholder6] = useState('Enter your email');
    // const [placeholder7, setPlaceholder7] = useState('Enter your password');
    // const [placeholder8, setPlaceholder8] = useState('Enter your city');
    // const [placeholder9, setPlaceholder9] = useState('Enter your email');
    // const [placeholder10, setPlaceholder10] = useState('Enter your password');
    // const [placeholder11, setPlaceholder11] = useState('Enter your city');
    // const [placeholder12, setPlaceholder12] = useState('Enter your email');
    // const [placeholder13, setPlaceholder13] = useState('Enter your password');


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
            console.log(json)
        } catch (error) {
            console.error("Data Submission failed:", error);
        }
    }
    return (
        <section className='stc'>
            <h1>Full dress - Measurements</h1>
            <form className='filler' onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Shoulder-Shoulder</label>
                    <input type="text" className="form-control" value={shoulderShoulder} placeholder={'Shoulder to Shoulder (inch)'} onChange={(e) => setShoulderShoulder(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Shoulder-Apex</label>
                    <input type="text" className="form-control" value={shoulderApex} placeholder={'shoulder to Apex (inch)'} onChange={(e) => setShoulderApex(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Shoulder-under-burst</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" value={shoulderUnderBurst} placeholder={'shoulder to UnderBurst (inch)'} onChange={(e) => setShoulderUnderBurst(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Apex-Apex</label>
                    <input type="text" className="form-control" value={apexApex} placeholder={'apex to Apex (inch)'} onChange={(e) => setApexApex(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Chest Circumference</label>
                    <input type="text" className="form-control" value={chestCircumference} placeholder={'chestCircumference (inch)'} onChange={(e) => setChestCircumference(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Waist-Circumference</label>
                    <input type="text" className="form-control" value={waistCircumference} placeholder={'waistCircumference (inch)'} onChange={(e) => setWaistCircumference(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Waist-Length</label>
                    <input type="text" className="form-control" value={waistLength} placeholder={'waistLength (inch)'} onChange={(e) => setWaistLength(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Hip-Length</label>
                    <input type="text" className="form-control" value={hipLength} placeholder={'hipLength (inch)'} onChange={(e) => setHipLength(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Hip-Round</label>
                    <input type="text" className="form-control" value={hipRound} placeholder={'hipRound (inch)'} onChange={(e) => setHipRound(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Arm-Hole</label>
                    <input type="text" className="form-control" value={armHole} placeholder={'armHole (inch)'} onChange={(e) => setArmHole(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Neck Deep-Front</label>
                    <input type="text" className="form-control" value={neckDeepFront} placeholder={'neckDeepFront (inch)'} onChange={(e) => setNeckDeepFront(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Neck Deep-Back</label>
                    <input type="text" className="form-control" value={neckDeepBack} placeholder={'neckDeepBack (inch)'} onChange={(e) => setNeckDeepBack(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Shoulder-Navel</label>
                    <input type="text" className="form-control" value={shoulderNavel} placeholder={'shoulderNavel (inch)'} onChange={(e) => setShoulderNavel(e.target.value)}/>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <div className="text-center">
                    <button type="submit" className="btn btn-primary w-25">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    )
}

export default FullDress
