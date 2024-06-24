import React from 'react';
import './Navbar.css'; // Import file CSS untuk styling navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};


export default Navbar;
