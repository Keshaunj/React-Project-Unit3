import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(/*null*/);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5173/api/data');
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>API Data</h1>
            <pre>{JSON.stringify(data, null,2)}</pre>
        </div>
    );
}

export default App;
