import './Card.css'

function Card({ data , style }) {
    return (
        <div className="bhai" style={style}>
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

                    // Handle 'user' object specifically
                    if (key === 'user' && typeof value === 'object' && value !== null) {
                        return (
                            <li key={key}>
                                <strong>{key}</strong>: {value.name} ({value.email})
                            </li>
                        );
                    }

                    // Generic object fallback (for name/email directly present as object)
                    if (typeof value === 'object' && value !== null) {
                        return (
                            <li key={key}>
                                <strong>{key}</strong>: {JSON.stringify(value)}
                            </li>
                        );
                    }

                    // Normal primitive fields
                    return (
                        <li key={key}>
                            <strong>{key}</strong>: {value}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Card;