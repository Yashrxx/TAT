import { useEffect, useState } from "react"
import axios from 'axios';
import Card from '../components/Card'
function Dashboard() {

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
                <div className="loader">Loading...</div>
            ) : (
                <>
                    <h2>Fulldress Entries</h2>
                    <div className="card-grid">
                        {dressEntries.map((entry, idx) => (
                            <Card key={idx} data={entry} />
                        ))}
                    </div>

                    <h2>Bottom Wear (BTX)</h2>
                    <div className="card-grid">
                        {bottomEntries.map((entry, idx) => (
                            <Card key={idx + 'b'} data={entry} />
                        ))}
                    </div>

                    <h2>Top Wear (TX)</h2>
                    <div className="card-grid">
                        {topEntries.map((entry, idx) => (
                            <Card key={idx + 't'} data={entry} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Dashboard