import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CalculatorContainer from '../CalculatorContainer';

test('should render the Quote page', () => {
  const calcContainer = render(<Router><CalculatorContainer /></Router>);
  expect(calcContainer).toMatchSnapshot();
});
