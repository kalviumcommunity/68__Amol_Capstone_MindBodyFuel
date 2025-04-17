import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#1e1e1e', color: '#fff', padding: '40px', minHeight: '100vh' }}>
            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 style={{ fontSize: '3rem', color: '#ff7f50' }}>Welcome to Mind Body Fuel</h1>
                <p style={{ fontSize: '1.2rem', color: '#ddd' }}>Achieve your fitness goals with the best training and nutrition programs.</p>
            </header>

            <section style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Services</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                    <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px', width: '250px' }}>
                        <h3>Personal Training</h3>
                        <p>Get one-on-one training sessions with our expert trainers to reach your fitness goals.</p>
                    </div>
                    <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px', width: '250px' }}>
                        <h3>Nutrition Plans</h3>
                        <p>Customized meal plans to fuel your body and help you achieve optimal health.</p>
                    </div>
                    <div style={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px', width: '250px' }}>
                        <h3>Fitness Programs</h3>
                        <p>Access a variety of fitness programs suited for all levels of experience.</p>
                    </div>
                </div>
            </section>

            <section style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Join Us Today</h2>
                <p style={{ fontSize: '1.2rem', color: '#ddd', marginBottom: '20px' }}>
                    Start your fitness journey with us today and become a part of the Mind Body Fuel community.
                </p>
                <Link
                    to="/signup"
                    style={{
                        padding: '12px 25px',
                        backgroundColor: '#ff7f50',
                        color: 'white',
                        fontSize: '1rem',
                        textDecoration: 'none',
                        borderRadius: '5px',
                    }}
                >
                    Sign Up Now
                </Link>
            </section>

            <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#2c2c2c' }}>
                <p style={{ color: '#fff', fontSize: '1rem' }}>
                    &copy; 2025 Mind Body Fuel. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Home;
