import React from 'react';
import Calculator from '../components/Calculator';
import Navbar from '../components/navbar';

const CalculatorContainer = () => (
  <div className="calcContainer">
    <Navbar />
    <Calculator />
  </div>
);

export default CalculatorContainer;
