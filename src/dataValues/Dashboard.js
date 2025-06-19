import { useEffect, useState } from "react"
import axios from 'axios';
import Card from '../components/Card'
import './Dashboard.css'

function Dashboard(props) {

    const [dressEntries, setdressEntries] = useState([]);
    const [topEntries, setTopEntries] = useState([]);
    const [bottomEntries, setbottomEntries] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                const config = {
                    headers: {
                        "auth-token": token
                    }
                };
                const [dressreq, btmreq, topreq] = await Promise.all([
                    axios.get('https://tat-f2rq.onrender.com/api/auth/dress', config),
                    axios.get('https://tat-f2rq.onrender.com/api/auth/btx', config),
                    axios.get('https://tat-f2rq.onrender.com/api/auth/tx', config)
                ]);
                setdressEntries(dressreq.data);
                setTopEntries(topreq.data);
                setbottomEntries(btmreq.data);
                setIsLoaded(true);
                console.log("Dress data", dressreq.data);
                console.log("Top data", topreq.data);
                console.log("Bottom data", btmreq.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUserData();
    }, []);

    return (
        <div>
            {!isLoaded ? (
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }} className="loader">Loading...</h1>
            ) : (
                <div className="dash">
                    <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Fulldress Entries</h2>
                    <div className="card-grid">
                        {dressEntries.length > 0 ? (
                        dressEntries.map((entry, idx) => (
                            <Card style={{ backgroundColor: props.mode === 'dark' ? '#141414' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} key={idx} data={entry} />
                        ))
                    ) : (
                        <Card style={{ backgroundColor: props.mode === 'dark' ? '#141414' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} data={{ message: "No entries found for Full Dress." }} />
                    )}
                    </div>

                    <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Bottom Wear (BTX)</h2>
                    <div className="card-grid">
                        {bottomEntries.length > 0 ? (
                        bottomEntries.map((entry, idx) => (
                            <Card style={{ backgroundColor: props.mode === 'dark' ? '#141414' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} key={idx + 'b'} data={entry} />
                        ))
                    ) : (
                        <Card style={{ backgroundColor: props.mode === 'dark' ? '#141414' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} data={{ message: "No entries found for Bottom Wear." }} />
                    )}
                    </div>

                    <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Top Wear (TX)</h2>
                    <div className="card-grid">
                        {topEntries.length > 0 ? (
                        topEntries.map((entry, idx) => (
                            <Card style={{ backgroundColor: props.mode === 'dark' ? '#141414' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} key={idx + 't'} data={entry} />
                        ))
                    ) : (
                        <Card style={{ backgroundColor: props.mode === 'dark' ? '#141414' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} data={{ message: "No entries found for Top Wear." }} />
                    )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard