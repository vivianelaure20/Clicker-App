import React, { useState } from "react";
import button from "@material-ui/core/button";

const ClickerList = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = (props) => {
    setCount(count - 1);
  };

  const reset = (props) => {
    setCount(0);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <p style={{ textAlign: "center", fontSize: 40 }}>{count}</p>
        <button
          variant="contained"
          color="primary"
          onClick={increment}
          style={{ fontSize: 20, marginRight: 10 }}
        >
          Increment
        </button>
        <button
          variant="contained"
          onClick={decrement}
          style={{ fontSize: 20, marginRight: 10 }}
        >
          Decrement
        </button>
        <button
          variant="contained"
          color="secondary"
          onClick={reset}
          style={{ fontSize: 20, marginRight: 10 }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ClickerList;
