import './styles.css';
import React, { useState } from 'react';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [calculationHistory, setCalculationHistory] = useState('');

  const handleClear = () => {
    setDisplayValue('');
    setCalculationHistory('');
  };

  const updateDisplay = (value) => {
    setDisplayValue(displayValue + value);
  };

  const calculateResult = () => {
    try {
      const expression = displayValue.replace(/x/g, '*');
      const result = eval(expression).toString();
      setDisplayValue(result);
      setCalculationHistory(displayValue + ' = ' + result);
    } catch (error) {
      setDisplayValue('ERROR');
      setCalculationHistory('');
    }
  };

  const handleDelete = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };

  return (
    <div className="main">
      <div className="top">
        {displayValue}
      </div>
      <div className="calculator">
        <div className="row">
          <button onClick={handleClear}>AC</button>
          <button onClick={handleDelete}>DEL</button>
          <button onClick={() => updateDisplay('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => updateDisplay('7')}>7</button>
          <button onClick={() => updateDisplay('8')}>8</button>
          <button onClick={() => updateDisplay('9')}>9</button>
          <button onClick={() => updateDisplay('x')}>x</button>
        </div>
        <div className="row">
          <button onClick={() => updateDisplay('4')}>4</button>
          <button onClick={() => updateDisplay('5')}>5</button>
          <button onClick={() => updateDisplay('6')}>6</button>
          <button onClick={() => updateDisplay('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => updateDisplay('1')}>1</button>
          <button onClick={() => updateDisplay('2')}>2</button>
          <button onClick={() => updateDisplay('3')}>3</button>
          <button onClick={() => updateDisplay('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => updateDisplay('0')}>0</button>
          <button onClick={() => updateDisplay('.')}>.</button>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
      <div className="history">
        <h2>History</h2>
        <p>{calculationHistory}</p>
      </div>
    </div>
  );
}

export default App;
