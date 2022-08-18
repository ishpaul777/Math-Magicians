import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../Calculator';

describe('calculator tests', () => {
  it('Should render correctly', () => {
    const calc = render(<Calculator />);
    expect(calc).toMatchSnapshot();
  });
  // addition
  it('should perform addition', () => {
    render(<Calculator />);
    const btn1 = screen.getByRole('button', { name: /1/i });
    const btn9 = screen.getByRole('button', { name: /9/i });
    const btnAdd = screen.getByText('+');
    const btnEqual = screen.getByRole('button', { name: /=/i });
    fireEvent.click(btn1);
    fireEvent.click(btnAdd);
    fireEvent.click(btn9);
    fireEvent.click(btnEqual);
    const resultScreen = screen.getByTestId('result');
    expect(resultScreen.value).toEqual('10');
  });
  // subtraction
  it('should perform addition', () => {
    render(<Calculator />);
    const btn1 = screen.getByRole('button', { name: /1/i });
    const btn9 = screen.getByRole('button', { name: /9/i });
    const btnMinus = screen.getByText('-');
    const btnEqual = screen.getByRole('button', { name: /=/i });
    fireEvent.click(btn1);
    fireEvent.click(btnMinus);
    fireEvent.click(btn9);
    fireEvent.click(btnEqual);
    const resultScreen = screen.getByTestId('result');
    expect(resultScreen.value).toEqual('-8');
  });
  // multiplication
  it('should perform addition', () => {
    render(<Calculator />);
    const btn1 = screen.getByRole('button', { name: /1/i });
    const btn9 = screen.getByRole('button', { name: /9/i });
    const btnMultiply = screen.getByText('×');
    const btnEqual = screen.getByRole('button', { name: /=/i });
    fireEvent.click(btn1);
    fireEvent.click(btnMultiply);
    fireEvent.click(btn9);
    fireEvent.click(btnEqual);
    const resultScreen = screen.getByTestId('result');
    expect(resultScreen.value).toEqual('9');
  });
  // divison
  it('should perform addition', () => {
    render(<Calculator />);
    const btn3 = screen.getByRole('button', { name: /3/i });
    const btn9 = screen.getByRole('button', { name: /9/i });
    const btnDiv = screen.getByText('÷');
    const btnEqual = screen.getByRole('button', { name: /=/i });
    fireEvent.click(btn9);
    fireEvent.click(btnDiv);
    fireEvent.click(btn3);
    fireEvent.click(btnEqual);
    const resultScreen = screen.getByTestId('result');
    expect(resultScreen.value).toEqual('3');
  });
  // modulus
  it('should perform addition', () => {
    render(<Calculator />);
    const btn3 = screen.getByRole('button', { name: /3/i });
    const btn9 = screen.getByRole('button', { name: /9/i });
    const btnMod = screen.getByText('%');
    const btnEqual = screen.getByRole('button', { name: /=/i });
    fireEvent.click(btn9);
    fireEvent.click(btnMod);
    fireEvent.click(btn3);
    fireEvent.click(btnEqual);
    const resultScreen = screen.getByTestId('result');
    expect(resultScreen.value).toEqual('0');
  });
});
