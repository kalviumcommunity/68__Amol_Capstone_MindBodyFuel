import React, { useState, useEffect } from "react";
import axios from "axios";

const WaterTracker = ({ userId }) => {
    const [amount, setAmount] = useState('');
    const [history, setHistory] = useState([]);

    const fetchWaterData = async () => {
        const res = await axios.get(`http://localhost:5001/api/water/${userId}`);
        setHistory(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5001/api/water", { userId, amount });
        setAmount('');
        fetchWaterData();
    };

    useEffect(() => {
        fetchWaterData();
    }, []);

    return (
        <div>
            <h3>Water Tracker</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter ml"
                    required
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {history.map((entry, idx) => (
                    <li key={idx}>{entry.amount} ml - {new Date(entry.date).toLocaleString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default WaterTracker;
