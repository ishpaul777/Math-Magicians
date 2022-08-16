import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav>
    <h1 className="logo">Math Magicians</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/MathMotivation">Motivation</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
