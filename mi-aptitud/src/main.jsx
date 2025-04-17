import React from "react";
import "./styles/index.css";

import ReactDOM from "react-dom/client";
import App from "./App"; // Import your main App component
import "./index.css"; // Import your global styles (if any)

// Render the App component into the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);