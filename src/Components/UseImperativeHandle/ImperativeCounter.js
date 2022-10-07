import React, { useState, forwardRef, useImperativeHandle } from "react";

const ImperativeCounter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increment,
    yell: () => alert(count),
  }));

  const increment = () =>
    setCount((prevCount) => {
      return prevCount + 1;
    });

  return (
    <div>
      <button onClick={increment}>click</button>
      <h2>Count: {count}</h2>
    </div>
  );
});

export default ImperativeCounter;
