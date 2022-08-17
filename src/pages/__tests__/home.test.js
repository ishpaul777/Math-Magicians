import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Home from '../Home';

test('should contain element ', () => {
  const homePage = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  expect(homePage).toMatchSnapshot();
});
