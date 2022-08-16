/* eslint-disable  react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CalculatorContainer from './pages/CalculatorContainer';
import MathMotivation from './pages/MathMotivation';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calculator" element={<CalculatorContainer />} />
            <Route path="/MathMotivation" element={<MathMotivation />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
