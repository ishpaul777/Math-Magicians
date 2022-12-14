/* eslint-disable react/jsx-no-bind */
/* eslint-disable  react/prefer-stateless-function */
import React, { useEffect, useState } from 'react';
import Row from './CalcRows';
import calculate from './Logic/calculate';
import '../styles/calculator.css';

export default function Calculator() {
  const [dataObj, setDataObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function updateDataObj(event) {
    const value = event.target.textContent;
    setDataObj((prevDataObj) => calculate(prevDataObj, value));
  }

  function updateScreen() {
    const screen = document.querySelector('.result-screen');
    if (dataObj.next && !dataObj.total) {
      screen.value = dataObj.next;
    } else if (!dataObj.next && dataObj.total) {
      screen.value = dataObj.operation
        ? `${dataObj.total}  ${dataObj.operation}`
        : dataObj.total;
    } else if (!dataObj.total && !dataObj.next) {
      screen.value = '';
    } else {
      screen.value = `
        ${dataObj.total} ${
  dataObj.operation
    ? `${dataObj.operation} ${dataObj.next}`
    : dataObj.next
}`;
    }
  }

  useEffect(() => {
    updateScreen();
  }, [dataObj]);

  return (
    <div className="calculator">
      <h1 className="heading">Calc(&apos;Let&apos;s Maths&apos;)</h1>
      <input type="text" data-testid="result" className="result-screen" value={0} readOnly />
      <div className="buttons">
        <Row
          updateDataObj={updateDataObj}
          first="AC"
          second="+/-"
          third="%"
          fourth="&#247;"
        />
        <Row
          updateDataObj={updateDataObj}
          first="7"
          second="8"
          third="9"
          fourth="×"
        />
        <Row
          updateDataObj={updateDataObj}
          first="4"
          second="5"
          third="6"
          fourth="-"
        />
        <Row
          updateDataObj={updateDataObj}
          first="1"
          second="2"
          third="3"
          fourth="+"
        />
        <Row
          updateDataObj={updateDataObj}
          first="0"
          second="."
          third="="
        />
      </div>
    </div>
  );
}
