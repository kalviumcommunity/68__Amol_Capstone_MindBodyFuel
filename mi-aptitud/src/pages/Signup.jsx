import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();  // Initialize useNavigate

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', {
                email,
                password
            });
            alert("Signup successful!");
            console.log(res.data); // Save token or user data if needed
            navigate('/dashboard');  // Redirect to dashboard after successful signup
        } catch (err) {
            alert("Error during signup. Please try again.");
        }
    };

    return (
        <div className="auth-container">
            <h2>Signup for Mind Body Fuel</h2>
            <form onSubmit={handleSignup}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={e => setConfirmPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
