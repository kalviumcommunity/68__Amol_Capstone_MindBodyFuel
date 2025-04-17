import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'; // Assuming you have a CSS file for styles

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const cachedUser = localStorage.getItem('userData');
            if (cachedUser) {
                setUser(JSON.parse(cachedUser));
                setLoading(false);
                return;
            }

            try {
                const res = await axios.get('http://localhost:5000/api/users/me', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setUser(res.data);
                localStorage.setItem('userData', JSON.stringify(res.data)); // Cache data
            } catch (err) {
                setError('Failed to fetch user data');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) return <div className="loading-skeleton">Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    const foodIntake = user?.foodIntake || {};
    const supplements = user?.supplements || [];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Welcome back, {user?.name}!</h1>
                <p>Your personalized fitness dashboard</p>
            </header>

            {/* Overview Section */}
            <section className="overview-section">
                <div className="card">
                    <h3>Food Intake</h3>
                    <p>Calories: {foodIntake.calories || 0} kcal</p>
                    <p>Carbs: {foodIntake.carbs || 0} g</p>
                    <p>Fat: {foodIntake.fat || 0} g</p>
                    <p>Protein: {foodIntake.protein || 0} g</p>
                </div>
                <div className="card">
                    <h3>Water Intake</h3>
                    <p>{user?.waterIntake || 0} liters</p>
                </div>
                <div className="card">
                    <h3>Protein Goal</h3>
                    <p>{user?.proteinGoal || 0} g</p>
                    <p>{foodIntake.protein >= user?.proteinGoal ? 'Goal Achieved!' : 'Keep Going!'}</p>
                </div>
                <div className="card">
                    <h3>Supplements</h3>
                    {supplements.length > 0 ? (
                        <ul>
                            {supplements.map((supplement, index) => (
                                <li key={index}>{supplement}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No supplements added</p>
                    )}
                </div>
            </section>

            {/* Progress Section */}
            <section className="progress-section">
                <h2>Progress Tracker</h2>
                <div className="progress-cards">
                    <div className="card">
                        <h3>Workout Progress</h3>
                        <p>Track your workouts over the past week.</p>
                        {/* Placeholder for chart */}
                    </div>
                    <div className="card">
                        <h3>Nutrition Progress</h3>
                        <p>Check how close you are to your daily goals.</p>
                        {/* Placeholder for chart */}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 Mind Body Fuel. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;

