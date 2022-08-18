/// add nav bar tests here
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../navbar';

describe('navbar tests', () => {
  test('should render', () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
   expect(navbar).toMatchSnapshot();
  });
  });
 
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MathMotivation from '../MathMotivation';

test('should render the Quote page', () => {
const quote = render(<Router><MathMotivation /></Router>);
expect(quote).toMatchSnapshot();
 });
