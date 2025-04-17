import React from "react";

import "../styles/Footer.css"; // If inside styles folder


const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mind Body Fuel. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
