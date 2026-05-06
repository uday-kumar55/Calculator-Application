import { useState } from "react";
import Button from "./Button";
import "./Calculator.css";

function Calculator() {

  const [input, setInput] = useState("");

  const handleClick = (value) => {

    if (value === "AC") {
      setInput("");
    }

    else if (value === "DEL") {
      setInput(input.slice(0, -1));
    }

    else if (value === "=") {

      try {
        setInput(eval(input).toString());
      }

      catch {
        setInput("Error");
      }

    }

    else if (value === "x") {
      setInput(input + "*");
    }

    else {
      setInput(input + value);
    }

  };

  const buttons = [
    "AC", "DEL", "%", "/",
    "7", "8", "9", "x",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (

    <div className="main-container">

      <div className="calculator">

        <div className="top-section">
          <h1>Calculator</h1>
        </div>

        <input
          type="text"
          value={input}
          readOnly
          className="display"
        />

        <div className="buttons">

          {
            buttons.map((btn, index) => (
              <Button
                key={index}
                value={btn}
                onClick={handleClick}
              />
            ))
          }

        </div>

      </div>

    </div>

  );

}

export default Calculator;