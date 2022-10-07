import React, { useState } from "react";

const UseStateExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayedValue, setDisplayedValue] = useState("this value updates");

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  }

  const setDisplayedValueHandler = () => {
    setDisplayedValue(inputValue.length > 0 ? inputValue : "No value was entered.");
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={inputChangeHandler} />
      <button onClick={setDisplayedValueHandler}>Update Text</button>
      <p>{displayedValue}</p>
    </div>
  );
};

export default UseStateExample;
