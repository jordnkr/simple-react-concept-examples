import React, { useState, useRef } from 'react';

const UseRefExample = () => {
  const textInputRef = useRef();
  const [displayedValue, setDisplayedValue] = useState("this value updates (ref demo)");

  const setDisplayedValueHandler = () => {
    const enteredText = textInputRef.current.value.trim();
    setDisplayedValue(enteredText.length > 0 ? enteredText : "No value was entered.");
  }

  return (
    <div>
      <input type="text" ref={textInputRef} />
      <button onClick={setDisplayedValueHandler}>Update Text</button>
      <p>{displayedValue}</p>
    </div>
  );
}

export default UseRefExample;