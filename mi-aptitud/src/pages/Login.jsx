import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with your actual login logic
    if (email && password) {
      console.log("Logging in with:", { email, password, rememberMe });
      navigate("/dashboard"); // Replace with your route
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Mind Body & Fuel</h1>
        <p className="login-subtitle">Your journey to a healthier lifestyle starts here</p>

        <div className="tab-buttons">
          <button className="active-tab">Sign In</button>
          <button className="inactive-tab">Sign Up</button>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="form-options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="/forgot-password" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="signin-button">Sign In</button>

          <div className="divider">Or continue with</div>

          <div className="social-login">
            <button className="google-btn">G</button>
            <button className="facebook-btn">f</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
