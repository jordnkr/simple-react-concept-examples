import React, { useRef } from "react";
import ImperativeCounter from "./ImperativeCounter";

const ImperativeHandleExample = () => {
  const ref = useRef();

  return (
    <>
      <ImperativeCounter ref={ref} />
      <button onClick={() => ref.current.increment()}>click</button>
      <button onClick={() => ref.current.yell()}>What is the count?</button>
    </>
  )
};

export default ImperativeHandleExample;
