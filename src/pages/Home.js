import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import '../styles/home.css';

const Home = () => (
  <div className="home-container">
    <Navbar />
    <main>
      <h1>Welcome Math Magician!</h1>
      <p className="home-text">
        Remember that one time in math class when the teacher asked you
        what&apos;s 2 + 2, and you said 5? Then everyone in the class laughed at
        you, and you went home crying. Well no more of that! Introducing math
        magicians, it&apos;s a single page app that fullfils all your second
        grade math needs. And if you ever lose motivation to do more math, check
        out the quotes section that provides a fresh new math quote for
        inspiration.
      </p>
      <div className="ctc-btns">
        <button type="button">
          <Link to="/Calculator">Use Calculator</Link>
        </button>
        <button type="button">
          <Link to="/MathMotivation">Get Motivation</Link>
        </button>
      </div>
    </main>
  </div>
);

export default Home;
