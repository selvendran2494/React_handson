import React, { useState } from "react";
import {calculator} from '../utils/constants'

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {calculator.map((button) => (
          <button
            key={button}
            onClick={() => {
              if (button === "=") {
                handleCalculate();
              } else if (button === "C") {
                handleClear();
              } else {
                handleButtonClick(button);
              }
            }}
          >
            {button}
          </button>
        ))}
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;