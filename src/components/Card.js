import './Card.css'

function Card({ data }) {

    return (
        <div className="container">
            <ul>
                {Object.entries(data).map(([key, value]) => {
                    // Skip internal Mongo fields
                    if (key === '_id' || key === '__v') return null;

                    // Format createdAt field
                    if (key === 'createdAt') {
                        const formattedDate = new Date(value).toLocaleDateString('en-IN', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        });
                        return (
                            <li key={key}>
                                <strong>{key}</strong>: {formattedDate}
                            </li>
                        );
                    }

                    return (
                        <li key={key}>
                            <strong>{key}</strong>: {value}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
export default Card;