import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MathMotivation from '../MathMotivation';

test('should render the Quote page', () => {
  const quote = render(<Router><MathMotivation /></Router>);
  expect(quote).toMatchSnapshot();
});
